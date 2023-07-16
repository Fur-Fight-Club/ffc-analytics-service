import { Injectable } from "@nestjs/common";
import {
  ButtonClickDto,
  DemographicDataEventDto,
  GetChartsDataResponse,
  GetHeatmapDataDto,
  GetStatCardResponse,
  GetTablesDataResponse,
  HeatmapData,
  IpApiResponse,
  LeaveAppEventDto,
  MouseClickDto,
  PathnameChangeDto,
} from "./events.schema";
import { MongoService } from "src/services/mongo.service";
import {
  ButtonEvent,
  DemographicEvent,
  EventType,
  LeaveAppEvent,
  MouseClickEvent,
  PathnameChangeEvent,
} from "../../prisma/client";
import fetch from "node-fetch";
import { analytics } from "src/utils/analytics.utils";
import { mapObjectToInterface } from "src/utils/functions.utils";

@Injectable()
export class EventsService {
  constructor(private readonly mongo: MongoService) {}
  async mouseClick(mouseClickDto: MouseClickDto, appId: string): Promise<void> {
    await this.mongo.mouseClickEvent.create({
      data: {
        appId,
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

  async buttonClick(
    buttonClickDto: ButtonClickDto,
    appId: string
  ): Promise<void> {
    await this.mongo.buttonEvent.create({
      data: {
        appId,
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

  async pathnameChange(
    pathnameChangeDto: PathnameChangeDto,
    appId: string
  ): Promise<void> {
    await this.mongo.pathnameChangeEvent.create({
      data: {
        appId,
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

  async leaveApp(leaveAppDto: LeaveAppEventDto, appId: string): Promise<void> {
    await this.mongo.leaveAppEvent.create({
      data: {
        appId,
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
  async getMouseClickEvents(appId: string): Promise<MouseClickEvent[]> {
    return await this.mongo.mouseClickEvent.findMany({
      where: {
        appId,
      },
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
  async getButtonEvents(appId: string): Promise<ButtonEvent[]> {
    return await this.mongo.buttonEvent.findMany({
      where: {
        appId,
      },
    });
  }

  // Get PathnameChangeEvents
  async getPathnameChangeEvents(appId: string): Promise<PathnameChangeEvent[]> {
    return await this.mongo.pathnameChangeEvent.findMany({
      where: {
        appId,
      },
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
  async getLeaveAppEvents(appId: string): Promise<LeaveAppEvent[]> {
    return await this.mongo.leaveAppEvent.findMany({
      where: {
        appId,
      },
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

  async getHeatmapData(
    getHeatmapData: GetHeatmapDataDto,
    appId: string
  ): Promise<HeatmapData[]> {
    const { count, route } = getHeatmapData;

    const mongoData = await this.mongo.mouseClickEvent.findMany({
      where: {
        pathname: route,
        appId,
      },
      take: count,
      orderBy: {
        timestamp: "asc",
      },
      select: {
        click: {
          select: {
            x: true,
            y: true,
          },
        },
        window: {
          select: {
            width: true,
            height: true,
          },
        },
      },
    });
    return mongoData;
  }

  async setDemographicData(
    setDemographicDataDto: DemographicDataEventDto,
    appId: string
  ): Promise<{ success: boolean }> {
    const { ip } = setDemographicDataDto;
    const result = await fetch(`http://ip-api.com/json/${ip}`);
    if (result.ok) {
      const data: IpApiResponse = await result.json();
      if (data.status === "success") {
        await this.mongo.demographicEvent.create({
          data: {
            appId,
            event: EventType.demographic,
            timestamp: Date.now(),
            ip: data.query,
            isp: data.isp,
            country: data.country,
            timezone: data.timezone,
            latitude: data.lat,
            longitude: data.lon,
          },
        });
        return { success: true };
      }
      return { success: false };
    }
    return { success: false };
  }

  async getDemographicData(appId: string): Promise<DemographicEvent[]> {
    return await this.mongo.demographicEvent.findMany({
      where: {
        appId,
      },
    });
  }

  async getStatCards(appId: string): Promise<GetStatCardResponse> {
    const leaveAppEvents = await this.mongo.leaveAppEvent.findMany({
      where: {
        appId,
      },
    });
    const pathnameChangeEvents =
      await this.mongo.pathnameChangeEvent.findMany();
    return {
      button: await this.mongo.buttonEvent.count(),
      mouse: await this.mongo.mouseClickEvent.count(),
      pathname: await this.mongo.pathnameChangeEvent.count(),
      closeApp: await this.mongo.leaveAppEvent.count(),
      uniqueVisitor: analytics.uniqueVisitor(
        mapObjectToInterface(leaveAppEvents)
      ),
      debounce: analytics.debounceRate(mapObjectToInterface(leaveAppEvents)),
      averagePageVisited: analytics.averagePageVisited(
        mapObjectToInterface(leaveAppEvents)
      ),
      averageTimeSpent: analytics.averageSessionTime(
        mapObjectToInterface(leaveAppEvents)
      ),
    };
  }

  async getTablesDatas(appId: string): Promise<GetTablesDataResponse> {
    const buttonEvents = await this.mongo.buttonEvent.findMany({
      where: {
        appId,
      },
    });
    const pathnameEvents = await this.mongo.pathnameChangeEvent.findMany({
      where: {
        appId,
      },
    });
    return {
      click: analytics.uniqueButtonClicked(buttonEvents ?? []),
      averageTime: analytics.averageTimeSpentOnEachPage(
        analytics.filter.pathname(mapObjectToInterface(pathnameEvents) ?? [])
      ),
    };
  }

  async getChartsData(appId: string): Promise<GetChartsDataResponse> {
    const leaveAppEvents = await this.getLeaveAppEvents(appId);
    const pathnameEvents = await this.getPathnameChangeEvents(appId);
    const clickEvents = await this.getMouseClickEvents(appId);
    const userAgents = analytics.aggregateUserAgents(
      mapObjectToInterface(leaveAppEvents) ?? [],
      mapObjectToInterface(pathnameEvents) ?? [],
      mapObjectToInterface(clickEvents) ?? []
    );
    const demographicData = await this.mongo.demographicEvent.findMany();
    return {
      lastVisitors: analytics.getLastVisitors(
        mapObjectToInterface(leaveAppEvents)
      ),
      averages: {
        timeSpent: {
          labels: analytics
            .averageTimeSpentOnEachPage(
              analytics.filter.pathname(
                mapObjectToInterface(pathnameEvents) ?? []
              )
            )
            .map((timeSpent) => timeSpent.page),
          data: analytics
            .averageTimeSpentOnEachPage(
              mapObjectToInterface(pathnameEvents) ?? []
            )
            .map((timeSpent) => timeSpent.averageTimeSpent),
        },
      },
      proportions: {
        platform: {
          labels: analytics.proportion
            .platform(mapObjectToInterface(userAgents) ?? [])
            .map((p) => `${p.platform} (${(p.proportion * 100).toFixed(0)}%)`),
          data: analytics.proportion
            .platform(mapObjectToInterface(userAgents) ?? [])
            .map((p) => p.count),
        },
        browser: {
          labels: analytics.proportion
            .browser(mapObjectToInterface(userAgents) ?? [])
            .map(
              (browser) =>
                ` ${browser.browser} (${(browser.proportion * 100).toFixed(
                  0
                )}%)`
            ),
          data: analytics.proportion
            .browser(mapObjectToInterface(userAgents) ?? [])
            .map((browser) => browser.count),
        },
        lang: {
          labels: analytics.proportion
            .language(mapObjectToInterface(userAgents) ?? [])
            .map(
              (lang) =>
                `${lang.language} (${(lang.proportion * 100).toFixed(0)}%)`
            ),
          data: analytics.proportion
            .language(mapObjectToInterface(userAgents) ?? [])
            .map((lang) => lang.count),
        },
        country: {
          labels: analytics.proportion
            .countries(mapObjectToInterface(demographicData) ?? [])
            .map(
              (dd) => ` ${dd.country} (${(dd.proportion * 100).toFixed(0)}%)`
            ),
          data: analytics.proportion
            .countries(mapObjectToInterface(demographicData) ?? [])
            .map((browser) => browser.count),
        },
        provider: {
          labels: analytics.proportion
            .isps(mapObjectToInterface(demographicData) ?? [])
            .map((dd) => ` ${dd.isp} (${(dd.proportion * 100).toFixed(0)}%)`),
          data: analytics.proportion
            .isps(mapObjectToInterface(demographicData) ?? [])
            .map((browser) => browser.count),
        },
      },
    };
  }
}
