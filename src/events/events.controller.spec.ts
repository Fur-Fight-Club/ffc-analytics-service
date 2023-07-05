import { Test, TestingModule } from "@nestjs/testing";
import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";
import { uuid } from "uuidv4";
import { MongoService } from "src/services/mongo.service";

const userAgent = {
  browser: {
    name: "MyBrowser",
    version: "1.0.0.0",
  },
  os: {
    name: "Node",
    version: "18",
  },
  platform: "darwin",
  language: "fr-FR",
};

describe("EventController", () => {
  let eventsController: EventsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [EventsService, MongoService],
    }).compile();

    eventsController = app.get<EventsController>(EventsController);
  });

  describe("MouseClick event", () => {
    const timestamp = Date.now();
    const uuidv4 = uuid();
    it("should create a mouse click event", async () => {
      expect(
        await eventsController.mouseClick({
          event: "jest_test",

          event_id: `jest-test-${timestamp}`,
          timestamp: timestamp,
          user: -1,
          uuid: uuidv4,
          pathname: "/jest-test",
          click: {
            x: 0,
            y: 0,
          },
          window: {
            width: 0,
            height: 0,
          },
          userAgent,
        })
      ).toStrictEqual({ success: true });
    });
  });

  describe("Buttonclick event", () => {
    const timestamp = Date.now();
    const uuidv4 = uuid();
    it("should create a button click event", async () => {
      expect(
        await eventsController.buttonClick({
          event: "jest_test",
          event_id: `jest-test-${timestamp}`,
          timestamp,
          user: -1,
          uuid: uuidv4,
          pathname: "/jest-test",
          buttonContent: "jest-test",
        })
      ).toStrictEqual({ success: true });
    });
  });

  describe("PathnameChange event", () => {
    const timestamp = Date.now();
    const uuidv4 = uuid();
    it("should create a pathname change event", async () => {
      expect(
        await eventsController.pathnameChange({
          event: "jest_test",
          event_id: `jest-test-${timestamp}`,
          timestamp,
          user: -1,
          uuid: uuidv4,
          endTime: timestamp,
          startTime: timestamp,
          userAgent,
        })
      ).toStrictEqual({ success: true });
    });
  });

  describe("LeaveApp event", () => {
    const timestamp = Date.now();
    const uuidv4 = uuid();
    it("should create a leave app event", async () => {
      expect(
        await eventsController.leaveApp({
          event: "jest_test",
          event_id: `jest-test-${timestamp}`,
          timestamp,
          user: -1,
          uuid: uuidv4,
          userAgent,
          visitedPages: [
            {
              page: "/jest-test",
              timestamp,
            },
          ],
        })
      ).toStrictEqual({ success: true });
    });
  });

  describe("DemographicData event", () => {
    const timestamp = Date.now();
    const uuidv4 = uuid();

    it("should create a demographic data event", async () => {
      expect(
        await eventsController.demographicData({ ip: "34.140.90.116" })
      ).toStrictEqual({ success: true });
    });
  });
});
