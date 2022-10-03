import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

/* Models */
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

export const RegisterForm = () => {
  let user = new User();
  /* Valores iniciales para la prop de Formik */
  const initialCredentials = {
    username: "",
    email: "",
    password: "",
    confirm: "" /* para confirmar la pw */,
    role: ROLES.USER,
  };

  /* Esquema de validación (YUP) */
  const registerSchema = Yup.object().shape({
    username: Yup.string().min(6, "Too short!").max(16, "Too long!").required("Username is required."),
    email: Yup.string().email().required(),
    password: Yup.string().required("Password is required.").min(8, "Too short"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match!"),
      })
      .required("You must confirm the password."),
    role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role").required("Role is required"),
  });

  /* confirm tiene que ser un string IGUAL al pw => esperamos a que haya algo en "password" */
  /* Cuando ese valor exista y sea >0, verificamos que el valor sea el que se encuentra en el ref password */

  const submit = (values) => {
    alert("Register user");
  };

  return (
    <>
      <h1>Register form</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((res) => setTimeout(res, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => {
          const { values, errors, isSubmitting } = props;
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="example@email.com" type="email"></Field>
              {/* Manejo de errores en input de email */}
              {errors.email && <p>{errors.email}</p>}

              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="Username" type="text"></Field>
              {/* Manejo de errores en input de username */}
              {errors.username && <p>{errors.username}</p>}

              <label htmlFor="password">Password</label>
              <Field id="password" name="password" placeholder="Your password..." type="password"></Field>
              {errors.password && <p>{errors.password}</p>}

              <label htmlFor="confirm">Confirm password</label>
              <Field id="confirm" name="confirm" placeholder="Confirm password..." type="password"></Field>
              {errors.confirm && <p>{errors.confirm}</p>}

              <button type="submit">Register user</button>
              {isSubmitting ? <p>Sending your credentials</p> : null}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
