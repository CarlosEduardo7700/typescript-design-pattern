export class MongoManager {
  public static instance: MongoManager;
  private constructor(){}

  public static getInstance() {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }
    return MongoManager.instance;
  }
}