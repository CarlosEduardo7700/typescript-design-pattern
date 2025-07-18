import { Collection, MongoClient } from "mongodb";

export class MongoManager {
  public static instance: MongoManager;
  private client: MongoClient | null = null;

  private constructor(){}

  public static getInstance() {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }
    return MongoManager.instance;
  }

  public async connect(url: string) {
    if (!this.client) {
      this.client = await MongoClient.connect(url);
    }
  }

  public getCollection(name: string): Collection {
    if (!this.client) throw new Error("MongoClient não conectado!");
    return this.client?.db().collection(name);
  }
}