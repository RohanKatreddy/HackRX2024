import { useState } from "react";
import { Drug } from "../assets/DrugInventoryList";

export function DrugCard({
  brand,
  name,
  dosage,
  divider,
  din,
  quantity,
  standardQuantity,
}: Drug) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-info text-dark" : "";
  return (
    <div
      className={"card p-2 m-2" + bgColour}
      style={{ width: "18rem", transitionDuration: "0.2s" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center m-0">{brand + " " + name}</h5>
      <hr />
      <div className="container row">
        <div className="container col-7">
          <h6 className="card-subtitle mb-2">
            {dosage.map(
              (dose, index) =>
                dose[0] + dose[1] + (index < dosage.length - 1 ? divider : "")
            )}
          </h6>
          <h6 className="card-subtitle mb-2">{"DIN " + din}</h6>
        </div>
        <div className="container col d-flex align-items-end justify-content-end pb-2">
          <p className="card-text text-end ">
            {quantity + " " + standardQuantity[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
