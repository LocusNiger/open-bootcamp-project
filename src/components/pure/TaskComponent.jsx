import PropTypes from "prop-types";
import { useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";

/* Componente que renderiza la tarea que le pasan por prop */
const TaskComponent = ({ task }) => {
  /* Cada vez que se modifique una tarea, se ejecutara el useEffect */
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /* Función que retorna un badge dependiendo el nivel de la tarea */
  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <p className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </p>
        );
      case LEVELS.URGENT:
        return (
          <p className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </p>
        );
      case LEVELS.BLOCKING:
        return (
          <p className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </p>
        );
      default:
        break;
    }
  };

  /* Función que retorna icono dependiendo si la tarea esta completada o no */
  const taskCompletedIcon = () => {
    if (task.completed) {
      return <i className="bi-toggle-on" style={{ color: "green", fontSize: "1rem" }}></i>;
    } else {
      return <i className="bi-toggle-off" style={{ color: "grey", fontSize: "1rem" }}></i>;
    }
  };
  return (
    <tr className="fw-normal border">
      <td className="border">
        <span className="px-2">{task.name}</span>
      </td>
      <td className="align-middle border">
        <span>{task.description}</span>
      </td>
      <td className="border">{taskLevelBadge()}</td>
      <td className="d-flex justify-content-around align-items-center border">
        {taskCompletedIcon()}
        <i className="bi bi-trash" style={{ color: "tomato", fontSize: "1rem" }}></i>
      </td>
    </tr>
  );
};

/* Si le paso un prop de otra cosa que NO sea una tarea, dara error */
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
