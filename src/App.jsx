import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

/* PAGES */
import HomePage from "./pages/home/HomePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/404/NotFoundPage";

/* COMPONENTS */
import Button from "@mui/material/Button";
import Footer from "./components/pure/footer/Footer";
import AxiosExample from "./components/pure/AxiosExample";

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
      <AxiosExample />
      <Button
        variant="contained"
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </Button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={!logged ? <Navigate replace to={"/"} /> : <TasksPage />} />
        <Route path="/tasks/:id" element={!logged ? <Navigate replace to={"/"} /> : <TaskDetailPage />} />
        <Route path="/login" element={logged ? <Navigate replace to={"/"} /> : <LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/profile" element={!logged ? <Navigate replace to={"/"} /> : <ProfilePage />} />
        <Route path="/dashboard" element={!logged ? <Navigate replace to={"/"} /> : <DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
