import { ObjectId } from "mongodb";
import { DeleteTaskModel } from "../../../usecases/deleteTask";
import { DeleteTaskRepository } from "../../../usecases/repository/deleteTaskRepository";
import { MongoManager } from "../../config/mongoManager";
import { InvalidParamError } from "../../../adapters/presentations/api/errors/invalid-param-error";
import { NotFoundError } from "../../../adapters/presentations/api/errors/not-found-error";

export class DeleteTaskMongoRepository implements DeleteTaskRepository {

  async delete(task: DeleteTaskModel): Promise<Error | void> {
    const taskCollection = MongoManager.getInstance().getCollection("tasks");

    if (!ObjectId.isValid(task.id)) {
      return new InvalidParamError(task.id);
    }

    const { deletedCount } = await taskCollection.deleteOne({ _id: new ObjectId(task.id) });

    if (!deletedCount) return new NotFoundError("task");
  }

}
