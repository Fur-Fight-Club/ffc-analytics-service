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
}
