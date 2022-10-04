import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <h2>Dashboard</h2>
      <Link to="/tasks">Tasks</Link>
    </>
  );
};

export default HomePage;
