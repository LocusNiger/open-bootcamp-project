import { Link } from "react-router-dom";
import "../../../styles/navbar.scss";

export default function NavbarNoLogged() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-end me-2 p-2 nav-style">
        <Link to="/login" className="ms-3 nav-btn">
          Login
        </Link>
        <Link to="/sign-up" className="ms-3 nav-btn">
          Sign up
        </Link>
      </nav>
    </>
  );
}
