import axios from "axios";

// Login
export const Login = (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  return axios.post("https://reqres.in/api/login", body);
};

// Obtain all users
export const getAllUsers = () => {
  return axios("https://reqres.in/api/users?page=2");
};

// Obtain user by id
export const getUser = (id) => {
  return axios(`https://reqres.in/api/users/${id}`);
};

// Create user
export const createUser = (name, job) => {
  const body = {
    name: name,
    job: job,
  };
  return axios.post("https://reqres.in/api/users", body);
};

// Update user
export const PUTupdateUser = (name, job) => {
  const body = {
    name: name,
    job: job,
  };
  return axios.put("https://reqres.in/api/users/2", body);
};

// Delete user
export const deleteUser = () => {
  return axios.delete("https://reqres.in/api/users/2");
};
