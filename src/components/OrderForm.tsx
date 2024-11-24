import { useState } from "react";
import PharmacyMap from "./PharmacyMap";
import ResultCard, { RequestResult } from "./ResultCard";
import ResultCardContainer from "../components/ResultCardContainer";
import useCall from "../utils/useCall";

interface DrugRequest {
  prescription: string;
  quantity: number;
  units: string;
}

function OrderForm() {
  const [currInput, setInputs] = useState<DrugRequest>({
    prescription: "",
    quantity: 0,
    units: "TAB",
  });
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
    let { prescription, quantity, units } = currInput;
    let transferPrompt = `
    You are going to be calling for a inventory transfer, here are relavent informtation:
    Steps for Calling Another Pharmacy for a Transfer of Inventory
When a pharmacy assistant needs to facilitate an inventory transfer due to a shortage, the process involves the following steps:
Initial Contact:
Call local pharmacies to inquire about the required drug.
Start with an introduction:
Example: "Hi, this is Sobeys Pharmacy #375. We are wondering if you have X amount of Y drug available for a transfer."
Provide key details in the introduction:
Pharmacy name and ID number designated to each retail pharmacy.
The drug's brand name, generic name, dosage, and, if possible, the Drug Identification Number (DIN).
Confirmation:
The other pharmacy may ask for the DIN to confirm the specific drug and dosage required.
Clearly communicate all necessary details to avoid errors.
Processing the Transfer:
If the drug is available, the other pharmacy will process a prescription directed to the requesting pharmacy.

in this case, the drug you are asking about has DIN number ${prescription}, and the quantity is ${quantity}, with units ${units}`;

    useCall(transferPrompt, (newState) =>
      setAllInputs([...allInputs.slice(0, -1), {...newState, prescription, quantity, units}])
    );
    // setAllInputs([
    //   ...allInputs.slice(0, -1),
    //   { ...{ isLoading: true, result: "" }, prescription, quantity, units },
    // ]);
  };

  const handleUnitSelection = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement; // Narrow the type
    setInputs((values) => ({
      ...values,
      units: target.textContent || "",
    }));
  };
  return (
    <>
      <h1 className="h1 text-center">Make Request</h1>
      <div className={"row mb-5"}>
        <hr />
        <div className={"col"}>
          <PharmacyMap />
        </div>
        <div className={"col"}>
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
          </div>
        </div>
      </div>
      <ResultCardContainer heading="Previous Requests">
        {allInputs.map((request) => (
          <ResultCard key={request.prescription} {...request}></ResultCard>
        ))}
      </ResultCardContainer>
    </>
  );
}

export default OrderForm;
