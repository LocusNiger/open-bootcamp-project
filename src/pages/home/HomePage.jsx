import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <div>
        <Link to="/tasks">Tasks</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </>
  );
};

export default HomePage;
