import { Link } from "react-router-dom";
import "../../../styles/navbar.scss";

export default function NavbarLogged() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-end me-2 p-2 nav-style">
        <Link to="/" className="ms-3 nav-btn">
          Home
        </Link>
        <Link to="/tasks" className="ms-3 nav-btn">
          Tasks
        </Link>
        <Link to="/profile" className="ms-3 nav-btn">
          Profile
        </Link>
      </nav>
    </>
  );
}
