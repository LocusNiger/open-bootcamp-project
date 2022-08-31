import { LEVELS } from "./levels.enum";

/* Clase de tipo tarea */
/* Por defecto una tarea tendrá estos datos */
export class Task {
  name = "";
  description = "";
  completed = false;
  level = LEVELS.NORMAL;

  /* Constructor de la clase */
  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
