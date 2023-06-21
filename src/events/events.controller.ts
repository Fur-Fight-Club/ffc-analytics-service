import { Body, Controller, Get, Post } from "@nestjs/common";
import { EventsService } from "./events.service";
import {
  ButtonClickDto,
  LeaveAppEventDto,
  MouseClickDto,
  PathnameChangeDto,
} from "./events.schema";
import { ZodValidationPipe } from "nestjs-zod";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  ButtonEvent,
  LeaveAppEvent,
  MouseClickEvent,
  PathnameChangeEvent,
} from "@prisma/client";

@Controller("events")
@ApiTags("Events")
@ApiBearerAuth()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post("mouse-click")
  async mouseClick(
    @Body(ZodValidationPipe) mouseClickDto: MouseClickDto
  ): Promise<void> {
    return await this.eventsService.mouseClick(mouseClickDto);
  }

  @Post("button-click")
  async buttonClick(
    @Body(ZodValidationPipe) buttonClickDto: ButtonClickDto
  ): Promise<void> {
    return await this.eventsService.buttonClick(buttonClickDto);
  }

  @Post("pathname-change")
  async pathnameChange(
    @Body(ZodValidationPipe) pathnameChangeDto: PathnameChangeDto
  ): Promise<void> {
    return await this.eventsService.pathnameChange(pathnameChangeDto);
  }

  @Post("leave-app")
  async leaveApp(
    @Body(ZodValidationPipe) leaveAppDto: LeaveAppEventDto
  ): Promise<void> {
    return await this.eventsService.leaveApp(leaveAppDto);
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
}
