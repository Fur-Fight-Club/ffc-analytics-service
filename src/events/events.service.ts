import { Injectable } from "@nestjs/common";
import {
  ButtonClickDto,
  LeaveAppEventDto,
  MouseClickDto,
  PathnameChangeDto,
} from "./events.schema";
import { MongoService } from "src/services/mongo.service";
import {
  ButtonEvent,
  EventType,
  LeaveAppEvent,
  MouseClickEvent,
  PathnameChangeEvent,
} from "@prisma/client";

@Injectable()
export class EventsService {
  constructor(private readonly mongo: MongoService) {}
  async mouseClick(mouseClickDto: MouseClickDto): Promise<void> {
    await this.mongo.mouseClickEvent.create({
      data: {
        event: mouseClickDto.event as EventType,
        event_id: mouseClickDto.event_id,
        timestamp: mouseClickDto.timestamp,
        user: mouseClickDto.user,
        uuid: mouseClickDto.uuid,
        pathname: mouseClickDto.pathname,
        click: {
          create: {
            x: mouseClickDto.click.x,
            y: mouseClickDto.click.y,
          },
        },
        window: {
          create: {
            width: mouseClickDto.window.width,
            height: mouseClickDto.window.height,
          },
        },
        userAgent: {
          create: {
            browser: {
              create: {
                name: mouseClickDto.userAgent.browser.name,
                version: mouseClickDto.userAgent.browser.version,
              },
            },
            platform: mouseClickDto.userAgent.platform,
            language: mouseClickDto.userAgent.language,
            os: {
              create: {
                name: mouseClickDto.userAgent.os.name,
                version: mouseClickDto.userAgent.os.version,
              },
            },
          },
        },
      },
    });
  }

  async buttonClick(buttonClickDto: ButtonClickDto): Promise<void> {
    await this.mongo.buttonEvent.create({
      data: {
        event: buttonClickDto.event as EventType,
        event_id: buttonClickDto.event_id,
        timestamp: buttonClickDto.timestamp,
        user: buttonClickDto.user,
        uuid: buttonClickDto.uuid,
        pathname: buttonClickDto.pathname,
        buttonContent: buttonClickDto.buttonContent,
      },
    });
  }

  async pathnameChange(pathnameChangeDto: PathnameChangeDto): Promise<void> {
    await this.mongo.pathnameChangeEvent.create({
      data: {
        event: pathnameChangeDto.event as EventType,
        event_id: pathnameChangeDto.event_id,
        timestamp: pathnameChangeDto.timestamp,
        user: pathnameChangeDto.user,
        uuid: pathnameChangeDto.uuid,
        startTime: pathnameChangeDto.startTime,
        endTime: pathnameChangeDto.endTime,
        userAgent: {
          create: {
            browser: {
              create: {
                name: pathnameChangeDto.userAgent.browser.name,
                version: pathnameChangeDto.userAgent.browser.version,
              },
            },
            platform: pathnameChangeDto.userAgent.platform,
            language: pathnameChangeDto.userAgent.language,
            os: {
              create: {
                name: pathnameChangeDto.userAgent.os.name,
                version: pathnameChangeDto.userAgent.os.version,
              },
            },
          },
        },
      },
    });
  }

  async leaveApp(leaveAppDto: LeaveAppEventDto): Promise<void> {
    await this.mongo.leaveAppEvent.create({
      data: {
        event: leaveAppDto.event as EventType,
        event_id: leaveAppDto.event_id,
        timestamp: leaveAppDto.timestamp,
        user: leaveAppDto.user,
        uuid: leaveAppDto.uuid,
        visitedPages: leaveAppDto.visitedPages,
        userAgent: {
          create: {
            browser: {
              create: {
                name: leaveAppDto.userAgent.browser.name,
                version: leaveAppDto.userAgent.browser.version,
              },
            },
            platform: leaveAppDto.userAgent.platform,
            language: leaveAppDto.userAgent.language,
            os: {
              create: {
                name: leaveAppDto.userAgent.os.name,
                version: leaveAppDto.userAgent.os.version,
              },
            },
          },
        },
      },
    });
  }

  // Get MouseClickEvents
  async getMouseClickEvents(): Promise<MouseClickEvent[]> {
    return await this.mongo.mouseClickEvent.findMany({
      include: {
        userAgent: {
          include: {
            browser: true,
            os: true,
          },
        },
        click: true,
        window: true,
      },
    });
  }

  // Get ButtonEvents
  async getButtonEvents(): Promise<ButtonEvent[]> {
    return await this.mongo.buttonEvent.findMany();
  }

  // Get PathnameChangeEvents
  async getPathnameChangeEvents(): Promise<PathnameChangeEvent[]> {
    return await this.mongo.pathnameChangeEvent.findMany({
      include: {
        userAgent: {
          include: {
            browser: true,
            os: true,
          },
        },
      },
    });
  }

  // Get LeaveAppEvents
  async getLeaveAppEvents(): Promise<LeaveAppEvent[]> {
    return await this.mongo.leaveAppEvent.findMany({
      include: {
        userAgent: {
          include: {
            browser: true,
            os: true,
          },
        },
      },
    });
  }

  async resetAll() {
    const delete1 = this.mongo.mouseClickEvent.deleteMany();
    const delete2 = this.mongo.buttonEvent.deleteMany();
    const delete3 = this.mongo.pathnameChangeEvent.deleteMany();
    const delete4 = this.mongo.leaveAppEvent.deleteMany();
    const delete5 = this.mongo.click.deleteMany();
    const delete6 = this.mongo.browser.deleteMany();
    const delete7 = this.mongo.oS.deleteMany();
    const delete8 = this.mongo.window.deleteMany();
    const delete9 = this.mongo.userAgent.deleteMany();

    return await this.mongo.$transaction([
      delete5,
      delete6,
      delete7,
      delete8,
      delete9,
      delete1,
      delete2,
      delete3,
      delete4,
    ]);
  }
}
