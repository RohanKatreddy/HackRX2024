export interface Drug {
  brand: string;
  name: string;
  dosage: [number, string][];
  divider: string;
  din: string;
  standardQuantity: [number, string];
  quantity: number;
}
const DrugInventoryListDemo: Drug[] = [
  {
    brand: "Alysena",
    name: "28",
    dosage: [
      [100, "mcg"],
      [20, "mcg"],
    ],
    divider: "/",
    din: "02387883",
    standardQuantity: [10, "PACK"],
    quantity: 13,
  },
  {
    brand: "Sandoz",
    name: "Amlodipine",
    dosage: [[10, "mg"]],
    divider: "/",
    din: "​02284391​",
    standardQuantity: [75, "TAB"],
    quantity: 80,
  },
  {
    brand: "Apo",
    name: "Atorvastatin",
    dosage: [[40, "mg"]],
    divider: "/",
    din: "02295296",
    standardQuantity: [36, "TAB"],
    quantity: 22,
  },
  {
    brand: "Sandoz",
    name: "Candesartan",
    dosage: [[32, "mg"]],
    divider: "/",
    din: "02417340",
    standardQuantity: [48, "TAB"],
    quantity: 60,
  },
  {
    brand: "Humira",
    name: "",
    dosage: [
      [40, "mg"],
      [0.8, "mL"],
    ],
    divider: "/",
    din: "02258595​",
    standardQuantity: [120, "mg"],
    quantity: 160,
  },
  {
    brand: "Sandoz",
    name: "Metformin",
    dosage: [[500, "mg"]],
    divider: "/",
    din: "02246820",
    standardQuantity: [175, "TAB"],
    quantity: 205,
  },
  {
    brand: "Apo",
    name: "Mometasone",
    dosage: [[50, "mcg"]],
    divider: "/",
    din: "02403587",
    standardQuantity: [9, "PACK"],
    quantity: 10,
  },
  {
    brand: "Jamp",
    name: "Pantoprazole",
    dosage: [[40, "mg"]],
    divider: "/",
    din: "02357054​",
    standardQuantity: [90, "TAB"],
    quantity: 94,
  },
  {
    brand: "Oxycontin",
    name: "",
    dosage: [[10, "mg"]],
    divider: "/",
    din: "02240131",
    standardQuantity: [42, "TAB"],
    quantity: 48,
  },
  {
    brand: "Sandoz",
    name: "Ramipril",
    dosage: [[2.5, "mg"]],
    divider: "/",
    din: "02355922​",
    standardQuantity: [56, "TAB"],
    quantity: 50,
  },
  {
    brand: "Crestor",
    name: "Rosuvastatin",
    dosage: [[5, "mg"]],
    divider: "/",
    din: "02355922",
    standardQuantity: [38, "TAB"],
    quantity: 39,
  },
  {
    brand: "Teva",
    name: "Salbutamol",
    dosage: [[100, "mcg"]],
    divider: "/",
    din: "02326450",
    standardQuantity: [700, "mcg"],
    quantity: 800,
  },
  {
    brand: "Shingrix",
    name: "",
    dosage: [
      [50, "mcg"],
      [0.5, "mL"],
    ],
    divider: "/",
    din: "02468425​",
    standardQuantity: [4, "PACK"],
    quantity: 0,
  },
  {
    brand: "Sythroid",
    name: "",
    dosage: [[175, "mcg"]],
    divider: "/",
    din: "02172135​",
    standardQuantity: [114, "TAB"],
    quantity: 115,
  },
  {
    brand: "Vyvanse",
    name: "",
    dosage: [[60, "mg"]],
    divider: "/",
    din: "02347172",
    standardQuantity: [73, "CAP"],
    quantity: 75,
  },
];

export default DrugInventoryListDemo;
