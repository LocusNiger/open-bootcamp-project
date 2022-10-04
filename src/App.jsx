import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
