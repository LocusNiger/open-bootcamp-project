import { Login, getAllUsers, getUser, createUser, PUTupdateUser, deleteUser } from "../../services/axiosCRUDService";
export default function AxiosCRUDExample() {
  //Login
  const authUser = () => {
    Login("eve.holt@reqres.in", "cityslicka")
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .catch((error) => {
        console.log(error);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Proccess finished"));
  };
  //Obtain all users
  const getUsers = () => {
    getAllUsers()
      .then((res) => console.log(res.data.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("Proccess finished"));
  };
  //Obtain user by id
  const obtainUser = (id) => {
    getUser(id)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("User obtained"));
  };
  //Create user
  const newUser = (name, job) => {
    createUser(name, job)
      .then((res) => {
        /* Si hay response y es 201 => ✓ */
        if (res.data && res.status === 201) console.log(res.data);
        else throw new Error("User not created");
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("New user was created"));
  };
  //Update user
  const updateUser = (name, job) => {
    PUTupdateUser(name, job)
      .then((res) => {
        if (res.data && res.status === 200) console.log(res.data);
        else throw new Error("Something it's wrong...");
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("User was updated succesfully"));
  };
  //Delete user
  const removeUser = () => {
    deleteUser()
      .then((res) => {
        if (res.status === 204) console.log("The user was deleted");
        else throw new Error("Something went wrong when try to remove the user");
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("The user was removed succesfully"));
  };
  return (
    <>
      <div>
        <button onClick={authUser}>LOGIN CRUD</button>
        <button onClick={() => getUsers}>Get all users</button>
        <button onClick={() => obtainUser(2)}>Get user n°2</button>
        <button onClick={() => newUser("morpheus", "leader")}>Create user</button>
        <button onClick={() => updateUser("morpheus", "zion resident")}>Update user</button>
        <button onClick={() => removeUser()}>Remove user</button>
      </div>
    </>
  );
}
