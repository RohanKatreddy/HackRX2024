import { useState } from "react";
import ResultCard, { RequestResult } from "./ResultCard";
import ResultCardContainer from "../ResultCardContainer";

interface DrugRequest {
  prescription: string,
  quantity: number,
  units: string,
}

function OrderForm() {
  const [currInput, setInputs] = useState<DrugRequest>({ prescription: "", quantity: 0, units: "TAB" });
  const [allInputs, setAllInputs] = useState<RequestResult[]>([]);
  console.log(allInputs);
  let ValidUnits = ["TAB", "CAP", "PACK", "mg", "ml", "mcg"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllInputs([...allInputs, {...currInput, isLoading: false, result: ""}])
  };

  const handleUnitSelection = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement; // Narrow the type
    setInputs((values) => ({
      ...values,
      units: target.textContent || "",
    }));
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-3">
          <label htmlFor="DrugName" className="form-label">
            Drug Identification Number (DIN):
          </label>
          <input
            type="text"
            className="form-control"
            id="DrugName"
            name="prescription"
            aria-describedby="DrugName"
            onChange={handleChange}
          />
        </div>
        <label htmlFor="Quantity" className="form-label">
          Quantity:
        </label>
        <div className="mb-3 input-group">
          <input
            type="number"
            className="form-control"
            id="Quantity"
            name="quantity"
            min="0"
            step="1"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {ValidUnits[0]}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {ValidUnits.map((unit) => (
              <li
                className="dropdown-item"
                key={unit}
                onClick={handleUnitSelection}
              >
                {unit}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ResultCardContainer heading="Previous Requests">
        {allInputs.map((request) => <ResultCard key={request.prescription} {...request}></ResultCard>)}
      </ResultCardContainer>
    </div>
  );
}

export default OrderForm;
