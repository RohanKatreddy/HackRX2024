import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
}

function ResultCardContainer({ children, heading }: Props) {
  return (
    <>
      <h1 className="h1 text-center">{heading}</h1>
      <hr />
      <div className="d-flex justify-content-center row">{children}</div>
    </>
  );
}

export default ResultCardContainer;
