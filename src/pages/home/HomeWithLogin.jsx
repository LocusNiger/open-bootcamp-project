import { Link } from "react-router-dom";
import TaskListComponent from "../../components/container/TaskListComponent";

export default function HomeWithLogin(props) {
  const logged = props.logged;

  return (
    <div className="home-container w-full">
      <div className="flex flex-col items-center p-2 border border-black">
        <h1 className="text-2xl text-black">Welcome back</h1>
        <h2 className="text-2xl">Here are your tasks</h2>
      </div>
      <TaskListComponent />
    </div>
  );
}
