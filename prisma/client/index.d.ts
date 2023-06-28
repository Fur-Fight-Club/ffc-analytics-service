
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type ButtonEventPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    buttonContent: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["buttonEvent"]>
  composites: {}
}

/**
 * Model ButtonEvent
 * 
 */
export type ButtonEvent = runtime.Types.DefaultSelection<ButtonEventPayload>
export type MouseClickEventPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    click: ClickPayload<ExtArgs>
    window: WindowPayload<ExtArgs>
    userAgent: UserAgentPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt: Date
    updatedAt: Date
    clickId: string
    windowId: string
    userAgentId: string
  }, ExtArgs["result"]["mouseClickEvent"]>
  composites: {}
}

/**
 * Model MouseClickEvent
 * 
 */
export type MouseClickEvent = runtime.Types.DefaultSelection<MouseClickEventPayload>
export type PathnameChangeEventPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    userAgent: UserAgentPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt: Date
    updatedAt: Date
    userAgentId: string
  }, ExtArgs["result"]["pathnameChangeEvent"]>
  composites: {}
}

/**
 * Model PathnameChangeEvent
 * 
 */
export type PathnameChangeEvent = runtime.Types.DefaultSelection<PathnameChangeEventPayload>
export type LeaveAppEventPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    userAgent: UserAgentPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: Prisma.JsonValue
    createdAt: Date
    updatedAt: Date
    userAgentId: string
  }, ExtArgs["result"]["leaveAppEvent"]>
  composites: {}
}

/**
 * Model LeaveAppEvent
 * 
 */
export type LeaveAppEvent = runtime.Types.DefaultSelection<LeaveAppEventPayload>
export type ClickPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    MouseClickEvent: MouseClickEventPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    x: number
    y: number
  }, ExtArgs["result"]["click"]>
  composites: {}
}

/**
 * Model Click
 * 
 */
export type Click = runtime.Types.DefaultSelection<ClickPayload>
export type WindowPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    MouseClickEvent: MouseClickEventPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    width: number
    height: number
  }, ExtArgs["result"]["window"]>
  composites: {}
}

/**
 * Model Window
 * 
 */
export type Window = runtime.Types.DefaultSelection<WindowPayload>
export type UserAgentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    browser: BrowserPayload<ExtArgs>
    os: OSPayload<ExtArgs>
    MouseClickEvent: MouseClickEventPayload<ExtArgs>[]
    PathnameChangeEvent: PathnameChangeEventPayload<ExtArgs>[]
    LeaveAppEvent: LeaveAppEventPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    platform: string
    language: string
    browserId: string
    oSId: string
  }, ExtArgs["result"]["userAgent"]>
  composites: {}
}

/**
 * Model UserAgent
 * 
 */
export type UserAgent = runtime.Types.DefaultSelection<UserAgentPayload>
export type BrowserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    UserAgent: UserAgentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string | null
    version: string | null
  }, ExtArgs["result"]["browser"]>
  composites: {}
}

/**
 * Model Browser
 * 
 */
export type Browser = runtime.Types.DefaultSelection<BrowserPayload>
export type OSPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    UserAgent: UserAgentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string | null
    version: string | null
  }, ExtArgs["result"]["oS"]>
  composites: {}
}

/**
 * Model OS
 * 
 */
export type OS = runtime.Types.DefaultSelection<OSPayload>

/**
 * Enums
 */

