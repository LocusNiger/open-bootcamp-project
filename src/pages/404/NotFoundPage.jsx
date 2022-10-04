import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>404 - Page not found</h1>
      <button onClick={handleHome}>Go back to home</button>
    </>
  );
};

export default NotFoundPage;
