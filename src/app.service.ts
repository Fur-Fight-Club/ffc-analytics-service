import { HttpStatus, Injectable } from "@nestjs/common";
import { ServerHealthcheck } from "./app.model";
import { MongoService } from "./services/mongo.service";

@Injectable()
export class AppService {
  constructor(private readonly mongo: MongoService) {}
  async test(): Promise<object | PromiseLike<object>> {
    return await this.mongo.buttonEvent.findMany();
  }

  async test2(): Promise<object | PromiseLike<object>> {
    return await this.mongo.buttonEvent.create({
      data: {
        event_id: "test",
        buttonContent: "test content",
        pathname: "/test/path",
        timestamp: Date.now(),
        user: -1,
        uuid: "my-uuid",
      },
    });
  }
}
