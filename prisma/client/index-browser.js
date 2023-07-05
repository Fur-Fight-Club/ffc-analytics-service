
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.1
 * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
 */
Prisma.prismaVersion = {
  client: "4.16.1",
  engine: "b20ead4d3ab9e78ac112966e242ded703f4a052c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.ButtonEventScalarFieldEnum = {
  id: 'id',
  event: 'event',
  event_id: 'event_id',
  timestamp: 'timestamp',
  user: 'user',
  uuid: 'uuid',
  pathname: 'pathname',
  buttonContent: 'buttonContent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MouseClickEventScalarFieldEnum = {
  id: 'id',
  event: 'event',
  event_id: 'event_id',
  timestamp: 'timestamp',
  user: 'user',
  uuid: 'uuid',
  pathname: 'pathname',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  clickId: 'clickId',
  windowId: 'windowId',
  userAgentId: 'userAgentId'
};

exports.Prisma.PathnameChangeEventScalarFieldEnum = {
  id: 'id',
  event: 'event',
  event_id: 'event_id',
  timestamp: 'timestamp',
  user: 'user',
  uuid: 'uuid',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userAgentId: 'userAgentId'
};

exports.Prisma.LeaveAppEventScalarFieldEnum = {
  id: 'id',
  event: 'event',
  event_id: 'event_id',
  timestamp: 'timestamp',
  user: 'user',
  uuid: 'uuid',
  visitedPages: 'visitedPages',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userAgentId: 'userAgentId'
};

exports.Prisma.DemographicEventScalarFieldEnum = {
  id: 'id',
  event: 'event',
  timestamp: 'timestamp',
  ip: 'ip',
  isp: 'isp',
  country: 'country',
  timezone: 'timezone',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.ClickScalarFieldEnum = {
  id: 'id',
  x: 'x',
  y: 'y'
};

exports.Prisma.WindowScalarFieldEnum = {
  id: 'id',
  width: 'width',
  height: 'height'
};

exports.Prisma.UserAgentScalarFieldEnum = {
  id: 'id',
  platform: 'platform',
  language: 'language',
  browserId: 'browserId',
  oSId: 'oSId'
};

exports.Prisma.BrowserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  version: 'version'
};

exports.Prisma.OSScalarFieldEnum = {
  id: 'id',
  name: 'name',
  version: 'version'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.EventType = {
  button_click: 'button_click',
  mouse_click: 'mouse_click',
  pathname_change: 'pathname_change',
  page_unload: 'page_unload',
  demographic: 'demographic',
  jest_test: 'jest_test'
};

exports.Prisma.ModelName = {
  ButtonEvent: 'ButtonEvent',
  MouseClickEvent: 'MouseClickEvent',
  PathnameChangeEvent: 'PathnameChangeEvent',
  LeaveAppEvent: 'LeaveAppEvent',
  DemographicEvent: 'DemographicEvent',
  Click: 'Click',
  Window: 'Window',
  UserAgent: 'UserAgent',
  Browser: 'Browser',
  OS: 'OS'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
