interface Props {
  label: string;
  color: string;
  clickHandler: () => void;
}

function Button({ label, color, clickHandler }: Props) {
  return (
    <button
      type="button"
      className={"btn mx-2 btn-" + color}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}
export default Button;
