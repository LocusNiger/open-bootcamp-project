import { Link } from "react-router-dom";

const ProfilePage = ({ user }) => {
  return (
    <>
      <h1>Your profile</h1>
      <Link to="/tasks">Tasks</Link>
    </>
  );
};

export default ProfilePage;
