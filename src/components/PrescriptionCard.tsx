import { useState } from "react";

export interface Patient {
  patientName: string;
  dob: string;
  sex: string;
  activeRx: string;
  medication: [string, number][];
  due: string;
}

function PrescriptionCard({
  patientName,
  dob,
  sex,
  activeRx,
  medication,
  due,
}: Patient) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-info text-dark" : "";
  return (
    <div
      className={"card p-2 m-3 " + bgColour}
      style={{ width: "18rem" , transitionDuration: "0.2s"}}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center align-middle m-0">{patientName}</h5>
      <hr />
      <p className="card-text mb-1">{"DOB: " + dob}</p>
      <p className="card-text mb-1">{"Sex: " + sex}</p>
      <p className="card-text mb-1">{"Active Rx: " + activeRx}</p>
      <p className="card-text">{"Due: " + due}</p>
      <ul className="list-group list-group-flush rounded-3">
        {medication.map((med) => (
          <li
            key={activeRx}
            className={
              "list-group-item d-flex justify-content-between align-items-center border-light" +
              bgColour
            }
            style={{transitionDuration: "0.2s"}}
          >
            {med[0]}
            <span className="badge text-bg-primary rounded-pill">{med[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionCard;
