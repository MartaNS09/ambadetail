// "use client";

// import Link from "next/link";

// const ClassHeader = ({ num }: { num: number }) => (
//   <th className="num-class">
//     <span className="num-class__num">{num}</span>
//     <span className="num-class__text">
//       <span>к</span>
//       <span>л</span>
//       <span>а</span>
//       <span>с</span>
//       <span>с</span>
//     </span>
//   </th>
// );

// export const PriceTable = () => (
//   <div className="price-table-wrapper">
//     <div className="table-responsive">
//       <table className="price-table price-table--dark">
//         <thead>
//           <tr>
//             <th colSpan={2}>Перечень услуг</th>
//             <ClassHeader num={1} />
//             <ClassHeader num={2} />
//             <ClassHeader num={3} />
//             <ClassHeader num={4} />
//             <ClassHeader num={5} />
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="price-table__brand-row">
//             <td colSpan={7}>
//               <strong>ТОНИРОВКА АВТОМОБИЛЯ</strong>
//             </td>
//           </tr>
//           <tr>
//             <td className="text-left">1</td>
//             <td className="text-left">Полная тонировка авто</td>
//             <td className="price">от 330</td>
//             <td className="price">от 330</td>
//             <td className="price">от 400</td>
//             <td className="price">от 400</td>
//             <td className="price">от 450</td>
//           </tr>
//           <tr className="price-table__section">
//             <td colSpan={7}>
//               Дополнительную информацию уточняйте у администраторов.
//               <div style={{ marginTop: "1rem" }}>
//                 <Link href="/podarochnyy-sertifikat" className="btn btn--gift">
//                   Подарочный сертификат
//                 </Link>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// export const BrandsTable = () => (
//   <div className="price-table-wrapper">
//     <div className="table-responsive">
//       <table className="price-table price-table--dark price-table--brands">
//         <thead>
//           <tr>
//             <th>БРЕНДЫ</th>
//             <ClassHeader num={1} />
//             <ClassHeader num={2} />
//             <ClassHeader num={3} />
//             <ClassHeader num={4} />
//             <ClassHeader num={5} />
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="brand">ASTON MARTIN</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">
//               Rapide Vantage, DB, Lagona, Vanquish, Vulcan
//             </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">AUDI</td>
//             <td className="price">A1, A2, A3, A4, TT</td>
//             <td className="price">A5, A6, A7, Q3</td>
//             <td className="price">Allroad, A8, Q5, E-tron, RS6, RS7, Q3RS</td>
//             <td className="price">A8 Long, Q7, Q8</td>
//             <td className="price">R8</td>
//           </tr>
//           <tr>
//             <td className="brand">BYD</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">U9, Leoprd5, Tang, Hang</td>
//             <td className="price">U8</td>
//           </tr>
//           <tr>
//             <td className="brand">BMW</td>
//             <td className="price">1, 2, 3, 4, Z3</td>
//             <td className="price">5, 6, X1, X2, X3, X4, M2, M3, M4, Z4</td>
//             <td className="price">M5, Z8, X5, X6, BMW 7, BMW 7 long, BMW 8</td>
//             <td className="price">X4 Alpina, BMW 8 GC, i8, X7, X5M, X6M</td>
//             <td className="price">X7 Alpina</td>
//           </tr>
//           <tr>
//             <td className="brand">BENTLEY</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Arnage, Continental GT</td>
//             <td className="price">Bentayga, Flying Spur, Mulsanne</td>
//           </tr>
//           <tr>
//             <td className="brand">CADILLAC</td>
//             <td className="price"> </td>
//             <td className="price">CTS, ATS, BLS</td>
//             <td className="price">SRX, STS</td>
//             <td className="price">Escalade</td>
//             <td className="price">Escalade ESV</td>
//           </tr>
//           <tr>
//             <td className="brand">CHANGAN</td>
//             <td className="price">ALSVIN</td>
//             <td className="price">EADOplus</td>
//             <td className="price">Lamore, UNI-V</td>
//             <td className="price">CS35 PLU, CS55, CS75, CS85, UNI-T</td>
//             <td className="price">CS95, UNI-K, Hunter-plus</td>
//           </tr>
//           <tr>
//             <td className="brand">CHERY</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Tiggo 4, 7, ARRIZO 8</td>
//             <td className="price">Tiggo 8</td>
//             <td className="price">TIGGO 8 PRO MAX</td>
//           </tr>
//           <tr>
//             <td className="brand">CHEVROLET</td>
//             <td className="price">Aveo, Lacetti, Spark</td>
//             <td className="price">Captiva, Evica, Rezzo, Niva, Cruze</td>
//             <td className="price">TrailBlazer, Camaro</td>
//             <td className="price">Corvette, Tahoe</td>
//             <td className="price">Suburban</td>
//           </tr>
//           <tr>
//             <td className="brand">CHRYSLER</td>
//             <td className="price">Neon</td>
//             <td className="price">Sebring, Stratus, PT Cruiser</td>
//             <td className="price">300C, Pacifica, Grand Voyager</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">CITROEN</td>
//             <td className="price">C2, C3, C4</td>
//             <td className="price">C6, Picasso, Berlingo, C5, DS-5</td>
//             <td className="price">C-crosser</td>
//             <td className="price"> </td>
//             <td className="price">Jumpy</td>
//           </tr>
//           <tr>
//             <td className="brand">EXEED</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">LX, TX</td>
//             <td className="price">VX</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">FERRARI</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">FF, F12, California, 488, 458</td>
//             <td className="price">F8, 812, GTC4</td>
//           </tr>
//           <tr>
//             <td className="brand">FORD</td>
//             <td className="price">Fusion, Focus, Fiesta, Ka</td>
//             <td className="price">Mondeo, Kuga, Escape, S-Max</td>
//             <td className="price">Galaxy, Maverick, Mustang</td>
//             <td className="price">Explorer</td>
//             <td className="price">Raptor, F-150, GT</td>
//           </tr>
//           <tr>
//             <td className="brand">GEELY</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Coolray, Coolray Flagship</td>
//             <td className="price">Monjaro</td>
//             <td className="price">Tiguella, Atlas Pro</td>
//           </tr>
//           <tr>
//             <td className="brand">GENESIS</td>
//             <td className="price">G30</td>
//             <td className="price">G70</td>
//             <td className="price">G80</td>
//             <td className="price">GV80, G90, G90L</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">HAVAL</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Dargo, Jolion, F7</td>
//             <td className="price">H9</td>
//             <td className="price">GWM POER, Wingle 7</td>
//           </tr>
//           <tr>
//             <td className="brand">HiPHI</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Z, X</td>
//             <td className="price">Y</td>
//           </tr>
//           <tr>
//             <td className="brand">HONGQI</td>
//             <td className="price"> </td>
//             <td className="price">H5, H7, H9</td>
//             <td className="price">Ousado</td>
//             <td className="price">HS5, E-QM5</td>
//             <td className="price">HS7, E-HS9</td>
//           </tr>
//           <tr>
//             <td className="brand">HONDA</td>
//             <td className="price">Jazz, Civic</td>
//             <td className="price">HR-V, Accord, Prelude</td>
//             <td className="price">CR-V, Legend, Element, Crosstour</td>
//             <td className="price">Ridgeline</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">HUMMER</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">H3</td>
//             <td className="price">H1, H2</td>
//           </tr>
//           <tr>
//             <td className="brand">HYUNDAI</td>
//             <td className="price">Getz, I30, Atos, Solaris</td>
//             <td className="price">Sonata, IX35, Matrix</td>
//             <td className="price">Santa Fe, IX55, Terracan, Tucson, Genesis</td>
//             <td className="price">Equus, H1, Palisade</td>
//             <td className="price">Starex</td>
//           </tr>
//           <tr>
//             <td className="brand">INFINITI</td>
//             <td className="price">Q30</td>
//             <td className="price">Q50</td>
//             <td className="price">QX70</td>
//             <td className="price">QX60</td>
//             <td className="price">QX80, QX56</td>
//           </tr>
//           <tr>
//             <td className="brand">JAECOO</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">J7</td>
//             <td className="price">J8</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">JAC</td>
//             <td className="price"> </td>
//             <td className="price">J7</td>
//             <td className="price">S3, JS6</td>
//             <td className="price"> </td>
//             <td className="price">T8 Pro</td>
//           </tr>
//           <tr>
//             <td className="brand">JAGUAR</td>
//             <td className="price"> </td>
//             <td className="price">XF</td>
//             <td className="price">F-type, F-pace</td>
//             <td className="price">XJ</td>
//             <td className="price">TXL</td>
//           </tr>
//           <tr>
//             <td className="brand">JEEP</td>
//             <td className="price"> </td>
//             <td className="price">Liberty</td>
//             <td className="price">
//               Compass, Grand Cherokee, Cherokee, Wrangler
//             </td>
//             <td className="price">SRT</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">KIA</td>
//             <td className="price">Ceed, Cerato, Rio, Picanto</td>
//             <td className="price">K5, Sportage, Venga, Soul</td>
//             <td className="price">Quoris, Sorento</td>
//             <td className="price">Mohave</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">LAMBORGHINI</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Aventador, Murcielago, Gallardo, Huracan</td>
//             <td className="price">Aventador SVJ, Huracan STO, Urus</td>
//           </tr>
//           <tr>
//             <td className="brand">LAND ROVER</td>
//             <td className="price"> </td>
//             <td className="price">Freelander, Evoque</td>
//             <td className="price">Discovery, Range Rover Sport</td>
//             <td className="price">Defender, Range Rover, Range Rover long</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">LANTU FREE</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Lantu Free</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">LEXUS</td>
//             <td className="price">IS, CT</td>
//             <td className="price">ES, GS</td>
//             <td className="price">LS, NX, GX, RX</td>
//             <td className="price"> </td>
//             <td className="price">IC, LX</td>
//           </tr>
//           <tr>
//             <td className="brand">LIXIANG</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Li7</td>
//             <td className="price">Li9</td>
//           </tr>
//           <tr>
//             <td className="brand">LIVAN</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">M-HERO</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">M-HERO</td>
//           </tr>
//           <tr>
//             <td className="brand">MASERATI</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Ghibli, Levante</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">MAZDA</td>
//             <td className="price">2, 3, MX-5</td>
//             <td className="price">5, 6, CX-5</td>
//             <td className="price">MPV, CX-7</td>
//             <td className="price">CX-9, BT-50</td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">MERCEDES-BENZ</td>
//             <td className="price">A, B, C, GLA, SLC, CLA</td>
//             <td className="price">E, GLC, SL, CLS</td>
//             <td className="price">AMG GT, GLE, GLE coupe, R, S, S coupe</td>
//             <td className="price">AMG GT 4 door, GLS</td>
//             <td className="price">G class, Maybach 57-62, V class</td>
//           </tr>
//           <tr>
//             <td className="brand">MINI</td>
//             <td className="price">Cabrio, Coupe, Hatch</td>
//             <td className="price">Countryman, Clubman</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">MITSUBISHI</td>
//             <td className="price">Colt, Lancer</td>
//             <td className="price">Pajero Pinin, Space Star, ASX</td>
//             <td className="price">Outlander, Pajero Sport, L-200, Pajero</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">NISSAN</td>
//             <td className="price">Almera, Note, Tiida, Micra</td>
//             <td className="price">Juke, Qashqai, Teana, 350Z, Navara</td>
//             <td className="price">Murano, X-Trail, GT-R</td>
//             <td className="price">Pathfinder</td>
//             <td className="price">Patrol</td>
//           </tr>
//           <tr>
//             <td className="brand">OMODA</td>
//             <td className="price"> </td>
//             <td className="price">S5</td>
//             <td className="price">C5</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">OPEL</td>
//             <td className="price">Astra, Corsa</td>
//             <td className="price">Insignia, Omega, Vectra, Meriva</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Zafira</td>
//           </tr>
//           <tr>
//             <td className="brand">PEUGEOT</td>
//             <td className="price">107, 207, 308</td>
//             <td className="price">407, 508, Partner</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">PORSCHE</td>
//             <td className="price"> </td>
//             <td className="price">Boxster, Macan</td>
//             <td className="price">Cayenne, Cayman, Panamera, Taycan, 911</td>
//             <td className="price">GT2 RS, GT3, GT3 RS, CARRERA GT</td>
//             <td className="price">918</td>
//           </tr>
//           <tr>
//             <td className="brand">RENAULT</td>
//             <td className="price">Clio, Logan, Symbol</td>
//             <td className="price">
//               Kangoo, Duster, Fluence, Scenic, Megane, Laguna
//             </td>
//             <td className="price">Koleos</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">ROLLS-ROYCE</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">Ghost, Wraith</td>
//             <td className="price">Cullinan, Phantom</td>
//           </tr>
//           <tr>
//             <td className="brand">SKODA</td>
//             <td className="price">Fabia, Rapid, Ibiza</td>
//             <td className="price">
//               Octavia, Roomster, Yeti, Karoq, Kodiaq, Superb
//             </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">SUBARU</td>
//             <td className="price"> </td>
//             <td className="price">Legacy, Tribeca, Forester, Outback</td>
//             <td className="price">Impreza XV</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">TANK</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">300</td>
//             <td className="price">500</td>
//           </tr>
//           <tr>
//             <td className="brand">TESLA</td>
//             <td className="price"> </td>
//             <td className="price">Model 3, Model S, Model Y</td>
//             <td className="price"> </td>
//             <td className="price">Model X</td>
//             <td className="price">Roadster, Cybertruck</td>
//           </tr>
//           <tr>
//             <td className="brand">TOYOTA</td>
//             <td className="price">Auris, GT 86, Yaris</td>
//             <td className="price">
//               Avensis, Prius, Versa, Camry, Corolla, Crown
//             </td>
//             <td className="price">Venza, Hilux</td>
//             <td className="price">FJ Cruiser, Highlander, Prado</td>
//             <td className="price">LC200, LC300, Tundra, Sequoya, Alphard</td>
//           </tr>
//           <tr>
//             <td className="brand">VOLVO</td>
//             <td className="price">C30, S40</td>
//             <td className="price">S60, V40, V50, V70, XC40, XC60</td>
//             <td className="price">XC70, XC90, S90, S80, V90</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//           </tr>
//           <tr>
//             <td className="brand">VOLKSWAGEN</td>
//             <td className="price">Polo, Beetle, Scirocco</td>
//             <td className="price">
//               Touran, Sharan, Passat, Golf plus, Jetta, Tiguan
//             </td>
//             <td className="price">Touareg</td>
//             <td className="price">Phaeton, Terramont</td>
//             <td className="price">Caravelle, Transporter, Multivan</td>
//           </tr>
//           <tr>
//             <td className="brand">VOYAH</td>
//             <td className="price"> </td>
//             <td className="price">Passion EV</td>
//             <td className="price">Free EV</td>
//             <td className="price">Free EVR, Long Range</td>
//             <td className="price">Dream Phev</td>
//           </tr>
//           <tr>
//             <td className="brand">ZEEKR</td>
//             <td className="price"> </td>
//             <td className="price"> </td>
//             <td className="price">007</td>
//             <td className="price">001</td>
//             <td className="price">Z</td>
//           </tr>
//           <tr>
//             <td className="brand">МОТОТЕХНИКА</td>
//             <td className="price"> </td>
//             <td className="price">Sport, Cafe racer</td>
//             <td className="price">Tourer, Cruiser</td>
//             <td className="price">Honda Goldwing, Harley-Davidson</td>
//             <td className="price"> </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <div className="price-notes">
//       <p>Дополнительную информацию уточняйте у администраторов.</p>
//       <Link href="/podarochnyy-sertifikat" className="btn btn--gift">
//         Подарочный сертификат
//       </Link>
//     </div>
//   </div>
// );
"use client";

