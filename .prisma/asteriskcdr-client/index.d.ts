
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cel
 * 
 */
export type cel = $Result.DefaultSelection<Prisma.$celPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cels
 * const cels = await prisma.cel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cels
   * const cels = await prisma.cel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cel`: Exposes CRUD operations for the **cel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cels
    * const cels = await prisma.cel.findMany()
    * ```
    */
  get cel(): Prisma.celDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cel: 'cel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cel: {
        payload: Prisma.$celPayload<ExtArgs>
        fields: Prisma.celFieldRefs
        operations: {
          findUnique: {
            args: Prisma.celFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.celFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          findFirst: {
            args: Prisma.celFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.celFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          findMany: {
            args: Prisma.celFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>[]
          }
          create: {
            args: Prisma.celCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          createMany: {
            args: Prisma.celCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.celDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          update: {
            args: Prisma.celUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          deleteMany: {
            args: Prisma.celDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.celUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.celUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celPayload>
          }
          aggregate: {
            args: Prisma.CelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCel>
          }
          groupBy: {
            args: Prisma.celGroupByArgs<ExtArgs>
            result: $Utils.Optional<CelGroupByOutputType>[]
          }
          count: {
            args: Prisma.celCountArgs<ExtArgs>
            result: $Utils.Optional<CelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cel?: celOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
   * Models
   */

  /**
   * Model cel
   */

  export type AggregateCel = {
    _count: CelCountAggregateOutputType | null
    _avg: CelAvgAggregateOutputType | null
    _sum: CelSumAggregateOutputType | null
    _min: CelMinAggregateOutputType | null
    _max: CelMaxAggregateOutputType | null
  }

  export type CelAvgAggregateOutputType = {
    id: number | null
    amaflags: number | null
  }

  export type CelSumAggregateOutputType = {
    id: number | null
    amaflags: number | null
  }

  export type CelMinAggregateOutputType = {
    id: number | null
    eventtype: string | null
    eventtime: Date | null
    cid_name: string | null
    cid_num: string | null
    cid_ani: string | null
    cid_rdnis: string | null
    cid_dnid: string | null
    exten: string | null
    context: string | null
    channame: string | null
    src: string | null
    dst: string | null
    channel: string | null
    dstchannel: string | null
    appname: string | null
    appdata: string | null
    amaflags: number | null
    accountcode: string | null
    uniqueid: string | null
    linkedid: string | null
    peer: string | null
    userdeftype: string | null
    eventextra: string | null
    userfield: string | null
  }

  export type CelMaxAggregateOutputType = {
    id: number | null
    eventtype: string | null
    eventtime: Date | null
    cid_name: string | null
    cid_num: string | null
    cid_ani: string | null
    cid_rdnis: string | null
    cid_dnid: string | null
    exten: string | null
    context: string | null
    channame: string | null
    src: string | null
    dst: string | null
    channel: string | null
    dstchannel: string | null
    appname: string | null
    appdata: string | null
    amaflags: number | null
    accountcode: string | null
    uniqueid: string | null
    linkedid: string | null
    peer: string | null
    userdeftype: string | null
    eventextra: string | null
    userfield: string | null
  }

  export type CelCountAggregateOutputType = {
    id: number
    eventtype: number
    eventtime: number
    cid_name: number
    cid_num: number
    cid_ani: number
    cid_rdnis: number
    cid_dnid: number
    exten: number
    context: number
    channame: number
    src: number
    dst: number
    channel: number
    dstchannel: number
    appname: number
    appdata: number
    amaflags: number
    accountcode: number
    uniqueid: number
    linkedid: number
    peer: number
    userdeftype: number
    eventextra: number
    userfield: number
    _all: number
  }


  export type CelAvgAggregateInputType = {
    id?: true
    amaflags?: true
  }

  export type CelSumAggregateInputType = {
    id?: true
    amaflags?: true
  }

  export type CelMinAggregateInputType = {
    id?: true
    eventtype?: true
    eventtime?: true
    cid_name?: true
    cid_num?: true
    cid_ani?: true
    cid_rdnis?: true
    cid_dnid?: true
    exten?: true
    context?: true
    channame?: true
    src?: true
    dst?: true
    channel?: true
    dstchannel?: true
    appname?: true
    appdata?: true
    amaflags?: true
    accountcode?: true
    uniqueid?: true
    linkedid?: true
    peer?: true
    userdeftype?: true
    eventextra?: true
    userfield?: true
  }

  export type CelMaxAggregateInputType = {
    id?: true
    eventtype?: true
    eventtime?: true
    cid_name?: true
    cid_num?: true
    cid_ani?: true
    cid_rdnis?: true
    cid_dnid?: true
    exten?: true
    context?: true
    channame?: true
    src?: true
    dst?: true
    channel?: true
    dstchannel?: true
    appname?: true
    appdata?: true
    amaflags?: true
    accountcode?: true
    uniqueid?: true
    linkedid?: true
    peer?: true
    userdeftype?: true
    eventextra?: true
    userfield?: true
  }

  export type CelCountAggregateInputType = {
    id?: true
    eventtype?: true
    eventtime?: true
    cid_name?: true
    cid_num?: true
    cid_ani?: true
    cid_rdnis?: true
    cid_dnid?: true
    exten?: true
    context?: true
    channame?: true
    src?: true
    dst?: true
    channel?: true
    dstchannel?: true
    appname?: true
    appdata?: true
    amaflags?: true
    accountcode?: true
    uniqueid?: true
    linkedid?: true
    peer?: true
    userdeftype?: true
    eventextra?: true
    userfield?: true
    _all?: true
  }

  export type CelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cel to aggregate.
     */
    where?: celWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cels to fetch.
     */
    orderBy?: celOrderByWithRelationInput | celOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: celWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cels
    **/
    _count?: true | CelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelMaxAggregateInputType
  }

  export type GetCelAggregateType<T extends CelAggregateArgs> = {
        [P in keyof T & keyof AggregateCel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCel[P]>
      : GetScalarType<T[P], AggregateCel[P]>
  }




  export type celGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: celWhereInput
    orderBy?: celOrderByWithAggregationInput | celOrderByWithAggregationInput[]
    by: CelScalarFieldEnum[] | CelScalarFieldEnum
    having?: celScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelCountAggregateInputType | true
    _avg?: CelAvgAggregateInputType
    _sum?: CelSumAggregateInputType
    _min?: CelMinAggregateInputType
    _max?: CelMaxAggregateInputType
  }

  export type CelGroupByOutputType = {
    id: number
    eventtype: string
    eventtime: Date
    cid_name: string
    cid_num: string
    cid_ani: string
    cid_rdnis: string
    cid_dnid: string
    exten: string
    context: string
    channame: string
    src: string
    dst: string
    channel: string
    dstchannel: string
    appname: string
    appdata: string
    amaflags: number
    accountcode: string
    uniqueid: string
    linkedid: string
    peer: string
    userdeftype: string
    eventextra: string
    userfield: string
    _count: CelCountAggregateOutputType | null
    _avg: CelAvgAggregateOutputType | null
    _sum: CelSumAggregateOutputType | null
    _min: CelMinAggregateOutputType | null
    _max: CelMaxAggregateOutputType | null
  }

  type GetCelGroupByPayload<T extends celGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelGroupByOutputType[P]>
            : GetScalarType<T[P], CelGroupByOutputType[P]>
        }
      >
    >


  export type celSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventtype?: boolean
    eventtime?: boolean
    cid_name?: boolean
    cid_num?: boolean
    cid_ani?: boolean
    cid_rdnis?: boolean
    cid_dnid?: boolean
    exten?: boolean
    context?: boolean
    channame?: boolean
    src?: boolean
    dst?: boolean
    channel?: boolean
    dstchannel?: boolean
    appname?: boolean
    appdata?: boolean
    amaflags?: boolean
    accountcode?: boolean
    uniqueid?: boolean
    linkedid?: boolean
    peer?: boolean
    userdeftype?: boolean
    eventextra?: boolean
    userfield?: boolean
  }, ExtArgs["result"]["cel"]>



  export type celSelectScalar = {
    id?: boolean
    eventtype?: boolean
    eventtime?: boolean
    cid_name?: boolean
    cid_num?: boolean
    cid_ani?: boolean
    cid_rdnis?: boolean
    cid_dnid?: boolean
    exten?: boolean
    context?: boolean
    channame?: boolean
    src?: boolean
    dst?: boolean
    channel?: boolean
    dstchannel?: boolean
    appname?: boolean
    appdata?: boolean
    amaflags?: boolean
    accountcode?: boolean
    uniqueid?: boolean
    linkedid?: boolean
    peer?: boolean
    userdeftype?: boolean
    eventextra?: boolean
    userfield?: boolean
  }

  export type celOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventtype" | "eventtime" | "cid_name" | "cid_num" | "cid_ani" | "cid_rdnis" | "cid_dnid" | "exten" | "context" | "channame" | "src" | "dst" | "channel" | "dstchannel" | "appname" | "appdata" | "amaflags" | "accountcode" | "uniqueid" | "linkedid" | "peer" | "userdeftype" | "eventextra" | "userfield", ExtArgs["result"]["cel"]>

  export type $celPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventtype: string
      eventtime: Date
      cid_name: string
      cid_num: string
      cid_ani: string
      cid_rdnis: string
      cid_dnid: string
      exten: string
      context: string
      channame: string
      src: string
      dst: string
      channel: string
      dstchannel: string
      appname: string
      appdata: string
      amaflags: number
      accountcode: string
      uniqueid: string
      linkedid: string
      peer: string
      userdeftype: string
      eventextra: string
      userfield: string
    }, ExtArgs["result"]["cel"]>
    composites: {}
  }

  type celGetPayload<S extends boolean | null | undefined | celDefaultArgs> = $Result.GetResult<Prisma.$celPayload, S>

  type celCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<celFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CelCountAggregateInputType | true
    }

  export interface celDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cel'], meta: { name: 'cel' } }
    /**
     * Find zero or one Cel that matches the filter.
     * @param {celFindUniqueArgs} args - Arguments to find a Cel
     * @example
     * // Get one Cel
     * const cel = await prisma.cel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends celFindUniqueArgs>(args: SelectSubset<T, celFindUniqueArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {celFindUniqueOrThrowArgs} args - Arguments to find a Cel
     * @example
     * // Get one Cel
     * const cel = await prisma.cel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends celFindUniqueOrThrowArgs>(args: SelectSubset<T, celFindUniqueOrThrowArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celFindFirstArgs} args - Arguments to find a Cel
     * @example
     * // Get one Cel
     * const cel = await prisma.cel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends celFindFirstArgs>(args?: SelectSubset<T, celFindFirstArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celFindFirstOrThrowArgs} args - Arguments to find a Cel
     * @example
     * // Get one Cel
     * const cel = await prisma.cel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends celFindFirstOrThrowArgs>(args?: SelectSubset<T, celFindFirstOrThrowArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cels
     * const cels = await prisma.cel.findMany()
     * 
     * // Get first 10 Cels
     * const cels = await prisma.cel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celWithIdOnly = await prisma.cel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends celFindManyArgs>(args?: SelectSubset<T, celFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cel.
     * @param {celCreateArgs} args - Arguments to create a Cel.
     * @example
     * // Create one Cel
     * const Cel = await prisma.cel.create({
     *   data: {
     *     // ... data to create a Cel
     *   }
     * })
     * 
     */
    create<T extends celCreateArgs>(args: SelectSubset<T, celCreateArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cels.
     * @param {celCreateManyArgs} args - Arguments to create many Cels.
     * @example
     * // Create many Cels
     * const cel = await prisma.cel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends celCreateManyArgs>(args?: SelectSubset<T, celCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cel.
     * @param {celDeleteArgs} args - Arguments to delete one Cel.
     * @example
     * // Delete one Cel
     * const Cel = await prisma.cel.delete({
     *   where: {
     *     // ... filter to delete one Cel
     *   }
     * })
     * 
     */
    delete<T extends celDeleteArgs>(args: SelectSubset<T, celDeleteArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cel.
     * @param {celUpdateArgs} args - Arguments to update one Cel.
     * @example
     * // Update one Cel
     * const cel = await prisma.cel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends celUpdateArgs>(args: SelectSubset<T, celUpdateArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cels.
     * @param {celDeleteManyArgs} args - Arguments to filter Cels to delete.
     * @example
     * // Delete a few Cels
     * const { count } = await prisma.cel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends celDeleteManyArgs>(args?: SelectSubset<T, celDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cels
     * const cel = await prisma.cel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends celUpdateManyArgs>(args: SelectSubset<T, celUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cel.
     * @param {celUpsertArgs} args - Arguments to update or create a Cel.
     * @example
     * // Update or create a Cel
     * const cel = await prisma.cel.upsert({
     *   create: {
     *     // ... data to create a Cel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cel we want to update
     *   }
     * })
     */
    upsert<T extends celUpsertArgs>(args: SelectSubset<T, celUpsertArgs<ExtArgs>>): Prisma__celClient<$Result.GetResult<Prisma.$celPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celCountArgs} args - Arguments to filter Cels to count.
     * @example
     * // Count the number of Cels
     * const count = await prisma.cel.count({
     *   where: {
     *     // ... the filter for the Cels we want to count
     *   }
     * })
    **/
    count<T extends celCountArgs>(
      args?: Subset<T, celCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CelAggregateArgs>(args: Subset<T, CelAggregateArgs>): Prisma.PrismaPromise<GetCelAggregateType<T>>

    /**
     * Group by Cel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celGroupByArgs} args - Group by arguments.
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
      T extends celGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: celGroupByArgs['orderBy'] }
        : { orderBy?: celGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, celGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cel model
   */
  readonly fields: celFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__celClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cel model
   */
  interface celFieldRefs {
    readonly id: FieldRef<"cel", 'Int'>
    readonly eventtype: FieldRef<"cel", 'String'>
    readonly eventtime: FieldRef<"cel", 'DateTime'>
    readonly cid_name: FieldRef<"cel", 'String'>
    readonly cid_num: FieldRef<"cel", 'String'>
    readonly cid_ani: FieldRef<"cel", 'String'>
    readonly cid_rdnis: FieldRef<"cel", 'String'>
    readonly cid_dnid: FieldRef<"cel", 'String'>
    readonly exten: FieldRef<"cel", 'String'>
    readonly context: FieldRef<"cel", 'String'>
    readonly channame: FieldRef<"cel", 'String'>
    readonly src: FieldRef<"cel", 'String'>
    readonly dst: FieldRef<"cel", 'String'>
    readonly channel: FieldRef<"cel", 'String'>
    readonly dstchannel: FieldRef<"cel", 'String'>
    readonly appname: FieldRef<"cel", 'String'>
    readonly appdata: FieldRef<"cel", 'String'>
    readonly amaflags: FieldRef<"cel", 'Int'>
    readonly accountcode: FieldRef<"cel", 'String'>
    readonly uniqueid: FieldRef<"cel", 'String'>
    readonly linkedid: FieldRef<"cel", 'String'>
    readonly peer: FieldRef<"cel", 'String'>
    readonly userdeftype: FieldRef<"cel", 'String'>
    readonly eventextra: FieldRef<"cel", 'String'>
    readonly userfield: FieldRef<"cel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cel findUnique
   */
  export type celFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter, which cel to fetch.
     */
    where: celWhereUniqueInput
  }

  /**
   * cel findUniqueOrThrow
   */
  export type celFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter, which cel to fetch.
     */
    where: celWhereUniqueInput
  }

  /**
   * cel findFirst
   */
  export type celFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter, which cel to fetch.
     */
    where?: celWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cels to fetch.
     */
    orderBy?: celOrderByWithRelationInput | celOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cels.
     */
    cursor?: celWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cels.
     */
    distinct?: CelScalarFieldEnum | CelScalarFieldEnum[]
  }

  /**
   * cel findFirstOrThrow
   */
  export type celFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter, which cel to fetch.
     */
    where?: celWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cels to fetch.
     */
    orderBy?: celOrderByWithRelationInput | celOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cels.
     */
    cursor?: celWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cels.
     */
    distinct?: CelScalarFieldEnum | CelScalarFieldEnum[]
  }

  /**
   * cel findMany
   */
  export type celFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter, which cels to fetch.
     */
    where?: celWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cels to fetch.
     */
    orderBy?: celOrderByWithRelationInput | celOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cels.
     */
    cursor?: celWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cels.
     */
    skip?: number
    distinct?: CelScalarFieldEnum | CelScalarFieldEnum[]
  }

  /**
   * cel create
   */
  export type celCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * The data needed to create a cel.
     */
    data: XOR<celCreateInput, celUncheckedCreateInput>
  }

  /**
   * cel createMany
   */
  export type celCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cels.
     */
    data: celCreateManyInput | celCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cel update
   */
  export type celUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * The data needed to update a cel.
     */
    data: XOR<celUpdateInput, celUncheckedUpdateInput>
    /**
     * Choose, which cel to update.
     */
    where: celWhereUniqueInput
  }

  /**
   * cel updateMany
   */
  export type celUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cels.
     */
    data: XOR<celUpdateManyMutationInput, celUncheckedUpdateManyInput>
    /**
     * Filter which cels to update
     */
    where?: celWhereInput
    /**
     * Limit how many cels to update.
     */
    limit?: number
  }

  /**
   * cel upsert
   */
  export type celUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * The filter to search for the cel to update in case it exists.
     */
    where: celWhereUniqueInput
    /**
     * In case the cel found by the `where` argument doesn't exist, create a new cel with this data.
     */
    create: XOR<celCreateInput, celUncheckedCreateInput>
    /**
     * In case the cel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<celUpdateInput, celUncheckedUpdateInput>
  }

  /**
   * cel delete
   */
  export type celDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
    /**
     * Filter which cel to delete.
     */
    where: celWhereUniqueInput
  }

  /**
   * cel deleteMany
   */
  export type celDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cels to delete
     */
    where?: celWhereInput
    /**
     * Limit how many cels to delete.
     */
    limit?: number
  }

  /**
   * cel without action
   */
  export type celDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cel
     */
    select?: celSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cel
     */
    omit?: celOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CelScalarFieldEnum: {
    id: 'id',
    eventtype: 'eventtype',
    eventtime: 'eventtime',
    cid_name: 'cid_name',
    cid_num: 'cid_num',
    cid_ani: 'cid_ani',
    cid_rdnis: 'cid_rdnis',
    cid_dnid: 'cid_dnid',
    exten: 'exten',
    context: 'context',
    channame: 'channame',
    src: 'src',
    dst: 'dst',
    channel: 'channel',
    dstchannel: 'dstchannel',
    appname: 'appname',
    appdata: 'appdata',
    amaflags: 'amaflags',
    accountcode: 'accountcode',
    uniqueid: 'uniqueid',
    linkedid: 'linkedid',
    peer: 'peer',
    userdeftype: 'userdeftype',
    eventextra: 'eventextra',
    userfield: 'userfield'
  };

  export type CelScalarFieldEnum = (typeof CelScalarFieldEnum)[keyof typeof CelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const celOrderByRelevanceFieldEnum: {
    eventtype: 'eventtype',
    cid_name: 'cid_name',
    cid_num: 'cid_num',
    cid_ani: 'cid_ani',
    cid_rdnis: 'cid_rdnis',
    cid_dnid: 'cid_dnid',
    exten: 'exten',
    context: 'context',
    channame: 'channame',
    src: 'src',
    dst: 'dst',
    channel: 'channel',
    dstchannel: 'dstchannel',
    appname: 'appname',
    appdata: 'appdata',
    accountcode: 'accountcode',
    uniqueid: 'uniqueid',
    linkedid: 'linkedid',
    peer: 'peer',
    userdeftype: 'userdeftype',
    eventextra: 'eventextra',
    userfield: 'userfield'
  };

  export type celOrderByRelevanceFieldEnum = (typeof celOrderByRelevanceFieldEnum)[keyof typeof celOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type celWhereInput = {
    AND?: celWhereInput | celWhereInput[]
    OR?: celWhereInput[]
    NOT?: celWhereInput | celWhereInput[]
    id?: IntFilter<"cel"> | number
    eventtype?: StringFilter<"cel"> | string
    eventtime?: DateTimeFilter<"cel"> | Date | string
    cid_name?: StringFilter<"cel"> | string
    cid_num?: StringFilter<"cel"> | string
    cid_ani?: StringFilter<"cel"> | string
    cid_rdnis?: StringFilter<"cel"> | string
    cid_dnid?: StringFilter<"cel"> | string
    exten?: StringFilter<"cel"> | string
    context?: StringFilter<"cel"> | string
    channame?: StringFilter<"cel"> | string
    src?: StringFilter<"cel"> | string
    dst?: StringFilter<"cel"> | string
    channel?: StringFilter<"cel"> | string
    dstchannel?: StringFilter<"cel"> | string
    appname?: StringFilter<"cel"> | string
    appdata?: StringFilter<"cel"> | string
    amaflags?: IntFilter<"cel"> | number
    accountcode?: StringFilter<"cel"> | string
    uniqueid?: StringFilter<"cel"> | string
    linkedid?: StringFilter<"cel"> | string
    peer?: StringFilter<"cel"> | string
    userdeftype?: StringFilter<"cel"> | string
    eventextra?: StringFilter<"cel"> | string
    userfield?: StringFilter<"cel"> | string
  }

  export type celOrderByWithRelationInput = {
    id?: SortOrder
    eventtype?: SortOrder
    eventtime?: SortOrder
    cid_name?: SortOrder
    cid_num?: SortOrder
    cid_ani?: SortOrder
    cid_rdnis?: SortOrder
    cid_dnid?: SortOrder
    exten?: SortOrder
    context?: SortOrder
    channame?: SortOrder
    src?: SortOrder
    dst?: SortOrder
    channel?: SortOrder
    dstchannel?: SortOrder
    appname?: SortOrder
    appdata?: SortOrder
    amaflags?: SortOrder
    accountcode?: SortOrder
    uniqueid?: SortOrder
    linkedid?: SortOrder
    peer?: SortOrder
    userdeftype?: SortOrder
    eventextra?: SortOrder
    userfield?: SortOrder
    _relevance?: celOrderByRelevanceInput
  }

  export type celWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: celWhereInput | celWhereInput[]
    OR?: celWhereInput[]
    NOT?: celWhereInput | celWhereInput[]
    eventtype?: StringFilter<"cel"> | string
    eventtime?: DateTimeFilter<"cel"> | Date | string
    cid_name?: StringFilter<"cel"> | string
    cid_num?: StringFilter<"cel"> | string
    cid_ani?: StringFilter<"cel"> | string
    cid_rdnis?: StringFilter<"cel"> | string
    cid_dnid?: StringFilter<"cel"> | string
    exten?: StringFilter<"cel"> | string
    context?: StringFilter<"cel"> | string
    channame?: StringFilter<"cel"> | string
    src?: StringFilter<"cel"> | string
    dst?: StringFilter<"cel"> | string
    channel?: StringFilter<"cel"> | string
    dstchannel?: StringFilter<"cel"> | string
    appname?: StringFilter<"cel"> | string
    appdata?: StringFilter<"cel"> | string
    amaflags?: IntFilter<"cel"> | number
    accountcode?: StringFilter<"cel"> | string
    uniqueid?: StringFilter<"cel"> | string
    linkedid?: StringFilter<"cel"> | string
    peer?: StringFilter<"cel"> | string
    userdeftype?: StringFilter<"cel"> | string
    eventextra?: StringFilter<"cel"> | string
    userfield?: StringFilter<"cel"> | string
  }, "id">

  export type celOrderByWithAggregationInput = {
    id?: SortOrder
    eventtype?: SortOrder
    eventtime?: SortOrder
    cid_name?: SortOrder
    cid_num?: SortOrder
    cid_ani?: SortOrder
    cid_rdnis?: SortOrder
    cid_dnid?: SortOrder
    exten?: SortOrder
    context?: SortOrder
    channame?: SortOrder
    src?: SortOrder
    dst?: SortOrder
    channel?: SortOrder
    dstchannel?: SortOrder
    appname?: SortOrder
    appdata?: SortOrder
    amaflags?: SortOrder
    accountcode?: SortOrder
    uniqueid?: SortOrder
    linkedid?: SortOrder
    peer?: SortOrder
    userdeftype?: SortOrder
    eventextra?: SortOrder
    userfield?: SortOrder
    _count?: celCountOrderByAggregateInput
    _avg?: celAvgOrderByAggregateInput
    _max?: celMaxOrderByAggregateInput
    _min?: celMinOrderByAggregateInput
    _sum?: celSumOrderByAggregateInput
  }

  export type celScalarWhereWithAggregatesInput = {
    AND?: celScalarWhereWithAggregatesInput | celScalarWhereWithAggregatesInput[]
    OR?: celScalarWhereWithAggregatesInput[]
    NOT?: celScalarWhereWithAggregatesInput | celScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cel"> | number
    eventtype?: StringWithAggregatesFilter<"cel"> | string
    eventtime?: DateTimeWithAggregatesFilter<"cel"> | Date | string
    cid_name?: StringWithAggregatesFilter<"cel"> | string
    cid_num?: StringWithAggregatesFilter<"cel"> | string
    cid_ani?: StringWithAggregatesFilter<"cel"> | string
    cid_rdnis?: StringWithAggregatesFilter<"cel"> | string
    cid_dnid?: StringWithAggregatesFilter<"cel"> | string
    exten?: StringWithAggregatesFilter<"cel"> | string
    context?: StringWithAggregatesFilter<"cel"> | string
    channame?: StringWithAggregatesFilter<"cel"> | string
    src?: StringWithAggregatesFilter<"cel"> | string
    dst?: StringWithAggregatesFilter<"cel"> | string
    channel?: StringWithAggregatesFilter<"cel"> | string
    dstchannel?: StringWithAggregatesFilter<"cel"> | string
    appname?: StringWithAggregatesFilter<"cel"> | string
    appdata?: StringWithAggregatesFilter<"cel"> | string
    amaflags?: IntWithAggregatesFilter<"cel"> | number
    accountcode?: StringWithAggregatesFilter<"cel"> | string
    uniqueid?: StringWithAggregatesFilter<"cel"> | string
    linkedid?: StringWithAggregatesFilter<"cel"> | string
    peer?: StringWithAggregatesFilter<"cel"> | string
    userdeftype?: StringWithAggregatesFilter<"cel"> | string
    eventextra?: StringWithAggregatesFilter<"cel"> | string
    userfield?: StringWithAggregatesFilter<"cel"> | string
  }

  export type celCreateInput = {
    eventtype: string
    eventtime: Date | string
    cid_name: string
    cid_num: string
    cid_ani: string
    cid_rdnis: string
    cid_dnid: string
    exten: string
    context: string
    channame: string
    src: string
    dst: string
    channel: string
    dstchannel: string
    appname: string
    appdata: string
    amaflags: number
    accountcode: string
    uniqueid: string
    linkedid: string
    peer: string
    userdeftype: string
    eventextra: string
    userfield: string
  }

  export type celUncheckedCreateInput = {
    id?: number
    eventtype: string
    eventtime: Date | string
    cid_name: string
    cid_num: string
    cid_ani: string
    cid_rdnis: string
    cid_dnid: string
    exten: string
    context: string
    channame: string
    src: string
    dst: string
    channel: string
    dstchannel: string
    appname: string
    appdata: string
    amaflags: number
    accountcode: string
    uniqueid: string
    linkedid: string
    peer: string
    userdeftype: string
    eventextra: string
    userfield: string
  }

  export type celUpdateInput = {
    eventtype?: StringFieldUpdateOperationsInput | string
    eventtime?: DateTimeFieldUpdateOperationsInput | Date | string
    cid_name?: StringFieldUpdateOperationsInput | string
    cid_num?: StringFieldUpdateOperationsInput | string
    cid_ani?: StringFieldUpdateOperationsInput | string
    cid_rdnis?: StringFieldUpdateOperationsInput | string
    cid_dnid?: StringFieldUpdateOperationsInput | string
    exten?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    channame?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    dst?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    dstchannel?: StringFieldUpdateOperationsInput | string
    appname?: StringFieldUpdateOperationsInput | string
    appdata?: StringFieldUpdateOperationsInput | string
    amaflags?: IntFieldUpdateOperationsInput | number
    accountcode?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
    linkedid?: StringFieldUpdateOperationsInput | string
    peer?: StringFieldUpdateOperationsInput | string
    userdeftype?: StringFieldUpdateOperationsInput | string
    eventextra?: StringFieldUpdateOperationsInput | string
    userfield?: StringFieldUpdateOperationsInput | string
  }

  export type celUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventtype?: StringFieldUpdateOperationsInput | string
    eventtime?: DateTimeFieldUpdateOperationsInput | Date | string
    cid_name?: StringFieldUpdateOperationsInput | string
    cid_num?: StringFieldUpdateOperationsInput | string
    cid_ani?: StringFieldUpdateOperationsInput | string
    cid_rdnis?: StringFieldUpdateOperationsInput | string
    cid_dnid?: StringFieldUpdateOperationsInput | string
    exten?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    channame?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    dst?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    dstchannel?: StringFieldUpdateOperationsInput | string
    appname?: StringFieldUpdateOperationsInput | string
    appdata?: StringFieldUpdateOperationsInput | string
    amaflags?: IntFieldUpdateOperationsInput | number
    accountcode?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
    linkedid?: StringFieldUpdateOperationsInput | string
    peer?: StringFieldUpdateOperationsInput | string
    userdeftype?: StringFieldUpdateOperationsInput | string
    eventextra?: StringFieldUpdateOperationsInput | string
    userfield?: StringFieldUpdateOperationsInput | string
  }

  export type celCreateManyInput = {
    id?: number
    eventtype: string
    eventtime: Date | string
    cid_name: string
    cid_num: string
    cid_ani: string
    cid_rdnis: string
    cid_dnid: string
    exten: string
    context: string
    channame: string
    src: string
    dst: string
    channel: string
    dstchannel: string
    appname: string
    appdata: string
    amaflags: number
    accountcode: string
    uniqueid: string
    linkedid: string
    peer: string
    userdeftype: string
    eventextra: string
    userfield: string
  }

  export type celUpdateManyMutationInput = {
    eventtype?: StringFieldUpdateOperationsInput | string
    eventtime?: DateTimeFieldUpdateOperationsInput | Date | string
    cid_name?: StringFieldUpdateOperationsInput | string
    cid_num?: StringFieldUpdateOperationsInput | string
    cid_ani?: StringFieldUpdateOperationsInput | string
    cid_rdnis?: StringFieldUpdateOperationsInput | string
    cid_dnid?: StringFieldUpdateOperationsInput | string
    exten?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    channame?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    dst?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    dstchannel?: StringFieldUpdateOperationsInput | string
    appname?: StringFieldUpdateOperationsInput | string
    appdata?: StringFieldUpdateOperationsInput | string
    amaflags?: IntFieldUpdateOperationsInput | number
    accountcode?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
    linkedid?: StringFieldUpdateOperationsInput | string
    peer?: StringFieldUpdateOperationsInput | string
    userdeftype?: StringFieldUpdateOperationsInput | string
    eventextra?: StringFieldUpdateOperationsInput | string
    userfield?: StringFieldUpdateOperationsInput | string
  }

  export type celUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventtype?: StringFieldUpdateOperationsInput | string
    eventtime?: DateTimeFieldUpdateOperationsInput | Date | string
    cid_name?: StringFieldUpdateOperationsInput | string
    cid_num?: StringFieldUpdateOperationsInput | string
    cid_ani?: StringFieldUpdateOperationsInput | string
    cid_rdnis?: StringFieldUpdateOperationsInput | string
    cid_dnid?: StringFieldUpdateOperationsInput | string
    exten?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    channame?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    dst?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    dstchannel?: StringFieldUpdateOperationsInput | string
    appname?: StringFieldUpdateOperationsInput | string
    appdata?: StringFieldUpdateOperationsInput | string
    amaflags?: IntFieldUpdateOperationsInput | number
    accountcode?: StringFieldUpdateOperationsInput | string
    uniqueid?: StringFieldUpdateOperationsInput | string
    linkedid?: StringFieldUpdateOperationsInput | string
    peer?: StringFieldUpdateOperationsInput | string
    userdeftype?: StringFieldUpdateOperationsInput | string
    eventextra?: StringFieldUpdateOperationsInput | string
    userfield?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type celOrderByRelevanceInput = {
    fields: celOrderByRelevanceFieldEnum | celOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type celCountOrderByAggregateInput = {
    id?: SortOrder
    eventtype?: SortOrder
    eventtime?: SortOrder
    cid_name?: SortOrder
    cid_num?: SortOrder
    cid_ani?: SortOrder
    cid_rdnis?: SortOrder
    cid_dnid?: SortOrder
    exten?: SortOrder
    context?: SortOrder
    channame?: SortOrder
    src?: SortOrder
    dst?: SortOrder
    channel?: SortOrder
    dstchannel?: SortOrder
    appname?: SortOrder
    appdata?: SortOrder
    amaflags?: SortOrder
    accountcode?: SortOrder
    uniqueid?: SortOrder
    linkedid?: SortOrder
    peer?: SortOrder
    userdeftype?: SortOrder
    eventextra?: SortOrder
    userfield?: SortOrder
  }

  export type celAvgOrderByAggregateInput = {
    id?: SortOrder
    amaflags?: SortOrder
  }

  export type celMaxOrderByAggregateInput = {
    id?: SortOrder
    eventtype?: SortOrder
    eventtime?: SortOrder
    cid_name?: SortOrder
    cid_num?: SortOrder
    cid_ani?: SortOrder
    cid_rdnis?: SortOrder
    cid_dnid?: SortOrder
    exten?: SortOrder
    context?: SortOrder
    channame?: SortOrder
    src?: SortOrder
    dst?: SortOrder
    channel?: SortOrder
    dstchannel?: SortOrder
    appname?: SortOrder
    appdata?: SortOrder
    amaflags?: SortOrder
    accountcode?: SortOrder
    uniqueid?: SortOrder
    linkedid?: SortOrder
    peer?: SortOrder
    userdeftype?: SortOrder
    eventextra?: SortOrder
    userfield?: SortOrder
  }

  export type celMinOrderByAggregateInput = {
    id?: SortOrder
    eventtype?: SortOrder
    eventtime?: SortOrder
    cid_name?: SortOrder
    cid_num?: SortOrder
    cid_ani?: SortOrder
    cid_rdnis?: SortOrder
    cid_dnid?: SortOrder
    exten?: SortOrder
    context?: SortOrder
    channame?: SortOrder
    src?: SortOrder
    dst?: SortOrder
    channel?: SortOrder
    dstchannel?: SortOrder
    appname?: SortOrder
    appdata?: SortOrder
    amaflags?: SortOrder
    accountcode?: SortOrder
    uniqueid?: SortOrder
    linkedid?: SortOrder
    peer?: SortOrder
    userdeftype?: SortOrder
    eventextra?: SortOrder
    userfield?: SortOrder
  }

  export type celSumOrderByAggregateInput = {
    id?: SortOrder
    amaflags?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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