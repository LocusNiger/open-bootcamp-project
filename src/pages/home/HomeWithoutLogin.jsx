import { Link } from "react-router-dom";
import "../../styles/home.scss";

const HomeWithoutLogin = (props) => {
  const logged = props.logged;

  return (
    <>
      <div className="container home-container">
        <div className="titles-container">
          <h1 className="text-xl">Organize your mind and your life.</h1>
          <h2 className="text-xl">
            Get focused, get organized and start sorting your tasks with <span className="text-2xl">Notes.</span>
          </h2>
        </div>
        <div className="mt-7 ">
          <img className="w-full " src="./img/Man-taking-note.png" />
        </div>
        <div className="start-btn-container">
          <Link to="/login" className="start-btn text-xl">
            Get started!
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeWithoutLogin;
