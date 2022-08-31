import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

/* Componente que renderiza la tarea que le pasan por prop */
const TaskComponent = ({ task }) => {
  return (
    <>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </>
  );
};

/* Si le paso un prop de otra cosa que NO sea una tarea, dara error */
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
