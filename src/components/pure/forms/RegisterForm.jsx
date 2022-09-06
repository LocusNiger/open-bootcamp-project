import { useState } from "react";

export default function RegisterForm() {
  /* Por defecto las credenciales están vacías */
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);
  return <div>RegisterForm</div>;
}
