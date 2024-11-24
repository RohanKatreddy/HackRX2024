interface Props {
  message: string;
}

function Alert({ message }: Props) {
  return <div>{message}</div>;
}

export default Alert;
