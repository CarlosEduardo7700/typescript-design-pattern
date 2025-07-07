import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const addTaskRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(addTaskRepository);
  return new AddTaskController(dbAddTask, dateValidatorAdapter);
};