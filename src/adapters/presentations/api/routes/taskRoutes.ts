import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";
import { DeleteTaskController } from "../../../controllers/task/deleteTask";
import { deleteTaskControllerFactory } from "../../../factories/deleteTaskControllerFactory";

export default (router: Router): void => {
  
  router.post("/tasks", expressRouteAdapter(taskControllerFactory()));
  router.delete("/task", expressRouteAdapter(deleteTaskControllerFactory()));
};
