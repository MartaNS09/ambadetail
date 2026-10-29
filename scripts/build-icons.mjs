import sharp from "sharp";
import fs from "fs";

const white = { r: 255, g: 255, b: 255, alpha: 1 };
const dark = { r: 10, g: 15, b: 26, alpha: 1 };

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = pngBuffers.map((buf) => {
    const e = {
      buf,
      offset,
      width: buf.readUInt32BE(16),
      height: buf.readUInt32BE(20),
    };
    offset += buf.length;
    return e;
  });
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let o = 6;
  for (const e of entries) {
    out.writeUInt8(e.width >= 256 ? 0 : e.width, o++);
    out.writeUInt8(e.height >= 256 ? 0 : e.height, o++);
    out.writeUInt8(0, o++);
    out.writeUInt8(0, o++);
    out.writeUInt16LE(1, o);
    o += 2;
    out.writeUInt16LE(32, o);
    o += 2;
    out.writeUInt32LE(e.buf.length, o);
    o += 4;
    out.writeUInt32LE(e.offset, o);
    o += 4;
  }
  for (const e of entries) e.buf.copy(out, e.offset);
  return out;
}

async function square(input, size, { bg, padRatio }) {
  const pad = Math.round(size * padRatio);
  const inner = size - pad * 2;
  const fitted = await sharp(input)
    .resize(inner, inner, {
      fit: "contain",
      background: bg,
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: bg },
  })
    .composite([{ input: fitted, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function main() {
  const src = "public/icons/logo-mark.png";
  if (!fs.existsSync(src)) {
    throw new Error("Missing public/icons/logo-mark.png — put the brand mark there first");
  }
  const trimmed = await sharp(src).trim({ threshold: 8 }).png().toBuffer();
  const tm = await sharp(trimmed).metadata();
  console.log("trimmed", tm.width, tm.height);
  fs.mkdirSync("public/icons", { recursive: true });

  const icon512 = await square(trimmed, 512, { bg: white, padRatio: 0.1 });
  const icon192 = await square(trimmed, 192, { bg: white, padRatio: 0.1 });
  const apple = await square(trimmed, 180, { bg: white, padRatio: 0.1 });

  const plateSize = Math.round(512 * 0.62);
  const plateLogo = await sharp(trimmed)
    .resize(Math.round(plateSize * 0.78), Math.round(plateSize * 0.78), {
      fit: "contain",
      background: white,
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();
  const plate = await sharp({
    create: {
      width: plateSize,
      height: plateSize,
      channels: 4,
      background: white,
    },
  })
    .composite([{ input: plateLogo, gravity: "centre" }])
    .png()
    .toBuffer();

  const radius = Math.round(plateSize * 0.18);
  const roundedSvg = Buffer.from(
    `<svg width="${plateSize}" height="${plateSize}"><rect width="100%" height="100%" rx="${radius}" ry="${radius}"/></svg>`,
  );
  const roundedPlate = await sharp(plate)
    .composite([{ input: roundedSvg, blend: "dest-in" }])
    .png()
    .toBuffer();
  const maskable = await sharp({
    create: { width: 512, height: 512, channels: 4, background: dark },
  })
    .composite([{ input: roundedPlate, gravity: "centre" }])
    .png()
    .toBuffer();

  fs.writeFileSync("public/icons/icon-512.png", icon512);
  fs.writeFileSync("public/icons/icon-192.png", icon192);
  fs.writeFileSync("public/icons/apple-touch-icon.png", apple);
  fs.writeFileSync("public/icons/icon-maskable-512.png", maskable);
  fs.writeFileSync("src/app/icon.png", icon512);
  fs.writeFileSync("src/app/apple-icon.png", apple);

  const pngs = [];
  for (const s of [16, 32, 48]) {
    const buf = await square(trimmed, s, {
      bg: white,
      padRatio: s <= 16 ? 0.06 : 0.08,
    });
    pngs.push(buf);
  }

  const ico = buildIco(pngs);
  fs.writeFileSync("src/app/favicon.ico", ico);
  fs.writeFileSync("public/favicon.ico", ico);
  console.log("done, ico bytes", ico.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
