import { useContext } from "react";
import { TasksContext } from "../comtexts/tasks";

export const useTasks = () => {
  return useContext(TasksContext);
};