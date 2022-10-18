import { Link } from "react-router-dom";
import "../../styles/footer.scss";
export default function MenuListItems() {
  return (
    <>
      <div className="d-flex flex-column col-1">
        <Link className="footer-btn" to="/dashboard">
          Dashboard
        </Link>
        <Link className="footer-btn" to="/tasks">
          Tasks
        </Link>
        <Link className="footer-btn" to="/profile">
          Profile
        </Link>
      </div>
    </>
  );
}
