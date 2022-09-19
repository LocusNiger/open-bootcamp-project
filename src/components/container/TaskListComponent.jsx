import { useEffect } from "react";
import { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

/* Componente contenedor de lista de tareas */
const TaskListComponent = () => {
  /* Creo una nueva tarea con el constructor (Task) */
  const defaultTask1 = new Task("Example1", "Description1", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2", "Description2", false, LEVELS.URGENT);
  const defaultTask3 = new Task("Example3", "Description3", false, LEVELS.BLOCKING);
  /* Estado para manejar las tareas */
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(false);

  /* Control de ciclo de vida del componente. Se renderiza c/vez que cambie una tarea */
  useEffect(() => {
    setLoading(true);
    console.log("Task state has been modified. Loading: " + loading);
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount");
    };
  }, [tasks]);

  const changeState = (id) => {
    console.log("TODO: función que cambia el estado de la tarea");
  };
  return (
    <>
      <div className="col-12">
        <div className="card">
          {/* card header (title) */}
          <div className="card-header p-3">
            <h2>Your task:</h2>
          </div>
          {/* card body (content) */}
          <div className="card-body card-styles" data-mdb-perfect-scrollbar="true">
            <table>
              <thead>
                <tr>
                  <th scope="col" className="px-3 border text-center">
                    Title
                  </th>
                  <th scope="col" className="px-3 border text-center">
                    Description
                  </th>
                  <th scope="col" className="px-3 border text-center">
                    Priority
                  </th>
                  <th scope="col" className="px-3 border text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: iterar sobre una lista de tareas */}
                {/* Le paso por props la tarea a mostrar. TaskComponent => comp. presentacional */}
                {tasks.map((task, index) => {
                  return <TaskComponent key={index} task={task} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskListComponent;
