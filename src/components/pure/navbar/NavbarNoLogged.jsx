import { Link } from "react-router-dom";
import "../../../styles/navbar.scss";

export default function NavbarNoLogged() {
  return (
    <>
      <nav className="flex justify-end mr-2 p-2 w-full">
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
