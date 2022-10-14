import APIRequest from "../utils/config/axios.config";

export default function getRandomUser() {
  return APIRequest.post("/login", {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  })
    .then((res) => {
      console.log("Token generated");
      sessionStorage.setItem("token", res.token);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Process ended"));
}
