import { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS);
  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value);
    add(newTask);
  };

  return (
    <div className="">
      <form className="d-flex flex-column justify-content-evenly border mt-4 p-3" onSubmit={addTask}>
        <p className="fs-5">New task</p>
        <input
          type="text"
          id="taskName"
          className=" mb-3 form-control form-control-lg fs-6"
          ref={nameRef}
          placeholder="Task title"
          required
          autoFocus
        />
        <textarea
          id="taskDescription"
          className="mb-3 form-control"
          ref={descriptionRef}
          placeholder="Task description"
          required
          autoFocus
        />
        <div className="d-flex justify-content-between">
          <select
            className="form-select-sm w-75 form-control"
            ref={levelRef}
            defaultValue={LEVELS.NORMAL}
            id="taskLevel"
          >
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENT}>Urgent</option>
            <option value={LEVELS.BLOCKING}>Blocking</option>
          </select>
          <button type="submit" className="btn btn-succes btn-lg ">
            <i className="bi bi-patch-plus-fill me-3 " style={{ fontSize: "1.6rem", color: "#15c39a" }}></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
