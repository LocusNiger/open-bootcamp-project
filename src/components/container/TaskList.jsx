import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/Task";

const TaskListComponent = () => {
  const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
  const changeState = (id) => {
    console.log("TODO: función que cambia el estado de la tarea");
  };
  return (
    <>
      <h1>Your task:</h1>
      {/* TODO: Aplicar un map para renderizar una lista de tareas */}
      <TaskComponent task={defaultTask} />
    </>
  );
};

export default TaskListComponent;
