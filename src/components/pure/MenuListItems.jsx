import { Link } from "react-router-dom";

export default function MenuListItems() {
  return (
    <>
      <div className="d-flex flex-column col-1">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </>
  );
}
