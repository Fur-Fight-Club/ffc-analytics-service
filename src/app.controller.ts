import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ServerHealthcheck } from "./app.model";
import { AuthRequest, FirebaseGuard } from "./auth/firebase.guard";

@Controller()
@ApiTags("Utils")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    description:
      "Checking the health of the server and database. Mainly for AWS healthchecks.",
    type: ServerHealthcheck,
  })
  @Get("test")
  async test(): Promise<object> {
    return await this.appService.test();
  }

  @Get("test2")
  @UseGuards(FirebaseGuard)
  async test2(@Request() request: AuthRequest): Promise<object> {
    return { test: "test", auth: request.auth };
  }
}
