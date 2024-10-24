import "./Error.css";

export default function Error() {
  return (
    <div
      style={{ color: "#9e9e9e" }}
      className="error-container"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="100"
        height="100"
        fill="#FF4C4C"
      >
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" />
        <path d="M32 10v24m0 8v4" fill="none" stroke="white" strokeWidth="4" />
      </svg>
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-message">
        We couldn't load any movie at this time. Please try again later.
      </p>
    </div>
  );
}