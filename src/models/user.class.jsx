import { ROLES } from "./roles.enum";

/* Clase para usuarios */
export class User {
  username = "";
  email = "";
  password = "";
  role = ROLES.USER;

  /* constructor de la clase */
  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
