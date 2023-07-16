import { HttpStatus, Injectable } from "@nestjs/common";
import { ServerHealthcheck } from "./app.model";
import { MongoService } from "./services/mongo.service";

@Injectable()
export class AppService {
  constructor(private readonly mongo: MongoService) {}
  async test(): Promise<object | PromiseLike<object>> {
    return await this.mongo.demographicEvent.updateMany({
      data: {
        appId: "87dacb21-13e2-4dc2-8b41-0c1b8e5ed4ad",
      },
    });
  }
}
