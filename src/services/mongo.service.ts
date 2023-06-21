import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient as PrismaClientPackage } from "@prisma/client";

@Injectable()
export class MongoService extends PrismaClientPackage implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
