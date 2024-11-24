import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
  Important?: boolean;
}

function PopUp({ heading, children, Important }: Props) {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">{heading}</strong>
          {Important && <small className="text-danger">IMPORTANT</small>}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{children}</div>
      </div>
    </div>
  );
}

export default PopUp;
