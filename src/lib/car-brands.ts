/** Марки и модели из таблицы брендов прайса. */
export type CarModel = {
  name: string;
  classNumber: number;
};

export type CarBrand = {
  brand: string;
  models: CarModel[];
};

const OKLEYKA_SERVICE = "Оклейка авто плёнкой";

const OKLEYKA_PORSCHE: CarModel[] = [
  {
    "name": "Boxster",
    "classNumber": 2
  },
  {
    "name": "Macan",
    "classNumber": 2
  },
  {
    "name": "Cayenne(обвес, текстура)",
    "classNumber": 3
  },
  {
    "name": "Cayman",
    "classNumber": 3
  },
  {
    "name": "Panamera",
    "classNumber": 3
  },
  {
    "name": "Taycan",
    "classNumber": 3
  },
  {
    "name": "911",
    "classNumber": 3
  },
  {
    "name": "GT2 RS",
    "classNumber": 4
  },
  {
    "name": "GT3",
    "classNumber": 4
  },
  {
    "name": "GT3 RS",
    "classNumber": 4
  },
  {
    "name": "CARRERA GT",
    "classNumber": 4
  },
  {
    "name": "Cayenne(обвес, глянец)",
    "classNumber": 4
  },
  {
    "name": "918",
    "classNumber": 5
  }
];

