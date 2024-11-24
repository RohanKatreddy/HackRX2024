import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  message: string;
}

const Alert = ({ message }: Props) => {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility
  // Function to handle closing the popup
  const handleClose = () => {
    setShowPopup(false); // This will hide the popup
  };

  return (
    <>
      {showPopup && (
        <div
          className="d-flex justify-content-center align-items-center position-fixed w-100 h-100"
          style={{
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds a semi-transparent background
            zIndex: 1050,
          }}
        >
          <div
            className="bg-warning text-dark p-3 rounded"
            style={{
              display: "inline-block", // Adjusts the div size to fit the content
              padding: "20px", // Adds padding around the content
            }}
          >
            <p className="mb-0">{message}</p>
            <button
              onClick={handleClose} // Close the popup when clicked
              className="btn btn-dark btn-sm mt-2"
            >
              Close
            </button>
            <button
              onClick={handleClose} // Close the popup when clicked
              className="btn btn-dark btn-sm mt-2 ms-5"
            >
              <Link className={"link nav-link "} to="/call" aria-current="page">
                Make Request
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
