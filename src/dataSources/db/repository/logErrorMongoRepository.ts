import { LogErrorRepository } from "../../../usecases/repository/logErrorRepository";
import { MongoManager } from "../../config/mongoManager";

export class LogErrorMongoRepository implements LogErrorRepository {

  async log(stack: string): Promise<void> {
    const errorsCollection = await MongoManager.getInstance().getCollection("errors");
    await errorsCollection.insertOne({stack, date: new Date()});
  }
}