export const CAR_BRANDS: CarBrand[] = [
  {
    "brand": "ASTON MARTIN",
    "models": [
      {
        "name": "Rapide Vantage",
        "classNumber": 4
      },
      {
        "name": "DB",
        "classNumber": 4
      },
      {
        "name": "Lagona",
        "classNumber": 4
      },
      {
        "name": "Vanquish",
        "classNumber": 4
      },
      {
        "name": "Vulcan",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "AUDI",
    "models": [
      {
        "name": "A1",
        "classNumber": 1
      },
      {
        "name": "A2",
        "classNumber": 1
      },
      {
        "name": "A3",
        "classNumber": 1
      },
      {
        "name": "A4",
        "classNumber": 1
      },
      {
        "name": "TT",
        "classNumber": 1
      },
      {
        "name": "A5",
        "classNumber": 2
      },
      {
        "name": "A6",
        "classNumber": 2
      },
      {
        "name": "A7",
        "classNumber": 2
      },
      {
        "name": "Q3",
        "classNumber": 2
      },
      {
        "name": "Allroad",
        "classNumber": 3
      },
      {
        "name": "A8",
        "classNumber": 3
      },
      {
        "name": "Q5",
        "classNumber": 3
      },
      {
        "name": "E-tron",
        "classNumber": 3
      },
      {
        "name": "RS6",
        "classNumber": 3
      },
      {
        "name": "RS7",
        "classNumber": 3
      },
      {
        "name": "Q3RS",
        "classNumber": 3
      },
      {
        "name": "A8 Long",
        "classNumber": 4
      },
      {
        "name": "Q7",
        "classNumber": 4
      },
      {
        "name": "Q8",
        "classNumber": 4
      },
      {
        "name": "R8",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "BYD",
    "models": [
      {
        "name": "U9",
        "classNumber": 4
      },
      {
        "name": "Leoprd5",
        "classNumber": 4
      },
      {
        "name": "Tang",
        "classNumber": 4
      },
      {
        "name": "Hang",
        "classNumber": 4
      },
      {
        "name": "U8",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "BMW",
    "models": [
      {
        "name": "1",
        "classNumber": 1
      },
      {
        "name": "2",
        "classNumber": 1
      },
      {
        "name": "3",
        "classNumber": 1
      },
      {
        "name": "4",
        "classNumber": 1
      },
      {
        "name": "Z3",
        "classNumber": 1
      },
      {
        "name": "5",
        "classNumber": 2
      },
      {
        "name": "6",
        "classNumber": 2
      },
      {
        "name": "X1",
        "classNumber": 2
      },
      {
        "name": "X2",
        "classNumber": 2
      },
      {
        "name": "X3",
        "classNumber": 2
      },
      {
        "name": "X4",
        "classNumber": 2
      },
      {
        "name": "M2",
        "classNumber": 2
      },
      {
        "name": "M3",
        "classNumber": 2
      },
      {
        "name": "M4",
        "classNumber": 2
      },
      {
        "name": "Z4",
        "classNumber": 2
      },
      {
        "name": "M5",
        "classNumber": 3
      },
      {
        "name": "Z8",
        "classNumber": 3
      },
      {
        "name": "X5",
        "classNumber": 3
      },
      {
        "name": "X6",
        "classNumber": 3
      },
      {
        "name": "BMW 7",
        "classNumber": 3
      },
      {
        "name": "BMW 7 long",
        "classNumber": 3
      },
      {
        "name": "BMW 8",
        "classNumber": 3
      },
      {
        "name": "X4 Alpina",
        "classNumber": 4
      },
      {
        "name": "BMW 8 GC",
        "classNumber": 4
      },
      {
        "name": "i8",
        "classNumber": 4
      },
      {
        "name": "X7",
        "classNumber": 4
      },
      {
        "name": "X5M",
        "classNumber": 4
      },
      {
        "name": "X6M",
        "classNumber": 4
      },
      {
        "name": "X7 Alpina",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "BENTLEY",
    "models": [
      {
        "name": "Arnage",
        "classNumber": 4
      },
      {
        "name": "Continental GT",
        "classNumber": 4
      },
      {
        "name": "Bentayga",
        "classNumber": 5
      },
      {
        "name": "Flying Spur",
        "classNumber": 5
      },
      {
        "name": "Mulsanne",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "CADILLAC",
    "models": [
      {
        "name": "CTS",
        "classNumber": 2
      },
      {
        "name": "ATS",
        "classNumber": 2
      },
      {
        "name": "BLS",
        "classNumber": 2
      },
      {
        "name": "SRX",
        "classNumber": 3
      },
      {
        "name": "STS",
        "classNumber": 3
      },
      {
        "name": "Escalade",
        "classNumber": 4
      },
      {
        "name": "Escalade ESV",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "CHANGAN",
    "models": [
      {
        "name": "ALSVIN",
        "classNumber": 1
      },
      {
        "name": "EADOplus",
        "classNumber": 2
      },
      {
        "name": "Lamore",
        "classNumber": 3
      },
      {
        "name": "UNI-V",
        "classNumber": 3
      },
      {
        "name": "CS35 PLU",
        "classNumber": 4
      },
      {
        "name": "CS55",
        "classNumber": 4
      },
      {
        "name": "CS75",
        "classNumber": 4
      },
      {
        "name": "CS85",
        "classNumber": 4
      },
      {
        "name": "UNI-T",
        "classNumber": 4
      },
      {
        "name": "CS95",
        "classNumber": 5
      },
      {
        "name": "UNI-K",
        "classNumber": 5
      },
      {
        "name": "Hunter-plus",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "CHERY",
    "models": [
      {
        "name": "Tiggo 4",
        "classNumber": 3
      },
      {
        "name": "7",
        "classNumber": 3
      },
      {
        "name": "ARRIZO 8",
        "classNumber": 3
      },
      {
        "name": "Tiggo 8",
        "classNumber": 4
      },
      {
        "name": "TIGGO 8 PRO MAX",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "CHEVROLET",
    "models": [
      {
        "name": "Aveo",
        "classNumber": 1
      },
      {
        "name": "Lacetti",
        "classNumber": 1
      },
      {
        "name": "Spark",
        "classNumber": 1
      },
      {
        "name": "Captiva",
        "classNumber": 2
      },
      {
        "name": "Evica",
        "classNumber": 2
      },
      {
        "name": "Rezzo",
        "classNumber": 2
      },
      {
        "name": "Niva",
        "classNumber": 2
      },
      {
        "name": "Cruze",
        "classNumber": 2
      },
      {
        "name": "TrailBlazer",
        "classNumber": 3
      },
      {
        "name": "Camaro",
        "classNumber": 3
      },
      {
        "name": "Corvette",
        "classNumber": 4
      },
      {
        "name": "Tahoe",
        "classNumber": 4
      },
      {
        "name": "Suburban",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "CHRYSLER",
    "models": [
      {
        "name": "Neon",
        "classNumber": 1
      },
      {
        "name": "Sebring",
        "classNumber": 2
      },
      {
        "name": "Stratus",
        "classNumber": 2
      },
      {
        "name": "PT Cruiser",
        "classNumber": 2
      },
      {
        "name": "300C",
        "classNumber": 3
      },
      {
        "name": "Pacifica",
        "classNumber": 3
      },
      {
        "name": "Grand Voyager",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "CITROEN",
    "models": [
      {
        "name": "C2",
        "classNumber": 1
      },
      {
        "name": "C3",
        "classNumber": 1
      },
      {
        "name": "C4",
        "classNumber": 1
      },
      {
        "name": "C6",
        "classNumber": 2
      },
      {
        "name": "Picasso",
        "classNumber": 2
      },
      {
        "name": "Berlingo",
        "classNumber": 2
      },
      {
        "name": "C5",
        "classNumber": 2
      },
      {
        "name": "DS-5",
        "classNumber": 2
      },
      {
        "name": "C-crosser",
        "classNumber": 3
      },
      {
        "name": "Jumpy",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "EXEED",
    "models": [
      {
        "name": "LX",
        "classNumber": 3
      },
      {
        "name": "TX",
        "classNumber": 3
      },
      {
        "name": "VX",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "FERRARI",
    "models": [
      {
        "name": "FF",
        "classNumber": 4
      },
      {
        "name": "F12",
        "classNumber": 4
      },
      {
        "name": "California",
        "classNumber": 4
      },
      {
        "name": "488",
        "classNumber": 4
      },
      {
        "name": "458",
        "classNumber": 4
      },
      {
        "name": "F8",
        "classNumber": 5
      },
      {
        "name": "812",
        "classNumber": 5
      },
      {
        "name": "GTC4",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "FORD",
    "models": [
      {
        "name": "Fusion",
        "classNumber": 1
      },
      {
        "name": "Focus",
        "classNumber": 1
      },
      {
        "name": "Fiesta",
        "classNumber": 1
      },
      {
        "name": "Ka",
        "classNumber": 1
      },
      {
        "name": "Mondeo",
        "classNumber": 2
      },
      {
        "name": "Kuga",
        "classNumber": 2
      },
      {
        "name": "Escape",
        "classNumber": 2
      },
      {
        "name": "S-Max",
        "classNumber": 2
      },
      {
        "name": "Galaxy",
        "classNumber": 3
      },
      {
        "name": "Maverick",
        "classNumber": 3
      },
      {
        "name": "Mustang",
        "classNumber": 3
      },
      {
        "name": "Explorer",
        "classNumber": 4
      },
      {
        "name": "Raptor",
        "classNumber": 5
      },
      {
        "name": "F-150",
        "classNumber": 5
      },
      {
        "name": "GT",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "GEELY",
    "models": [
      {
        "name": "Coolray",
        "classNumber": 3
      },
      {
        "name": "Coolray Flagship",
        "classNumber": 3
      },
      {
        "name": "Monjaro",
        "classNumber": 4
      },
      {
        "name": "Tiguella",
        "classNumber": 5
      },
      {
        "name": "Atlas Pro",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "GENESIS",
    "models": [
      {
        "name": "G30",
        "classNumber": 1
      },
      {
        "name": "G70",
        "classNumber": 2
      },
      {
        "name": "G80",
        "classNumber": 3
      },
      {
        "name": "GV80",
        "classNumber": 4
      },
      {
        "name": "G90",
        "classNumber": 4
      },
      {
        "name": "G90L",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "HAVAL",
    "models": [
      {
        "name": "Dargo",
        "classNumber": 3
      },
      {
        "name": "Jolion",
        "classNumber": 3
      },
      {
        "name": "F7",
        "classNumber": 3
      },
      {
        "name": "H9",
        "classNumber": 4
      },
      {
        "name": "GWM POER",
        "classNumber": 5
      },
      {
        "name": "Wingle 7",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "HiPHI",
    "models": [
      {
        "name": "Z",
        "classNumber": 4
      },
      {
        "name": "X",
        "classNumber": 4
      },
      {
        "name": "Y",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "HONGQI",
    "models": [
      {
        "name": "H5",
        "classNumber": 2
      },
      {
        "name": "H7",
        "classNumber": 2
      },
      {
        "name": "H9",
        "classNumber": 2
      },
      {
        "name": "Ousado",
        "classNumber": 3
      },
      {
        "name": "HS5",
        "classNumber": 4
      },
      {
        "name": "E-QM5",
        "classNumber": 4
      },
      {
        "name": "HS7",
        "classNumber": 5
      },
      {
        "name": "E-HS9",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "HONDA",
    "models": [
      {
        "name": "Jazz",
        "classNumber": 1
      },
      {
        "name": "Civic",
        "classNumber": 1
      },
      {
        "name": "HR-V",
        "classNumber": 2
      },
      {
        "name": "Accord",
        "classNumber": 2
      },
      {
        "name": "Prelude",
        "classNumber": 2
      },
      {
        "name": "CR-V",
        "classNumber": 3
      },
      {
        "name": "Legend",
        "classNumber": 3
      },
      {
        "name": "Element",
        "classNumber": 3
      },
      {
        "name": "Crosstour",
        "classNumber": 3
      },
      {
        "name": "Ridgeline",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "HUMMER",
    "models": [
      {
        "name": "H3",
        "classNumber": 4
      },
      {
        "name": "H1",
        "classNumber": 5
      },
      {
        "name": "H2",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "HYUNDAI",
    "models": [
      {
        "name": "Getz",
        "classNumber": 1
      },
      {
        "name": "I30",
        "classNumber": 1
      },
      {
        "name": "Atos",
        "classNumber": 1
      },
      {
        "name": "Solaris",
        "classNumber": 1
      },
      {
        "name": "Sonata",
        "classNumber": 2
      },
      {
        "name": "IX35",
        "classNumber": 2
      },
      {
        "name": "Matrix",
        "classNumber": 2
      },
      {
        "name": "Santa Fe",
        "classNumber": 3
      },
      {
        "name": "IX55",
        "classNumber": 3
      },
      {
        "name": "Terracan",
        "classNumber": 3
      },
      {
        "name": "Tucson",
        "classNumber": 3
      },
      {
        "name": "Genesis",
        "classNumber": 3
      },
      {
        "name": "Equus",
        "classNumber": 4
      },
      {
        "name": "H1",
        "classNumber": 4
      },
      {
        "name": "Palisade",
        "classNumber": 4
      },
      {
        "name": "Starex",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "INFINITI",
    "models": [
      {
        "name": "Q30",
        "classNumber": 1
      },
      {
        "name": "Q50",
        "classNumber": 2
      },
      {
        "name": "QX70",
        "classNumber": 3
      },
      {
        "name": "QX60",
        "classNumber": 4
      },
      {
        "name": "QX80",
        "classNumber": 5
      },
      {
        "name": "QX56",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "JAECOO",
    "models": [
      {
        "name": "J7",
        "classNumber": 3
      },
      {
        "name": "J8",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "JAC",
    "models": [
      {
        "name": "J7",
        "classNumber": 2
      },
      {
        "name": "S3",
        "classNumber": 3
      },
      {
        "name": "JS6",
        "classNumber": 3
      },
      {
        "name": "T8 Pro",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "JAGUAR",
    "models": [
      {
        "name": "XF",
        "classNumber": 2
      },
      {
        "name": "F-type",
        "classNumber": 3
      },
      {
        "name": "F-pace",
        "classNumber": 3
      },
      {
        "name": "XJ",
        "classNumber": 4
      },
      {
        "name": "TXL",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "JEEP",
    "models": [
      {
        "name": "Liberty",
        "classNumber": 2
      },
      {
        "name": "Compass",
        "classNumber": 3
      },
      {
        "name": "Grand Cherokee",
        "classNumber": 3
      },
      {
        "name": "Cherokee",
        "classNumber": 3
      },
      {
        "name": "Wrangler",
        "classNumber": 3
      },
      {
        "name": "SRT",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "KIA",
    "models": [
      {
        "name": "Ceed",
        "classNumber": 1
      },
      {
        "name": "Cerato",
        "classNumber": 1
      },
      {
        "name": "Rio",
        "classNumber": 1
      },
      {
        "name": "Picanto",
        "classNumber": 1
      },
      {
        "name": "K5",
        "classNumber": 2
      },
      {
        "name": "Sportage",
        "classNumber": 2
      },
      {
        "name": "Venga",
        "classNumber": 2
      },
      {
        "name": "Soul",
        "classNumber": 2
      },
      {
        "name": "Quoris",
        "classNumber": 3
      },
      {
        "name": "Sorento",
        "classNumber": 3
      },
      {
        "name": "Mohave",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "LAMBORGHINI",
    "models": [
      {
        "name": "Aventador",
        "classNumber": 4
      },
      {
        "name": "Murcielago",
        "classNumber": 4
      },
      {
        "name": "Gallardo",
        "classNumber": 4
      },
      {
        "name": "Huracan",
        "classNumber": 4
      },
      {
        "name": "Aventador SVJ",
        "classNumber": 5
      },
      {
        "name": "Huracan STO",
        "classNumber": 5
      },
      {
        "name": "Urus",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "LAND ROVER",
    "models": [
      {
        "name": "Freelander",
        "classNumber": 2
      },
      {
        "name": "Evoque",
        "classNumber": 2
      },
      {
        "name": "Discovery",
        "classNumber": 3
      },
      {
        "name": "Range Rover Sport",
        "classNumber": 3
      },
      {
        "name": "Defender",
        "classNumber": 4
      },
      {
        "name": "Range Rover",
        "classNumber": 4
      },
      {
        "name": "Range Rover long",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "LANTU FREE",
    "models": [
      {
        "name": "Lantu Free",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "LEXUS",
    "models": [
      {
        "name": "IS",
        "classNumber": 1
      },
      {
        "name": "CT",
        "classNumber": 1
      },
      {
        "name": "ES",
        "classNumber": 2
      },
      {
        "name": "GS",
        "classNumber": 2
      },
      {
        "name": "LS",
        "classNumber": 3
      },
      {
        "name": "NX",
        "classNumber": 3
      },
      {
        "name": "GX",
        "classNumber": 3
      },
      {
        "name": "RX",
        "classNumber": 3
      },
      {
        "name": "IC",
        "classNumber": 5
      },
      {
        "name": "LX",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "LIXIANG",
    "models": [
      {
        "name": "Li7",
        "classNumber": 4
      },
      {
        "name": "Li9",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "LIVAN",
    "models": []
  },
  {
    "brand": "M-HERO",
    "models": [
      {
        "name": "M-HERO",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "MASERATI",
    "models": [
      {
        "name": "Ghibli",
        "classNumber": 3
      },
      {
        "name": "Levante",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "MAZDA",
    "models": [
      {
        "name": "2",
        "classNumber": 1
      },
      {
        "name": "3",
        "classNumber": 1
      },
      {
        "name": "MX-5",
        "classNumber": 1
      },
      {
        "name": "5",
        "classNumber": 2
      },
      {
        "name": "6",
        "classNumber": 2
      },
      {
        "name": "CX-5",
        "classNumber": 2
      },
      {
        "name": "MPV",
        "classNumber": 3
      },
      {
        "name": "CX-7",
        "classNumber": 3
      },
      {
        "name": "CX-9",
        "classNumber": 4
      },
      {
        "name": "BT-50",
        "classNumber": 4
      }
    ]
  },
  {
    "brand": "MERCEDES-BENZ",
    "models": [
      {
        "name": "A",
        "classNumber": 1
      },
      {
        "name": "B",
        "classNumber": 1
      },
      {
        "name": "C",
        "classNumber": 1
      },
      {
        "name": "GLA",
        "classNumber": 1
      },
      {
        "name": "SLC",
        "classNumber": 1
      },
      {
        "name": "CLA",
        "classNumber": 1
      },
      {
        "name": "E",
        "classNumber": 2
      },
      {
        "name": "GLC",
        "classNumber": 2
      },
      {
        "name": "SL",
        "classNumber": 2
      },
      {
        "name": "CLS",
        "classNumber": 2
      },
      {
        "name": "AMG GT",
        "classNumber": 3
      },
      {
        "name": "GLE",
        "classNumber": 3
      },
      {
        "name": "GLE coupe",
        "classNumber": 3
      },
      {
        "name": "R",
        "classNumber": 3
      },
      {
        "name": "S",
        "classNumber": 3
      },
      {
        "name": "S coupe",
        "classNumber": 3
      },
      {
        "name": "AMG GT 4 door",
        "classNumber": 4
      },
      {
        "name": "GLS",
        "classNumber": 4
      },
      {
        "name": "G class",
        "classNumber": 5
      },
      {
        "name": "Maybach 57-62",
        "classNumber": 5
      },
      {
        "name": "V class",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "MINI",
    "models": [
      {
        "name": "Cabrio",
        "classNumber": 1
      },
      {
        "name": "Coupe",
        "classNumber": 1
      },
      {
        "name": "Hatch",
        "classNumber": 1
      },
      {
        "name": "Countryman",
        "classNumber": 2
      },
      {
        "name": "Clubman",
        "classNumber": 2
      }
    ]
  },
  {
    "brand": "MITSUBISHI",
    "models": [
      {
        "name": "Colt",
        "classNumber": 1
      },
      {
        "name": "Lancer",
        "classNumber": 1
      },
      {
        "name": "Pajero Pinin",
        "classNumber": 2
      },
      {
        "name": "Space Star",
        "classNumber": 2
      },
      {
        "name": "ASX",
        "classNumber": 2
      },
      {
        "name": "Outlander",
        "classNumber": 3
      },
      {
        "name": "Pajero Sport",
        "classNumber": 3
      },
      {
        "name": "L-200",
        "classNumber": 3
      },
      {
        "name": "Pajero",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "NISSAN",
    "models": [
      {
        "name": "Almera",
        "classNumber": 1
      },
      {
        "name": "Note",
        "classNumber": 1
      },
      {
        "name": "Tiida",
        "classNumber": 1
      },
      {
        "name": "Micra",
        "classNumber": 1
      },
      {
        "name": "Juke",
        "classNumber": 2
      },
      {
        "name": "Qashqai",
        "classNumber": 2
      },
      {
        "name": "Teana",
        "classNumber": 2
      },
      {
        "name": "350Z",
        "classNumber": 2
      },
      {
        "name": "Navara",
        "classNumber": 2
      },
      {
        "name": "Murano",
        "classNumber": 3
      },
      {
        "name": "X-Trail",
        "classNumber": 3
      },
      {
        "name": "GT-R",
        "classNumber": 3
      },
      {
        "name": "Pathfinder",
        "classNumber": 4
      },
      {
        "name": "Patrol",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "OMODA",
    "models": [
      {
        "name": "S5",
        "classNumber": 2
      },
      {
        "name": "C5",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "OPEL",
    "models": [
      {
        "name": "Astra",
        "classNumber": 1
      },
      {
        "name": "Corsa",
        "classNumber": 1
      },
      {
        "name": "Insignia",
        "classNumber": 2
      },
      {
        "name": "Omega",
        "classNumber": 2
      },
      {
        "name": "Vectra",
        "classNumber": 2
      },
      {
        "name": "Meriva",
        "classNumber": 2
      },
      {
        "name": "Zafira",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "PEUGEOT",
    "models": [
      {
        "name": "107",
        "classNumber": 1
      },
      {
        "name": "207",
        "classNumber": 1
      },
      {
        "name": "308",
        "classNumber": 1
      },
      {
        "name": "407",
        "classNumber": 2
      },
      {
        "name": "508",
        "classNumber": 2
      },
      {
        "name": "Partner",
        "classNumber": 2
      }
    ]
  },
  {
    "brand": "PORSCHE",
    "models": [
      {
        "name": "Boxster",
        "classNumber": 2
      },
      {
        "name": "Macan",
        "classNumber": 2
      },
      {
        "name": "Cayenne",
        "classNumber": 3
      },
      {
        "name": "Cayman",
        "classNumber": 3
      },
      {
        "name": "Panamera",
        "classNumber": 3
      },
      {
        "name": "Taycan",
        "classNumber": 3
      },
      {
        "name": "911",
        "classNumber": 3
      },
      {
        "name": "GT2 RS",
        "classNumber": 4
      },
      {
        "name": "GT3",
        "classNumber": 4
      },
      {
        "name": "GT3 RS",
        "classNumber": 4
      },
      {
        "name": "CARRERA GT",
        "classNumber": 4
      },
      {
        "name": "918",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "RENAULT",
    "models": [
      {
        "name": "Clio",
        "classNumber": 1
      },
      {
        "name": "Logan",
        "classNumber": 1
      },
      {
        "name": "Symbol",
        "classNumber": 1
      },
      {
        "name": "Kangoo",
        "classNumber": 2
      },
      {
        "name": "Duster",
        "classNumber": 2
      },
      {
        "name": "Fluence",
        "classNumber": 2
      },
      {
        "name": "Scenic",
        "classNumber": 2
      },
      {
        "name": "Megane",
        "classNumber": 2
      },
      {
        "name": "Laguna",
        "classNumber": 2
      },
      {
        "name": "Koleos",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "ROLLS-ROYCE",
    "models": [
      {
        "name": "Ghost",
        "classNumber": 4
      },
      {
        "name": "Wraith",
        "classNumber": 4
      },
      {
        "name": "Cullinan",
        "classNumber": 5
      },
      {
        "name": "Phantom",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "SKODA",
    "models": [
      {
        "name": "Fabia",
        "classNumber": 1
      },
      {
        "name": "Rapid",
        "classNumber": 1
      },
      {
        "name": "Ibiza",
        "classNumber": 1
      },
      {
        "name": "Octavia",
        "classNumber": 2
      },
      {
        "name": "Roomster",
        "classNumber": 2
      },
      {
        "name": "Yeti",
        "classNumber": 2
      },
      {
        "name": "Karoq",
        "classNumber": 2
      },
      {
        "name": "Kodiaq",
        "classNumber": 2
      },
      {
        "name": "Superb",
        "classNumber": 2
      }
    ]
  },
  {
    "brand": "SUBARU",
    "models": [
      {
        "name": "Legacy",
        "classNumber": 2
      },
      {
        "name": "Tribeca",
        "classNumber": 2
      },
      {
        "name": "Forester",
        "classNumber": 2
      },
      {
        "name": "Outback",
        "classNumber": 2
      },
      {
        "name": "Impreza XV",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "TANK",
    "models": [
      {
        "name": "300",
        "classNumber": 4
      },
      {
        "name": "500",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "TESLA",
    "models": [
      {
        "name": "Model 3",
        "classNumber": 2
      },
      {
        "name": "Model S",
        "classNumber": 2
      },
      {
        "name": "Model Y",
        "classNumber": 2
      },
      {
        "name": "Model X",
        "classNumber": 4
      },
      {
        "name": "Roadster",
        "classNumber": 5
      },
      {
        "name": "Cybertruck",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "TOYOTA",
    "models": [
      {
        "name": "Auris",
        "classNumber": 1
      },
      {
        "name": "GT 86",
        "classNumber": 1
      },
      {
        "name": "Yaris",
        "classNumber": 1
      },
      {
        "name": "Avensis",
        "classNumber": 2
      },
      {
        "name": "Prius",
        "classNumber": 2
      },
      {
        "name": "Versa",
        "classNumber": 2
      },
      {
        "name": "Camry",
        "classNumber": 2
      },
      {
        "name": "Corolla",
        "classNumber": 2
      },
      {
        "name": "Crown",
        "classNumber": 2
      },
      {
        "name": "Venza",
        "classNumber": 3
      },
      {
        "name": "Hilux",
        "classNumber": 3
      },
      {
        "name": "FJ Cruiser",
        "classNumber": 4
      },
      {
        "name": "Highlander",
        "classNumber": 4
      },
      {
        "name": "Prado",
        "classNumber": 4
      },
      {
        "name": "LC200",
        "classNumber": 5
      },
      {
        "name": "LC300",
        "classNumber": 5
      },
      {
        "name": "Tundra",
        "classNumber": 5
      },
      {
        "name": "Sequoya",
        "classNumber": 5
      },
      {
        "name": "Alphard",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "VOLVO",
    "models": [
      {
        "name": "C30",
        "classNumber": 1
      },
      {
        "name": "S40",
        "classNumber": 1
      },
      {
        "name": "S60",
        "classNumber": 2
      },
      {
        "name": "V40",
        "classNumber": 2
      },
      {
        "name": "V50",
        "classNumber": 2
      },
      {
        "name": "V70",
        "classNumber": 2
      },
      {
        "name": "XC40",
        "classNumber": 2
      },
      {
        "name": "XC60",
        "classNumber": 2
      },
      {
        "name": "XC70",
        "classNumber": 3
      },
      {
        "name": "XC90",
        "classNumber": 3
      },
      {
        "name": "S90",
        "classNumber": 3
      },
      {
        "name": "S80",
        "classNumber": 3
      },
      {
        "name": "V90",
        "classNumber": 3
      }
    ]
  },
  {
    "brand": "VOLKSWAGEN",
    "models": [
      {
        "name": "Polo",
        "classNumber": 1
      },
      {
        "name": "Beetle",
        "classNumber": 1
      },
      {
        "name": "Scirocco",
        "classNumber": 1
      },
      {
        "name": "Touran",
        "classNumber": 2
      },
      {
        "name": "Sharan",
        "classNumber": 2
      },
      {
        "name": "Passat",
        "classNumber": 2
      },
      {
        "name": "Golf plus",
        "classNumber": 2
      },
      {
        "name": "Jetta",
        "classNumber": 2
      },
      {
        "name": "Tiguan",
        "classNumber": 2
      },
      {
        "name": "Touareg",
        "classNumber": 3
      },
      {
        "name": "Phaeton",
        "classNumber": 4
      },
      {
        "name": "Terramont",
        "classNumber": 4
      },
      {
        "name": "Caravelle",
        "classNumber": 5
      },
      {
        "name": "Transporter",
        "classNumber": 5
      },
      {
        "name": "Multivan",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "VOYAH",
    "models": [
      {
        "name": "Passion EV",
        "classNumber": 2
      },
      {
        "name": "Free EV",
        "classNumber": 3
      },
      {
        "name": "Free EVR",
        "classNumber": 4
      },
      {
        "name": "Long Range",
        "classNumber": 4
      },
      {
        "name": "Dream Phev",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "ZEEKR",
    "models": [
      {
        "name": "007",
        "classNumber": 3
      },
      {
        "name": "001",
        "classNumber": 4
      },
      {
        "name": "Z",
        "classNumber": 5
      }
    ]
  },
  {
    "brand": "МОТОТЕХНИКА",
    "models": [
      {
        "name": "Sport",
        "classNumber": 2
      },
      {
        "name": "Cafe racer",
        "classNumber": 2
      },
      {
        "name": "Tourer",
        "classNumber": 3
      },
      {
        "name": "Cruiser",
        "classNumber": 3
      },
      {
        "name": "Honda Goldwing",
        "classNumber": 4
      },
      {
        "name": "Harley-Davidson",
        "classNumber": 4
      }
    ]
  }
];

export function brandsForService(service: string): CarBrand[] {
  if (service !== OKLEYKA_SERVICE) return CAR_BRANDS;
  return CAR_BRANDS.map((item) =>
    item.brand === "PORSCHE"
      ? { brand: "PORSCHE", models: OKLEYKA_PORSCHE }
      : item,
  );
}

export function modelsForBrand(service: string, brand: string): CarModel[] {
  return brandsForService(service).find((item) => item.brand === brand)?.models ?? [];
}
