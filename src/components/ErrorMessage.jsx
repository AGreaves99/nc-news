import "../../styling/ErrorMessage.css";
function ErrorMessage({ err }) {
  return <p className="error">{err}</p>;
}

export default ErrorMessage;
