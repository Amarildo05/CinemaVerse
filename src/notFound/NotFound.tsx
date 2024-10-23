import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundImage: 'url(/not-found.jpg)', backgroundSize: "cover"}} className="not-found">
      <img className="not-found-img" src="/full-logo-white.webp" />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
      <button className="go-home-button" onClick={handleGoHome}>
        Go Back Home
      </button>
    </div>
  );
}