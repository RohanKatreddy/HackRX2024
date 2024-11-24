import { useState } from "react";
import { Oval } from "react-loader-spinner";

export interface RequestResult {
  prescription: string;
  quantity: number;
  units: string;
  isLoading: boolean;
  result: string;
}

function ResultCard({
  prescription,
  quantity,
  units,
  isLoading,
}: RequestResult) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-info text-dark" : ""; // change color later

  if (isLoading) {
    return (
      <div
        className={"card p-2 m-2" + bgColour}
        style={{ width: "18rem" }}
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <h5 className="card-title text-center m-0">Pharmacy A: Calling...</h5>
        <hr />
        <div className="mx-auto">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        <div className=""></div>
      </div>
    );
  }

  return (
    <div
      className={"card p-2 m-2" + bgColour}
      style={{ width: "18rem" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center m-0">Pharmacy A</h5>
      <hr />
      <div className="">
        <div className="container col-7">
          <h6 className={"card-subtitle mb-2 text-sucess"}>Success!</h6>
          <h6 className={"card-subtitle mb-2 "}>{"DIN: " + prescription}</h6>
          <h6 className={"card-subtitle mb-2 text-sucess"}>Rx No.:12345321</h6>
          <h6 className={"card-subtitle mb-2 "}>
            {"Quantity: " + quantity + " " + units}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
