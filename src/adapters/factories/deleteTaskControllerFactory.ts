import { DbDeleteTask } from "../../dataSources/db/dbDeleteTask";
import { DeleteTaskMongoRepository } from "../../dataSources/db/repository/deleteTaskMongoRepository";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { DeleteTaskController } from "../controllers/task/deleteTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";

export const deleteTaskControllerFactory = () => {
  const deleteTaskRepository = new DeleteTaskMongoRepository();
  const dbDeleteTask = new DbDeleteTask(deleteTaskRepository);
  const taskController = new DeleteTaskController(dbDeleteTask, new RequiredFieldsValidation("id"));
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(taskController, logErrorMongoRepository);
};