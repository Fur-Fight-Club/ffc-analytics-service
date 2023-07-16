import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { EventsService } from "./events.service";
import {
  ButtonClickDto,
  DemographicDataEventDto,
  GetChartsDataResponse,
  GetHeatmapDataDto,
  GetStatCardResponse,
  GetTablesDataResponse,
  HeatmapData,
  LeaveAppEventDto,
  MouseClickDto,
  PathnameChangeDto,
} from "./events.schema";
import { ZodValidationPipe } from "nestjs-zod";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  ButtonEvent,
  DemographicEvent,
  LeaveAppEvent,
  MouseClickEvent,
  PathnameChangeEvent,
} from "prisma/client";
import { AuthRequest, FirebaseGuard } from "src/auth/firebase.guard";

@Controller("events")
@ApiTags("Events")
@ApiBearerAuth()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post("mouse-click")
  @UseGuards(FirebaseGuard)
  async mouseClick(
    @Body(ZodValidationPipe) mouseClickDto: MouseClickDto,
    @Request() request: AuthRequest
  ): Promise<{ success: boolean }> {
    await this.eventsService.mouseClick(mouseClickDto, request.auth.appId);
    return { success: true };
  }

  @Post("button-click")
  @UseGuards(FirebaseGuard)
  async buttonClick(
    @Body(ZodValidationPipe) buttonClickDto: ButtonClickDto,
    @Request() request: AuthRequest
  ): Promise<{ success: boolean }> {
    await this.eventsService.buttonClick(buttonClickDto, request.auth.appId);
    return { success: true };
  }

  @Post("pathname-change")
  @UseGuards(FirebaseGuard)
  async pathnameChange(
    @Body(ZodValidationPipe) pathnameChangeDto: PathnameChangeDto,
    @Request() request: AuthRequest
  ): Promise<{ success: boolean }> {
    await this.eventsService.pathnameChange(
      pathnameChangeDto,
      request.auth.appId
    );
    return { success: true };
  }

  @Post("leave-app")
  @UseGuards(FirebaseGuard)
  async leaveApp(
    @Body(ZodValidationPipe) leaveAppDto: LeaveAppEventDto,
    @Request() request: AuthRequest
  ): Promise<{ success: boolean }> {
    await this.eventsService.leaveApp(leaveAppDto, request.auth.appId);
    return { success: true };
  }

  @Get("button-click")
  @UseGuards(FirebaseGuard)
  async getButtonClickEvents(
    @Request() request: AuthRequest
  ): Promise<ButtonEvent[]> {
    return await this.eventsService.getButtonEvents(request.auth.appId);
  }

  @Get("pathname-change")
  @UseGuards(FirebaseGuard)
  async getPathnameChangeEvents(
    @Request() request: AuthRequest
  ): Promise<PathnameChangeEvent[]> {
    return await this.eventsService.getPathnameChangeEvents(request.auth.appId);
  }

  @Get("mouse-click")
  @UseGuards(FirebaseGuard)
  async getMouseClickEvents(
    @Request() request: AuthRequest
  ): Promise<MouseClickEvent[]> {
    return await this.eventsService.getMouseClickEvents(request.auth.appId);
  }

  @Get("leave-app")
  @UseGuards(FirebaseGuard)
  async getLeaveAppEvents(
    @Request() request: AuthRequest
  ): Promise<LeaveAppEvent[]> {
    return await this.eventsService.getLeaveAppEvents(request.auth.appId);
  }

  @Post("heatmap-data")
  @UseGuards(FirebaseGuard)
  async getHeatmapData(
    @Body(ZodValidationPipe) getHeatmapData: GetHeatmapDataDto,
    @Request() request: AuthRequest
  ): Promise<HeatmapData[]> {
    return await this.eventsService.getHeatmapData(
      getHeatmapData,
      request.auth.appId
    );
  }

  @Post("demographic-data")
  @UseGuards(FirebaseGuard)
  async demographicData(
    @Body(ZodValidationPipe) demographicData: DemographicDataEventDto,
    @Request() request: AuthRequest
  ): Promise<{ success: boolean }> {
    return await this.eventsService.setDemographicData(
      demographicData,
      request.auth.appId
    );
  }

  @Get("demographic-data")
  @UseGuards(FirebaseGuard)
  async getDemographicData(
    @Request() request: AuthRequest
  ): Promise<DemographicEvent[]> {
    return await this.eventsService.getDemographicData(request.auth.appId);
  }

  @Get("cards-data")
  @UseGuards(FirebaseGuard)
  async getStatCards(
    @Request() request: AuthRequest
  ): Promise<GetStatCardResponse> {
    return await this.eventsService.getStatCards(request.auth.appId);
  }

  @Get("tables-data")
  @UseGuards(FirebaseGuard)
  async getTablesDatas(
    @Request() request: AuthRequest
  ): Promise<GetTablesDataResponse> {
    return await this.eventsService.getTablesDatas(request.auth.appId);
  }

  @Get("charts-data")
  @UseGuards(FirebaseGuard)
  async getChartsData(
    @Request() request: AuthRequest
  ): Promise<GetChartsDataResponse> {
    return await this.eventsService.getChartsData(request.auth.appId);
  }
}