export const EventType: {
  button_click: 'button_click',
  mouse_click: 'mouse_click',
  pathname_change: 'pathname_change',
  page_unload: 'page_unload'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ButtonEvents
 * const buttonEvents = await prisma.buttonEvent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ButtonEvents
   * const buttonEvents = await prisma.buttonEvent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.buttonEvent`: Exposes CRUD operations for the **ButtonEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ButtonEvents
    * const buttonEvents = await prisma.buttonEvent.findMany()
    * ```
    */
  get buttonEvent(): Prisma.ButtonEventDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.mouseClickEvent`: Exposes CRUD operations for the **MouseClickEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MouseClickEvents
    * const mouseClickEvents = await prisma.mouseClickEvent.findMany()
    * ```
    */
  get mouseClickEvent(): Prisma.MouseClickEventDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pathnameChangeEvent`: Exposes CRUD operations for the **PathnameChangeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PathnameChangeEvents
    * const pathnameChangeEvents = await prisma.pathnameChangeEvent.findMany()
    * ```
    */
  get pathnameChangeEvent(): Prisma.PathnameChangeEventDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.leaveAppEvent`: Exposes CRUD operations for the **LeaveAppEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveAppEvents
    * const leaveAppEvents = await prisma.leaveAppEvent.findMany()
    * ```
    */
  get leaveAppEvent(): Prisma.LeaveAppEventDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.click`: Exposes CRUD operations for the **Click** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clicks
    * const clicks = await prisma.click.findMany()
    * ```
    */
  get click(): Prisma.ClickDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.window`: Exposes CRUD operations for the **Window** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Windows
    * const windows = await prisma.window.findMany()
    * ```
    */
  get window(): Prisma.WindowDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.userAgent`: Exposes CRUD operations for the **UserAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAgents
    * const userAgents = await prisma.userAgent.findMany()
    * ```
    */
  get userAgent(): Prisma.UserAgentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.browser`: Exposes CRUD operations for the **Browser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Browsers
    * const browsers = await prisma.browser.findMany()
    * ```
    */
  get browser(): Prisma.BrowserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.oS`: Exposes CRUD operations for the **OS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OS
    * const oS = await prisma.oS.findMany()
    * ```
    */
  get oS(): Prisma.OSDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.0
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ButtonEvent: 'ButtonEvent',
    MouseClickEvent: 'MouseClickEvent',
    PathnameChangeEvent: 'PathnameChangeEvent',
    LeaveAppEvent: 'LeaveAppEvent',
    Click: 'Click',
    Window: 'Window',
    UserAgent: 'UserAgent',
    Browser: 'Browser',
    OS: 'OS'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
      meta: {
        modelProps: 'buttonEvent' | 'mouseClickEvent' | 'pathnameChangeEvent' | 'leaveAppEvent' | 'click' | 'window' | 'userAgent' | 'browser' | 'oS'
        txIsolationLevel: never
      },
      model: {
      ButtonEvent: {
        findUnique: {
          args: Prisma.ButtonEventFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.ButtonEventFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.ButtonEventFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.ButtonEventFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.ButtonEventFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        create: {
          args: Prisma.ButtonEventCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.ButtonEventCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        delete: {
          args: Prisma.ButtonEventDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        update: {
          args: Prisma.ButtonEventUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.ButtonEventDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.ButtonEventUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.ButtonEventUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ButtonEventAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ButtonEventGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.ButtonEventFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.ButtonEventAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
        count: {
          args: Prisma.ButtonEventCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<ButtonEvent>
          payload: ButtonEventPayload<ExtArgs>
        }
      }
      MouseClickEvent: {
        findUnique: {
          args: Prisma.MouseClickEventFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.MouseClickEventFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.MouseClickEventFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.MouseClickEventFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.MouseClickEventFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        create: {
          args: Prisma.MouseClickEventCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.MouseClickEventCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        delete: {
          args: Prisma.MouseClickEventDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        update: {
          args: Prisma.MouseClickEventUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.MouseClickEventDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.MouseClickEventUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.MouseClickEventUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.MouseClickEventAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.MouseClickEventGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.MouseClickEventFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.MouseClickEventAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
        count: {
          args: Prisma.MouseClickEventCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<MouseClickEvent>
          payload: MouseClickEventPayload<ExtArgs>
        }
      }
      PathnameChangeEvent: {
        findUnique: {
          args: Prisma.PathnameChangeEventFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.PathnameChangeEventFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.PathnameChangeEventFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.PathnameChangeEventFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.PathnameChangeEventFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        create: {
          args: Prisma.PathnameChangeEventCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.PathnameChangeEventCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        delete: {
          args: Prisma.PathnameChangeEventDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        update: {
          args: Prisma.PathnameChangeEventUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.PathnameChangeEventDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.PathnameChangeEventUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.PathnameChangeEventUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.PathnameChangeEventAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.PathnameChangeEventGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.PathnameChangeEventFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.PathnameChangeEventAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
        count: {
          args: Prisma.PathnameChangeEventCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<PathnameChangeEvent>
          payload: PathnameChangeEventPayload<ExtArgs>
        }
      }
      LeaveAppEvent: {
        findUnique: {
          args: Prisma.LeaveAppEventFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.LeaveAppEventFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.LeaveAppEventFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.LeaveAppEventFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.LeaveAppEventFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        create: {
          args: Prisma.LeaveAppEventCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.LeaveAppEventCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        delete: {
          args: Prisma.LeaveAppEventDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        update: {
          args: Prisma.LeaveAppEventUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.LeaveAppEventDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.LeaveAppEventUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.LeaveAppEventUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.LeaveAppEventAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.LeaveAppEventGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.LeaveAppEventFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.LeaveAppEventAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
        count: {
          args: Prisma.LeaveAppEventCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<LeaveAppEvent>
          payload: LeaveAppEventPayload<ExtArgs>
        }
      }
      Click: {
        findUnique: {
          args: Prisma.ClickFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.ClickFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.ClickFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.ClickFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.ClickFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        create: {
          args: Prisma.ClickCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.ClickCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        delete: {
          args: Prisma.ClickDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        update: {
          args: Prisma.ClickUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.ClickDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.ClickUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.ClickUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ClickAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ClickGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.ClickFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.ClickAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
        count: {
          args: Prisma.ClickCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Click>
          payload: ClickPayload<ExtArgs>
        }
      }
      Window: {
        findUnique: {
          args: Prisma.WindowFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.WindowFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.WindowFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.WindowFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.WindowFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        create: {
          args: Prisma.WindowCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.WindowCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        delete: {
          args: Prisma.WindowDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        update: {
          args: Prisma.WindowUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.WindowDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.WindowUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.WindowUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.WindowAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.WindowGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.WindowFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.WindowAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
        count: {
          args: Prisma.WindowCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Window>
          payload: WindowPayload<ExtArgs>
        }
      }
      UserAgent: {
        findUnique: {
          args: Prisma.UserAgentFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.UserAgentFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.UserAgentFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.UserAgentFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.UserAgentFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        create: {
          args: Prisma.UserAgentCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.UserAgentCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        delete: {
          args: Prisma.UserAgentDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        update: {
          args: Prisma.UserAgentUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.UserAgentDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.UserAgentUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.UserAgentUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.UserAgentAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.UserAgentGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.UserAgentFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.UserAgentAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
        count: {
          args: Prisma.UserAgentCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<UserAgent>
          payload: UserAgentPayload<ExtArgs>
        }
      }
      Browser: {
        findUnique: {
          args: Prisma.BrowserFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.BrowserFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.BrowserFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.BrowserFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.BrowserFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        create: {
          args: Prisma.BrowserCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.BrowserCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        delete: {
          args: Prisma.BrowserDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        update: {
          args: Prisma.BrowserUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.BrowserDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.BrowserUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.BrowserUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.BrowserAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.BrowserGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.BrowserFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.BrowserAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
        count: {
          args: Prisma.BrowserCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<Browser>
          payload: BrowserPayload<ExtArgs>
        }
      }
      OS: {
        findUnique: {
          args: Prisma.OSFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.OSFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.OSFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.OSFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.OSFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        create: {
          args: Prisma.OSCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.OSCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        delete: {
          args: Prisma.OSDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        update: {
          args: Prisma.OSUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.OSDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.OSUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.OSUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.OSAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.OSGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        findRaw: {
          args: Prisma.OSFindRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        aggregateRaw: {
          args: Prisma.OSAggregateRawArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
        count: {
          args: Prisma.OSCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<OS>
          payload: OSPayload<ExtArgs>
        }
      }
    }
  } & {
    other: {
      $runCommandRaw: {
        args: Prisma.InputJsonObject,
        result: Prisma.JsonObject
        payload: any
      }
    }
  }
    export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClickCountOutputType
   */


  export type ClickCountOutputType = {
    MouseClickEvent: number
  }

  export type ClickCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    MouseClickEvent?: boolean | ClickCountOutputTypeCountMouseClickEventArgs
  }

  // Custom InputTypes

  /**
   * ClickCountOutputType without action
   */
  export type ClickCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickCountOutputType
     */
    select?: ClickCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClickCountOutputType without action
   */
  export type ClickCountOutputTypeCountMouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MouseClickEventWhereInput
  }



  /**
   * Count Type WindowCountOutputType
   */


  export type WindowCountOutputType = {
    MouseClickEvent: number
  }

  export type WindowCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    MouseClickEvent?: boolean | WindowCountOutputTypeCountMouseClickEventArgs
  }

  // Custom InputTypes

  /**
   * WindowCountOutputType without action
   */
  export type WindowCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WindowCountOutputType
     */
    select?: WindowCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WindowCountOutputType without action
   */
  export type WindowCountOutputTypeCountMouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MouseClickEventWhereInput
  }



  /**
   * Count Type UserAgentCountOutputType
   */


  export type UserAgentCountOutputType = {
    MouseClickEvent: number
    PathnameChangeEvent: number
    LeaveAppEvent: number
  }

  export type UserAgentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    MouseClickEvent?: boolean | UserAgentCountOutputTypeCountMouseClickEventArgs
    PathnameChangeEvent?: boolean | UserAgentCountOutputTypeCountPathnameChangeEventArgs
    LeaveAppEvent?: boolean | UserAgentCountOutputTypeCountLeaveAppEventArgs
  }

  // Custom InputTypes

  /**
   * UserAgentCountOutputType without action
   */
  export type UserAgentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgentCountOutputType
     */
    select?: UserAgentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserAgentCountOutputType without action
   */
  export type UserAgentCountOutputTypeCountMouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MouseClickEventWhereInput
  }


  /**
   * UserAgentCountOutputType without action
   */
  export type UserAgentCountOutputTypeCountPathnameChangeEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PathnameChangeEventWhereInput
  }


  /**
   * UserAgentCountOutputType without action
   */
  export type UserAgentCountOutputTypeCountLeaveAppEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LeaveAppEventWhereInput
  }



  /**
   * Count Type BrowserCountOutputType
   */


  export type BrowserCountOutputType = {
    UserAgent: number
  }

  export type BrowserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserAgent?: boolean | BrowserCountOutputTypeCountUserAgentArgs
  }

  // Custom InputTypes

  /**
   * BrowserCountOutputType without action
   */
  export type BrowserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserCountOutputType
     */
    select?: BrowserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrowserCountOutputType without action
   */
  export type BrowserCountOutputTypeCountUserAgentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAgentWhereInput
  }



  /**
   * Count Type OSCountOutputType
   */


  export type OSCountOutputType = {
    UserAgent: number
  }

  export type OSCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserAgent?: boolean | OSCountOutputTypeCountUserAgentArgs
  }

  // Custom InputTypes

  /**
   * OSCountOutputType without action
   */
  export type OSCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSCountOutputType
     */
    select?: OSCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OSCountOutputType without action
   */
  export type OSCountOutputTypeCountUserAgentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAgentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model ButtonEvent
   */


  export type AggregateButtonEvent = {
    _count: ButtonEventCountAggregateOutputType | null
    _avg: ButtonEventAvgAggregateOutputType | null
    _sum: ButtonEventSumAggregateOutputType | null
    _min: ButtonEventMinAggregateOutputType | null
    _max: ButtonEventMaxAggregateOutputType | null
  }

  export type ButtonEventAvgAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type ButtonEventSumAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type ButtonEventMinAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    pathname: string | null
    buttonContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ButtonEventMaxAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    pathname: string | null
    buttonContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ButtonEventCountAggregateOutputType = {
    id: number
    event: number
    event_id: number
    timestamp: number
    user: number
    uuid: number
    pathname: number
    buttonContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ButtonEventAvgAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type ButtonEventSumAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type ButtonEventMinAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    buttonContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ButtonEventMaxAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    buttonContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ButtonEventCountAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    buttonContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ButtonEventAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonEvent to aggregate.
     */
    where?: ButtonEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonEvents to fetch.
     */
    orderBy?: Enumerable<ButtonEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ButtonEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ButtonEvents
    **/
    _count?: true | ButtonEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ButtonEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ButtonEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ButtonEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ButtonEventMaxAggregateInputType
  }

  export type GetButtonEventAggregateType<T extends ButtonEventAggregateArgs> = {
        [P in keyof T & keyof AggregateButtonEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateButtonEvent[P]>
      : GetScalarType<T[P], AggregateButtonEvent[P]>
  }




  export type ButtonEventGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ButtonEventWhereInput
    orderBy?: Enumerable<ButtonEventOrderByWithAggregationInput>
    by: ButtonEventScalarFieldEnum[]
    having?: ButtonEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ButtonEventCountAggregateInputType | true
    _avg?: ButtonEventAvgAggregateInputType
    _sum?: ButtonEventSumAggregateInputType
    _min?: ButtonEventMinAggregateInputType
    _max?: ButtonEventMaxAggregateInputType
  }


  export type ButtonEventGroupByOutputType = {
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    buttonContent: string
    createdAt: Date
    updatedAt: Date
    _count: ButtonEventCountAggregateOutputType | null
    _avg: ButtonEventAvgAggregateOutputType | null
    _sum: ButtonEventSumAggregateOutputType | null
    _min: ButtonEventMinAggregateOutputType | null
    _max: ButtonEventMaxAggregateOutputType | null
  }

  type GetButtonEventGroupByPayload<T extends ButtonEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ButtonEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ButtonEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ButtonEventGroupByOutputType[P]>
            : GetScalarType<T[P], ButtonEventGroupByOutputType[P]>
        }
      >
    >


  export type ButtonEventSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    pathname?: boolean
    buttonContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["buttonEvent"]>

  export type ButtonEventSelectScalar = {
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    pathname?: boolean
    buttonContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  type ButtonEventGetPayload<S extends boolean | null | undefined | ButtonEventArgs> = $Types.GetResult<ButtonEventPayload, S>

  type ButtonEventCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ButtonEventFindManyArgs, 'select' | 'include'> & {
      select?: ButtonEventCountAggregateInputType | true
    }

  export interface ButtonEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ButtonEvent'], meta: { name: 'ButtonEvent' } }
    /**
     * Find zero or one ButtonEvent that matches the filter.
     * @param {ButtonEventFindUniqueArgs} args - Arguments to find a ButtonEvent
     * @example
     * // Get one ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ButtonEventFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ButtonEventFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ButtonEvent'> extends True ? Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ButtonEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ButtonEventFindUniqueOrThrowArgs} args - Arguments to find a ButtonEvent
     * @example
     * // Get one ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ButtonEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ButtonEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ButtonEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventFindFirstArgs} args - Arguments to find a ButtonEvent
     * @example
     * // Get one ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ButtonEventFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ButtonEventFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ButtonEvent'> extends True ? Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ButtonEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventFindFirstOrThrowArgs} args - Arguments to find a ButtonEvent
     * @example
     * // Get one ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ButtonEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ButtonEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ButtonEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ButtonEvents
     * const buttonEvents = await prisma.buttonEvent.findMany()
     * 
     * // Get first 10 ButtonEvents
     * const buttonEvents = await prisma.buttonEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buttonEventWithIdOnly = await prisma.buttonEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ButtonEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ButtonEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ButtonEvent.
     * @param {ButtonEventCreateArgs} args - Arguments to create a ButtonEvent.
     * @example
     * // Create one ButtonEvent
     * const ButtonEvent = await prisma.buttonEvent.create({
     *   data: {
     *     // ... data to create a ButtonEvent
     *   }
     * })
     * 
    **/
    create<T extends ButtonEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ButtonEventCreateArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ButtonEvents.
     *     @param {ButtonEventCreateManyArgs} args - Arguments to create many ButtonEvents.
     *     @example
     *     // Create many ButtonEvents
     *     const buttonEvent = await prisma.buttonEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ButtonEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ButtonEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ButtonEvent.
     * @param {ButtonEventDeleteArgs} args - Arguments to delete one ButtonEvent.
     * @example
     * // Delete one ButtonEvent
     * const ButtonEvent = await prisma.buttonEvent.delete({
     *   where: {
     *     // ... filter to delete one ButtonEvent
     *   }
     * })
     * 
    **/
    delete<T extends ButtonEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ButtonEventDeleteArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ButtonEvent.
     * @param {ButtonEventUpdateArgs} args - Arguments to update one ButtonEvent.
     * @example
     * // Update one ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ButtonEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ButtonEventUpdateArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ButtonEvents.
     * @param {ButtonEventDeleteManyArgs} args - Arguments to filter ButtonEvents to delete.
     * @example
     * // Delete a few ButtonEvents
     * const { count } = await prisma.buttonEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ButtonEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ButtonEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ButtonEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ButtonEvents
     * const buttonEvent = await prisma.buttonEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ButtonEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ButtonEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ButtonEvent.
     * @param {ButtonEventUpsertArgs} args - Arguments to update or create a ButtonEvent.
     * @example
     * // Update or create a ButtonEvent
     * const buttonEvent = await prisma.buttonEvent.upsert({
     *   create: {
     *     // ... data to create a ButtonEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ButtonEvent we want to update
     *   }
     * })
    **/
    upsert<T extends ButtonEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ButtonEventUpsertArgs<ExtArgs>>
    ): Prisma__ButtonEventClient<$Types.GetResult<ButtonEventPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more ButtonEvents that matches the filter.
     * @param {ButtonEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const buttonEvent = await prisma.buttonEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ButtonEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ButtonEvent.
     * @param {ButtonEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const buttonEvent = await prisma.buttonEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ButtonEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ButtonEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventCountArgs} args - Arguments to filter ButtonEvents to count.
     * @example
     * // Count the number of ButtonEvents
     * const count = await prisma.buttonEvent.count({
     *   where: {
     *     // ... the filter for the ButtonEvents we want to count
     *   }
     * })
    **/
    count<T extends ButtonEventCountArgs>(
      args?: Subset<T, ButtonEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ButtonEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ButtonEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ButtonEventAggregateArgs>(args: Subset<T, ButtonEventAggregateArgs>): Prisma.PrismaPromise<GetButtonEventAggregateType<T>>

    /**
     * Group by ButtonEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ButtonEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ButtonEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ButtonEventGroupByArgs['orderBy'] }
        : { orderBy?: ButtonEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ButtonEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetButtonEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ButtonEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ButtonEventClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ButtonEvent base type for findUnique actions
   */
  export type ButtonEventFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter, which ButtonEvent to fetch.
     */
    where: ButtonEventWhereUniqueInput
  }

  /**
   * ButtonEvent findUnique
   */
  export interface ButtonEventFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ButtonEventFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ButtonEvent findUniqueOrThrow
   */
  export type ButtonEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter, which ButtonEvent to fetch.
     */
    where: ButtonEventWhereUniqueInput
  }


  /**
   * ButtonEvent base type for findFirst actions
   */
  export type ButtonEventFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter, which ButtonEvent to fetch.
     */
    where?: ButtonEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonEvents to fetch.
     */
    orderBy?: Enumerable<ButtonEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonEvents.
     */
    cursor?: ButtonEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonEvents.
     */
    distinct?: Enumerable<ButtonEventScalarFieldEnum>
  }

  /**
   * ButtonEvent findFirst
   */
  export interface ButtonEventFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ButtonEventFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ButtonEvent findFirstOrThrow
   */
  export type ButtonEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter, which ButtonEvent to fetch.
     */
    where?: ButtonEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonEvents to fetch.
     */
    orderBy?: Enumerable<ButtonEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ButtonEvents.
     */
    cursor?: ButtonEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ButtonEvents.
     */
    distinct?: Enumerable<ButtonEventScalarFieldEnum>
  }


  /**
   * ButtonEvent findMany
   */
  export type ButtonEventFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter, which ButtonEvents to fetch.
     */
    where?: ButtonEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ButtonEvents to fetch.
     */
    orderBy?: Enumerable<ButtonEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ButtonEvents.
     */
    cursor?: ButtonEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ButtonEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ButtonEvents.
     */
    skip?: number
    distinct?: Enumerable<ButtonEventScalarFieldEnum>
  }


  /**
   * ButtonEvent create
   */
  export type ButtonEventCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * The data needed to create a ButtonEvent.
     */
    data: XOR<ButtonEventCreateInput, ButtonEventUncheckedCreateInput>
  }


  /**
   * ButtonEvent createMany
   */
  export type ButtonEventCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ButtonEvents.
     */
    data: Enumerable<ButtonEventCreateManyInput>
  }


  /**
   * ButtonEvent update
   */
  export type ButtonEventUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * The data needed to update a ButtonEvent.
     */
    data: XOR<ButtonEventUpdateInput, ButtonEventUncheckedUpdateInput>
    /**
     * Choose, which ButtonEvent to update.
     */
    where: ButtonEventWhereUniqueInput
  }


  /**
   * ButtonEvent updateMany
   */
  export type ButtonEventUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ButtonEvents.
     */
    data: XOR<ButtonEventUpdateManyMutationInput, ButtonEventUncheckedUpdateManyInput>
    /**
     * Filter which ButtonEvents to update
     */
    where?: ButtonEventWhereInput
  }


  /**
   * ButtonEvent upsert
   */
  export type ButtonEventUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * The filter to search for the ButtonEvent to update in case it exists.
     */
    where: ButtonEventWhereUniqueInput
    /**
     * In case the ButtonEvent found by the `where` argument doesn't exist, create a new ButtonEvent with this data.
     */
    create: XOR<ButtonEventCreateInput, ButtonEventUncheckedCreateInput>
    /**
     * In case the ButtonEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ButtonEventUpdateInput, ButtonEventUncheckedUpdateInput>
  }


  /**
   * ButtonEvent delete
   */
  export type ButtonEventDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
    /**
     * Filter which ButtonEvent to delete.
     */
    where: ButtonEventWhereUniqueInput
  }


  /**
   * ButtonEvent deleteMany
   */
  export type ButtonEventDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ButtonEvents to delete
     */
    where?: ButtonEventWhereInput
  }


  /**
   * ButtonEvent findRaw
   */
  export type ButtonEventFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ButtonEvent aggregateRaw
   */
  export type ButtonEventAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ButtonEvent without action
   */
  export type ButtonEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ButtonEvent
     */
    select?: ButtonEventSelect<ExtArgs> | null
  }



  /**
   * Model MouseClickEvent
   */


  export type AggregateMouseClickEvent = {
    _count: MouseClickEventCountAggregateOutputType | null
    _avg: MouseClickEventAvgAggregateOutputType | null
    _sum: MouseClickEventSumAggregateOutputType | null
    _min: MouseClickEventMinAggregateOutputType | null
    _max: MouseClickEventMaxAggregateOutputType | null
  }

  export type MouseClickEventAvgAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type MouseClickEventSumAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type MouseClickEventMinAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    pathname: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clickId: string | null
    windowId: string | null
    userAgentId: string | null
  }

  export type MouseClickEventMaxAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    pathname: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clickId: string | null
    windowId: string | null
    userAgentId: string | null
  }

  export type MouseClickEventCountAggregateOutputType = {
    id: number
    event: number
    event_id: number
    timestamp: number
    user: number
    uuid: number
    pathname: number
    createdAt: number
    updatedAt: number
    clickId: number
    windowId: number
    userAgentId: number
    _all: number
  }


  export type MouseClickEventAvgAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type MouseClickEventSumAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type MouseClickEventMinAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    createdAt?: true
    updatedAt?: true
    clickId?: true
    windowId?: true
    userAgentId?: true
  }

  export type MouseClickEventMaxAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    createdAt?: true
    updatedAt?: true
    clickId?: true
    windowId?: true
    userAgentId?: true
  }

  export type MouseClickEventCountAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    pathname?: true
    createdAt?: true
    updatedAt?: true
    clickId?: true
    windowId?: true
    userAgentId?: true
    _all?: true
  }

  export type MouseClickEventAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouseClickEvent to aggregate.
     */
    where?: MouseClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouseClickEvents to fetch.
     */
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MouseClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouseClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouseClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MouseClickEvents
    **/
    _count?: true | MouseClickEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MouseClickEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MouseClickEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MouseClickEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MouseClickEventMaxAggregateInputType
  }

  export type GetMouseClickEventAggregateType<T extends MouseClickEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMouseClickEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMouseClickEvent[P]>
      : GetScalarType<T[P], AggregateMouseClickEvent[P]>
  }




  export type MouseClickEventGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MouseClickEventWhereInput
    orderBy?: Enumerable<MouseClickEventOrderByWithAggregationInput>
    by: MouseClickEventScalarFieldEnum[]
    having?: MouseClickEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MouseClickEventCountAggregateInputType | true
    _avg?: MouseClickEventAvgAggregateInputType
    _sum?: MouseClickEventSumAggregateInputType
    _min?: MouseClickEventMinAggregateInputType
    _max?: MouseClickEventMaxAggregateInputType
  }


  export type MouseClickEventGroupByOutputType = {
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt: Date
    updatedAt: Date
    clickId: string
    windowId: string
    userAgentId: string
    _count: MouseClickEventCountAggregateOutputType | null
    _avg: MouseClickEventAvgAggregateOutputType | null
    _sum: MouseClickEventSumAggregateOutputType | null
    _min: MouseClickEventMinAggregateOutputType | null
    _max: MouseClickEventMaxAggregateOutputType | null
  }

  type GetMouseClickEventGroupByPayload<T extends MouseClickEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MouseClickEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MouseClickEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MouseClickEventGroupByOutputType[P]>
            : GetScalarType<T[P], MouseClickEventGroupByOutputType[P]>
        }
      >
    >


  export type MouseClickEventSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    pathname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clickId?: boolean
    windowId?: boolean
    userAgentId?: boolean
    click?: boolean | ClickArgs<ExtArgs>
    window?: boolean | WindowArgs<ExtArgs>
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }, ExtArgs["result"]["mouseClickEvent"]>

  export type MouseClickEventSelectScalar = {
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    pathname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clickId?: boolean
    windowId?: boolean
    userAgentId?: boolean
  }

  export type MouseClickEventInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    click?: boolean | ClickArgs<ExtArgs>
    window?: boolean | WindowArgs<ExtArgs>
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }


  type MouseClickEventGetPayload<S extends boolean | null | undefined | MouseClickEventArgs> = $Types.GetResult<MouseClickEventPayload, S>

  type MouseClickEventCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MouseClickEventFindManyArgs, 'select' | 'include'> & {
      select?: MouseClickEventCountAggregateInputType | true
    }

  export interface MouseClickEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MouseClickEvent'], meta: { name: 'MouseClickEvent' } }
    /**
     * Find zero or one MouseClickEvent that matches the filter.
     * @param {MouseClickEventFindUniqueArgs} args - Arguments to find a MouseClickEvent
     * @example
     * // Get one MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MouseClickEventFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MouseClickEventFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MouseClickEvent'> extends True ? Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one MouseClickEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MouseClickEventFindUniqueOrThrowArgs} args - Arguments to find a MouseClickEvent
     * @example
     * // Get one MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MouseClickEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MouseClickEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first MouseClickEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventFindFirstArgs} args - Arguments to find a MouseClickEvent
     * @example
     * // Get one MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MouseClickEventFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MouseClickEventFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MouseClickEvent'> extends True ? Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first MouseClickEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventFindFirstOrThrowArgs} args - Arguments to find a MouseClickEvent
     * @example
     * // Get one MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MouseClickEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MouseClickEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more MouseClickEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MouseClickEvents
     * const mouseClickEvents = await prisma.mouseClickEvent.findMany()
     * 
     * // Get first 10 MouseClickEvents
     * const mouseClickEvents = await prisma.mouseClickEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mouseClickEventWithIdOnly = await prisma.mouseClickEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MouseClickEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MouseClickEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a MouseClickEvent.
     * @param {MouseClickEventCreateArgs} args - Arguments to create a MouseClickEvent.
     * @example
     * // Create one MouseClickEvent
     * const MouseClickEvent = await prisma.mouseClickEvent.create({
     *   data: {
     *     // ... data to create a MouseClickEvent
     *   }
     * })
     * 
    **/
    create<T extends MouseClickEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MouseClickEventCreateArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many MouseClickEvents.
     *     @param {MouseClickEventCreateManyArgs} args - Arguments to create many MouseClickEvents.
     *     @example
     *     // Create many MouseClickEvents
     *     const mouseClickEvent = await prisma.mouseClickEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MouseClickEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MouseClickEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MouseClickEvent.
     * @param {MouseClickEventDeleteArgs} args - Arguments to delete one MouseClickEvent.
     * @example
     * // Delete one MouseClickEvent
     * const MouseClickEvent = await prisma.mouseClickEvent.delete({
     *   where: {
     *     // ... filter to delete one MouseClickEvent
     *   }
     * })
     * 
    **/
    delete<T extends MouseClickEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MouseClickEventDeleteArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one MouseClickEvent.
     * @param {MouseClickEventUpdateArgs} args - Arguments to update one MouseClickEvent.
     * @example
     * // Update one MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MouseClickEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MouseClickEventUpdateArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more MouseClickEvents.
     * @param {MouseClickEventDeleteManyArgs} args - Arguments to filter MouseClickEvents to delete.
     * @example
     * // Delete a few MouseClickEvents
     * const { count } = await prisma.mouseClickEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MouseClickEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MouseClickEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MouseClickEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MouseClickEvents
     * const mouseClickEvent = await prisma.mouseClickEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MouseClickEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MouseClickEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MouseClickEvent.
     * @param {MouseClickEventUpsertArgs} args - Arguments to update or create a MouseClickEvent.
     * @example
     * // Update or create a MouseClickEvent
     * const mouseClickEvent = await prisma.mouseClickEvent.upsert({
     *   create: {
     *     // ... data to create a MouseClickEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MouseClickEvent we want to update
     *   }
     * })
    **/
    upsert<T extends MouseClickEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MouseClickEventUpsertArgs<ExtArgs>>
    ): Prisma__MouseClickEventClient<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more MouseClickEvents that matches the filter.
     * @param {MouseClickEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mouseClickEvent = await prisma.mouseClickEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MouseClickEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MouseClickEvent.
     * @param {MouseClickEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mouseClickEvent = await prisma.mouseClickEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MouseClickEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of MouseClickEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventCountArgs} args - Arguments to filter MouseClickEvents to count.
     * @example
     * // Count the number of MouseClickEvents
     * const count = await prisma.mouseClickEvent.count({
     *   where: {
     *     // ... the filter for the MouseClickEvents we want to count
     *   }
     * })
    **/
    count<T extends MouseClickEventCountArgs>(
      args?: Subset<T, MouseClickEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MouseClickEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MouseClickEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MouseClickEventAggregateArgs>(args: Subset<T, MouseClickEventAggregateArgs>): Prisma.PrismaPromise<GetMouseClickEventAggregateType<T>>

    /**
     * Group by MouseClickEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouseClickEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MouseClickEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MouseClickEventGroupByArgs['orderBy'] }
        : { orderBy?: MouseClickEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MouseClickEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMouseClickEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MouseClickEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MouseClickEventClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    click<T extends ClickArgs<ExtArgs> = {}>(args?: Subset<T, ClickArgs<ExtArgs>>): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    window<T extends WindowArgs<ExtArgs> = {}>(args?: Subset<T, WindowArgs<ExtArgs>>): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    userAgent<T extends UserAgentArgs<ExtArgs> = {}>(args?: Subset<T, UserAgentArgs<ExtArgs>>): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MouseClickEvent base type for findUnique actions
   */
  export type MouseClickEventFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter, which MouseClickEvent to fetch.
     */
    where: MouseClickEventWhereUniqueInput
  }

  /**
   * MouseClickEvent findUnique
   */
  export interface MouseClickEventFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MouseClickEventFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MouseClickEvent findUniqueOrThrow
   */
  export type MouseClickEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter, which MouseClickEvent to fetch.
     */
    where: MouseClickEventWhereUniqueInput
  }


  /**
   * MouseClickEvent base type for findFirst actions
   */
  export type MouseClickEventFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter, which MouseClickEvent to fetch.
     */
    where?: MouseClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouseClickEvents to fetch.
     */
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouseClickEvents.
     */
    cursor?: MouseClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouseClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouseClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouseClickEvents.
     */
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }

  /**
   * MouseClickEvent findFirst
   */
  export interface MouseClickEventFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MouseClickEventFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MouseClickEvent findFirstOrThrow
   */
  export type MouseClickEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter, which MouseClickEvent to fetch.
     */
    where?: MouseClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouseClickEvents to fetch.
     */
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouseClickEvents.
     */
    cursor?: MouseClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouseClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouseClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouseClickEvents.
     */
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }


  /**
   * MouseClickEvent findMany
   */
  export type MouseClickEventFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter, which MouseClickEvents to fetch.
     */
    where?: MouseClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouseClickEvents to fetch.
     */
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MouseClickEvents.
     */
    cursor?: MouseClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouseClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouseClickEvents.
     */
    skip?: number
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }


  /**
   * MouseClickEvent create
   */
  export type MouseClickEventCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MouseClickEvent.
     */
    data: XOR<MouseClickEventCreateInput, MouseClickEventUncheckedCreateInput>
  }


  /**
   * MouseClickEvent createMany
   */
  export type MouseClickEventCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MouseClickEvents.
     */
    data: Enumerable<MouseClickEventCreateManyInput>
  }


  /**
   * MouseClickEvent update
   */
  export type MouseClickEventUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MouseClickEvent.
     */
    data: XOR<MouseClickEventUpdateInput, MouseClickEventUncheckedUpdateInput>
    /**
     * Choose, which MouseClickEvent to update.
     */
    where: MouseClickEventWhereUniqueInput
  }


  /**
   * MouseClickEvent updateMany
   */
  export type MouseClickEventUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MouseClickEvents.
     */
    data: XOR<MouseClickEventUpdateManyMutationInput, MouseClickEventUncheckedUpdateManyInput>
    /**
     * Filter which MouseClickEvents to update
     */
    where?: MouseClickEventWhereInput
  }


  /**
   * MouseClickEvent upsert
   */
  export type MouseClickEventUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MouseClickEvent to update in case it exists.
     */
    where: MouseClickEventWhereUniqueInput
    /**
     * In case the MouseClickEvent found by the `where` argument doesn't exist, create a new MouseClickEvent with this data.
     */
    create: XOR<MouseClickEventCreateInput, MouseClickEventUncheckedCreateInput>
    /**
     * In case the MouseClickEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MouseClickEventUpdateInput, MouseClickEventUncheckedUpdateInput>
  }


  /**
   * MouseClickEvent delete
   */
  export type MouseClickEventDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    /**
     * Filter which MouseClickEvent to delete.
     */
    where: MouseClickEventWhereUniqueInput
  }


  /**
   * MouseClickEvent deleteMany
   */
  export type MouseClickEventDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouseClickEvents to delete
     */
    where?: MouseClickEventWhereInput
  }


  /**
   * MouseClickEvent findRaw
   */
  export type MouseClickEventFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MouseClickEvent aggregateRaw
   */
  export type MouseClickEventAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MouseClickEvent without action
   */
  export type MouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
  }



  /**
   * Model PathnameChangeEvent
   */


  export type AggregatePathnameChangeEvent = {
    _count: PathnameChangeEventCountAggregateOutputType | null
    _avg: PathnameChangeEventAvgAggregateOutputType | null
    _sum: PathnameChangeEventSumAggregateOutputType | null
    _min: PathnameChangeEventMinAggregateOutputType | null
    _max: PathnameChangeEventMaxAggregateOutputType | null
  }

  export type PathnameChangeEventAvgAggregateOutputType = {
    timestamp: number | null
    user: number | null
    startTime: number | null
    endTime: number | null
  }

  export type PathnameChangeEventSumAggregateOutputType = {
    timestamp: number | null
    user: number | null
    startTime: number | null
    endTime: number | null
  }

  export type PathnameChangeEventMinAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userAgentId: string | null
  }

  export type PathnameChangeEventMaxAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userAgentId: string | null
  }

  export type PathnameChangeEventCountAggregateOutputType = {
    id: number
    event: number
    event_id: number
    timestamp: number
    user: number
    uuid: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    userAgentId: number
    _all: number
  }


  export type PathnameChangeEventAvgAggregateInputType = {
    timestamp?: true
    user?: true
    startTime?: true
    endTime?: true
  }

  export type PathnameChangeEventSumAggregateInputType = {
    timestamp?: true
    user?: true
    startTime?: true
    endTime?: true
  }

  export type PathnameChangeEventMinAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
  }

  export type PathnameChangeEventMaxAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
  }

  export type PathnameChangeEventCountAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
    _all?: true
  }

  export type PathnameChangeEventAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PathnameChangeEvent to aggregate.
     */
    where?: PathnameChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathnameChangeEvents to fetch.
     */
    orderBy?: Enumerable<PathnameChangeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PathnameChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathnameChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathnameChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PathnameChangeEvents
    **/
    _count?: true | PathnameChangeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PathnameChangeEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PathnameChangeEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PathnameChangeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PathnameChangeEventMaxAggregateInputType
  }

  export type GetPathnameChangeEventAggregateType<T extends PathnameChangeEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePathnameChangeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePathnameChangeEvent[P]>
      : GetScalarType<T[P], AggregatePathnameChangeEvent[P]>
  }




  export type PathnameChangeEventGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PathnameChangeEventWhereInput
    orderBy?: Enumerable<PathnameChangeEventOrderByWithAggregationInput>
    by: PathnameChangeEventScalarFieldEnum[]
    having?: PathnameChangeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PathnameChangeEventCountAggregateInputType | true
    _avg?: PathnameChangeEventAvgAggregateInputType
    _sum?: PathnameChangeEventSumAggregateInputType
    _min?: PathnameChangeEventMinAggregateInputType
    _max?: PathnameChangeEventMaxAggregateInputType
  }


  export type PathnameChangeEventGroupByOutputType = {
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt: Date
    updatedAt: Date
    userAgentId: string
    _count: PathnameChangeEventCountAggregateOutputType | null
    _avg: PathnameChangeEventAvgAggregateOutputType | null
    _sum: PathnameChangeEventSumAggregateOutputType | null
    _min: PathnameChangeEventMinAggregateOutputType | null
    _max: PathnameChangeEventMaxAggregateOutputType | null
  }

  type GetPathnameChangeEventGroupByPayload<T extends PathnameChangeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PathnameChangeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PathnameChangeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PathnameChangeEventGroupByOutputType[P]>
            : GetScalarType<T[P], PathnameChangeEventGroupByOutputType[P]>
        }
      >
    >


  export type PathnameChangeEventSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAgentId?: boolean
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }, ExtArgs["result"]["pathnameChangeEvent"]>

  export type PathnameChangeEventSelectScalar = {
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAgentId?: boolean
  }

  export type PathnameChangeEventInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }


  type PathnameChangeEventGetPayload<S extends boolean | null | undefined | PathnameChangeEventArgs> = $Types.GetResult<PathnameChangeEventPayload, S>

  type PathnameChangeEventCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PathnameChangeEventFindManyArgs, 'select' | 'include'> & {
      select?: PathnameChangeEventCountAggregateInputType | true
    }

  export interface PathnameChangeEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PathnameChangeEvent'], meta: { name: 'PathnameChangeEvent' } }
    /**
     * Find zero or one PathnameChangeEvent that matches the filter.
     * @param {PathnameChangeEventFindUniqueArgs} args - Arguments to find a PathnameChangeEvent
     * @example
     * // Get one PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PathnameChangeEventFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PathnameChangeEventFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PathnameChangeEvent'> extends True ? Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PathnameChangeEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PathnameChangeEventFindUniqueOrThrowArgs} args - Arguments to find a PathnameChangeEvent
     * @example
     * // Get one PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PathnameChangeEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PathnameChangeEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PathnameChangeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventFindFirstArgs} args - Arguments to find a PathnameChangeEvent
     * @example
     * // Get one PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PathnameChangeEventFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PathnameChangeEventFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PathnameChangeEvent'> extends True ? Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PathnameChangeEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventFindFirstOrThrowArgs} args - Arguments to find a PathnameChangeEvent
     * @example
     * // Get one PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PathnameChangeEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PathnameChangeEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PathnameChangeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PathnameChangeEvents
     * const pathnameChangeEvents = await prisma.pathnameChangeEvent.findMany()
     * 
     * // Get first 10 PathnameChangeEvents
     * const pathnameChangeEvents = await prisma.pathnameChangeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pathnameChangeEventWithIdOnly = await prisma.pathnameChangeEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PathnameChangeEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PathnameChangeEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PathnameChangeEvent.
     * @param {PathnameChangeEventCreateArgs} args - Arguments to create a PathnameChangeEvent.
     * @example
     * // Create one PathnameChangeEvent
     * const PathnameChangeEvent = await prisma.pathnameChangeEvent.create({
     *   data: {
     *     // ... data to create a PathnameChangeEvent
     *   }
     * })
     * 
    **/
    create<T extends PathnameChangeEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PathnameChangeEventCreateArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PathnameChangeEvents.
     *     @param {PathnameChangeEventCreateManyArgs} args - Arguments to create many PathnameChangeEvents.
     *     @example
     *     // Create many PathnameChangeEvents
     *     const pathnameChangeEvent = await prisma.pathnameChangeEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PathnameChangeEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PathnameChangeEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PathnameChangeEvent.
     * @param {PathnameChangeEventDeleteArgs} args - Arguments to delete one PathnameChangeEvent.
     * @example
     * // Delete one PathnameChangeEvent
     * const PathnameChangeEvent = await prisma.pathnameChangeEvent.delete({
     *   where: {
     *     // ... filter to delete one PathnameChangeEvent
     *   }
     * })
     * 
    **/
    delete<T extends PathnameChangeEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PathnameChangeEventDeleteArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PathnameChangeEvent.
     * @param {PathnameChangeEventUpdateArgs} args - Arguments to update one PathnameChangeEvent.
     * @example
     * // Update one PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PathnameChangeEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PathnameChangeEventUpdateArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PathnameChangeEvents.
     * @param {PathnameChangeEventDeleteManyArgs} args - Arguments to filter PathnameChangeEvents to delete.
     * @example
     * // Delete a few PathnameChangeEvents
     * const { count } = await prisma.pathnameChangeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PathnameChangeEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PathnameChangeEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PathnameChangeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PathnameChangeEvents
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PathnameChangeEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PathnameChangeEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PathnameChangeEvent.
     * @param {PathnameChangeEventUpsertArgs} args - Arguments to update or create a PathnameChangeEvent.
     * @example
     * // Update or create a PathnameChangeEvent
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.upsert({
     *   create: {
     *     // ... data to create a PathnameChangeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PathnameChangeEvent we want to update
     *   }
     * })
    **/
    upsert<T extends PathnameChangeEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PathnameChangeEventUpsertArgs<ExtArgs>>
    ): Prisma__PathnameChangeEventClient<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more PathnameChangeEvents that matches the filter.
     * @param {PathnameChangeEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PathnameChangeEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PathnameChangeEvent.
     * @param {PathnameChangeEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pathnameChangeEvent = await prisma.pathnameChangeEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PathnameChangeEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PathnameChangeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventCountArgs} args - Arguments to filter PathnameChangeEvents to count.
     * @example
     * // Count the number of PathnameChangeEvents
     * const count = await prisma.pathnameChangeEvent.count({
     *   where: {
     *     // ... the filter for the PathnameChangeEvents we want to count
     *   }
     * })
    **/
    count<T extends PathnameChangeEventCountArgs>(
      args?: Subset<T, PathnameChangeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PathnameChangeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PathnameChangeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PathnameChangeEventAggregateArgs>(args: Subset<T, PathnameChangeEventAggregateArgs>): Prisma.PrismaPromise<GetPathnameChangeEventAggregateType<T>>

    /**
     * Group by PathnameChangeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathnameChangeEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PathnameChangeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PathnameChangeEventGroupByArgs['orderBy'] }
        : { orderBy?: PathnameChangeEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PathnameChangeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPathnameChangeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PathnameChangeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PathnameChangeEventClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    userAgent<T extends UserAgentArgs<ExtArgs> = {}>(args?: Subset<T, UserAgentArgs<ExtArgs>>): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PathnameChangeEvent base type for findUnique actions
   */
  export type PathnameChangeEventFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which PathnameChangeEvent to fetch.
     */
    where: PathnameChangeEventWhereUniqueInput
  }

  /**
   * PathnameChangeEvent findUnique
   */
  export interface PathnameChangeEventFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PathnameChangeEventFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PathnameChangeEvent findUniqueOrThrow
   */
  export type PathnameChangeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which PathnameChangeEvent to fetch.
     */
    where: PathnameChangeEventWhereUniqueInput
  }


  /**
   * PathnameChangeEvent base type for findFirst actions
   */
  export type PathnameChangeEventFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which PathnameChangeEvent to fetch.
     */
    where?: PathnameChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathnameChangeEvents to fetch.
     */
    orderBy?: Enumerable<PathnameChangeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PathnameChangeEvents.
     */
    cursor?: PathnameChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathnameChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathnameChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PathnameChangeEvents.
     */
    distinct?: Enumerable<PathnameChangeEventScalarFieldEnum>
  }

  /**
   * PathnameChangeEvent findFirst
   */
  export interface PathnameChangeEventFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PathnameChangeEventFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PathnameChangeEvent findFirstOrThrow
   */
  export type PathnameChangeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which PathnameChangeEvent to fetch.
     */
    where?: PathnameChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathnameChangeEvents to fetch.
     */
    orderBy?: Enumerable<PathnameChangeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PathnameChangeEvents.
     */
    cursor?: PathnameChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathnameChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathnameChangeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PathnameChangeEvents.
     */
    distinct?: Enumerable<PathnameChangeEventScalarFieldEnum>
  }


  /**
   * PathnameChangeEvent findMany
   */
  export type PathnameChangeEventFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter, which PathnameChangeEvents to fetch.
     */
    where?: PathnameChangeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PathnameChangeEvents to fetch.
     */
    orderBy?: Enumerable<PathnameChangeEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PathnameChangeEvents.
     */
    cursor?: PathnameChangeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PathnameChangeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PathnameChangeEvents.
     */
    skip?: number
    distinct?: Enumerable<PathnameChangeEventScalarFieldEnum>
  }


  /**
   * PathnameChangeEvent create
   */
  export type PathnameChangeEventCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PathnameChangeEvent.
     */
    data: XOR<PathnameChangeEventCreateInput, PathnameChangeEventUncheckedCreateInput>
  }


  /**
   * PathnameChangeEvent createMany
   */
  export type PathnameChangeEventCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PathnameChangeEvents.
     */
    data: Enumerable<PathnameChangeEventCreateManyInput>
  }


  /**
   * PathnameChangeEvent update
   */
  export type PathnameChangeEventUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PathnameChangeEvent.
     */
    data: XOR<PathnameChangeEventUpdateInput, PathnameChangeEventUncheckedUpdateInput>
    /**
     * Choose, which PathnameChangeEvent to update.
     */
    where: PathnameChangeEventWhereUniqueInput
  }


  /**
   * PathnameChangeEvent updateMany
   */
  export type PathnameChangeEventUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PathnameChangeEvents.
     */
    data: XOR<PathnameChangeEventUpdateManyMutationInput, PathnameChangeEventUncheckedUpdateManyInput>
    /**
     * Filter which PathnameChangeEvents to update
     */
    where?: PathnameChangeEventWhereInput
  }


  /**
   * PathnameChangeEvent upsert
   */
  export type PathnameChangeEventUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PathnameChangeEvent to update in case it exists.
     */
    where: PathnameChangeEventWhereUniqueInput
    /**
     * In case the PathnameChangeEvent found by the `where` argument doesn't exist, create a new PathnameChangeEvent with this data.
     */
    create: XOR<PathnameChangeEventCreateInput, PathnameChangeEventUncheckedCreateInput>
    /**
     * In case the PathnameChangeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PathnameChangeEventUpdateInput, PathnameChangeEventUncheckedUpdateInput>
  }


  /**
   * PathnameChangeEvent delete
   */
  export type PathnameChangeEventDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    /**
     * Filter which PathnameChangeEvent to delete.
     */
    where: PathnameChangeEventWhereUniqueInput
  }


  /**
   * PathnameChangeEvent deleteMany
   */
  export type PathnameChangeEventDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PathnameChangeEvents to delete
     */
    where?: PathnameChangeEventWhereInput
  }


  /**
   * PathnameChangeEvent findRaw
   */
  export type PathnameChangeEventFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PathnameChangeEvent aggregateRaw
   */
  export type PathnameChangeEventAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PathnameChangeEvent without action
   */
  export type PathnameChangeEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
  }



  /**
   * Model LeaveAppEvent
   */


  export type AggregateLeaveAppEvent = {
    _count: LeaveAppEventCountAggregateOutputType | null
    _avg: LeaveAppEventAvgAggregateOutputType | null
    _sum: LeaveAppEventSumAggregateOutputType | null
    _min: LeaveAppEventMinAggregateOutputType | null
    _max: LeaveAppEventMaxAggregateOutputType | null
  }

  export type LeaveAppEventAvgAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type LeaveAppEventSumAggregateOutputType = {
    timestamp: number | null
    user: number | null
  }

  export type LeaveAppEventMinAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userAgentId: string | null
  }

  export type LeaveAppEventMaxAggregateOutputType = {
    id: string | null
    event: EventType | null
    event_id: string | null
    timestamp: number | null
    user: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userAgentId: string | null
  }

  export type LeaveAppEventCountAggregateOutputType = {
    id: number
    event: number
    event_id: number
    timestamp: number
    user: number
    uuid: number
    visitedPages: number
    createdAt: number
    updatedAt: number
    userAgentId: number
    _all: number
  }


  export type LeaveAppEventAvgAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type LeaveAppEventSumAggregateInputType = {
    timestamp?: true
    user?: true
  }

  export type LeaveAppEventMinAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
  }

  export type LeaveAppEventMaxAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
  }

  export type LeaveAppEventCountAggregateInputType = {
    id?: true
    event?: true
    event_id?: true
    timestamp?: true
    user?: true
    uuid?: true
    visitedPages?: true
    createdAt?: true
    updatedAt?: true
    userAgentId?: true
    _all?: true
  }

  export type LeaveAppEventAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveAppEvent to aggregate.
     */
    where?: LeaveAppEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveAppEvents to fetch.
     */
    orderBy?: Enumerable<LeaveAppEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveAppEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveAppEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveAppEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveAppEvents
    **/
    _count?: true | LeaveAppEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveAppEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveAppEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveAppEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveAppEventMaxAggregateInputType
  }

  export type GetLeaveAppEventAggregateType<T extends LeaveAppEventAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveAppEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveAppEvent[P]>
      : GetScalarType<T[P], AggregateLeaveAppEvent[P]>
  }




  export type LeaveAppEventGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LeaveAppEventWhereInput
    orderBy?: Enumerable<LeaveAppEventOrderByWithAggregationInput>
    by: LeaveAppEventScalarFieldEnum[]
    having?: LeaveAppEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveAppEventCountAggregateInputType | true
    _avg?: LeaveAppEventAvgAggregateInputType
    _sum?: LeaveAppEventSumAggregateInputType
    _min?: LeaveAppEventMinAggregateInputType
    _max?: LeaveAppEventMaxAggregateInputType
  }


  export type LeaveAppEventGroupByOutputType = {
    id: string
    event: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: JsonValue
    createdAt: Date
    updatedAt: Date
    userAgentId: string
    _count: LeaveAppEventCountAggregateOutputType | null
    _avg: LeaveAppEventAvgAggregateOutputType | null
    _sum: LeaveAppEventSumAggregateOutputType | null
    _min: LeaveAppEventMinAggregateOutputType | null
    _max: LeaveAppEventMaxAggregateOutputType | null
  }

  type GetLeaveAppEventGroupByPayload<T extends LeaveAppEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LeaveAppEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveAppEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveAppEventGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveAppEventGroupByOutputType[P]>
        }
      >
    >


  export type LeaveAppEventSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    visitedPages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAgentId?: boolean
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }, ExtArgs["result"]["leaveAppEvent"]>

  export type LeaveAppEventSelectScalar = {
    id?: boolean
    event?: boolean
    event_id?: boolean
    timestamp?: boolean
    user?: boolean
    uuid?: boolean
    visitedPages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAgentId?: boolean
  }

  export type LeaveAppEventInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAgent?: boolean | UserAgentArgs<ExtArgs>
  }


  type LeaveAppEventGetPayload<S extends boolean | null | undefined | LeaveAppEventArgs> = $Types.GetResult<LeaveAppEventPayload, S>

  type LeaveAppEventCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LeaveAppEventFindManyArgs, 'select' | 'include'> & {
      select?: LeaveAppEventCountAggregateInputType | true
    }

  export interface LeaveAppEventDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveAppEvent'], meta: { name: 'LeaveAppEvent' } }
    /**
     * Find zero or one LeaveAppEvent that matches the filter.
     * @param {LeaveAppEventFindUniqueArgs} args - Arguments to find a LeaveAppEvent
     * @example
     * // Get one LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LeaveAppEventFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LeaveAppEventFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LeaveAppEvent'> extends True ? Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one LeaveAppEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LeaveAppEventFindUniqueOrThrowArgs} args - Arguments to find a LeaveAppEvent
     * @example
     * // Get one LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LeaveAppEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LeaveAppEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first LeaveAppEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventFindFirstArgs} args - Arguments to find a LeaveAppEvent
     * @example
     * // Get one LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LeaveAppEventFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LeaveAppEventFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LeaveAppEvent'> extends True ? Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first LeaveAppEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventFindFirstOrThrowArgs} args - Arguments to find a LeaveAppEvent
     * @example
     * // Get one LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LeaveAppEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LeaveAppEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more LeaveAppEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveAppEvents
     * const leaveAppEvents = await prisma.leaveAppEvent.findMany()
     * 
     * // Get first 10 LeaveAppEvents
     * const leaveAppEvents = await prisma.leaveAppEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveAppEventWithIdOnly = await prisma.leaveAppEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LeaveAppEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LeaveAppEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a LeaveAppEvent.
     * @param {LeaveAppEventCreateArgs} args - Arguments to create a LeaveAppEvent.
     * @example
     * // Create one LeaveAppEvent
     * const LeaveAppEvent = await prisma.leaveAppEvent.create({
     *   data: {
     *     // ... data to create a LeaveAppEvent
     *   }
     * })
     * 
    **/
    create<T extends LeaveAppEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LeaveAppEventCreateArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many LeaveAppEvents.
     *     @param {LeaveAppEventCreateManyArgs} args - Arguments to create many LeaveAppEvents.
     *     @example
     *     // Create many LeaveAppEvents
     *     const leaveAppEvent = await prisma.leaveAppEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LeaveAppEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LeaveAppEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LeaveAppEvent.
     * @param {LeaveAppEventDeleteArgs} args - Arguments to delete one LeaveAppEvent.
     * @example
     * // Delete one LeaveAppEvent
     * const LeaveAppEvent = await prisma.leaveAppEvent.delete({
     *   where: {
     *     // ... filter to delete one LeaveAppEvent
     *   }
     * })
     * 
    **/
    delete<T extends LeaveAppEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LeaveAppEventDeleteArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one LeaveAppEvent.
     * @param {LeaveAppEventUpdateArgs} args - Arguments to update one LeaveAppEvent.
     * @example
     * // Update one LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LeaveAppEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LeaveAppEventUpdateArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more LeaveAppEvents.
     * @param {LeaveAppEventDeleteManyArgs} args - Arguments to filter LeaveAppEvents to delete.
     * @example
     * // Delete a few LeaveAppEvents
     * const { count } = await prisma.leaveAppEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LeaveAppEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LeaveAppEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveAppEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveAppEvents
     * const leaveAppEvent = await prisma.leaveAppEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LeaveAppEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LeaveAppEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeaveAppEvent.
     * @param {LeaveAppEventUpsertArgs} args - Arguments to update or create a LeaveAppEvent.
     * @example
     * // Update or create a LeaveAppEvent
     * const leaveAppEvent = await prisma.leaveAppEvent.upsert({
     *   create: {
     *     // ... data to create a LeaveAppEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveAppEvent we want to update
     *   }
     * })
    **/
    upsert<T extends LeaveAppEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LeaveAppEventUpsertArgs<ExtArgs>>
    ): Prisma__LeaveAppEventClient<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more LeaveAppEvents that matches the filter.
     * @param {LeaveAppEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const leaveAppEvent = await prisma.leaveAppEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LeaveAppEventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LeaveAppEvent.
     * @param {LeaveAppEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const leaveAppEvent = await prisma.leaveAppEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LeaveAppEventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LeaveAppEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventCountArgs} args - Arguments to filter LeaveAppEvents to count.
     * @example
     * // Count the number of LeaveAppEvents
     * const count = await prisma.leaveAppEvent.count({
     *   where: {
     *     // ... the filter for the LeaveAppEvents we want to count
     *   }
     * })
    **/
    count<T extends LeaveAppEventCountArgs>(
      args?: Subset<T, LeaveAppEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveAppEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveAppEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveAppEventAggregateArgs>(args: Subset<T, LeaveAppEventAggregateArgs>): Prisma.PrismaPromise<GetLeaveAppEventAggregateType<T>>

    /**
     * Group by LeaveAppEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAppEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveAppEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveAppEventGroupByArgs['orderBy'] }
        : { orderBy?: LeaveAppEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveAppEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveAppEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveAppEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LeaveAppEventClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    userAgent<T extends UserAgentArgs<ExtArgs> = {}>(args?: Subset<T, UserAgentArgs<ExtArgs>>): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LeaveAppEvent base type for findUnique actions
   */
  export type LeaveAppEventFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter, which LeaveAppEvent to fetch.
     */
    where: LeaveAppEventWhereUniqueInput
  }

  /**
   * LeaveAppEvent findUnique
   */
  export interface LeaveAppEventFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LeaveAppEventFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LeaveAppEvent findUniqueOrThrow
   */
  export type LeaveAppEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter, which LeaveAppEvent to fetch.
     */
    where: LeaveAppEventWhereUniqueInput
  }


  /**
   * LeaveAppEvent base type for findFirst actions
   */
  export type LeaveAppEventFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter, which LeaveAppEvent to fetch.
     */
    where?: LeaveAppEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveAppEvents to fetch.
     */
    orderBy?: Enumerable<LeaveAppEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveAppEvents.
     */
    cursor?: LeaveAppEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveAppEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveAppEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveAppEvents.
     */
    distinct?: Enumerable<LeaveAppEventScalarFieldEnum>
  }

  /**
   * LeaveAppEvent findFirst
   */
  export interface LeaveAppEventFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LeaveAppEventFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LeaveAppEvent findFirstOrThrow
   */
  export type LeaveAppEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter, which LeaveAppEvent to fetch.
     */
    where?: LeaveAppEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveAppEvents to fetch.
     */
    orderBy?: Enumerable<LeaveAppEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveAppEvents.
     */
    cursor?: LeaveAppEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveAppEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveAppEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveAppEvents.
     */
    distinct?: Enumerable<LeaveAppEventScalarFieldEnum>
  }


  /**
   * LeaveAppEvent findMany
   */
  export type LeaveAppEventFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter, which LeaveAppEvents to fetch.
     */
    where?: LeaveAppEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveAppEvents to fetch.
     */
    orderBy?: Enumerable<LeaveAppEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveAppEvents.
     */
    cursor?: LeaveAppEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveAppEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveAppEvents.
     */
    skip?: number
    distinct?: Enumerable<LeaveAppEventScalarFieldEnum>
  }


  /**
   * LeaveAppEvent create
   */
  export type LeaveAppEventCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveAppEvent.
     */
    data: XOR<LeaveAppEventCreateInput, LeaveAppEventUncheckedCreateInput>
  }


  /**
   * LeaveAppEvent createMany
   */
  export type LeaveAppEventCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveAppEvents.
     */
    data: Enumerable<LeaveAppEventCreateManyInput>
  }


  /**
   * LeaveAppEvent update
   */
  export type LeaveAppEventUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveAppEvent.
     */
    data: XOR<LeaveAppEventUpdateInput, LeaveAppEventUncheckedUpdateInput>
    /**
     * Choose, which LeaveAppEvent to update.
     */
    where: LeaveAppEventWhereUniqueInput
  }


  /**
   * LeaveAppEvent updateMany
   */
  export type LeaveAppEventUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveAppEvents.
     */
    data: XOR<LeaveAppEventUpdateManyMutationInput, LeaveAppEventUncheckedUpdateManyInput>
    /**
     * Filter which LeaveAppEvents to update
     */
    where?: LeaveAppEventWhereInput
  }


  /**
   * LeaveAppEvent upsert
   */
  export type LeaveAppEventUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveAppEvent to update in case it exists.
     */
    where: LeaveAppEventWhereUniqueInput
    /**
     * In case the LeaveAppEvent found by the `where` argument doesn't exist, create a new LeaveAppEvent with this data.
     */
    create: XOR<LeaveAppEventCreateInput, LeaveAppEventUncheckedCreateInput>
    /**
     * In case the LeaveAppEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveAppEventUpdateInput, LeaveAppEventUncheckedUpdateInput>
  }


  /**
   * LeaveAppEvent delete
   */
  export type LeaveAppEventDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    /**
     * Filter which LeaveAppEvent to delete.
     */
    where: LeaveAppEventWhereUniqueInput
  }


  /**
   * LeaveAppEvent deleteMany
   */
  export type LeaveAppEventDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveAppEvents to delete
     */
    where?: LeaveAppEventWhereInput
  }


  /**
   * LeaveAppEvent findRaw
   */
  export type LeaveAppEventFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LeaveAppEvent aggregateRaw
   */
  export type LeaveAppEventAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LeaveAppEvent without action
   */
  export type LeaveAppEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
  }



  /**
   * Model Click
   */


  export type AggregateClick = {
    _count: ClickCountAggregateOutputType | null
    _avg: ClickAvgAggregateOutputType | null
    _sum: ClickSumAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  export type ClickAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ClickSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ClickMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
  }

  export type ClickMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
  }

  export type ClickCountAggregateOutputType = {
    id: number
    x: number
    y: number
    _all: number
  }


  export type ClickAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type ClickSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type ClickMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type ClickMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
  }

  export type ClickCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    _all?: true
  }

  export type ClickAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Click to aggregate.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clicks
    **/
    _count?: true | ClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickMaxAggregateInputType
  }

  export type GetClickAggregateType<T extends ClickAggregateArgs> = {
        [P in keyof T & keyof AggregateClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClick[P]>
      : GetScalarType<T[P], AggregateClick[P]>
  }




  export type ClickGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClickWhereInput
    orderBy?: Enumerable<ClickOrderByWithAggregationInput>
    by: ClickScalarFieldEnum[]
    having?: ClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickCountAggregateInputType | true
    _avg?: ClickAvgAggregateInputType
    _sum?: ClickSumAggregateInputType
    _min?: ClickMinAggregateInputType
    _max?: ClickMaxAggregateInputType
  }


  export type ClickGroupByOutputType = {
    id: string
    x: number
    y: number
    _count: ClickCountAggregateOutputType | null
    _avg: ClickAvgAggregateOutputType | null
    _sum: ClickSumAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  type GetClickGroupByPayload<T extends ClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickGroupByOutputType[P]>
            : GetScalarType<T[P], ClickGroupByOutputType[P]>
        }
      >
    >


  export type ClickSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    MouseClickEvent?: boolean | Click$MouseClickEventArgs<ExtArgs>
    _count?: boolean | ClickCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["click"]>

  export type ClickSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
  }

  export type ClickInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    MouseClickEvent?: boolean | Click$MouseClickEventArgs<ExtArgs>
    _count?: boolean | ClickCountOutputTypeArgs<ExtArgs>
  }


  type ClickGetPayload<S extends boolean | null | undefined | ClickArgs> = $Types.GetResult<ClickPayload, S>

  type ClickCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClickFindManyArgs, 'select' | 'include'> & {
      select?: ClickCountAggregateInputType | true
    }

  export interface ClickDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Click'], meta: { name: 'Click' } }
    /**
     * Find zero or one Click that matches the filter.
     * @param {ClickFindUniqueArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClickFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClickFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Click'> extends True ? Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Click that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClickFindUniqueOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClickFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClickFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Click that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClickFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClickFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Click'> extends True ? Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Click that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClickFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClickFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clicks
     * const clicks = await prisma.click.findMany()
     * 
     * // Get first 10 Clicks
     * const clicks = await prisma.click.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickWithIdOnly = await prisma.click.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClickFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClickFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ClickPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Click.
     * @param {ClickCreateArgs} args - Arguments to create a Click.
     * @example
     * // Create one Click
     * const Click = await prisma.click.create({
     *   data: {
     *     // ... data to create a Click
     *   }
     * })
     * 
    **/
    create<T extends ClickCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClickCreateArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Clicks.
     *     @param {ClickCreateManyArgs} args - Arguments to create many Clicks.
     *     @example
     *     // Create many Clicks
     *     const click = await prisma.click.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClickCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClickCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Click.
     * @param {ClickDeleteArgs} args - Arguments to delete one Click.
     * @example
     * // Delete one Click
     * const Click = await prisma.click.delete({
     *   where: {
     *     // ... filter to delete one Click
     *   }
     * })
     * 
    **/
    delete<T extends ClickDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClickDeleteArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Click.
     * @param {ClickUpdateArgs} args - Arguments to update one Click.
     * @example
     * // Update one Click
     * const click = await prisma.click.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClickUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClickUpdateArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Clicks.
     * @param {ClickDeleteManyArgs} args - Arguments to filter Clicks to delete.
     * @example
     * // Delete a few Clicks
     * const { count } = await prisma.click.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClickDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClickDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clicks
     * const click = await prisma.click.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClickUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClickUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Click.
     * @param {ClickUpsertArgs} args - Arguments to update or create a Click.
     * @example
     * // Update or create a Click
     * const click = await prisma.click.upsert({
     *   create: {
     *     // ... data to create a Click
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Click we want to update
     *   }
     * })
    **/
    upsert<T extends ClickUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClickUpsertArgs<ExtArgs>>
    ): Prisma__ClickClient<$Types.GetResult<ClickPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Clicks that matches the filter.
     * @param {ClickFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const click = await prisma.click.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClickFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Click.
     * @param {ClickAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const click = await prisma.click.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClickAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickCountArgs} args - Arguments to filter Clicks to count.
     * @example
     * // Count the number of Clicks
     * const count = await prisma.click.count({
     *   where: {
     *     // ... the filter for the Clicks we want to count
     *   }
     * })
    **/
    count<T extends ClickCountArgs>(
      args?: Subset<T, ClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickAggregateArgs>(args: Subset<T, ClickAggregateArgs>): Prisma.PrismaPromise<GetClickAggregateType<T>>

    /**
     * Group by Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickGroupByArgs['orderBy'] }
        : { orderBy?: ClickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Click.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClickClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    MouseClickEvent<T extends Click$MouseClickEventArgs<ExtArgs> = {}>(args?: Subset<T, Click$MouseClickEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Click base type for findUnique actions
   */
  export type ClickFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where: ClickWhereUniqueInput
  }

  /**
   * Click findUnique
   */
  export interface ClickFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ClickFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click findUniqueOrThrow
   */
  export type ClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where: ClickWhereUniqueInput
  }


  /**
   * Click base type for findFirst actions
   */
  export type ClickFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: Enumerable<ClickScalarFieldEnum>
  }

  /**
   * Click findFirst
   */
  export interface ClickFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ClickFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Click findFirstOrThrow
   */
  export type ClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: Enumerable<ClickScalarFieldEnum>
  }


  /**
   * Click findMany
   */
  export type ClickFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: Enumerable<ClickOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    distinct?: Enumerable<ClickScalarFieldEnum>
  }


  /**
   * Click create
   */
  export type ClickCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * The data needed to create a Click.
     */
    data: XOR<ClickCreateInput, ClickUncheckedCreateInput>
  }


  /**
   * Click createMany
   */
  export type ClickCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clicks.
     */
    data: Enumerable<ClickCreateManyInput>
  }


  /**
   * Click update
   */
  export type ClickUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * The data needed to update a Click.
     */
    data: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
    /**
     * Choose, which Click to update.
     */
    where: ClickWhereUniqueInput
  }


  /**
   * Click updateMany
   */
  export type ClickUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clicks.
     */
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     */
    where?: ClickWhereInput
  }


  /**
   * Click upsert
   */
  export type ClickUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * The filter to search for the Click to update in case it exists.
     */
    where: ClickWhereUniqueInput
    /**
     * In case the Click found by the `where` argument doesn't exist, create a new Click with this data.
     */
    create: XOR<ClickCreateInput, ClickUncheckedCreateInput>
    /**
     * In case the Click was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
  }


  /**
   * Click delete
   */
  export type ClickDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
    /**
     * Filter which Click to delete.
     */
    where: ClickWhereUniqueInput
  }


  /**
   * Click deleteMany
   */
  export type ClickDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clicks to delete
     */
    where?: ClickWhereInput
  }


  /**
   * Click findRaw
   */
  export type ClickFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Click aggregateRaw
   */
  export type ClickAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Click.MouseClickEvent
   */
  export type Click$MouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    where?: MouseClickEventWhereInput
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    cursor?: MouseClickEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }


  /**
   * Click without action
   */
  export type ClickArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClickInclude<ExtArgs> | null
  }



  /**
   * Model Window
   */


  export type AggregateWindow = {
    _count: WindowCountAggregateOutputType | null
    _avg: WindowAvgAggregateOutputType | null
    _sum: WindowSumAggregateOutputType | null
    _min: WindowMinAggregateOutputType | null
    _max: WindowMaxAggregateOutputType | null
  }

  export type WindowAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type WindowSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type WindowMinAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
  }

  export type WindowMaxAggregateOutputType = {
    id: string | null
    width: number | null
    height: number | null
  }

  export type WindowCountAggregateOutputType = {
    id: number
    width: number
    height: number
    _all: number
  }


  export type WindowAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type WindowSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type WindowMinAggregateInputType = {
    id?: true
    width?: true
    height?: true
  }

  export type WindowMaxAggregateInputType = {
    id?: true
    width?: true
    height?: true
  }

  export type WindowCountAggregateInputType = {
    id?: true
    width?: true
    height?: true
    _all?: true
  }

  export type WindowAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Window to aggregate.
     */
    where?: WindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Windows to fetch.
     */
    orderBy?: Enumerable<WindowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Windows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Windows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Windows
    **/
    _count?: true | WindowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WindowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WindowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WindowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WindowMaxAggregateInputType
  }

  export type GetWindowAggregateType<T extends WindowAggregateArgs> = {
        [P in keyof T & keyof AggregateWindow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWindow[P]>
      : GetScalarType<T[P], AggregateWindow[P]>
  }




  export type WindowGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WindowWhereInput
    orderBy?: Enumerable<WindowOrderByWithAggregationInput>
    by: WindowScalarFieldEnum[]
    having?: WindowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WindowCountAggregateInputType | true
    _avg?: WindowAvgAggregateInputType
    _sum?: WindowSumAggregateInputType
    _min?: WindowMinAggregateInputType
    _max?: WindowMaxAggregateInputType
  }


  export type WindowGroupByOutputType = {
    id: string
    width: number
    height: number
    _count: WindowCountAggregateOutputType | null
    _avg: WindowAvgAggregateOutputType | null
    _sum: WindowSumAggregateOutputType | null
    _min: WindowMinAggregateOutputType | null
    _max: WindowMaxAggregateOutputType | null
  }

  type GetWindowGroupByPayload<T extends WindowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WindowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WindowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WindowGroupByOutputType[P]>
            : GetScalarType<T[P], WindowGroupByOutputType[P]>
        }
      >
    >


  export type WindowSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    width?: boolean
    height?: boolean
    MouseClickEvent?: boolean | Window$MouseClickEventArgs<ExtArgs>
    _count?: boolean | WindowCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["window"]>

  export type WindowSelectScalar = {
    id?: boolean
    width?: boolean
    height?: boolean
  }

  export type WindowInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    MouseClickEvent?: boolean | Window$MouseClickEventArgs<ExtArgs>
    _count?: boolean | WindowCountOutputTypeArgs<ExtArgs>
  }


  type WindowGetPayload<S extends boolean | null | undefined | WindowArgs> = $Types.GetResult<WindowPayload, S>

  type WindowCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WindowFindManyArgs, 'select' | 'include'> & {
      select?: WindowCountAggregateInputType | true
    }

  export interface WindowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Window'], meta: { name: 'Window' } }
    /**
     * Find zero or one Window that matches the filter.
     * @param {WindowFindUniqueArgs} args - Arguments to find a Window
     * @example
     * // Get one Window
     * const window = await prisma.window.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WindowFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WindowFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Window'> extends True ? Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Window that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WindowFindUniqueOrThrowArgs} args - Arguments to find a Window
     * @example
     * // Get one Window
     * const window = await prisma.window.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WindowFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WindowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Window that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowFindFirstArgs} args - Arguments to find a Window
     * @example
     * // Get one Window
     * const window = await prisma.window.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WindowFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WindowFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Window'> extends True ? Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Window that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowFindFirstOrThrowArgs} args - Arguments to find a Window
     * @example
     * // Get one Window
     * const window = await prisma.window.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WindowFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WindowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Windows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Windows
     * const windows = await prisma.window.findMany()
     * 
     * // Get first 10 Windows
     * const windows = await prisma.window.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const windowWithIdOnly = await prisma.window.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WindowFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WindowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<WindowPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Window.
     * @param {WindowCreateArgs} args - Arguments to create a Window.
     * @example
     * // Create one Window
     * const Window = await prisma.window.create({
     *   data: {
     *     // ... data to create a Window
     *   }
     * })
     * 
    **/
    create<T extends WindowCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WindowCreateArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Windows.
     *     @param {WindowCreateManyArgs} args - Arguments to create many Windows.
     *     @example
     *     // Create many Windows
     *     const window = await prisma.window.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WindowCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WindowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Window.
     * @param {WindowDeleteArgs} args - Arguments to delete one Window.
     * @example
     * // Delete one Window
     * const Window = await prisma.window.delete({
     *   where: {
     *     // ... filter to delete one Window
     *   }
     * })
     * 
    **/
    delete<T extends WindowDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WindowDeleteArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Window.
     * @param {WindowUpdateArgs} args - Arguments to update one Window.
     * @example
     * // Update one Window
     * const window = await prisma.window.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WindowUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WindowUpdateArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Windows.
     * @param {WindowDeleteManyArgs} args - Arguments to filter Windows to delete.
     * @example
     * // Delete a few Windows
     * const { count } = await prisma.window.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WindowDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WindowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Windows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Windows
     * const window = await prisma.window.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WindowUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WindowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Window.
     * @param {WindowUpsertArgs} args - Arguments to update or create a Window.
     * @example
     * // Update or create a Window
     * const window = await prisma.window.upsert({
     *   create: {
     *     // ... data to create a Window
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Window we want to update
     *   }
     * })
    **/
    upsert<T extends WindowUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WindowUpsertArgs<ExtArgs>>
    ): Prisma__WindowClient<$Types.GetResult<WindowPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Windows that matches the filter.
     * @param {WindowFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const window = await prisma.window.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WindowFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Window.
     * @param {WindowAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const window = await prisma.window.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WindowAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Windows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowCountArgs} args - Arguments to filter Windows to count.
     * @example
     * // Count the number of Windows
     * const count = await prisma.window.count({
     *   where: {
     *     // ... the filter for the Windows we want to count
     *   }
     * })
    **/
    count<T extends WindowCountArgs>(
      args?: Subset<T, WindowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WindowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Window.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WindowAggregateArgs>(args: Subset<T, WindowAggregateArgs>): Prisma.PrismaPromise<GetWindowAggregateType<T>>

    /**
     * Group by Window.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WindowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WindowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WindowGroupByArgs['orderBy'] }
        : { orderBy?: WindowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WindowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWindowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Window.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WindowClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    MouseClickEvent<T extends Window$MouseClickEventArgs<ExtArgs> = {}>(args?: Subset<T, Window$MouseClickEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Window base type for findUnique actions
   */
  export type WindowFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter, which Window to fetch.
     */
    where: WindowWhereUniqueInput
  }

  /**
   * Window findUnique
   */
  export interface WindowFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WindowFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Window findUniqueOrThrow
   */
  export type WindowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter, which Window to fetch.
     */
    where: WindowWhereUniqueInput
  }


  /**
   * Window base type for findFirst actions
   */
  export type WindowFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter, which Window to fetch.
     */
    where?: WindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Windows to fetch.
     */
    orderBy?: Enumerable<WindowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Windows.
     */
    cursor?: WindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Windows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Windows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Windows.
     */
    distinct?: Enumerable<WindowScalarFieldEnum>
  }

  /**
   * Window findFirst
   */
  export interface WindowFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WindowFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Window findFirstOrThrow
   */
  export type WindowFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter, which Window to fetch.
     */
    where?: WindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Windows to fetch.
     */
    orderBy?: Enumerable<WindowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Windows.
     */
    cursor?: WindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Windows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Windows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Windows.
     */
    distinct?: Enumerable<WindowScalarFieldEnum>
  }


  /**
   * Window findMany
   */
  export type WindowFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter, which Windows to fetch.
     */
    where?: WindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Windows to fetch.
     */
    orderBy?: Enumerable<WindowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Windows.
     */
    cursor?: WindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Windows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Windows.
     */
    skip?: number
    distinct?: Enumerable<WindowScalarFieldEnum>
  }


  /**
   * Window create
   */
  export type WindowCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * The data needed to create a Window.
     */
    data: XOR<WindowCreateInput, WindowUncheckedCreateInput>
  }


  /**
   * Window createMany
   */
  export type WindowCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Windows.
     */
    data: Enumerable<WindowCreateManyInput>
  }


  /**
   * Window update
   */
  export type WindowUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * The data needed to update a Window.
     */
    data: XOR<WindowUpdateInput, WindowUncheckedUpdateInput>
    /**
     * Choose, which Window to update.
     */
    where: WindowWhereUniqueInput
  }


  /**
   * Window updateMany
   */
  export type WindowUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Windows.
     */
    data: XOR<WindowUpdateManyMutationInput, WindowUncheckedUpdateManyInput>
    /**
     * Filter which Windows to update
     */
    where?: WindowWhereInput
  }


  /**
   * Window upsert
   */
  export type WindowUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * The filter to search for the Window to update in case it exists.
     */
    where: WindowWhereUniqueInput
    /**
     * In case the Window found by the `where` argument doesn't exist, create a new Window with this data.
     */
    create: XOR<WindowCreateInput, WindowUncheckedCreateInput>
    /**
     * In case the Window was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WindowUpdateInput, WindowUncheckedUpdateInput>
  }


  /**
   * Window delete
   */
  export type WindowDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
    /**
     * Filter which Window to delete.
     */
    where: WindowWhereUniqueInput
  }


  /**
   * Window deleteMany
   */
  export type WindowDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Windows to delete
     */
    where?: WindowWhereInput
  }


  /**
   * Window findRaw
   */
  export type WindowFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Window aggregateRaw
   */
  export type WindowAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Window.MouseClickEvent
   */
  export type Window$MouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    where?: MouseClickEventWhereInput
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    cursor?: MouseClickEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }


  /**
   * Window without action
   */
  export type WindowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Window
     */
    select?: WindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WindowInclude<ExtArgs> | null
  }



  /**
   * Model UserAgent
   */


  export type AggregateUserAgent = {
    _count: UserAgentCountAggregateOutputType | null
    _min: UserAgentMinAggregateOutputType | null
    _max: UserAgentMaxAggregateOutputType | null
  }

  export type UserAgentMinAggregateOutputType = {
    id: string | null
    platform: string | null
    language: string | null
    browserId: string | null
    oSId: string | null
  }

  export type UserAgentMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    language: string | null
    browserId: string | null
    oSId: string | null
  }

  export type UserAgentCountAggregateOutputType = {
    id: number
    platform: number
    language: number
    browserId: number
    oSId: number
    _all: number
  }


  export type UserAgentMinAggregateInputType = {
    id?: true
    platform?: true
    language?: true
    browserId?: true
    oSId?: true
  }

  export type UserAgentMaxAggregateInputType = {
    id?: true
    platform?: true
    language?: true
    browserId?: true
    oSId?: true
  }

  export type UserAgentCountAggregateInputType = {
    id?: true
    platform?: true
    language?: true
    browserId?: true
    oSId?: true
    _all?: true
  }

  export type UserAgentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAgent to aggregate.
     */
    where?: UserAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAgents to fetch.
     */
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAgents
    **/
    _count?: true | UserAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAgentMaxAggregateInputType
  }

  export type GetUserAgentAggregateType<T extends UserAgentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAgent[P]>
      : GetScalarType<T[P], AggregateUserAgent[P]>
  }




  export type UserAgentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAgentWhereInput
    orderBy?: Enumerable<UserAgentOrderByWithAggregationInput>
    by: UserAgentScalarFieldEnum[]
    having?: UserAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAgentCountAggregateInputType | true
    _min?: UserAgentMinAggregateInputType
    _max?: UserAgentMaxAggregateInputType
  }


  export type UserAgentGroupByOutputType = {
    id: string
    platform: string
    language: string
    browserId: string
    oSId: string
    _count: UserAgentCountAggregateOutputType | null
    _min: UserAgentMinAggregateOutputType | null
    _max: UserAgentMaxAggregateOutputType | null
  }

  type GetUserAgentGroupByPayload<T extends UserAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAgentGroupByOutputType[P]>
            : GetScalarType<T[P], UserAgentGroupByOutputType[P]>
        }
      >
    >


  export type UserAgentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    language?: boolean
    browserId?: boolean
    oSId?: boolean
    browser?: boolean | BrowserArgs<ExtArgs>
    os?: boolean | OSArgs<ExtArgs>
    MouseClickEvent?: boolean | UserAgent$MouseClickEventArgs<ExtArgs>
    PathnameChangeEvent?: boolean | UserAgent$PathnameChangeEventArgs<ExtArgs>
    LeaveAppEvent?: boolean | UserAgent$LeaveAppEventArgs<ExtArgs>
    _count?: boolean | UserAgentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["userAgent"]>

  export type UserAgentSelectScalar = {
    id?: boolean
    platform?: boolean
    language?: boolean
    browserId?: boolean
    oSId?: boolean
  }

  export type UserAgentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    browser?: boolean | BrowserArgs<ExtArgs>
    os?: boolean | OSArgs<ExtArgs>
    MouseClickEvent?: boolean | UserAgent$MouseClickEventArgs<ExtArgs>
    PathnameChangeEvent?: boolean | UserAgent$PathnameChangeEventArgs<ExtArgs>
    LeaveAppEvent?: boolean | UserAgent$LeaveAppEventArgs<ExtArgs>
    _count?: boolean | UserAgentCountOutputTypeArgs<ExtArgs>
  }


  type UserAgentGetPayload<S extends boolean | null | undefined | UserAgentArgs> = $Types.GetResult<UserAgentPayload, S>

  type UserAgentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserAgentFindManyArgs, 'select' | 'include'> & {
      select?: UserAgentCountAggregateInputType | true
    }

  export interface UserAgentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAgent'], meta: { name: 'UserAgent' } }
    /**
     * Find zero or one UserAgent that matches the filter.
     * @param {UserAgentFindUniqueArgs} args - Arguments to find a UserAgent
     * @example
     * // Get one UserAgent
     * const userAgent = await prisma.userAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAgentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAgentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAgent'> extends True ? Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one UserAgent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAgentFindUniqueOrThrowArgs} args - Arguments to find a UserAgent
     * @example
     * // Get one UserAgent
     * const userAgent = await prisma.userAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAgentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAgentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first UserAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentFindFirstArgs} args - Arguments to find a UserAgent
     * @example
     * // Get one UserAgent
     * const userAgent = await prisma.userAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAgentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAgentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAgent'> extends True ? Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first UserAgent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentFindFirstOrThrowArgs} args - Arguments to find a UserAgent
     * @example
     * // Get one UserAgent
     * const userAgent = await prisma.userAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAgentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAgentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more UserAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAgents
     * const userAgents = await prisma.userAgent.findMany()
     * 
     * // Get first 10 UserAgents
     * const userAgents = await prisma.userAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAgentWithIdOnly = await prisma.userAgent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserAgentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAgentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a UserAgent.
     * @param {UserAgentCreateArgs} args - Arguments to create a UserAgent.
     * @example
     * // Create one UserAgent
     * const UserAgent = await prisma.userAgent.create({
     *   data: {
     *     // ... data to create a UserAgent
     *   }
     * })
     * 
    **/
    create<T extends UserAgentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAgentCreateArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many UserAgents.
     *     @param {UserAgentCreateManyArgs} args - Arguments to create many UserAgents.
     *     @example
     *     // Create many UserAgents
     *     const userAgent = await prisma.userAgent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAgentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAgentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAgent.
     * @param {UserAgentDeleteArgs} args - Arguments to delete one UserAgent.
     * @example
     * // Delete one UserAgent
     * const UserAgent = await prisma.userAgent.delete({
     *   where: {
     *     // ... filter to delete one UserAgent
     *   }
     * })
     * 
    **/
    delete<T extends UserAgentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserAgentDeleteArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one UserAgent.
     * @param {UserAgentUpdateArgs} args - Arguments to update one UserAgent.
     * @example
     * // Update one UserAgent
     * const userAgent = await prisma.userAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAgentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAgentUpdateArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more UserAgents.
     * @param {UserAgentDeleteManyArgs} args - Arguments to filter UserAgents to delete.
     * @example
     * // Delete a few UserAgents
     * const { count } = await prisma.userAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAgentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAgentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAgents
     * const userAgent = await prisma.userAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAgentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserAgentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAgent.
     * @param {UserAgentUpsertArgs} args - Arguments to update or create a UserAgent.
     * @example
     * // Update or create a UserAgent
     * const userAgent = await prisma.userAgent.upsert({
     *   create: {
     *     // ... data to create a UserAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAgent we want to update
     *   }
     * })
    **/
    upsert<T extends UserAgentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserAgentUpsertArgs<ExtArgs>>
    ): Prisma__UserAgentClient<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more UserAgents that matches the filter.
     * @param {UserAgentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAgent = await prisma.userAgent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserAgentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAgent.
     * @param {UserAgentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAgent = await prisma.userAgent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAgentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentCountArgs} args - Arguments to filter UserAgents to count.
     * @example
     * // Count the number of UserAgents
     * const count = await prisma.userAgent.count({
     *   where: {
     *     // ... the filter for the UserAgents we want to count
     *   }
     * })
    **/
    count<T extends UserAgentCountArgs>(
      args?: Subset<T, UserAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAgentAggregateArgs>(args: Subset<T, UserAgentAggregateArgs>): Prisma.PrismaPromise<GetUserAgentAggregateType<T>>

    /**
     * Group by UserAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAgentGroupByArgs['orderBy'] }
        : { orderBy?: UserAgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAgentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    browser<T extends BrowserArgs<ExtArgs> = {}>(args?: Subset<T, BrowserArgs<ExtArgs>>): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    os<T extends OSArgs<ExtArgs> = {}>(args?: Subset<T, OSArgs<ExtArgs>>): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    MouseClickEvent<T extends UserAgent$MouseClickEventArgs<ExtArgs> = {}>(args?: Subset<T, UserAgent$MouseClickEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MouseClickEventPayload<ExtArgs>, T, 'findMany', never>| Null>;

    PathnameChangeEvent<T extends UserAgent$PathnameChangeEventArgs<ExtArgs> = {}>(args?: Subset<T, UserAgent$PathnameChangeEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PathnameChangeEventPayload<ExtArgs>, T, 'findMany', never>| Null>;

    LeaveAppEvent<T extends UserAgent$LeaveAppEventArgs<ExtArgs> = {}>(args?: Subset<T, UserAgent$LeaveAppEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<LeaveAppEventPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserAgent base type for findUnique actions
   */
  export type UserAgentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter, which UserAgent to fetch.
     */
    where: UserAgentWhereUniqueInput
  }

  /**
   * UserAgent findUnique
   */
  export interface UserAgentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserAgentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAgent findUniqueOrThrow
   */
  export type UserAgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter, which UserAgent to fetch.
     */
    where: UserAgentWhereUniqueInput
  }


  /**
   * UserAgent base type for findFirst actions
   */
  export type UserAgentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter, which UserAgent to fetch.
     */
    where?: UserAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAgents to fetch.
     */
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAgents.
     */
    cursor?: UserAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAgents.
     */
    distinct?: Enumerable<UserAgentScalarFieldEnum>
  }

  /**
   * UserAgent findFirst
   */
  export interface UserAgentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserAgentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAgent findFirstOrThrow
   */
  export type UserAgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter, which UserAgent to fetch.
     */
    where?: UserAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAgents to fetch.
     */
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAgents.
     */
    cursor?: UserAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAgents.
     */
    distinct?: Enumerable<UserAgentScalarFieldEnum>
  }


  /**
   * UserAgent findMany
   */
  export type UserAgentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter, which UserAgents to fetch.
     */
    where?: UserAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAgents to fetch.
     */
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAgents.
     */
    cursor?: UserAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAgents.
     */
    skip?: number
    distinct?: Enumerable<UserAgentScalarFieldEnum>
  }


  /**
   * UserAgent create
   */
  export type UserAgentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAgent.
     */
    data: XOR<UserAgentCreateInput, UserAgentUncheckedCreateInput>
  }


  /**
   * UserAgent createMany
   */
  export type UserAgentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAgents.
     */
    data: Enumerable<UserAgentCreateManyInput>
  }


  /**
   * UserAgent update
   */
  export type UserAgentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAgent.
     */
    data: XOR<UserAgentUpdateInput, UserAgentUncheckedUpdateInput>
    /**
     * Choose, which UserAgent to update.
     */
    where: UserAgentWhereUniqueInput
  }


  /**
   * UserAgent updateMany
   */
  export type UserAgentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAgents.
     */
    data: XOR<UserAgentUpdateManyMutationInput, UserAgentUncheckedUpdateManyInput>
    /**
     * Filter which UserAgents to update
     */
    where?: UserAgentWhereInput
  }


  /**
   * UserAgent upsert
   */
  export type UserAgentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAgent to update in case it exists.
     */
    where: UserAgentWhereUniqueInput
    /**
     * In case the UserAgent found by the `where` argument doesn't exist, create a new UserAgent with this data.
     */
    create: XOR<UserAgentCreateInput, UserAgentUncheckedCreateInput>
    /**
     * In case the UserAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAgentUpdateInput, UserAgentUncheckedUpdateInput>
  }


  /**
   * UserAgent delete
   */
  export type UserAgentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    /**
     * Filter which UserAgent to delete.
     */
    where: UserAgentWhereUniqueInput
  }


  /**
   * UserAgent deleteMany
   */
  export type UserAgentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAgents to delete
     */
    where?: UserAgentWhereInput
  }


  /**
   * UserAgent findRaw
   */
  export type UserAgentFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAgent aggregateRaw
   */
  export type UserAgentAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAgent.MouseClickEvent
   */
  export type UserAgent$MouseClickEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouseClickEvent
     */
    select?: MouseClickEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MouseClickEventInclude<ExtArgs> | null
    where?: MouseClickEventWhereInput
    orderBy?: Enumerable<MouseClickEventOrderByWithRelationInput>
    cursor?: MouseClickEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MouseClickEventScalarFieldEnum>
  }


  /**
   * UserAgent.PathnameChangeEvent
   */
  export type UserAgent$PathnameChangeEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathnameChangeEvent
     */
    select?: PathnameChangeEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PathnameChangeEventInclude<ExtArgs> | null
    where?: PathnameChangeEventWhereInput
    orderBy?: Enumerable<PathnameChangeEventOrderByWithRelationInput>
    cursor?: PathnameChangeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PathnameChangeEventScalarFieldEnum>
  }


  /**
   * UserAgent.LeaveAppEvent
   */
  export type UserAgent$LeaveAppEventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveAppEvent
     */
    select?: LeaveAppEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LeaveAppEventInclude<ExtArgs> | null
    where?: LeaveAppEventWhereInput
    orderBy?: Enumerable<LeaveAppEventOrderByWithRelationInput>
    cursor?: LeaveAppEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LeaveAppEventScalarFieldEnum>
  }


  /**
   * UserAgent without action
   */
  export type UserAgentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
  }



  /**
   * Model Browser
   */


  export type AggregateBrowser = {
    _count: BrowserCountAggregateOutputType | null
    _min: BrowserMinAggregateOutputType | null
    _max: BrowserMaxAggregateOutputType | null
  }

  export type BrowserMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
  }

  export type BrowserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
  }

  export type BrowserCountAggregateOutputType = {
    id: number
    name: number
    version: number
    _all: number
  }


  export type BrowserMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
  }

  export type BrowserMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
  }

  export type BrowserCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    _all?: true
  }

  export type BrowserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Browser to aggregate.
     */
    where?: BrowserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Browsers to fetch.
     */
    orderBy?: Enumerable<BrowserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrowserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Browsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Browsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Browsers
    **/
    _count?: true | BrowserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrowserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrowserMaxAggregateInputType
  }

  export type GetBrowserAggregateType<T extends BrowserAggregateArgs> = {
        [P in keyof T & keyof AggregateBrowser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrowser[P]>
      : GetScalarType<T[P], AggregateBrowser[P]>
  }




  export type BrowserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BrowserWhereInput
    orderBy?: Enumerable<BrowserOrderByWithAggregationInput>
    by: BrowserScalarFieldEnum[]
    having?: BrowserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrowserCountAggregateInputType | true
    _min?: BrowserMinAggregateInputType
    _max?: BrowserMaxAggregateInputType
  }


  export type BrowserGroupByOutputType = {
    id: string
    name: string | null
    version: string | null
    _count: BrowserCountAggregateOutputType | null
    _min: BrowserMinAggregateOutputType | null
    _max: BrowserMaxAggregateOutputType | null
  }

  type GetBrowserGroupByPayload<T extends BrowserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BrowserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrowserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrowserGroupByOutputType[P]>
            : GetScalarType<T[P], BrowserGroupByOutputType[P]>
        }
      >
    >


  export type BrowserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    UserAgent?: boolean | Browser$UserAgentArgs<ExtArgs>
    _count?: boolean | BrowserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["browser"]>

  export type BrowserSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
  }

  export type BrowserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserAgent?: boolean | Browser$UserAgentArgs<ExtArgs>
    _count?: boolean | BrowserCountOutputTypeArgs<ExtArgs>
  }


  type BrowserGetPayload<S extends boolean | null | undefined | BrowserArgs> = $Types.GetResult<BrowserPayload, S>

  type BrowserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BrowserFindManyArgs, 'select' | 'include'> & {
      select?: BrowserCountAggregateInputType | true
    }

  export interface BrowserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Browser'], meta: { name: 'Browser' } }
    /**
     * Find zero or one Browser that matches the filter.
     * @param {BrowserFindUniqueArgs} args - Arguments to find a Browser
     * @example
     * // Get one Browser
     * const browser = await prisma.browser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrowserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BrowserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Browser'> extends True ? Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Browser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrowserFindUniqueOrThrowArgs} args - Arguments to find a Browser
     * @example
     * // Get one Browser
     * const browser = await prisma.browser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrowserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrowserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Browser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserFindFirstArgs} args - Arguments to find a Browser
     * @example
     * // Get one Browser
     * const browser = await prisma.browser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrowserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BrowserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Browser'> extends True ? Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Browser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserFindFirstOrThrowArgs} args - Arguments to find a Browser
     * @example
     * // Get one Browser
     * const browser = await prisma.browser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrowserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrowserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Browsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Browsers
     * const browsers = await prisma.browser.findMany()
     * 
     * // Get first 10 Browsers
     * const browsers = await prisma.browser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const browserWithIdOnly = await prisma.browser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrowserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrowserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Browser.
     * @param {BrowserCreateArgs} args - Arguments to create a Browser.
     * @example
     * // Create one Browser
     * const Browser = await prisma.browser.create({
     *   data: {
     *     // ... data to create a Browser
     *   }
     * })
     * 
    **/
    create<T extends BrowserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrowserCreateArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Browsers.
     *     @param {BrowserCreateManyArgs} args - Arguments to create many Browsers.
     *     @example
     *     // Create many Browsers
     *     const browser = await prisma.browser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrowserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrowserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Browser.
     * @param {BrowserDeleteArgs} args - Arguments to delete one Browser.
     * @example
     * // Delete one Browser
     * const Browser = await prisma.browser.delete({
     *   where: {
     *     // ... filter to delete one Browser
     *   }
     * })
     * 
    **/
    delete<T extends BrowserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrowserDeleteArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Browser.
     * @param {BrowserUpdateArgs} args - Arguments to update one Browser.
     * @example
     * // Update one Browser
     * const browser = await prisma.browser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrowserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrowserUpdateArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Browsers.
     * @param {BrowserDeleteManyArgs} args - Arguments to filter Browsers to delete.
     * @example
     * // Delete a few Browsers
     * const { count } = await prisma.browser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrowserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrowserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Browsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Browsers
     * const browser = await prisma.browser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrowserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrowserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Browser.
     * @param {BrowserUpsertArgs} args - Arguments to update or create a Browser.
     * @example
     * // Update or create a Browser
     * const browser = await prisma.browser.upsert({
     *   create: {
     *     // ... data to create a Browser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Browser we want to update
     *   }
     * })
    **/
    upsert<T extends BrowserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrowserUpsertArgs<ExtArgs>>
    ): Prisma__BrowserClient<$Types.GetResult<BrowserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more Browsers that matches the filter.
     * @param {BrowserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const browser = await prisma.browser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BrowserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Browser.
     * @param {BrowserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const browser = await prisma.browser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BrowserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Browsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserCountArgs} args - Arguments to filter Browsers to count.
     * @example
     * // Count the number of Browsers
     * const count = await prisma.browser.count({
     *   where: {
     *     // ... the filter for the Browsers we want to count
     *   }
     * })
    **/
    count<T extends BrowserCountArgs>(
      args?: Subset<T, BrowserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrowserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Browser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrowserAggregateArgs>(args: Subset<T, BrowserAggregateArgs>): Prisma.PrismaPromise<GetBrowserAggregateType<T>>

    /**
     * Group by Browser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrowserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrowserGroupByArgs['orderBy'] }
        : { orderBy?: BrowserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrowserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrowserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Browser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BrowserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    UserAgent<T extends Browser$UserAgentArgs<ExtArgs> = {}>(args?: Subset<T, Browser$UserAgentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Browser base type for findUnique actions
   */
  export type BrowserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter, which Browser to fetch.
     */
    where: BrowserWhereUniqueInput
  }

  /**
   * Browser findUnique
   */
  export interface BrowserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BrowserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Browser findUniqueOrThrow
   */
  export type BrowserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter, which Browser to fetch.
     */
    where: BrowserWhereUniqueInput
  }


  /**
   * Browser base type for findFirst actions
   */
  export type BrowserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter, which Browser to fetch.
     */
    where?: BrowserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Browsers to fetch.
     */
    orderBy?: Enumerable<BrowserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Browsers.
     */
    cursor?: BrowserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Browsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Browsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Browsers.
     */
    distinct?: Enumerable<BrowserScalarFieldEnum>
  }

  /**
   * Browser findFirst
   */
  export interface BrowserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BrowserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Browser findFirstOrThrow
   */
  export type BrowserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter, which Browser to fetch.
     */
    where?: BrowserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Browsers to fetch.
     */
    orderBy?: Enumerable<BrowserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Browsers.
     */
    cursor?: BrowserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Browsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Browsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Browsers.
     */
    distinct?: Enumerable<BrowserScalarFieldEnum>
  }


  /**
   * Browser findMany
   */
  export type BrowserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter, which Browsers to fetch.
     */
    where?: BrowserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Browsers to fetch.
     */
    orderBy?: Enumerable<BrowserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Browsers.
     */
    cursor?: BrowserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Browsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Browsers.
     */
    skip?: number
    distinct?: Enumerable<BrowserScalarFieldEnum>
  }


  /**
   * Browser create
   */
  export type BrowserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * The data needed to create a Browser.
     */
    data?: XOR<BrowserCreateInput, BrowserUncheckedCreateInput>
  }


  /**
   * Browser createMany
   */
  export type BrowserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Browsers.
     */
    data: Enumerable<BrowserCreateManyInput>
  }


  /**
   * Browser update
   */
  export type BrowserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * The data needed to update a Browser.
     */
    data: XOR<BrowserUpdateInput, BrowserUncheckedUpdateInput>
    /**
     * Choose, which Browser to update.
     */
    where: BrowserWhereUniqueInput
  }


  /**
   * Browser updateMany
   */
  export type BrowserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Browsers.
     */
    data: XOR<BrowserUpdateManyMutationInput, BrowserUncheckedUpdateManyInput>
    /**
     * Filter which Browsers to update
     */
    where?: BrowserWhereInput
  }


  /**
   * Browser upsert
   */
  export type BrowserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * The filter to search for the Browser to update in case it exists.
     */
    where: BrowserWhereUniqueInput
    /**
     * In case the Browser found by the `where` argument doesn't exist, create a new Browser with this data.
     */
    create: XOR<BrowserCreateInput, BrowserUncheckedCreateInput>
    /**
     * In case the Browser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrowserUpdateInput, BrowserUncheckedUpdateInput>
  }


  /**
   * Browser delete
   */
  export type BrowserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
    /**
     * Filter which Browser to delete.
     */
    where: BrowserWhereUniqueInput
  }


  /**
   * Browser deleteMany
   */
  export type BrowserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Browsers to delete
     */
    where?: BrowserWhereInput
  }


  /**
   * Browser findRaw
   */
  export type BrowserFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Browser aggregateRaw
   */
  export type BrowserAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Browser.UserAgent
   */
  export type Browser$UserAgentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    where?: UserAgentWhereInput
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    cursor?: UserAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserAgentScalarFieldEnum>
  }


  /**
   * Browser without action
   */
  export type BrowserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Browser
     */
    select?: BrowserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrowserInclude<ExtArgs> | null
  }



  /**
   * Model OS
   */


  export type AggregateOS = {
    _count: OSCountAggregateOutputType | null
    _min: OSMinAggregateOutputType | null
    _max: OSMaxAggregateOutputType | null
  }

  export type OSMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
  }

  export type OSMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
  }

  export type OSCountAggregateOutputType = {
    id: number
    name: number
    version: number
    _all: number
  }


  export type OSMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
  }

  export type OSMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
  }

  export type OSCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    _all?: true
  }

  export type OSAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OS to aggregate.
     */
    where?: OSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OS to fetch.
     */
    orderBy?: Enumerable<OSOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OS
    **/
    _count?: true | OSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OSMaxAggregateInputType
  }

  export type GetOSAggregateType<T extends OSAggregateArgs> = {
        [P in keyof T & keyof AggregateOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOS[P]>
      : GetScalarType<T[P], AggregateOS[P]>
  }




  export type OSGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OSWhereInput
    orderBy?: Enumerable<OSOrderByWithAggregationInput>
    by: OSScalarFieldEnum[]
    having?: OSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OSCountAggregateInputType | true
    _min?: OSMinAggregateInputType
    _max?: OSMaxAggregateInputType
  }


  export type OSGroupByOutputType = {
    id: string
    name: string | null
    version: string | null
    _count: OSCountAggregateOutputType | null
    _min: OSMinAggregateOutputType | null
    _max: OSMaxAggregateOutputType | null
  }

  type GetOSGroupByPayload<T extends OSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OSGroupByOutputType[P]>
            : GetScalarType<T[P], OSGroupByOutputType[P]>
        }
      >
    >


  export type OSSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    UserAgent?: boolean | OS$UserAgentArgs<ExtArgs>
    _count?: boolean | OSCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["oS"]>

  export type OSSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
  }

  export type OSInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserAgent?: boolean | OS$UserAgentArgs<ExtArgs>
    _count?: boolean | OSCountOutputTypeArgs<ExtArgs>
  }


  type OSGetPayload<S extends boolean | null | undefined | OSArgs> = $Types.GetResult<OSPayload, S>

  type OSCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OSFindManyArgs, 'select' | 'include'> & {
      select?: OSCountAggregateInputType | true
    }

  export interface OSDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OS'], meta: { name: 'OS' } }
    /**
     * Find zero or one OS that matches the filter.
     * @param {OSFindUniqueArgs} args - Arguments to find a OS
     * @example
     * // Get one OS
     * const oS = await prisma.oS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OSFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OSFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OS'> extends True ? Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one OS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OSFindUniqueOrThrowArgs} args - Arguments to find a OS
     * @example
     * // Get one OS
     * const oS = await prisma.oS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first OS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSFindFirstArgs} args - Arguments to find a OS
     * @example
     * // Get one OS
     * const oS = await prisma.oS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OSFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OSFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OS'> extends True ? Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first OS that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSFindFirstOrThrowArgs} args - Arguments to find a OS
     * @example
     * // Get one OS
     * const oS = await prisma.oS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more OS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OS
     * const oS = await prisma.oS.findMany()
     * 
     * // Get first 10 OS
     * const oS = await prisma.oS.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oSWithIdOnly = await prisma.oS.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OSPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a OS.
     * @param {OSCreateArgs} args - Arguments to create a OS.
     * @example
     * // Create one OS
     * const OS = await prisma.oS.create({
     *   data: {
     *     // ... data to create a OS
     *   }
     * })
     * 
    **/
    create<T extends OSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OSCreateArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many OS.
     *     @param {OSCreateManyArgs} args - Arguments to create many OS.
     *     @example
     *     // Create many OS
     *     const oS = await prisma.oS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OS.
     * @param {OSDeleteArgs} args - Arguments to delete one OS.
     * @example
     * // Delete one OS
     * const OS = await prisma.oS.delete({
     *   where: {
     *     // ... filter to delete one OS
     *   }
     * })
     * 
    **/
    delete<T extends OSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OSDeleteArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one OS.
     * @param {OSUpdateArgs} args - Arguments to update one OS.
     * @example
     * // Update one OS
     * const oS = await prisma.oS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OSUpdateArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more OS.
     * @param {OSDeleteManyArgs} args - Arguments to filter OS to delete.
     * @example
     * // Delete a few OS
     * const { count } = await prisma.oS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OS
     * const oS = await prisma.oS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OS.
     * @param {OSUpsertArgs} args - Arguments to update or create a OS.
     * @example
     * // Update or create a OS
     * const oS = await prisma.oS.upsert({
     *   create: {
     *     // ... data to create a OS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OS we want to update
     *   }
     * })
    **/
    upsert<T extends OSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OSUpsertArgs<ExtArgs>>
    ): Prisma__OSClient<$Types.GetResult<OSPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more OS that matches the filter.
     * @param {OSFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oS = await prisma.oS.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OSFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OS.
     * @param {OSAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oS = await prisma.oS.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OSAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of OS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCountArgs} args - Arguments to filter OS to count.
     * @example
     * // Count the number of OS
     * const count = await prisma.oS.count({
     *   where: {
     *     // ... the filter for the OS we want to count
     *   }
     * })
    **/
    count<T extends OSCountArgs>(
      args?: Subset<T, OSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OSAggregateArgs>(args: Subset<T, OSAggregateArgs>): Prisma.PrismaPromise<GetOSAggregateType<T>>

    /**
     * Group by OS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OSGroupByArgs['orderBy'] }
        : { orderBy?: OSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OSClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    UserAgent<T extends OS$UserAgentArgs<ExtArgs> = {}>(args?: Subset<T, OS$UserAgentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserAgentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OS base type for findUnique actions
   */
  export type OSFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter, which OS to fetch.
     */
    where: OSWhereUniqueInput
  }

  /**
   * OS findUnique
   */
  export interface OSFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OSFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OS findUniqueOrThrow
   */
  export type OSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter, which OS to fetch.
     */
    where: OSWhereUniqueInput
  }


  /**
   * OS base type for findFirst actions
   */
  export type OSFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter, which OS to fetch.
     */
    where?: OSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OS to fetch.
     */
    orderBy?: Enumerable<OSOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OS.
     */
    cursor?: OSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OS.
     */
    distinct?: Enumerable<OSScalarFieldEnum>
  }

  /**
   * OS findFirst
   */
  export interface OSFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OSFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OS findFirstOrThrow
   */
  export type OSFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter, which OS to fetch.
     */
    where?: OSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OS to fetch.
     */
    orderBy?: Enumerable<OSOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OS.
     */
    cursor?: OSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OS.
     */
    distinct?: Enumerable<OSScalarFieldEnum>
  }


  /**
   * OS findMany
   */
  export type OSFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter, which OS to fetch.
     */
    where?: OSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OS to fetch.
     */
    orderBy?: Enumerable<OSOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OS.
     */
    cursor?: OSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OS.
     */
    skip?: number
    distinct?: Enumerable<OSScalarFieldEnum>
  }


  /**
   * OS create
   */
  export type OSCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * The data needed to create a OS.
     */
    data?: XOR<OSCreateInput, OSUncheckedCreateInput>
  }


  /**
   * OS createMany
   */
  export type OSCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OS.
     */
    data: Enumerable<OSCreateManyInput>
  }


  /**
   * OS update
   */
  export type OSUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * The data needed to update a OS.
     */
    data: XOR<OSUpdateInput, OSUncheckedUpdateInput>
    /**
     * Choose, which OS to update.
     */
    where: OSWhereUniqueInput
  }


  /**
   * OS updateMany
   */
  export type OSUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OS.
     */
    data: XOR<OSUpdateManyMutationInput, OSUncheckedUpdateManyInput>
    /**
     * Filter which OS to update
     */
    where?: OSWhereInput
  }


  /**
   * OS upsert
   */
  export type OSUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * The filter to search for the OS to update in case it exists.
     */
    where: OSWhereUniqueInput
    /**
     * In case the OS found by the `where` argument doesn't exist, create a new OS with this data.
     */
    create: XOR<OSCreateInput, OSUncheckedCreateInput>
    /**
     * In case the OS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OSUpdateInput, OSUncheckedUpdateInput>
  }


  /**
   * OS delete
   */
  export type OSDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
    /**
     * Filter which OS to delete.
     */
    where: OSWhereUniqueInput
  }


  /**
   * OS deleteMany
   */
  export type OSDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OS to delete
     */
    where?: OSWhereInput
  }


  /**
   * OS findRaw
   */
  export type OSFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * OS aggregateRaw
   */
  export type OSAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * OS.UserAgent
   */
  export type OS$UserAgentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAgent
     */
    select?: UserAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAgentInclude<ExtArgs> | null
    where?: UserAgentWhereInput
    orderBy?: Enumerable<UserAgentOrderByWithRelationInput>
    cursor?: UserAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserAgentScalarFieldEnum>
  }


  /**
   * OS without action
   */
  export type OSArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OS
     */
    select?: OSSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OSInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const ButtonEventScalarFieldEnum: {
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

  export type ButtonEventScalarFieldEnum = (typeof ButtonEventScalarFieldEnum)[keyof typeof ButtonEventScalarFieldEnum]


  export const MouseClickEventScalarFieldEnum: {
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

  export type MouseClickEventScalarFieldEnum = (typeof MouseClickEventScalarFieldEnum)[keyof typeof MouseClickEventScalarFieldEnum]


  export const PathnameChangeEventScalarFieldEnum: {
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

  export type PathnameChangeEventScalarFieldEnum = (typeof PathnameChangeEventScalarFieldEnum)[keyof typeof PathnameChangeEventScalarFieldEnum]


  export const LeaveAppEventScalarFieldEnum: {
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

  export type LeaveAppEventScalarFieldEnum = (typeof LeaveAppEventScalarFieldEnum)[keyof typeof LeaveAppEventScalarFieldEnum]


  export const ClickScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y'
  };

  export type ClickScalarFieldEnum = (typeof ClickScalarFieldEnum)[keyof typeof ClickScalarFieldEnum]


  export const WindowScalarFieldEnum: {
    id: 'id',
    width: 'width',
    height: 'height'
  };

  export type WindowScalarFieldEnum = (typeof WindowScalarFieldEnum)[keyof typeof WindowScalarFieldEnum]


  export const UserAgentScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    language: 'language',
    browserId: 'browserId',
    oSId: 'oSId'
  };

  export type UserAgentScalarFieldEnum = (typeof UserAgentScalarFieldEnum)[keyof typeof UserAgentScalarFieldEnum]


  export const BrowserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version'
  };

  export type BrowserScalarFieldEnum = (typeof BrowserScalarFieldEnum)[keyof typeof BrowserScalarFieldEnum]


  export const OSScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version'
  };

  export type OSScalarFieldEnum = (typeof OSScalarFieldEnum)[keyof typeof OSScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type ButtonEventWhereInput = {
    AND?: Enumerable<ButtonEventWhereInput>
    OR?: Enumerable<ButtonEventWhereInput>
    NOT?: Enumerable<ButtonEventWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    pathname?: StringFilter | string
    buttonContent?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ButtonEventOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    buttonContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ButtonEventWhereUniqueInput = {
    id?: string
  }

  export type ButtonEventOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    buttonContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ButtonEventCountOrderByAggregateInput
    _avg?: ButtonEventAvgOrderByAggregateInput
    _max?: ButtonEventMaxOrderByAggregateInput
    _min?: ButtonEventMinOrderByAggregateInput
    _sum?: ButtonEventSumOrderByAggregateInput
  }

  export type ButtonEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ButtonEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<ButtonEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ButtonEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    event?: EnumEventTypeWithAggregatesFilter | EventType
    event_id?: StringWithAggregatesFilter | string
    timestamp?: IntWithAggregatesFilter | number
    user?: IntWithAggregatesFilter | number
    uuid?: StringWithAggregatesFilter | string
    pathname?: StringWithAggregatesFilter | string
    buttonContent?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MouseClickEventWhereInput = {
    AND?: Enumerable<MouseClickEventWhereInput>
    OR?: Enumerable<MouseClickEventWhereInput>
    NOT?: Enumerable<MouseClickEventWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    pathname?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    clickId?: StringFilter | string
    windowId?: StringFilter | string
    userAgentId?: StringFilter | string
    click?: XOR<ClickRelationFilter, ClickWhereInput>
    window?: XOR<WindowRelationFilter, WindowWhereInput>
    userAgent?: XOR<UserAgentRelationFilter, UserAgentWhereInput>
  }

  export type MouseClickEventOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clickId?: SortOrder
    windowId?: SortOrder
    userAgentId?: SortOrder
    click?: ClickOrderByWithRelationInput
    window?: WindowOrderByWithRelationInput
    userAgent?: UserAgentOrderByWithRelationInput
  }

  export type MouseClickEventWhereUniqueInput = {
    id?: string
  }

  export type MouseClickEventOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clickId?: SortOrder
    windowId?: SortOrder
    userAgentId?: SortOrder
    _count?: MouseClickEventCountOrderByAggregateInput
    _avg?: MouseClickEventAvgOrderByAggregateInput
    _max?: MouseClickEventMaxOrderByAggregateInput
    _min?: MouseClickEventMinOrderByAggregateInput
    _sum?: MouseClickEventSumOrderByAggregateInput
  }

  export type MouseClickEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MouseClickEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<MouseClickEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MouseClickEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    event?: EnumEventTypeWithAggregatesFilter | EventType
    event_id?: StringWithAggregatesFilter | string
    timestamp?: IntWithAggregatesFilter | number
    user?: IntWithAggregatesFilter | number
    uuid?: StringWithAggregatesFilter | string
    pathname?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    clickId?: StringWithAggregatesFilter | string
    windowId?: StringWithAggregatesFilter | string
    userAgentId?: StringWithAggregatesFilter | string
  }

  export type PathnameChangeEventWhereInput = {
    AND?: Enumerable<PathnameChangeEventWhereInput>
    OR?: Enumerable<PathnameChangeEventWhereInput>
    NOT?: Enumerable<PathnameChangeEventWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    startTime?: IntFilter | number
    endTime?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userAgentId?: StringFilter | string
    userAgent?: XOR<UserAgentRelationFilter, UserAgentWhereInput>
  }

  export type PathnameChangeEventOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
    userAgent?: UserAgentOrderByWithRelationInput
  }

  export type PathnameChangeEventWhereUniqueInput = {
    id?: string
  }

  export type PathnameChangeEventOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
    _count?: PathnameChangeEventCountOrderByAggregateInput
    _avg?: PathnameChangeEventAvgOrderByAggregateInput
    _max?: PathnameChangeEventMaxOrderByAggregateInput
    _min?: PathnameChangeEventMinOrderByAggregateInput
    _sum?: PathnameChangeEventSumOrderByAggregateInput
  }

  export type PathnameChangeEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PathnameChangeEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<PathnameChangeEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PathnameChangeEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    event?: EnumEventTypeWithAggregatesFilter | EventType
    event_id?: StringWithAggregatesFilter | string
    timestamp?: IntWithAggregatesFilter | number
    user?: IntWithAggregatesFilter | number
    uuid?: StringWithAggregatesFilter | string
    startTime?: IntWithAggregatesFilter | number
    endTime?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userAgentId?: StringWithAggregatesFilter | string
  }

  export type LeaveAppEventWhereInput = {
    AND?: Enumerable<LeaveAppEventWhereInput>
    OR?: Enumerable<LeaveAppEventWhereInput>
    NOT?: Enumerable<LeaveAppEventWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    visitedPages?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userAgentId?: StringFilter | string
    userAgent?: XOR<UserAgentRelationFilter, UserAgentWhereInput>
  }

  export type LeaveAppEventOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    visitedPages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
    userAgent?: UserAgentOrderByWithRelationInput
  }

  export type LeaveAppEventWhereUniqueInput = {
    id?: string
  }

  export type LeaveAppEventOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    visitedPages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
    _count?: LeaveAppEventCountOrderByAggregateInput
    _avg?: LeaveAppEventAvgOrderByAggregateInput
    _max?: LeaveAppEventMaxOrderByAggregateInput
    _min?: LeaveAppEventMinOrderByAggregateInput
    _sum?: LeaveAppEventSumOrderByAggregateInput
  }

  export type LeaveAppEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LeaveAppEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<LeaveAppEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LeaveAppEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    event?: EnumEventTypeWithAggregatesFilter | EventType
    event_id?: StringWithAggregatesFilter | string
    timestamp?: IntWithAggregatesFilter | number
    user?: IntWithAggregatesFilter | number
    uuid?: StringWithAggregatesFilter | string
    visitedPages?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userAgentId?: StringWithAggregatesFilter | string
  }

  export type ClickWhereInput = {
    AND?: Enumerable<ClickWhereInput>
    OR?: Enumerable<ClickWhereInput>
    NOT?: Enumerable<ClickWhereInput>
    id?: StringFilter | string
    x?: IntFilter | number
    y?: IntFilter | number
    MouseClickEvent?: MouseClickEventListRelationFilter
  }

  export type ClickOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    MouseClickEvent?: MouseClickEventOrderByRelationAggregateInput
  }

  export type ClickWhereUniqueInput = {
    id?: string
  }

  export type ClickOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    _count?: ClickCountOrderByAggregateInput
    _avg?: ClickAvgOrderByAggregateInput
    _max?: ClickMaxOrderByAggregateInput
    _min?: ClickMinOrderByAggregateInput
    _sum?: ClickSumOrderByAggregateInput
  }

  export type ClickScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClickScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClickScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClickScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    x?: IntWithAggregatesFilter | number
    y?: IntWithAggregatesFilter | number
  }

  export type WindowWhereInput = {
    AND?: Enumerable<WindowWhereInput>
    OR?: Enumerable<WindowWhereInput>
    NOT?: Enumerable<WindowWhereInput>
    id?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    MouseClickEvent?: MouseClickEventListRelationFilter
  }

  export type WindowOrderByWithRelationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    MouseClickEvent?: MouseClickEventOrderByRelationAggregateInput
  }

  export type WindowWhereUniqueInput = {
    id?: string
  }

  export type WindowOrderByWithAggregationInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    _count?: WindowCountOrderByAggregateInput
    _avg?: WindowAvgOrderByAggregateInput
    _max?: WindowMaxOrderByAggregateInput
    _min?: WindowMinOrderByAggregateInput
    _sum?: WindowSumOrderByAggregateInput
  }

  export type WindowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WindowScalarWhereWithAggregatesInput>
    OR?: Enumerable<WindowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WindowScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
  }

  export type UserAgentWhereInput = {
    AND?: Enumerable<UserAgentWhereInput>
    OR?: Enumerable<UserAgentWhereInput>
    NOT?: Enumerable<UserAgentWhereInput>
    id?: StringFilter | string
    platform?: StringFilter | string
    language?: StringFilter | string
    browserId?: StringFilter | string
    oSId?: StringFilter | string
    browser?: XOR<BrowserRelationFilter, BrowserWhereInput>
    os?: XOR<OSRelationFilter, OSWhereInput>
    MouseClickEvent?: MouseClickEventListRelationFilter
    PathnameChangeEvent?: PathnameChangeEventListRelationFilter
    LeaveAppEvent?: LeaveAppEventListRelationFilter
  }

  export type UserAgentOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    browserId?: SortOrder
    oSId?: SortOrder
    browser?: BrowserOrderByWithRelationInput
    os?: OSOrderByWithRelationInput
    MouseClickEvent?: MouseClickEventOrderByRelationAggregateInput
    PathnameChangeEvent?: PathnameChangeEventOrderByRelationAggregateInput
    LeaveAppEvent?: LeaveAppEventOrderByRelationAggregateInput
  }

  export type UserAgentWhereUniqueInput = {
    id?: string
  }

  export type UserAgentOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    browserId?: SortOrder
    oSId?: SortOrder
    _count?: UserAgentCountOrderByAggregateInput
    _max?: UserAgentMaxOrderByAggregateInput
    _min?: UserAgentMinOrderByAggregateInput
  }

  export type UserAgentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAgentScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAgentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAgentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    platform?: StringWithAggregatesFilter | string
    language?: StringWithAggregatesFilter | string
    browserId?: StringWithAggregatesFilter | string
    oSId?: StringWithAggregatesFilter | string
  }

  export type BrowserWhereInput = {
    AND?: Enumerable<BrowserWhereInput>
    OR?: Enumerable<BrowserWhereInput>
    NOT?: Enumerable<BrowserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    version?: StringNullableFilter | string | null
    UserAgent?: UserAgentListRelationFilter
  }

  export type BrowserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    UserAgent?: UserAgentOrderByRelationAggregateInput
  }

  export type BrowserWhereUniqueInput = {
    id?: string
  }

  export type BrowserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    _count?: BrowserCountOrderByAggregateInput
    _max?: BrowserMaxOrderByAggregateInput
    _min?: BrowserMinOrderByAggregateInput
  }

  export type BrowserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BrowserScalarWhereWithAggregatesInput>
    OR?: Enumerable<BrowserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BrowserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    version?: StringNullableWithAggregatesFilter | string | null
  }

  export type OSWhereInput = {
    AND?: Enumerable<OSWhereInput>
    OR?: Enumerable<OSWhereInput>
    NOT?: Enumerable<OSWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    version?: StringNullableFilter | string | null
    UserAgent?: UserAgentListRelationFilter
  }

  export type OSOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    UserAgent?: UserAgentOrderByRelationAggregateInput
  }

  export type OSWhereUniqueInput = {
    id?: string
  }

  export type OSOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    _count?: OSCountOrderByAggregateInput
    _max?: OSMaxOrderByAggregateInput
    _min?: OSMinOrderByAggregateInput
  }

  export type OSScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OSScalarWhereWithAggregatesInput>
    OR?: Enumerable<OSScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OSScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    version?: StringNullableWithAggregatesFilter | string | null
  }

  export type ButtonEventCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    buttonContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ButtonEventUncheckedCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    buttonContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ButtonEventUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    buttonContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ButtonEventUncheckedUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    buttonContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ButtonEventCreateManyInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    buttonContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ButtonEventUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    buttonContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ButtonEventUncheckedUpdateManyInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    buttonContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouseClickEventCreateInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    click: ClickCreateNestedOneWithoutMouseClickEventInput
    window: WindowCreateNestedOneWithoutMouseClickEventInput
    userAgent: UserAgentCreateNestedOneWithoutMouseClickEventInput
  }

  export type MouseClickEventUncheckedCreateInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    windowId: string
    userAgentId: string
  }

  export type MouseClickEventUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    click?: ClickUpdateOneRequiredWithoutMouseClickEventNestedInput
    window?: WindowUpdateOneRequiredWithoutMouseClickEventNestedInput
    userAgent?: UserAgentUpdateOneRequiredWithoutMouseClickEventNestedInput
  }

  export type MouseClickEventUncheckedUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickId?: StringFieldUpdateOperationsInput | string
    windowId?: StringFieldUpdateOperationsInput | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type MouseClickEventCreateManyInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    windowId: string
    userAgentId: string
  }

  export type MouseClickEventUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouseClickEventUncheckedUpdateManyInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickId?: StringFieldUpdateOperationsInput | string
    windowId?: StringFieldUpdateOperationsInput | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type PathnameChangeEventCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgent: UserAgentCreateNestedOneWithoutPathnameChangeEventInput
  }

  export type PathnameChangeEventUncheckedCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgentId: string
  }

  export type PathnameChangeEventUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: UserAgentUpdateOneRequiredWithoutPathnameChangeEventNestedInput
  }

  export type PathnameChangeEventUncheckedUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type PathnameChangeEventCreateManyInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgentId: string
  }

  export type PathnameChangeEventUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathnameChangeEventUncheckedUpdateManyInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveAppEventCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgent: UserAgentCreateNestedOneWithoutLeaveAppEventInput
  }

  export type LeaveAppEventUncheckedCreateInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgentId: string
  }

  export type LeaveAppEventUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: UserAgentUpdateOneRequiredWithoutLeaveAppEventNestedInput
  }

  export type LeaveAppEventUncheckedUpdateInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveAppEventCreateManyInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userAgentId: string
  }

  export type LeaveAppEventUpdateManyMutationInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveAppEventUncheckedUpdateManyInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickCreateInput = {
    id?: string
    x: number
    y: number
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutClickInput
  }

  export type ClickUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutClickInput
  }

  export type ClickUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    MouseClickEvent?: MouseClickEventUpdateManyWithoutClickNestedInput
  }

  export type ClickUncheckedUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutClickNestedInput
  }

  export type ClickCreateManyInput = {
    id?: string
    x: number
    y: number
  }

  export type ClickUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type ClickUncheckedUpdateManyInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type WindowCreateInput = {
    id?: string
    width: number
    height: number
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutWindowInput
  }

  export type WindowUncheckedCreateInput = {
    id?: string
    width: number
    height: number
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutWindowInput
  }

  export type WindowUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    MouseClickEvent?: MouseClickEventUpdateManyWithoutWindowNestedInput
  }

  export type WindowUncheckedUpdateInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutWindowNestedInput
  }

  export type WindowCreateManyInput = {
    id?: string
    width: number
    height: number
  }

  export type WindowUpdateManyMutationInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type WindowUncheckedUpdateManyInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type UserAgentCreateInput = {
    id?: string
    platform: string
    language: string
    browser: BrowserCreateNestedOneWithoutUserAgentInput
    os: OSCreateNestedOneWithoutUserAgentInput
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    oSId: string
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browser?: BrowserUpdateOneRequiredWithoutUserAgentNestedInput
    os?: OSUpdateOneRequiredWithoutUserAgentNestedInput
    MouseClickEvent?: MouseClickEventUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentCreateManyInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    oSId: string
  }

  export type UserAgentUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type UserAgentUncheckedUpdateManyInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
  }

  export type BrowserCreateInput = {
    id?: string
    name?: string | null
    version?: string | null
    UserAgent?: UserAgentCreateNestedManyWithoutBrowserInput
  }

  export type BrowserUncheckedCreateInput = {
    id?: string
    name?: string | null
    version?: string | null
    UserAgent?: UserAgentUncheckedCreateNestedManyWithoutBrowserInput
  }

  export type BrowserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    UserAgent?: UserAgentUpdateManyWithoutBrowserNestedInput
  }

  export type BrowserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    UserAgent?: UserAgentUncheckedUpdateManyWithoutBrowserNestedInput
  }

  export type BrowserCreateManyInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type BrowserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrowserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OSCreateInput = {
    id?: string
    name?: string | null
    version?: string | null
    UserAgent?: UserAgentCreateNestedManyWithoutOsInput
  }

  export type OSUncheckedCreateInput = {
    id?: string
    name?: string | null
    version?: string | null
    UserAgent?: UserAgentUncheckedCreateNestedManyWithoutOsInput
  }

  export type OSUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    UserAgent?: UserAgentUpdateManyWithoutOsNestedInput
  }

  export type OSUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    UserAgent?: UserAgentUncheckedUpdateManyWithoutOsNestedInput
  }

  export type OSCreateManyInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type OSUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OSUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumEventTypeFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeFilter | EventType
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ButtonEventCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    buttonContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ButtonEventAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }

  export type ButtonEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    buttonContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ButtonEventMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    buttonContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ButtonEventSumOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumEventTypeWithAggregatesFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeWithAggregatesFilter | EventType
    _count?: NestedIntFilter
    _min?: NestedEnumEventTypeFilter
    _max?: NestedEnumEventTypeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ClickRelationFilter = {
    is?: ClickWhereInput | null
    isNot?: ClickWhereInput | null
  }

  export type WindowRelationFilter = {
    is?: WindowWhereInput | null
    isNot?: WindowWhereInput | null
  }

  export type UserAgentRelationFilter = {
    is?: UserAgentWhereInput | null
    isNot?: UserAgentWhereInput | null
  }

  export type MouseClickEventCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clickId?: SortOrder
    windowId?: SortOrder
    userAgentId?: SortOrder
  }

  export type MouseClickEventAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }

  export type MouseClickEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clickId?: SortOrder
    windowId?: SortOrder
    userAgentId?: SortOrder
  }

  export type MouseClickEventMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    pathname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clickId?: SortOrder
    windowId?: SortOrder
    userAgentId?: SortOrder
  }

  export type MouseClickEventSumOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }

  export type PathnameChangeEventCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type PathnameChangeEventAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type PathnameChangeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type PathnameChangeEventMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type PathnameChangeEventSumOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type LeaveAppEventCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    visitedPages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type LeaveAppEventAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }

  export type LeaveAppEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type LeaveAppEventMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    event_id?: SortOrder
    timestamp?: SortOrder
    user?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAgentId?: SortOrder
  }

  export type LeaveAppEventSumOrderByAggregateInput = {
    timestamp?: SortOrder
    user?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type MouseClickEventListRelationFilter = {
    every?: MouseClickEventWhereInput
    some?: MouseClickEventWhereInput
    none?: MouseClickEventWhereInput
  }

  export type MouseClickEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClickCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type ClickAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type ClickMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type ClickMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type ClickSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type WindowCountOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type WindowAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type WindowMaxOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type WindowMinOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type WindowSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BrowserRelationFilter = {
    is?: BrowserWhereInput | null
    isNot?: BrowserWhereInput | null
  }

  export type OSRelationFilter = {
    is?: OSWhereInput | null
    isNot?: OSWhereInput | null
  }

  export type PathnameChangeEventListRelationFilter = {
    every?: PathnameChangeEventWhereInput
    some?: PathnameChangeEventWhereInput
    none?: PathnameChangeEventWhereInput
  }

  export type LeaveAppEventListRelationFilter = {
    every?: LeaveAppEventWhereInput
    some?: LeaveAppEventWhereInput
    none?: LeaveAppEventWhereInput
  }

  export type PathnameChangeEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveAppEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAgentCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    browserId?: SortOrder
    oSId?: SortOrder
  }

  export type UserAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    browserId?: SortOrder
    oSId?: SortOrder
  }

  export type UserAgentMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    browserId?: SortOrder
    oSId?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type UserAgentListRelationFilter = {
    every?: UserAgentWhereInput
    some?: UserAgentWhereInput
    none?: UserAgentWhereInput
  }

  export type UserAgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrowserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type BrowserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type BrowserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type OSCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type OSMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type OSMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: EventType
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClickCreateNestedOneWithoutMouseClickEventInput = {
    create?: XOR<ClickCreateWithoutMouseClickEventInput, ClickUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: ClickCreateOrConnectWithoutMouseClickEventInput
    connect?: ClickWhereUniqueInput
  }

  export type WindowCreateNestedOneWithoutMouseClickEventInput = {
    create?: XOR<WindowCreateWithoutMouseClickEventInput, WindowUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: WindowCreateOrConnectWithoutMouseClickEventInput
    connect?: WindowWhereUniqueInput
  }

  export type UserAgentCreateNestedOneWithoutMouseClickEventInput = {
    create?: XOR<UserAgentCreateWithoutMouseClickEventInput, UserAgentUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutMouseClickEventInput
    connect?: UserAgentWhereUniqueInput
  }

  export type ClickUpdateOneRequiredWithoutMouseClickEventNestedInput = {
    create?: XOR<ClickCreateWithoutMouseClickEventInput, ClickUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: ClickCreateOrConnectWithoutMouseClickEventInput
    upsert?: ClickUpsertWithoutMouseClickEventInput
    connect?: ClickWhereUniqueInput
    update?: XOR<ClickUpdateWithoutMouseClickEventInput, ClickUncheckedUpdateWithoutMouseClickEventInput>
  }

  export type WindowUpdateOneRequiredWithoutMouseClickEventNestedInput = {
    create?: XOR<WindowCreateWithoutMouseClickEventInput, WindowUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: WindowCreateOrConnectWithoutMouseClickEventInput
    upsert?: WindowUpsertWithoutMouseClickEventInput
    connect?: WindowWhereUniqueInput
    update?: XOR<WindowUpdateWithoutMouseClickEventInput, WindowUncheckedUpdateWithoutMouseClickEventInput>
  }

  export type UserAgentUpdateOneRequiredWithoutMouseClickEventNestedInput = {
    create?: XOR<UserAgentCreateWithoutMouseClickEventInput, UserAgentUncheckedCreateWithoutMouseClickEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutMouseClickEventInput
    upsert?: UserAgentUpsertWithoutMouseClickEventInput
    connect?: UserAgentWhereUniqueInput
    update?: XOR<UserAgentUpdateWithoutMouseClickEventInput, UserAgentUncheckedUpdateWithoutMouseClickEventInput>
  }

  export type UserAgentCreateNestedOneWithoutPathnameChangeEventInput = {
    create?: XOR<UserAgentCreateWithoutPathnameChangeEventInput, UserAgentUncheckedCreateWithoutPathnameChangeEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutPathnameChangeEventInput
    connect?: UserAgentWhereUniqueInput
  }

  export type UserAgentUpdateOneRequiredWithoutPathnameChangeEventNestedInput = {
    create?: XOR<UserAgentCreateWithoutPathnameChangeEventInput, UserAgentUncheckedCreateWithoutPathnameChangeEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutPathnameChangeEventInput
    upsert?: UserAgentUpsertWithoutPathnameChangeEventInput
    connect?: UserAgentWhereUniqueInput
    update?: XOR<UserAgentUpdateWithoutPathnameChangeEventInput, UserAgentUncheckedUpdateWithoutPathnameChangeEventInput>
  }

  export type UserAgentCreateNestedOneWithoutLeaveAppEventInput = {
    create?: XOR<UserAgentCreateWithoutLeaveAppEventInput, UserAgentUncheckedCreateWithoutLeaveAppEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutLeaveAppEventInput
    connect?: UserAgentWhereUniqueInput
  }

  export type UserAgentUpdateOneRequiredWithoutLeaveAppEventNestedInput = {
    create?: XOR<UserAgentCreateWithoutLeaveAppEventInput, UserAgentUncheckedCreateWithoutLeaveAppEventInput>
    connectOrCreate?: UserAgentCreateOrConnectWithoutLeaveAppEventInput
    upsert?: UserAgentUpsertWithoutLeaveAppEventInput
    connect?: UserAgentWhereUniqueInput
    update?: XOR<UserAgentUpdateWithoutLeaveAppEventInput, UserAgentUncheckedUpdateWithoutLeaveAppEventInput>
  }

  export type MouseClickEventCreateNestedManyWithoutClickInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutClickInput>, Enumerable<MouseClickEventUncheckedCreateWithoutClickInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutClickInput>
    createMany?: MouseClickEventCreateManyClickInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type MouseClickEventUncheckedCreateNestedManyWithoutClickInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutClickInput>, Enumerable<MouseClickEventUncheckedCreateWithoutClickInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutClickInput>
    createMany?: MouseClickEventCreateManyClickInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type MouseClickEventUpdateManyWithoutClickNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutClickInput>, Enumerable<MouseClickEventUncheckedCreateWithoutClickInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutClickInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutClickInput>
    createMany?: MouseClickEventCreateManyClickInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutClickInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutClickInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type MouseClickEventUncheckedUpdateManyWithoutClickNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutClickInput>, Enumerable<MouseClickEventUncheckedCreateWithoutClickInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutClickInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutClickInput>
    createMany?: MouseClickEventCreateManyClickInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutClickInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutClickInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type MouseClickEventCreateNestedManyWithoutWindowInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutWindowInput>, Enumerable<MouseClickEventUncheckedCreateWithoutWindowInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutWindowInput>
    createMany?: MouseClickEventCreateManyWindowInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type MouseClickEventUncheckedCreateNestedManyWithoutWindowInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutWindowInput>, Enumerable<MouseClickEventUncheckedCreateWithoutWindowInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutWindowInput>
    createMany?: MouseClickEventCreateManyWindowInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type MouseClickEventUpdateManyWithoutWindowNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutWindowInput>, Enumerable<MouseClickEventUncheckedCreateWithoutWindowInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutWindowInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutWindowInput>
    createMany?: MouseClickEventCreateManyWindowInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutWindowInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutWindowInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type MouseClickEventUncheckedUpdateManyWithoutWindowNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutWindowInput>, Enumerable<MouseClickEventUncheckedCreateWithoutWindowInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutWindowInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutWindowInput>
    createMany?: MouseClickEventCreateManyWindowInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutWindowInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutWindowInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type BrowserCreateNestedOneWithoutUserAgentInput = {
    create?: XOR<BrowserCreateWithoutUserAgentInput, BrowserUncheckedCreateWithoutUserAgentInput>
    connectOrCreate?: BrowserCreateOrConnectWithoutUserAgentInput
    connect?: BrowserWhereUniqueInput
  }

  export type OSCreateNestedOneWithoutUserAgentInput = {
    create?: XOR<OSCreateWithoutUserAgentInput, OSUncheckedCreateWithoutUserAgentInput>
    connectOrCreate?: OSCreateOrConnectWithoutUserAgentInput
    connect?: OSWhereUniqueInput
  }

  export type MouseClickEventCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutUserAgentInput>, Enumerable<MouseClickEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutUserAgentInput>
    createMany?: MouseClickEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type PathnameChangeEventCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<PathnameChangeEventCreateWithoutUserAgentInput>, Enumerable<PathnameChangeEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<PathnameChangeEventCreateOrConnectWithoutUserAgentInput>
    createMany?: PathnameChangeEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<PathnameChangeEventWhereUniqueInput>
  }

  export type LeaveAppEventCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<LeaveAppEventCreateWithoutUserAgentInput>, Enumerable<LeaveAppEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<LeaveAppEventCreateOrConnectWithoutUserAgentInput>
    createMany?: LeaveAppEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<LeaveAppEventWhereUniqueInput>
  }

  export type MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutUserAgentInput>, Enumerable<MouseClickEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutUserAgentInput>
    createMany?: MouseClickEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
  }

  export type PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<PathnameChangeEventCreateWithoutUserAgentInput>, Enumerable<PathnameChangeEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<PathnameChangeEventCreateOrConnectWithoutUserAgentInput>
    createMany?: PathnameChangeEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<PathnameChangeEventWhereUniqueInput>
  }

  export type LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput = {
    create?: XOR<Enumerable<LeaveAppEventCreateWithoutUserAgentInput>, Enumerable<LeaveAppEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<LeaveAppEventCreateOrConnectWithoutUserAgentInput>
    createMany?: LeaveAppEventCreateManyUserAgentInputEnvelope
    connect?: Enumerable<LeaveAppEventWhereUniqueInput>
  }

  export type BrowserUpdateOneRequiredWithoutUserAgentNestedInput = {
    create?: XOR<BrowserCreateWithoutUserAgentInput, BrowserUncheckedCreateWithoutUserAgentInput>
    connectOrCreate?: BrowserCreateOrConnectWithoutUserAgentInput
    upsert?: BrowserUpsertWithoutUserAgentInput
    connect?: BrowserWhereUniqueInput
    update?: XOR<BrowserUpdateWithoutUserAgentInput, BrowserUncheckedUpdateWithoutUserAgentInput>
  }

  export type OSUpdateOneRequiredWithoutUserAgentNestedInput = {
    create?: XOR<OSCreateWithoutUserAgentInput, OSUncheckedCreateWithoutUserAgentInput>
    connectOrCreate?: OSCreateOrConnectWithoutUserAgentInput
    upsert?: OSUpsertWithoutUserAgentInput
    connect?: OSWhereUniqueInput
    update?: XOR<OSUpdateWithoutUserAgentInput, OSUncheckedUpdateWithoutUserAgentInput>
  }

  export type MouseClickEventUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutUserAgentInput>, Enumerable<MouseClickEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: MouseClickEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type PathnameChangeEventUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<PathnameChangeEventCreateWithoutUserAgentInput>, Enumerable<PathnameChangeEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<PathnameChangeEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<PathnameChangeEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: PathnameChangeEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<PathnameChangeEventWhereUniqueInput>
    disconnect?: Enumerable<PathnameChangeEventWhereUniqueInput>
    delete?: Enumerable<PathnameChangeEventWhereUniqueInput>
    connect?: Enumerable<PathnameChangeEventWhereUniqueInput>
    update?: Enumerable<PathnameChangeEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<PathnameChangeEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<PathnameChangeEventScalarWhereInput>
  }

  export type LeaveAppEventUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<LeaveAppEventCreateWithoutUserAgentInput>, Enumerable<LeaveAppEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<LeaveAppEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<LeaveAppEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: LeaveAppEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<LeaveAppEventWhereUniqueInput>
    disconnect?: Enumerable<LeaveAppEventWhereUniqueInput>
    delete?: Enumerable<LeaveAppEventWhereUniqueInput>
    connect?: Enumerable<LeaveAppEventWhereUniqueInput>
    update?: Enumerable<LeaveAppEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<LeaveAppEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<LeaveAppEventScalarWhereInput>
  }

  export type MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<MouseClickEventCreateWithoutUserAgentInput>, Enumerable<MouseClickEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<MouseClickEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<MouseClickEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: MouseClickEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<MouseClickEventWhereUniqueInput>
    disconnect?: Enumerable<MouseClickEventWhereUniqueInput>
    delete?: Enumerable<MouseClickEventWhereUniqueInput>
    connect?: Enumerable<MouseClickEventWhereUniqueInput>
    update?: Enumerable<MouseClickEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<MouseClickEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<MouseClickEventScalarWhereInput>
  }

  export type PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<PathnameChangeEventCreateWithoutUserAgentInput>, Enumerable<PathnameChangeEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<PathnameChangeEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<PathnameChangeEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: PathnameChangeEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<PathnameChangeEventWhereUniqueInput>
    disconnect?: Enumerable<PathnameChangeEventWhereUniqueInput>
    delete?: Enumerable<PathnameChangeEventWhereUniqueInput>
    connect?: Enumerable<PathnameChangeEventWhereUniqueInput>
    update?: Enumerable<PathnameChangeEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<PathnameChangeEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<PathnameChangeEventScalarWhereInput>
  }

  export type LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput = {
    create?: XOR<Enumerable<LeaveAppEventCreateWithoutUserAgentInput>, Enumerable<LeaveAppEventUncheckedCreateWithoutUserAgentInput>>
    connectOrCreate?: Enumerable<LeaveAppEventCreateOrConnectWithoutUserAgentInput>
    upsert?: Enumerable<LeaveAppEventUpsertWithWhereUniqueWithoutUserAgentInput>
    createMany?: LeaveAppEventCreateManyUserAgentInputEnvelope
    set?: Enumerable<LeaveAppEventWhereUniqueInput>
    disconnect?: Enumerable<LeaveAppEventWhereUniqueInput>
    delete?: Enumerable<LeaveAppEventWhereUniqueInput>
    connect?: Enumerable<LeaveAppEventWhereUniqueInput>
    update?: Enumerable<LeaveAppEventUpdateWithWhereUniqueWithoutUserAgentInput>
    updateMany?: Enumerable<LeaveAppEventUpdateManyWithWhereWithoutUserAgentInput>
    deleteMany?: Enumerable<LeaveAppEventScalarWhereInput>
  }

  export type UserAgentCreateNestedManyWithoutBrowserInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutBrowserInput>, Enumerable<UserAgentUncheckedCreateWithoutBrowserInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutBrowserInput>
    createMany?: UserAgentCreateManyBrowserInputEnvelope
    connect?: Enumerable<UserAgentWhereUniqueInput>
  }

  export type UserAgentUncheckedCreateNestedManyWithoutBrowserInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutBrowserInput>, Enumerable<UserAgentUncheckedCreateWithoutBrowserInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutBrowserInput>
    createMany?: UserAgentCreateManyBrowserInputEnvelope
    connect?: Enumerable<UserAgentWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserAgentUpdateManyWithoutBrowserNestedInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutBrowserInput>, Enumerable<UserAgentUncheckedCreateWithoutBrowserInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutBrowserInput>
    upsert?: Enumerable<UserAgentUpsertWithWhereUniqueWithoutBrowserInput>
    createMany?: UserAgentCreateManyBrowserInputEnvelope
    set?: Enumerable<UserAgentWhereUniqueInput>
    disconnect?: Enumerable<UserAgentWhereUniqueInput>
    delete?: Enumerable<UserAgentWhereUniqueInput>
    connect?: Enumerable<UserAgentWhereUniqueInput>
    update?: Enumerable<UserAgentUpdateWithWhereUniqueWithoutBrowserInput>
    updateMany?: Enumerable<UserAgentUpdateManyWithWhereWithoutBrowserInput>
    deleteMany?: Enumerable<UserAgentScalarWhereInput>
  }

  export type UserAgentUncheckedUpdateManyWithoutBrowserNestedInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutBrowserInput>, Enumerable<UserAgentUncheckedCreateWithoutBrowserInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutBrowserInput>
    upsert?: Enumerable<UserAgentUpsertWithWhereUniqueWithoutBrowserInput>
    createMany?: UserAgentCreateManyBrowserInputEnvelope
    set?: Enumerable<UserAgentWhereUniqueInput>
    disconnect?: Enumerable<UserAgentWhereUniqueInput>
    delete?: Enumerable<UserAgentWhereUniqueInput>
    connect?: Enumerable<UserAgentWhereUniqueInput>
    update?: Enumerable<UserAgentUpdateWithWhereUniqueWithoutBrowserInput>
    updateMany?: Enumerable<UserAgentUpdateManyWithWhereWithoutBrowserInput>
    deleteMany?: Enumerable<UserAgentScalarWhereInput>
  }

  export type UserAgentCreateNestedManyWithoutOsInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutOsInput>, Enumerable<UserAgentUncheckedCreateWithoutOsInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutOsInput>
    createMany?: UserAgentCreateManyOsInputEnvelope
    connect?: Enumerable<UserAgentWhereUniqueInput>
  }

  export type UserAgentUncheckedCreateNestedManyWithoutOsInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutOsInput>, Enumerable<UserAgentUncheckedCreateWithoutOsInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutOsInput>
    createMany?: UserAgentCreateManyOsInputEnvelope
    connect?: Enumerable<UserAgentWhereUniqueInput>
  }

  export type UserAgentUpdateManyWithoutOsNestedInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutOsInput>, Enumerable<UserAgentUncheckedCreateWithoutOsInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutOsInput>
    upsert?: Enumerable<UserAgentUpsertWithWhereUniqueWithoutOsInput>
    createMany?: UserAgentCreateManyOsInputEnvelope
    set?: Enumerable<UserAgentWhereUniqueInput>
    disconnect?: Enumerable<UserAgentWhereUniqueInput>
    delete?: Enumerable<UserAgentWhereUniqueInput>
    connect?: Enumerable<UserAgentWhereUniqueInput>
    update?: Enumerable<UserAgentUpdateWithWhereUniqueWithoutOsInput>
    updateMany?: Enumerable<UserAgentUpdateManyWithWhereWithoutOsInput>
    deleteMany?: Enumerable<UserAgentScalarWhereInput>
  }

  export type UserAgentUncheckedUpdateManyWithoutOsNestedInput = {
    create?: XOR<Enumerable<UserAgentCreateWithoutOsInput>, Enumerable<UserAgentUncheckedCreateWithoutOsInput>>
    connectOrCreate?: Enumerable<UserAgentCreateOrConnectWithoutOsInput>
    upsert?: Enumerable<UserAgentUpsertWithWhereUniqueWithoutOsInput>
    createMany?: UserAgentCreateManyOsInputEnvelope
    set?: Enumerable<UserAgentWhereUniqueInput>
    disconnect?: Enumerable<UserAgentWhereUniqueInput>
    delete?: Enumerable<UserAgentWhereUniqueInput>
    connect?: Enumerable<UserAgentWhereUniqueInput>
    update?: Enumerable<UserAgentUpdateWithWhereUniqueWithoutOsInput>
    updateMany?: Enumerable<UserAgentUpdateManyWithWhereWithoutOsInput>
    deleteMany?: Enumerable<UserAgentScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumEventTypeFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeFilter | EventType
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumEventTypeWithAggregatesFilter = {
    equals?: EventType
    in?: Enumerable<EventType>
    notIn?: Enumerable<EventType>
    not?: NestedEnumEventTypeWithAggregatesFilter | EventType
    _count?: NestedIntFilter
    _min?: NestedEnumEventTypeFilter
    _max?: NestedEnumEventTypeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type ClickCreateWithoutMouseClickEventInput = {
    id?: string
    x: number
    y: number
  }

  export type ClickUncheckedCreateWithoutMouseClickEventInput = {
    id?: string
    x: number
    y: number
  }

  export type ClickCreateOrConnectWithoutMouseClickEventInput = {
    where: ClickWhereUniqueInput
    create: XOR<ClickCreateWithoutMouseClickEventInput, ClickUncheckedCreateWithoutMouseClickEventInput>
  }

  export type WindowCreateWithoutMouseClickEventInput = {
    id?: string
    width: number
    height: number
  }

  export type WindowUncheckedCreateWithoutMouseClickEventInput = {
    id?: string
    width: number
    height: number
  }

  export type WindowCreateOrConnectWithoutMouseClickEventInput = {
    where: WindowWhereUniqueInput
    create: XOR<WindowCreateWithoutMouseClickEventInput, WindowUncheckedCreateWithoutMouseClickEventInput>
  }

  export type UserAgentCreateWithoutMouseClickEventInput = {
    id?: string
    platform: string
    language: string
    browser: BrowserCreateNestedOneWithoutUserAgentInput
    os: OSCreateNestedOneWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateWithoutMouseClickEventInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    oSId: string
    PathnameChangeEvent?: PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentCreateOrConnectWithoutMouseClickEventInput = {
    where: UserAgentWhereUniqueInput
    create: XOR<UserAgentCreateWithoutMouseClickEventInput, UserAgentUncheckedCreateWithoutMouseClickEventInput>
  }

  export type ClickUpsertWithoutMouseClickEventInput = {
    update: XOR<ClickUpdateWithoutMouseClickEventInput, ClickUncheckedUpdateWithoutMouseClickEventInput>
    create: XOR<ClickCreateWithoutMouseClickEventInput, ClickUncheckedCreateWithoutMouseClickEventInput>
  }

  export type ClickUpdateWithoutMouseClickEventInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type ClickUncheckedUpdateWithoutMouseClickEventInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type WindowUpsertWithoutMouseClickEventInput = {
    update: XOR<WindowUpdateWithoutMouseClickEventInput, WindowUncheckedUpdateWithoutMouseClickEventInput>
    create: XOR<WindowCreateWithoutMouseClickEventInput, WindowUncheckedCreateWithoutMouseClickEventInput>
  }

  export type WindowUpdateWithoutMouseClickEventInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type WindowUncheckedUpdateWithoutMouseClickEventInput = {
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type UserAgentUpsertWithoutMouseClickEventInput = {
    update: XOR<UserAgentUpdateWithoutMouseClickEventInput, UserAgentUncheckedUpdateWithoutMouseClickEventInput>
    create: XOR<UserAgentCreateWithoutMouseClickEventInput, UserAgentUncheckedCreateWithoutMouseClickEventInput>
  }

  export type UserAgentUpdateWithoutMouseClickEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browser?: BrowserUpdateOneRequiredWithoutUserAgentNestedInput
    os?: OSUpdateOneRequiredWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateWithoutMouseClickEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
    PathnameChangeEvent?: PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentCreateWithoutPathnameChangeEventInput = {
    id?: string
    platform: string
    language: string
    browser: BrowserCreateNestedOneWithoutUserAgentInput
    os: OSCreateNestedOneWithoutUserAgentInput
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateWithoutPathnameChangeEventInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    oSId: string
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentCreateOrConnectWithoutPathnameChangeEventInput = {
    where: UserAgentWhereUniqueInput
    create: XOR<UserAgentCreateWithoutPathnameChangeEventInput, UserAgentUncheckedCreateWithoutPathnameChangeEventInput>
  }

  export type UserAgentUpsertWithoutPathnameChangeEventInput = {
    update: XOR<UserAgentUpdateWithoutPathnameChangeEventInput, UserAgentUncheckedUpdateWithoutPathnameChangeEventInput>
    create: XOR<UserAgentCreateWithoutPathnameChangeEventInput, UserAgentUncheckedCreateWithoutPathnameChangeEventInput>
  }

  export type UserAgentUpdateWithoutPathnameChangeEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browser?: BrowserUpdateOneRequiredWithoutUserAgentNestedInput
    os?: OSUpdateOneRequiredWithoutUserAgentNestedInput
    MouseClickEvent?: MouseClickEventUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateWithoutPathnameChangeEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentCreateWithoutLeaveAppEventInput = {
    id?: string
    platform: string
    language: string
    browser: BrowserCreateNestedOneWithoutUserAgentInput
    os: OSCreateNestedOneWithoutUserAgentInput
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateWithoutLeaveAppEventInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    oSId: string
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentCreateOrConnectWithoutLeaveAppEventInput = {
    where: UserAgentWhereUniqueInput
    create: XOR<UserAgentCreateWithoutLeaveAppEventInput, UserAgentUncheckedCreateWithoutLeaveAppEventInput>
  }

  export type UserAgentUpsertWithoutLeaveAppEventInput = {
    update: XOR<UserAgentUpdateWithoutLeaveAppEventInput, UserAgentUncheckedUpdateWithoutLeaveAppEventInput>
    create: XOR<UserAgentCreateWithoutLeaveAppEventInput, UserAgentUncheckedCreateWithoutLeaveAppEventInput>
  }

  export type UserAgentUpdateWithoutLeaveAppEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browser?: BrowserUpdateOneRequiredWithoutUserAgentNestedInput
    os?: OSUpdateOneRequiredWithoutUserAgentNestedInput
    MouseClickEvent?: MouseClickEventUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateWithoutLeaveAppEventInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }

  export type MouseClickEventCreateWithoutClickInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    window: WindowCreateNestedOneWithoutMouseClickEventInput
    userAgent: UserAgentCreateNestedOneWithoutMouseClickEventInput
  }

  export type MouseClickEventUncheckedCreateWithoutClickInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    windowId: string
    userAgentId: string
  }

  export type MouseClickEventCreateOrConnectWithoutClickInput = {
    where: MouseClickEventWhereUniqueInput
    create: XOR<MouseClickEventCreateWithoutClickInput, MouseClickEventUncheckedCreateWithoutClickInput>
  }

  export type MouseClickEventCreateManyClickInputEnvelope = {
    data: Enumerable<MouseClickEventCreateManyClickInput>
  }

  export type MouseClickEventUpsertWithWhereUniqueWithoutClickInput = {
    where: MouseClickEventWhereUniqueInput
    update: XOR<MouseClickEventUpdateWithoutClickInput, MouseClickEventUncheckedUpdateWithoutClickInput>
    create: XOR<MouseClickEventCreateWithoutClickInput, MouseClickEventUncheckedCreateWithoutClickInput>
  }

  export type MouseClickEventUpdateWithWhereUniqueWithoutClickInput = {
    where: MouseClickEventWhereUniqueInput
    data: XOR<MouseClickEventUpdateWithoutClickInput, MouseClickEventUncheckedUpdateWithoutClickInput>
  }

  export type MouseClickEventUpdateManyWithWhereWithoutClickInput = {
    where: MouseClickEventScalarWhereInput
    data: XOR<MouseClickEventUpdateManyMutationInput, MouseClickEventUncheckedUpdateManyWithoutMouseClickEventInput>
  }

  export type MouseClickEventScalarWhereInput = {
    AND?: Enumerable<MouseClickEventScalarWhereInput>
    OR?: Enumerable<MouseClickEventScalarWhereInput>
    NOT?: Enumerable<MouseClickEventScalarWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    pathname?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    clickId?: StringFilter | string
    windowId?: StringFilter | string
    userAgentId?: StringFilter | string
  }

  export type MouseClickEventCreateWithoutWindowInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    click: ClickCreateNestedOneWithoutMouseClickEventInput
    userAgent: UserAgentCreateNestedOneWithoutMouseClickEventInput
  }

  export type MouseClickEventUncheckedCreateWithoutWindowInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    userAgentId: string
  }

  export type MouseClickEventCreateOrConnectWithoutWindowInput = {
    where: MouseClickEventWhereUniqueInput
    create: XOR<MouseClickEventCreateWithoutWindowInput, MouseClickEventUncheckedCreateWithoutWindowInput>
  }

  export type MouseClickEventCreateManyWindowInputEnvelope = {
    data: Enumerable<MouseClickEventCreateManyWindowInput>
  }

  export type MouseClickEventUpsertWithWhereUniqueWithoutWindowInput = {
    where: MouseClickEventWhereUniqueInput
    update: XOR<MouseClickEventUpdateWithoutWindowInput, MouseClickEventUncheckedUpdateWithoutWindowInput>
    create: XOR<MouseClickEventCreateWithoutWindowInput, MouseClickEventUncheckedCreateWithoutWindowInput>
  }

  export type MouseClickEventUpdateWithWhereUniqueWithoutWindowInput = {
    where: MouseClickEventWhereUniqueInput
    data: XOR<MouseClickEventUpdateWithoutWindowInput, MouseClickEventUncheckedUpdateWithoutWindowInput>
  }

  export type MouseClickEventUpdateManyWithWhereWithoutWindowInput = {
    where: MouseClickEventScalarWhereInput
    data: XOR<MouseClickEventUpdateManyMutationInput, MouseClickEventUncheckedUpdateManyWithoutMouseClickEventInput>
  }

  export type BrowserCreateWithoutUserAgentInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type BrowserUncheckedCreateWithoutUserAgentInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type BrowserCreateOrConnectWithoutUserAgentInput = {
    where: BrowserWhereUniqueInput
    create: XOR<BrowserCreateWithoutUserAgentInput, BrowserUncheckedCreateWithoutUserAgentInput>
  }

  export type OSCreateWithoutUserAgentInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type OSUncheckedCreateWithoutUserAgentInput = {
    id?: string
    name?: string | null
    version?: string | null
  }

  export type OSCreateOrConnectWithoutUserAgentInput = {
    where: OSWhereUniqueInput
    create: XOR<OSCreateWithoutUserAgentInput, OSUncheckedCreateWithoutUserAgentInput>
  }

  export type MouseClickEventCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    click: ClickCreateNestedOneWithoutMouseClickEventInput
    window: WindowCreateNestedOneWithoutMouseClickEventInput
  }

  export type MouseClickEventUncheckedCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    windowId: string
  }

  export type MouseClickEventCreateOrConnectWithoutUserAgentInput = {
    where: MouseClickEventWhereUniqueInput
    create: XOR<MouseClickEventCreateWithoutUserAgentInput, MouseClickEventUncheckedCreateWithoutUserAgentInput>
  }

  export type MouseClickEventCreateManyUserAgentInputEnvelope = {
    data: Enumerable<MouseClickEventCreateManyUserAgentInput>
  }

  export type PathnameChangeEventCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PathnameChangeEventUncheckedCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PathnameChangeEventCreateOrConnectWithoutUserAgentInput = {
    where: PathnameChangeEventWhereUniqueInput
    create: XOR<PathnameChangeEventCreateWithoutUserAgentInput, PathnameChangeEventUncheckedCreateWithoutUserAgentInput>
  }

  export type PathnameChangeEventCreateManyUserAgentInputEnvelope = {
    data: Enumerable<PathnameChangeEventCreateManyUserAgentInput>
  }

  export type LeaveAppEventCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveAppEventUncheckedCreateWithoutUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveAppEventCreateOrConnectWithoutUserAgentInput = {
    where: LeaveAppEventWhereUniqueInput
    create: XOR<LeaveAppEventCreateWithoutUserAgentInput, LeaveAppEventUncheckedCreateWithoutUserAgentInput>
  }

  export type LeaveAppEventCreateManyUserAgentInputEnvelope = {
    data: Enumerable<LeaveAppEventCreateManyUserAgentInput>
  }

  export type BrowserUpsertWithoutUserAgentInput = {
    update: XOR<BrowserUpdateWithoutUserAgentInput, BrowserUncheckedUpdateWithoutUserAgentInput>
    create: XOR<BrowserCreateWithoutUserAgentInput, BrowserUncheckedCreateWithoutUserAgentInput>
  }

  export type BrowserUpdateWithoutUserAgentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrowserUncheckedUpdateWithoutUserAgentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OSUpsertWithoutUserAgentInput = {
    update: XOR<OSUpdateWithoutUserAgentInput, OSUncheckedUpdateWithoutUserAgentInput>
    create: XOR<OSCreateWithoutUserAgentInput, OSUncheckedCreateWithoutUserAgentInput>
  }

  export type OSUpdateWithoutUserAgentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OSUncheckedUpdateWithoutUserAgentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MouseClickEventUpsertWithWhereUniqueWithoutUserAgentInput = {
    where: MouseClickEventWhereUniqueInput
    update: XOR<MouseClickEventUpdateWithoutUserAgentInput, MouseClickEventUncheckedUpdateWithoutUserAgentInput>
    create: XOR<MouseClickEventCreateWithoutUserAgentInput, MouseClickEventUncheckedCreateWithoutUserAgentInput>
  }

  export type MouseClickEventUpdateWithWhereUniqueWithoutUserAgentInput = {
    where: MouseClickEventWhereUniqueInput
    data: XOR<MouseClickEventUpdateWithoutUserAgentInput, MouseClickEventUncheckedUpdateWithoutUserAgentInput>
  }

  export type MouseClickEventUpdateManyWithWhereWithoutUserAgentInput = {
    where: MouseClickEventScalarWhereInput
    data: XOR<MouseClickEventUpdateManyMutationInput, MouseClickEventUncheckedUpdateManyWithoutMouseClickEventInput>
  }

  export type PathnameChangeEventUpsertWithWhereUniqueWithoutUserAgentInput = {
    where: PathnameChangeEventWhereUniqueInput
    update: XOR<PathnameChangeEventUpdateWithoutUserAgentInput, PathnameChangeEventUncheckedUpdateWithoutUserAgentInput>
    create: XOR<PathnameChangeEventCreateWithoutUserAgentInput, PathnameChangeEventUncheckedCreateWithoutUserAgentInput>
  }

  export type PathnameChangeEventUpdateWithWhereUniqueWithoutUserAgentInput = {
    where: PathnameChangeEventWhereUniqueInput
    data: XOR<PathnameChangeEventUpdateWithoutUserAgentInput, PathnameChangeEventUncheckedUpdateWithoutUserAgentInput>
  }

  export type PathnameChangeEventUpdateManyWithWhereWithoutUserAgentInput = {
    where: PathnameChangeEventScalarWhereInput
    data: XOR<PathnameChangeEventUpdateManyMutationInput, PathnameChangeEventUncheckedUpdateManyWithoutPathnameChangeEventInput>
  }

  export type PathnameChangeEventScalarWhereInput = {
    AND?: Enumerable<PathnameChangeEventScalarWhereInput>
    OR?: Enumerable<PathnameChangeEventScalarWhereInput>
    NOT?: Enumerable<PathnameChangeEventScalarWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    startTime?: IntFilter | number
    endTime?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userAgentId?: StringFilter | string
  }

  export type LeaveAppEventUpsertWithWhereUniqueWithoutUserAgentInput = {
    where: LeaveAppEventWhereUniqueInput
    update: XOR<LeaveAppEventUpdateWithoutUserAgentInput, LeaveAppEventUncheckedUpdateWithoutUserAgentInput>
    create: XOR<LeaveAppEventCreateWithoutUserAgentInput, LeaveAppEventUncheckedCreateWithoutUserAgentInput>
  }

  export type LeaveAppEventUpdateWithWhereUniqueWithoutUserAgentInput = {
    where: LeaveAppEventWhereUniqueInput
    data: XOR<LeaveAppEventUpdateWithoutUserAgentInput, LeaveAppEventUncheckedUpdateWithoutUserAgentInput>
  }

  export type LeaveAppEventUpdateManyWithWhereWithoutUserAgentInput = {
    where: LeaveAppEventScalarWhereInput
    data: XOR<LeaveAppEventUpdateManyMutationInput, LeaveAppEventUncheckedUpdateManyWithoutLeaveAppEventInput>
  }

  export type LeaveAppEventScalarWhereInput = {
    AND?: Enumerable<LeaveAppEventScalarWhereInput>
    OR?: Enumerable<LeaveAppEventScalarWhereInput>
    NOT?: Enumerable<LeaveAppEventScalarWhereInput>
    id?: StringFilter | string
    event?: EnumEventTypeFilter | EventType
    event_id?: StringFilter | string
    timestamp?: IntFilter | number
    user?: IntFilter | number
    uuid?: StringFilter | string
    visitedPages?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userAgentId?: StringFilter | string
  }

  export type UserAgentCreateWithoutBrowserInput = {
    id?: string
    platform: string
    language: string
    os: OSCreateNestedOneWithoutUserAgentInput
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateWithoutBrowserInput = {
    id?: string
    platform: string
    language: string
    oSId: string
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentCreateOrConnectWithoutBrowserInput = {
    where: UserAgentWhereUniqueInput
    create: XOR<UserAgentCreateWithoutBrowserInput, UserAgentUncheckedCreateWithoutBrowserInput>
  }

  export type UserAgentCreateManyBrowserInputEnvelope = {
    data: Enumerable<UserAgentCreateManyBrowserInput>
  }

  export type UserAgentUpsertWithWhereUniqueWithoutBrowserInput = {
    where: UserAgentWhereUniqueInput
    update: XOR<UserAgentUpdateWithoutBrowserInput, UserAgentUncheckedUpdateWithoutBrowserInput>
    create: XOR<UserAgentCreateWithoutBrowserInput, UserAgentUncheckedCreateWithoutBrowserInput>
  }

  export type UserAgentUpdateWithWhereUniqueWithoutBrowserInput = {
    where: UserAgentWhereUniqueInput
    data: XOR<UserAgentUpdateWithoutBrowserInput, UserAgentUncheckedUpdateWithoutBrowserInput>
  }

  export type UserAgentUpdateManyWithWhereWithoutBrowserInput = {
    where: UserAgentScalarWhereInput
    data: XOR<UserAgentUpdateManyMutationInput, UserAgentUncheckedUpdateManyWithoutUserAgentInput>
  }

  export type UserAgentScalarWhereInput = {
    AND?: Enumerable<UserAgentScalarWhereInput>
    OR?: Enumerable<UserAgentScalarWhereInput>
    NOT?: Enumerable<UserAgentScalarWhereInput>
    id?: StringFilter | string
    platform?: StringFilter | string
    language?: StringFilter | string
    browserId?: StringFilter | string
    oSId?: StringFilter | string
  }

  export type UserAgentCreateWithoutOsInput = {
    id?: string
    platform: string
    language: string
    browser: BrowserCreateNestedOneWithoutUserAgentInput
    MouseClickEvent?: MouseClickEventCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentUncheckedCreateWithoutOsInput = {
    id?: string
    platform: string
    language: string
    browserId: string
    MouseClickEvent?: MouseClickEventUncheckedCreateNestedManyWithoutUserAgentInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedCreateNestedManyWithoutUserAgentInput
    LeaveAppEvent?: LeaveAppEventUncheckedCreateNestedManyWithoutUserAgentInput
  }

  export type UserAgentCreateOrConnectWithoutOsInput = {
    where: UserAgentWhereUniqueInput
    create: XOR<UserAgentCreateWithoutOsInput, UserAgentUncheckedCreateWithoutOsInput>
  }

  export type UserAgentCreateManyOsInputEnvelope = {
    data: Enumerable<UserAgentCreateManyOsInput>
  }

  export type UserAgentUpsertWithWhereUniqueWithoutOsInput = {
    where: UserAgentWhereUniqueInput
    update: XOR<UserAgentUpdateWithoutOsInput, UserAgentUncheckedUpdateWithoutOsInput>
    create: XOR<UserAgentCreateWithoutOsInput, UserAgentUncheckedCreateWithoutOsInput>
  }

  export type UserAgentUpdateWithWhereUniqueWithoutOsInput = {
    where: UserAgentWhereUniqueInput
    data: XOR<UserAgentUpdateWithoutOsInput, UserAgentUncheckedUpdateWithoutOsInput>
  }

  export type UserAgentUpdateManyWithWhereWithoutOsInput = {
    where: UserAgentScalarWhereInput
    data: XOR<UserAgentUpdateManyMutationInput, UserAgentUncheckedUpdateManyWithoutUserAgentInput>
  }

  export type MouseClickEventCreateManyClickInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    windowId: string
    userAgentId: string
  }

  export type MouseClickEventUpdateWithoutClickInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    window?: WindowUpdateOneRequiredWithoutMouseClickEventNestedInput
    userAgent?: UserAgentUpdateOneRequiredWithoutMouseClickEventNestedInput
  }

  export type MouseClickEventUncheckedUpdateWithoutClickInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    windowId?: StringFieldUpdateOperationsInput | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type MouseClickEventUncheckedUpdateManyWithoutMouseClickEventInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    windowId?: StringFieldUpdateOperationsInput | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type MouseClickEventCreateManyWindowInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    userAgentId: string
  }

  export type MouseClickEventUpdateWithoutWindowInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    click?: ClickUpdateOneRequiredWithoutMouseClickEventNestedInput
    userAgent?: UserAgentUpdateOneRequiredWithoutMouseClickEventNestedInput
  }

  export type MouseClickEventUncheckedUpdateWithoutWindowInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickId?: StringFieldUpdateOperationsInput | string
    userAgentId?: StringFieldUpdateOperationsInput | string
  }

  export type MouseClickEventCreateManyUserAgentInput = {
    id?: string
    event?: EventType
    event_id?: string
    timestamp: number
    user: number
    uuid: string
    pathname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clickId: string
    windowId: string
  }

  export type PathnameChangeEventCreateManyUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveAppEventCreateManyUserAgentInput = {
    id?: string
    event?: EventType
    event_id: string
    timestamp: number
    user: number
    uuid: string
    visitedPages: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MouseClickEventUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    click?: ClickUpdateOneRequiredWithoutMouseClickEventNestedInput
    window?: WindowUpdateOneRequiredWithoutMouseClickEventNestedInput
  }

  export type MouseClickEventUncheckedUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clickId?: StringFieldUpdateOperationsInput | string
    windowId?: StringFieldUpdateOperationsInput | string
  }

  export type PathnameChangeEventUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathnameChangeEventUncheckedUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathnameChangeEventUncheckedUpdateManyWithoutPathnameChangeEventInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveAppEventUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveAppEventUncheckedUpdateWithoutUserAgentInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveAppEventUncheckedUpdateManyWithoutLeaveAppEventInput = {
    event?: EnumEventTypeFieldUpdateOperationsInput | EventType
    event_id?: StringFieldUpdateOperationsInput | string
    timestamp?: IntFieldUpdateOperationsInput | number
    user?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    visitedPages?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAgentCreateManyBrowserInput = {
    id?: string
    platform: string
    language: string
    oSId: string
  }

  export type UserAgentUpdateWithoutBrowserInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    os?: OSUpdateOneRequiredWithoutUserAgentNestedInput
    MouseClickEvent?: MouseClickEventUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateWithoutBrowserInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateManyWithoutUserAgentInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    oSId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAgentCreateManyOsInput = {
    id?: string
    platform: string
    language: string
    browserId: string
  }

  export type UserAgentUpdateWithoutOsInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browser?: BrowserUpdateOneRequiredWithoutUserAgentNestedInput
    MouseClickEvent?: MouseClickEventUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUpdateManyWithoutUserAgentNestedInput
  }

  export type UserAgentUncheckedUpdateWithoutOsInput = {
    platform?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    browserId?: StringFieldUpdateOperationsInput | string
    MouseClickEvent?: MouseClickEventUncheckedUpdateManyWithoutUserAgentNestedInput
    PathnameChangeEvent?: PathnameChangeEventUncheckedUpdateManyWithoutUserAgentNestedInput
    LeaveAppEvent?: LeaveAppEventUncheckedUpdateManyWithoutUserAgentNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}