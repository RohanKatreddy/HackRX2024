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

import "./App.css";
import { useState } from "react";

function App() {
  // Inventory of drugs
  const [drugInventoryData, setDrugInventoryData] = useState(DrugInventoryList);
  const [patientData, setPatientData] = useState(PatientList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
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
