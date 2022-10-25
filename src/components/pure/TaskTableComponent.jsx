import { useEffect, useState } from "react";

/* Models */
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

/* Components */
import TaskForm from "../pure/forms/TaskForm";
import TaskComponent from "../pure/TaskComponent";

/* Componente contenedor de lista de tareas */
export default function TaskTableComponent() {
  /* Creo una nueva tarea con el constructor (Task) */
  const defaultTask1 = new Task("Ordenar la ropa", "Doblar y guardar la ropa", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("Cocinar", "Almuerzo y cena", false, LEVELS.URGENT);
  const defaultTask3 = new Task("Pagar luz", "Pagar impuesto antes que venza", false, LEVELS.BLOCKING);

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
    <div>
      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 border border-gray-300">
                <div className="flex items-center gap-2">Title</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Description</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Priority</div>
              </th>

              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* Le paso por props la tarea a mostrar. TaskComponent => comp. presentacional */}
            {tasks.map((task, index) => {
              return (
                <TaskComponent key={index} index={index} task={task} complete={completeTask} deleteTask={deleteTask} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
