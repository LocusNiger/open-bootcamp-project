import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <>
      <nav className="navbar navbar-dark bg-secondary">
        <Link to="/" className="text-light">
          Home
        </Link>
        <Link to="/tasks" className="text-light">
          Tasks
        </Link>
        <Link to="/login" className="text-light">
          Login
        </Link>
        <Link to="/sign-up" className="text-light">
          Sign up
        </Link>
        <Link to="/profile" className="text-light">
          Profile
        </Link>
      </nav>
      <h3>Are you logged? {logged ? <p>YES</p> : <p>NO</p>}</h3>
      <button
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/login" element={logged ? <Navigate replace to={"/"} /> : <LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/profile" element={!logged ? <Navigate replace to={"/"} /> : <ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
