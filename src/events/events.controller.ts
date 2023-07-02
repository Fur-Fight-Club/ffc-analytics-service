import { Body, Controller, Get, Post } from "@nestjs/common";
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

@Controller("events")
@ApiTags("Events")
@ApiBearerAuth()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post("mouse-click")
  async mouseClick(
    @Body(ZodValidationPipe) mouseClickDto: MouseClickDto
  ): Promise<{ success: boolean }> {
    await this.eventsService.mouseClick(mouseClickDto);
    return { success: true };
  }

  @Post("button-click")
  async buttonClick(
    @Body(ZodValidationPipe) buttonClickDto: ButtonClickDto
  ): Promise<{ success: boolean }> {
    await this.eventsService.buttonClick(buttonClickDto);
    return { success: true };
  }

  @Post("pathname-change")
  async pathnameChange(
    @Body(ZodValidationPipe) pathnameChangeDto: PathnameChangeDto
  ): Promise<{ success: boolean }> {
    await this.eventsService.pathnameChange(pathnameChangeDto);
    return { success: true };
  }

  @Post("leave-app")
  async leaveApp(
    @Body(ZodValidationPipe) leaveAppDto: LeaveAppEventDto
  ): Promise<{ success: boolean }> {
    await this.eventsService.leaveApp(leaveAppDto);
    return { success: true };
  }

  @Get("button-click")
  async getButtonClickEvents(): Promise<ButtonEvent[]> {
    return await this.eventsService.getButtonEvents();
  }

  @Get("pathname-change")
  async getPathnameChangeEvents(): Promise<PathnameChangeEvent[]> {
    return await this.eventsService.getPathnameChangeEvents();
  }

  @Get("mouse-click")
  async getMouseClickEvents(): Promise<MouseClickEvent[]> {
    return await this.eventsService.getMouseClickEvents();
  }

  @Get("leave-app")
  async getLeaveAppEvents(): Promise<LeaveAppEvent[]> {
    return await this.eventsService.getLeaveAppEvents();
  }

  @Get("reset-all")
  async resetAll(): Promise<any> {
    return await this.eventsService.resetAll();
  }

  @Post("heatmap-data")
  async getHeatmapData(
    @Body(ZodValidationPipe) getHeatmapData: GetHeatmapDataDto
  ): Promise<HeatmapData[]> {
    return await this.eventsService.getHeatmapData(getHeatmapData);
  }

  @Post("demographic-data")
  async demographicData(
    @Body(ZodValidationPipe) demographicData: DemographicDataEventDto
  ): Promise<{ success: boolean }> {
    return await this.eventsService.setDemographicData(demographicData);
  }

  @Get("demographic-data")
  async getDemographicData(): Promise<DemographicEvent[]> {
    return await this.eventsService.getDemographicData();
  }

  @Get("cards-data")
  async getStatCards(): Promise<GetStatCardResponse> {
    return await this.eventsService.getStatCards();
  }

  @Get("tables-data")
  async getTablesDatas(): Promise<GetTablesDataResponse> {
    return await this.eventsService.getTablesDatas();
  }

  @Get("charts-data")
  async getChartsData(): Promise<GetChartsDataResponse> {
    return await this.eventsService.getChartsData();
  }
}
