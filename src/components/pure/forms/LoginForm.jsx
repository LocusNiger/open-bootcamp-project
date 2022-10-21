import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../../../styles/login.scss";

export const LoginForm = () => {
  /* Valores iniciales para la prop del formik */
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  /* Esquema de validación para el formulario (YUP) */
  const isRequired = "Required field"; /* mensajes de error */
  const pwMsg = "At least 6 characters";
  const emailMsg = "Invalid Email format";
  const loginSchema = Yup.object().shape({
    email: Yup.string().email(emailMsg).required(isRequired),
    password: Yup.string().required(isRequired).min(6, pwMsg),
  });

  return (
    <div className="flex flex-col border border-black gap-3 items-center justify-center">
      <h1 className="text-2xl font-semibold">Login</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((res) => setTimeout(res, 1000));
          alert(JSON.stringify(values, null, 2));
          sessionStorage.setItem("credentials", values); /* guardo los datos en LS */
          navigate("/");
        }}
      >
        {/* Props de formik */}
        {(props) => {
          const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
          return (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="example@email.com" type="email"></Field>
                {/* Manejo de errores en input de email */}
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div>
                <label>Password</label>
                <Field id="password" name="password" placeholder="Your password..." type="password"></Field>
                {errors.password && <p>{errors.password}</p>}
              </div>
              <button type="submit">Login</button>
              {/* TODO: spinner para loading */}
              {isSubmitting ? <p>Login is submitting</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
