import { useParams } from "react-router-dom";
const TaskDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>TaskDetail - {id}</h1>
    </>
  );
};

export default TaskDetailPage;