import Link from "next/link";

const ClassHeader = ({ num }: { num: number }) => (
  <th className="num-class">
    <span className="num-class__num">{num}</span>
    <span className="num-class__text">
      <span>к</span>
      <span>л</span>
      <span>а</span>
      <span>с</span>
      <span>с</span>
    </span>
  </th>
);

export const PriceTable = () => (
  <div className="price-table-wrapper">
    <div className="table-responsive">
      <table className="price-table price-table--dark">
        <thead>
          <tr>
            <th colSpan={2}>Перечень услуг</th>
            <ClassHeader num={1} />
            <ClassHeader num={2} />
            <ClassHeader num={3} />
            <ClassHeader num={4} />
            <ClassHeader num={5} />
          </tr>
        </thead>
        <tbody>
          <tr className="price-table__brand-row">
            <td colSpan={7}>
              <strong>ТОНИРОВКА АВТОМОБИЛЯ</strong>
            </td>
          </tr>
          <tr>
            <td className="text-left">1</td>
            <td className="text-left">Полная тонировка авто</td>
            <td className="price">от 330</td>
            <td className="price">от 330</td>
            <td className="price">от 400</td>
            <td className="price">от 400</td>
            <td className="price">от 450</td>
          </tr>
          <tr className="price-table__section">
            <td colSpan={7}>
              Дополнительную информацию уточняйте у администраторов.
              <div style={{ marginTop: "1rem" }}>
                <Link href="/podarochnyy-sertifikat" className="btn btn--gift">
                  Подарочный сертификат
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const BrandsTable = () => (
  <div className="price-table-wrapper">
    <div className="table-responsive">
      <table className="price-table price-table--dark price-table--brands">
        <thead>
          <tr>
            <th>БРЕНДЫ</th>
            <ClassHeader num={1} />
            <ClassHeader num={2} />
            <ClassHeader num={3} />
            <ClassHeader num={4} />
            <ClassHeader num={5} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="brand">ASTON MARTIN</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Rapide Vantage, DB, Lagona, Vanquish, Vulcan</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">AUDI</td>
            <td>A1, A2, A3, A4, TT</td>
            <td>A5, A6, A7, Q3</td>
            <td>Allroad, A8, Q5, E-tron, RS6, RS7, Q3RS</td>
            <td>A8 Long, Q7, Q8</td>
            <td>R8</td>
          </tr>
          <tr>
            <td className="brand">BYD</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>U9, Leoprd5, Tang, Hang</td>
            <td>U8</td>
          </tr>
          <tr>
            <td className="brand">BMW</td>
            <td>1, 2, 3, 4, Z3</td>
            <td>5, 6, X1, X2, X3, X4, M2, M3, M4, Z4</td>
            <td>M5, Z8, X5, X6, BMW 7, BMW 7 long, BMW 8</td>
            <td>X4 Alpina, BMW 8 GC, i8, X7, X5M, X6M</td>
            <td>X7 Alpina</td>
          </tr>
          <tr>
            <td className="brand">BENTLEY</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Arnage, Continental GT</td>
            <td>Bentayga, Flying Spur, Mulsanne</td>
          </tr>
          <tr>
            <td className="brand">CADILLAC</td>
            <td> </td>
            <td>CTS, ATS, BLS</td>
            <td>SRX, STS</td>
            <td>Escalade</td>
            <td>Escalade ESV</td>
          </tr>
          <tr>
            <td className="brand">CHANGAN</td>
            <td>ALSVIN</td>
            <td>EADOplus</td>
            <td>Lamore, UNI-V</td>
            <td>CS35 PLU, CS55, CS75, CS85, UNI-T</td>
            <td>CS95, UNI-K, Hunter-plus</td>
          </tr>
          <tr>
            <td className="brand">CHERY</td>
            <td> </td>
            <td> </td>
            <td>Tiggo 4, 7, ARRIZO 8</td>
            <td>Tiggo 8</td>
            <td>TIGGO 8 PRO MAX</td>
          </tr>
          <tr>
            <td className="brand">CHEVROLET</td>
            <td>Aveo, Lacetti, Spark</td>
            <td>Captiva, Evica, Rezzo, Niva, Cruze</td>
            <td>TrailBlazer, Camaro</td>
            <td>Corvette, Tahoe</td>
            <td>Suburban</td>
          </tr>
          <tr>
            <td className="brand">CHRYSLER</td>
            <td>Neon</td>
            <td>Sebring, Stratus, PT Cruiser</td>
            <td>300C, Pacifica, Grand Voyager</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">CITROEN</td>
            <td>C2, C3, C4</td>
            <td>C6, Picasso, Berlingo, C5, DS-5</td>
            <td>C-crosser</td>
            <td> </td>
            <td>Jumpy</td>
          </tr>
          <tr>
            <td className="brand">EXEED</td>
            <td> </td>
            <td> </td>
            <td>LX, TX</td>
            <td>VX</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">FERRARI</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>FF, F12, California, 488, 458</td>
            <td>F8, 812, GTC4</td>
          </tr>
          <tr>
            <td className="brand">FORD</td>
            <td>Fusion, Focus, Fiesta, Ka</td>
            <td>Mondeo, Kuga, Escape, S-Max</td>
            <td>Galaxy, Maverick, Mustang</td>
            <td>Explorer</td>
            <td>Raptor, F-150, GT</td>
          </tr>
          <tr>
            <td className="brand">GEELY</td>
            <td> </td>
            <td> </td>
            <td>Coolray, Coolray Flagship</td>
            <td>Monjaro</td>
            <td>Tiguella, Atlas Pro</td>
          </tr>
          <tr>
            <td className="brand">GENESIS</td>
            <td>G30</td>
            <td>G70</td>
            <td>G80</td>
            <td>GV80, G90, G90L</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">HAVAL</td>
            <td> </td>
            <td> </td>
            <td>Dargo, Jolion, F7</td>
            <td>H9</td>
            <td>GWM POER, Wingle 7</td>
          </tr>
          <tr>
            <td className="brand">HiPHI</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Z, X</td>
            <td>Y</td>
          </tr>
          <tr>
            <td className="brand">HONGQI</td>
            <td> </td>
            <td>H5, H7, H9</td>
            <td>Ousado</td>
            <td>HS5, E-QM5</td>
            <td>HS7, E-HS9</td>
          </tr>
          <tr>
            <td className="brand">HONDA</td>
            <td>Jazz, Civic</td>
            <td>HR-V, Accord, Prelude</td>
            <td>CR-V, Legend, Element, Crosstour</td>
            <td>Ridgeline</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">HUMMER</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>H3</td>
            <td>H1, H2</td>
          </tr>
          <tr>
            <td className="brand">HYUNDAI</td>
            <td>Getz, I30, Atos, Solaris</td>
            <td>Sonata, IX35, Matrix</td>
            <td>Santa Fe, IX55, Terracan, Tucson, Genesis</td>
            <td>Equus, H1, Palisade</td>
            <td>Starex</td>
          </tr>
          <tr>
            <td className="brand">INFINITI</td>
            <td>Q30</td>
            <td>Q50</td>
            <td>QX70</td>
            <td>QX60</td>
            <td>QX80, QX56</td>
          </tr>
          <tr>
            <td className="brand">JAECOO</td>
            <td> </td>
            <td> </td>
            <td>J7</td>
            <td>J8</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">JAC</td>
            <td> </td>
            <td>J7</td>
            <td>S3, JS6</td>
            <td> </td>
            <td>T8 Pro</td>
          </tr>
          <tr>
            <td className="brand">JAGUAR</td>
            <td> </td>
            <td>XF</td>
            <td>F-type, F-pace</td>
            <td>XJ</td>
            <td>TXL</td>
          </tr>
          <tr>
            <td className="brand">JEEP</td>
            <td> </td>
            <td>Liberty</td>
            <td>Compass, Grand Cherokee, Cherokee, Wrangler</td>
            <td>SRT</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">KIA</td>
            <td>Ceed, Cerato, Rio, Picanto</td>
            <td>K5, Sportage, Venga, Soul</td>
            <td>Quoris, Sorento</td>
            <td>Mohave</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">LAMBORGHINI</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Aventador, Murcielago, Gallardo, Huracan</td>
            <td>Aventador SVJ, Huracan STO, Urus</td>
          </tr>
          <tr>
            <td className="brand">LAND ROVER</td>
            <td> </td>
            <td>Freelander, Evoque</td>
            <td>Discovery, Range Rover Sport</td>
            <td>Defender, Range Rover, Range Rover long</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">LANTU FREE</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Lantu Free</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">LEXUS</td>
            <td>IS, CT</td>
            <td>ES, GS</td>
            <td>LS, NX, GX, RX</td>
            <td> </td>
            <td>IC, LX</td>
          </tr>
          <tr>
            <td className="brand">LIXIANG</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Li7</td>
            <td>Li9</td>
          </tr>
          <tr>
            <td className="brand">LIVAN</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">M-HERO</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>M-HERO</td>
          </tr>
          <tr>
            <td className="brand">MASERATI</td>
            <td> </td>
            <td> </td>
            <td>Ghibli, Levante</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">MAZDA</td>
            <td>2, 3, MX-5</td>
            <td>5, 6, CX-5</td>
            <td>MPV, CX-7</td>
            <td>CX-9, BT-50</td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">MERCEDES-BENZ</td>
            <td>A, B, C, GLA, SLC, CLA</td>
            <td>E, GLC, SL, CLS</td>
            <td>AMG GT, GLE, GLE coupe, R, S, S coupe</td>
            <td>AMG GT 4 door, GLS</td>
            <td>G class, Maybach 57-62, V class</td>
          </tr>
          <tr>
            <td className="brand">MINI</td>
            <td>Cabrio, Coupe, Hatch</td>
            <td>Countryman, Clubman</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">MITSUBISHI</td>
            <td>Colt, Lancer</td>
            <td>Pajero Pinin, Space Star, ASX</td>
            <td>Outlander, Pajero Sport, L-200, Pajero</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">NISSAN</td>
            <td>Almera, Note, Tiida, Micra</td>
            <td>Juke, Qashqai, Teana, 350Z, Navara</td>
            <td>Murano, X-Trail, GT-R</td>
            <td>Pathfinder</td>
            <td>Patrol</td>
          </tr>
          <tr>
            <td className="brand">OMODA</td>
            <td> </td>
            <td>S5</td>
            <td>C5</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">OPEL</td>
            <td>Astra, Corsa</td>
            <td>Insignia, Omega, Vectra, Meriva</td>
            <td> </td>
            <td> </td>
            <td>Zafira</td>
          </tr>
          <tr>
            <td className="brand">PEUGEOT</td>
            <td>107, 207, 308</td>
            <td>407, 508, Partner</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">PORSCHE</td>
            <td> </td>
            <td>Boxster, Macan</td>
            <td>Cayenne, Cayman, Panamera, Taycan, 911</td>
            <td>GT2 RS, GT3, GT3 RS, CARRERA GT</td>
            <td>918</td>
          </tr>
          <tr>
            <td className="brand">RENAULT</td>
            <td>Clio, Logan, Symbol</td>
            <td>Kangoo, Duster, Fluence, Scenic, Megane, Laguna</td>
            <td>Koleos</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">ROLLS-ROYCE</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>Ghost, Wraith</td>
            <td>Cullinan, Phantom</td>
          </tr>
          <tr>
            <td className="brand">SKODA</td>
            <td>Fabia, Rapid, Ibiza</td>
            <td>Octavia, Roomster, Yeti, Karoq, Kodiaq, Superb</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">SUBARU</td>
            <td> </td>
            <td>Legacy, Tribeca, Forester, Outback</td>
            <td>Impreza XV</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">TANK</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>300</td>
            <td>500</td>
          </tr>
          <tr>
            <td className="brand">TESLA</td>
            <td> </td>
            <td>Model 3, Model S, Model Y</td>
            <td> </td>
            <td>Model X</td>
            <td>Roadster, Cybertruck</td>
          </tr>
          <tr>
            <td className="brand">TOYOTA</td>
            <td>Auris, GT 86, Yaris</td>
            <td>Avensis, Prius, Versa, Camry, Corolla, Crown</td>
            <td>Venza, Hilux</td>
            <td>FJ Cruiser, Highlander, Prado</td>
            <td>LC200, LC300, Tundra, Sequoya, Alphard</td>
          </tr>
          <tr>
            <td className="brand">VOLVO</td>
            <td>C30, S40</td>
            <td>S60, V40, V50, V70, XC40, XC60</td>
            <td>XC70, XC90, S90, S80, V90</td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td className="brand">VOLKSWAGEN</td>
            <td>Polo, Beetle, Scirocco</td>
            <td>Touran, Sharan, Passat, Golf plus, Jetta, Tiguan</td>
            <td>Touareg</td>
            <td>Phaeton, Terramont</td>
            <td>Caravelle, Transporter, Multivan</td>
          </tr>
          <tr>
            <td className="brand">VOYAH</td>
            <td> </td>
            <td>Passion EV</td>
            <td>Free EV</td>
            <td>Free EVR, Long Range</td>
            <td>Dream Phev</td>
          </tr>
          <tr>
            <td className="brand">ZEEKR</td>
            <td> </td>
            <td> </td>
            <td>007</td>
            <td>001</td>
            <td>Z</td>
          </tr>
          <tr>
            <td className="brand">МОТОТЕХНИКА</td>
            <td> </td>
            <td>Sport, Cafe racer</td>
            <td>Tourer, Cruiser</td>
            <td>Honda Goldwing, Harley-Davidson</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="price-notes">
      <p>Дополнительную информацию уточняйте у администраторов.</p>
      <Link href="/podarochnyy-sertifikat" className="btn btn--gift">
        Подарочный сертификат
      </Link>
    </div>
  </div>
);
