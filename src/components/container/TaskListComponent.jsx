import { useEffect, useState } from "react";

/* Models */
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

/* Components */
import TaskForm from "../pure/forms/TaskForm";
import TaskComponent from "../pure/TaskComponent";
import TaskTableComponent from "../pure/TaskTableComponent";

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

  /* Función para marcar como completada la tarea que recibe */
  const completeTask = (task) => {
    const index = tasks.indexOf(task); /* busco el índice de la tarea a modificar */
    const tempTasks = [...tasks]; /* arreglo temporal para hacer las modificaciones */
    tempTasks[index].completed = !tempTasks[index].completed; /* cambio el atributo completed */
    setTasks(tempTasks); /* seteo el arreglo ya modificado */
  };

  /* Función para eliminar la tarea que recibe */
  const deleteTask = (task) => {
    const index = tasks.indexOf(task); /* busco el índice de la tarea a modificar */
    const tempTasks = [...tasks]; /* arreglo temporal para hacer las modificaciones */
    tempTasks.splice(index, 1); /* elimino la tarea en el arreglo temporal */
    setTasks(tempTasks); /* seteo el arreglo ya modificado */
  };

  /* Función para agregar una nueva tarea */
  const addTask = (task) => {
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  };

  return (
    <>
      <div className="border border-red-500">
        <div className="">
          {/* card header (title) */}

          {/* card body (content) */}
          <div className="" data-mdb-perfect-scrollbar="true">
            {tasks.length > 0 ? (
              <div className="p-3">
                <table>
                  <thead>
                    <tr>
                      <th scope="col" className="px-3 col-3 border text-center">
                        Title
                      </th>
                      <th scope="col" className="px-3 border col-4 text-center">
                        Description
                      </th>
                      <th scope="col" className="px-3 border col-3 text-center">
                        Priority
                      </th>
                      <th scope="col" className="px-3 border col-2 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Le paso por props la tarea a mostrar. TaskComponent => comp. presentacional */}
                    {tasks.map((task, index) => {
                      return <TaskComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask} />;
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-3">
                <h4>You are up to date with your tasks!</h4>
              </div>
            )}
            <TaskForm add={addTask} />
          </div>
        </div>
      </div>
      <TaskTableComponent />
    </>
  );
};

export default TaskListComponent;
