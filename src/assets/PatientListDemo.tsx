import { Patient } from "../components/PrescriptionCard";

const PatientListDemo: Patient[] = [
  {
    patientName: "Jeon, Amelia",
    dob: "2006/02/21",
    sex: "Female",
    activeRx: "8910111",
    medication: [["Shingrix", 20]],
    due: "5 hrs ago",
  },
  {
    patientName: "Katreddy, Rohan",
    dob: "2006/10/22",
    sex: "Male",
    activeRx: "8008135",
    medication: [
      ["Sandoz Amlodipine", 20],
      ["Vyvanse", 9],
      ["Teva Salbutamol", 16],
      ["Oxycontin", 35],
      ["Jamp Pantoprazole", 20],
    ],
    due: "3h",
  },
  {
    patientName: "Kulshestha, Aadi",
    dob: "2006/09/15",
    sex: "Male",
    activeRx: "1617181",
    medication: [
      ["Crestor Rosuvastatin", 420],
      ["Sythroid", 69],
    ],
    due: "1 day",
  },
];

export default PatientListDemo;
