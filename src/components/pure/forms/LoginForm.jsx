import { useState } from "react";

export const LoginForm = () => {
  /* Por defecto las credenciales están vacías */
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);

  return <div></div>;
};
