import { useEffect } from "react";
import { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

/* Componente contenedor de lista de tareas */
const TaskListComponent = () => {
  /* Creo una nueva tarea con el constructor (Task) */
  const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
  /* Estado para manejar las tareas */
  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(false);

  /* Control de ciclo de vida del componente. Se renderiza c/vez que cambie una tarea */
  useEffect(() => {
    setLoading(true);
    console.log("Task state has been modified. Loading: " + loading);
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount");
    };
  }, [task]);

  const changeState = (id) => {
    console.log("TODO: función que cambia el estado de la tarea");
  };
  return (
    <>
      <h1>Your task:</h1>
      {/* TODO: Aplicar un map para renderizar una lista de tareas */}
      {/* Le paso por props la tarea a mostrar. TaskComponent => comp. presentacional */}
      <TaskComponent task={defaultTask} />
    </>
  );
};

export default TaskListComponent;
