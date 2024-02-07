import { TaskCreate } from "./Task.create";

export interface TaskUpdate extends Partial<TaskCreate> {}
