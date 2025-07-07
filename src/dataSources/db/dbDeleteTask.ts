import { DeleteTask, DeleteTaskModel } from "../../usecases/deleteTask";
import { DeleteTaskRepository } from "../../usecases/repository/deleteTaskRepository";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}

  async delete(task: DeleteTaskModel): Promise<Error | void> {
    return await this.deleteTaskRepository.delete(task);
  }
}