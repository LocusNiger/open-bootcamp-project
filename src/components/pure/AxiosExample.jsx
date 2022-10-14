import getRandomUser from "../../services/axiosService";

export default function AxiosExample() {
  const handleLogin = () => {
    getRandomUser();
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
