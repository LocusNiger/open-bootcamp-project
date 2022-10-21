import { Link } from "react-router-dom";
import "../../styles/home.scss";

const HomeWithoutLogin = (props) => {
  const logged = props.logged;

  return (
    <>
      <div className="container home-container">
        <div className="titles-container">
          <h1>Organize your mind and your life.</h1>
          <h2>
            Get focused, get organized and start sorting your tasks with <span>Notes.</span>
          </h2>
        </div>
        <div className="start-btn-container">
          <Link to="/login" className="start-btn">
            Get started!
          </Link>
        </div>
        <div className="img-container">
          <img src="./img/Man-taking-note.png" />
        </div>
      </div>
    </>
  );
};

export default HomeWithoutLogin;
