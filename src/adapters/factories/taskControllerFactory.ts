import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";

export const taskControllerFactory = () => {
  const addTaskRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(addTaskRepository);
  const taskController = new AddTaskController(dbAddTask, addTaskValidationCompositeFactory());
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(taskController, logErrorMongoRepository);
};