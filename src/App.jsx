import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

/* PAGES */
import HomeWithoutLogin from "./pages/home/HomeWithoutLogin";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/404/NotFoundPage";

/* COMPONENTS */
import Footer from "./components/pure/footer/Footer";
import NavbarNoLogged from "./components/pure/navbar/NavbarNoLogged";
import NavbarLogged from "./components/pure/navbar/NavbarLogged";
import HomeWithLogin from "./pages/home/HomeWithLogin";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <>
      {logged ? <NavbarLogged /> : <NavbarNoLogged />}
      {/* <h3>Are you logged? {logged ? <p>YES</p> : <p>NO</p>}</h3> */}
      {/*  <Button
        variant="contained"
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </Button> */}
      <Routes>
        <Route path="/" element={logged ? <HomeWithLogin logged={logged} /> : <HomeWithoutLogin logged={logged} />} />
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
