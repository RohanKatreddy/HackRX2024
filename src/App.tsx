import OrderForm from "./components/OrderForm";
import PrescriptionTable from "./components/PrescriptionTable";
import PrescriptionCard from "./components/PrescriptionCard";
import DrugInventory from "./components/DrugInventory";
import { DrugCard } from "./components/DrugCard";
import DrugInventoryList from "./assets/DrugInventoryList";
import DrugInventoryListDemo from "./assets/DrugInventoryListDemo";
import PatientListDemo from "./assets/PatientListDemo";
import PatientList from "./assets/PatientList";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import PopUp from "./components/PopUp";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Toast } from "bootstrap";
import { Patient } from "./components/PrescriptionCard";
import { Drug } from "./assets/DrugInventoryList";
import Alert from "./components/Alert.js";

import "./App.css";
import { useState } from "react";

function App() {
  // Inventory of drugs
  const [drugInventoryData, setDrugInventoryData] = useState(DrugInventoryList);
  const [patientData, setPatientData] = useState(PatientList);
  const [shortage, setShortage] = useState<
    { patientName: string; drugName: string; din: string; shortage: number }[]
  >([]);

  function calculateDrugShortages(
    patients: Patient[],
    drugs: Drug[]
  ): {
    patientName: string;
    drugName: string;
    din: string;
    shortage: number;
  }[] {
    const shortages: {
      patientName: string;
      drugName: string;
      din: string;
      shortage: number;
    }[] = [];

    patients.forEach((patient) => {
      patient.medication.forEach(([medName, requiredQuantity]) => {
        const [medBrand, ...medDrugNameParts] = medName.split(" ");
        const medDrugName = medDrugNameParts.join(" ");

        const drug = drugs.find(
          (d) => d.brand === medBrand && d.name === medDrugName
        );

        if (drug) {
          const shortage = requiredQuantity - drug.quantity;
          if (shortage > 0) {
            shortages.push({
              patientName: patient.patientName,
              drugName: `${drug.brand} ${drug.name}`,
              din: drug.din,
              shortage,
            });
          }
        }
      });
    });

    return shortages;
  }

  let message = "";
  shortage.forEach(
    (drug) =>
      (message += `${drug.drugName} DIN: ${drug.din} Quantity Required: ${drug.shortage}\n\n`) // Added extra newline for spacing between drugs
  );

  let showing = shortage.length === 0 ? false : true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                {showing && <Alert message={message}></Alert>}

                {drugInventoryData
                  .filter((drug) => drug.quantity < drug.standardQuantity[0]) // Filter drugs with low inventory
                  .map((drug) => (
                    <PopUp
                      key={drug.din}
                      heading="Medication Low"
                      Important={true}
                    >
                      <p>
                        Drug: {`${drug.brand} ${drug.name} (DIN: ${drug.din})`}
                      </p>
                    </PopUp>
                  ))}

                <div className="p-5 bg-gradient">
                  <Button
                    label="Refresh"
                    color="primary"
                    clickHandler={() => {
                      setDrugInventoryData(DrugInventoryList);
                      setPatientData(PatientList);
                    }}
                  ></Button>
                  <Button
                    label="Demo"
                    color="danger"
                    clickHandler={() => {
                      setDrugInventoryData(DrugInventoryListDemo);
                      setPatientData(PatientListDemo);
                      const toastLiveExample =
                        document.getElementById("liveToast");
                      if (toastLiveExample) {
                        const toastBootstrap =
                          Toast.getOrCreateInstance(toastLiveExample);
                        toastBootstrap.show();
                      }
                      setShortage(
                        calculateDrugShortages(patientData, drugInventoryData)
                      );
                    }}
                  ></Button>
                  <DrugInventory heading="Drug Inventory">
                    {drugInventoryData.map((drug) => (
                      <DrugCard
                        key={drug.din}
                        brand={drug.brand}
                        name={drug.name}
                        dosage={drug.dosage}
                        divider={drug.divider}
                        din={drug.din}
                        quantity={drug.quantity}
                        standardQuantity={drug.standardQuantity}
                      />
                    ))}
                  </DrugInventory>
                  <div className="mb-5 mt-5 pb-5"></div>
                  <PrescriptionTable heading="Current Prescriptions">
                    {patientData.map((patient) => (
                      <PrescriptionCard
                        key={patient.activeRx}
                        patientName={patient.patientName}
                        dob={patient.dob}
                        sex={patient.sex}
                        activeRx={patient.activeRx}
                        medication={patient.medication}
                        due={patient.due}
                      />
                    ))}
                  </PrescriptionTable>
                </div>
              </>
            }
          />
          <Route
            path="call"
            element={
              <div className="p-5 bg-gradient">
                <OrderForm />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
