import "../Layout.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="main-nav">
        <div className="nav-container">
          <a href="/" className="headerNav">
            <img
              src="./Assets/mile1-assets/logo.svg"
              alt="logo"
              style={{ marginTop: 30, marginBottom: 10 }}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
