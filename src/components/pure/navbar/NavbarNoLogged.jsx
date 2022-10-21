import { Link } from "react-router-dom";
import "../../../styles/navbar.scss";

export default function NavbarNoLogged() {
  return (
    <>
      <nav className="flex justify-end mr-2 p-2 w-full">
        <Link to="/" className="ms-3 nav-btn">
          Home
        </Link>
        <Link to="/login" className="ms-3 nav-btn">
          Login
        </Link>
      </nav>
    </>
  );
}
