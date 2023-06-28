import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { MongoService } from "./services/mongo.service";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoService],
})
export class AppModule {}
