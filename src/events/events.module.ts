import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { MongoService } from "src/services/mongo.service";

@Module({
  controllers: [EventsController],
  providers: [EventsService, MongoService],
})
export class EventsModule {}
