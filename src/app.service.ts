import { HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";
import { ServerHealthcheck } from "./app.model";
import { MongoService } from "./services/mongo.service";

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mongo: MongoService
  ) {}
  async healthcheck(): Promise<ServerHealthcheck> {
    return {
      server_status: HttpStatus.OK,
      prisma_status: await this.prismaHealthcheck(),
      timestamp: new Date(),
    };
  }

  private async prismaHealthcheck(): Promise<number> {
    try {
      await this.prisma.$executeRaw`SELECT 1;`;
      return HttpStatus.OK;
    } catch (error) {
      // Log to logger service the error
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

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
