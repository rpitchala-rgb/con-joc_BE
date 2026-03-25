
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
 * Model api_tokens
 * 
 */
export type api_tokens = $Result.DefaultSelection<Prisma.$api_tokensPayload>
/**
 * Model polaris_api_tokens
 * 
 */
export type polaris_api_tokens = $Result.DefaultSelection<Prisma.$polaris_api_tokensPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model sessions_copy
 * 
 */
export type sessions_copy = $Result.DefaultSelection<Prisma.$sessions_copyPayload>
/**
 * Model test
 * 
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_tokens
 * const api_tokens = await prisma.api_tokens.findMany()
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
   * // Fetch zero or more Api_tokens
   * const api_tokens = await prisma.api_tokens.findMany()
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
   * `prisma.api_tokens`: Exposes CRUD operations for the **api_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_tokens
    * const api_tokens = await prisma.api_tokens.findMany()
    * ```
    */
  get api_tokens(): Prisma.api_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.polaris_api_tokens`: Exposes CRUD operations for the **polaris_api_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polaris_api_tokens
    * const polaris_api_tokens = await prisma.polaris_api_tokens.findMany()
    * ```
    */
  get polaris_api_tokens(): Prisma.polaris_api_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions_copy`: Exposes CRUD operations for the **sessions_copy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions_copies
    * const sessions_copies = await prisma.sessions_copy.findMany()
    * ```
    */
  get sessions_copy(): Prisma.sessions_copyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<ExtArgs, ClientOptions>;
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
    api_tokens: 'api_tokens',
    polaris_api_tokens: 'polaris_api_tokens',
    sessions: 'sessions',
    sessions_copy: 'sessions_copy',
    test: 'test'
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
      modelProps: "api_tokens" | "polaris_api_tokens" | "sessions" | "sessions_copy" | "test"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      api_tokens: {
        payload: Prisma.$api_tokensPayload<ExtArgs>
        fields: Prisma.api_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          findFirst: {
            args: Prisma.api_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          findMany: {
            args: Prisma.api_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>[]
          }
          create: {
            args: Prisma.api_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          createMany: {
            args: Prisma.api_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.api_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          update: {
            args: Prisma.api_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          deleteMany: {
            args: Prisma.api_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.api_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_tokensPayload>
          }
          aggregate: {
            args: Prisma.Api_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_tokens>
          }
          groupBy: {
            args: Prisma.api_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Api_tokensCountAggregateOutputType> | number
          }
        }
      }
      polaris_api_tokens: {
        payload: Prisma.$polaris_api_tokensPayload<ExtArgs>
        fields: Prisma.polaris_api_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.polaris_api_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.polaris_api_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          findFirst: {
            args: Prisma.polaris_api_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.polaris_api_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          findMany: {
            args: Prisma.polaris_api_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>[]
          }
          create: {
            args: Prisma.polaris_api_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          createMany: {
            args: Prisma.polaris_api_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.polaris_api_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          update: {
            args: Prisma.polaris_api_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          deleteMany: {
            args: Prisma.polaris_api_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.polaris_api_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.polaris_api_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$polaris_api_tokensPayload>
          }
          aggregate: {
            args: Prisma.Polaris_api_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolaris_api_tokens>
          }
          groupBy: {
            args: Prisma.polaris_api_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Polaris_api_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.polaris_api_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Polaris_api_tokensCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      sessions_copy: {
        payload: Prisma.$sessions_copyPayload<ExtArgs>
        fields: Prisma.sessions_copyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessions_copyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessions_copyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          findFirst: {
            args: Prisma.sessions_copyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessions_copyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          findMany: {
            args: Prisma.sessions_copyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>[]
          }
          create: {
            args: Prisma.sessions_copyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          createMany: {
            args: Prisma.sessions_copyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessions_copyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          update: {
            args: Prisma.sessions_copyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          deleteMany: {
            args: Prisma.sessions_copyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessions_copyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessions_copyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessions_copyPayload>
          }
          aggregate: {
            args: Prisma.Sessions_copyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions_copy>
          }
          groupBy: {
            args: Prisma.sessions_copyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sessions_copyGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessions_copyCountArgs<ExtArgs>
            result: $Utils.Optional<Sessions_copyCountAggregateOutputType> | number
          }
        }
      }
      test: {
        payload: Prisma.$testPayload<ExtArgs>
        fields: Prisma.testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          create: {
            args: Prisma.testCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          createMany: {
            args: Prisma.testCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.testCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
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
    api_tokens?: api_tokensOmit
    polaris_api_tokens?: polaris_api_tokensOmit
    sessions?: sessionsOmit
    sessions_copy?: sessions_copyOmit
    test?: testOmit
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
   * Model api_tokens
   */

  export type AggregateApi_tokens = {
    _count: Api_tokensCountAggregateOutputType | null
    _avg: Api_tokensAvgAggregateOutputType | null
    _sum: Api_tokensSumAggregateOutputType | null
    _min: Api_tokensMinAggregateOutputType | null
    _max: Api_tokensMaxAggregateOutputType | null
  }

  export type Api_tokensAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type Api_tokensSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type Api_tokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    user_id: number | null
    account_id: number | null
    cluster_node: string | null
    user_agent: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Api_tokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    user_id: number | null
    account_id: number | null
    cluster_node: string | null
    user_agent: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Api_tokensCountAggregateOutputType = {
    id: number
    token: number
    user_id: number
    account_id: number
    cluster_node: number
    user_agent: number
    ip_address: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Api_tokensAvgAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type Api_tokensSumAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type Api_tokensMinAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
  }

  export type Api_tokensMaxAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
  }

  export type Api_tokensCountAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Api_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_tokens to aggregate.
     */
    where?: api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_tokens to fetch.
     */
    orderBy?: api_tokensOrderByWithRelationInput | api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_tokens
    **/
    _count?: true | Api_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_tokensMaxAggregateInputType
  }

  export type GetApi_tokensAggregateType<T extends Api_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_tokens[P]>
      : GetScalarType<T[P], AggregateApi_tokens[P]>
  }




  export type api_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_tokensWhereInput
    orderBy?: api_tokensOrderByWithAggregationInput | api_tokensOrderByWithAggregationInput[]
    by: Api_tokensScalarFieldEnum[] | Api_tokensScalarFieldEnum
    having?: api_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_tokensCountAggregateInputType | true
    _avg?: Api_tokensAvgAggregateInputType
    _sum?: Api_tokensSumAggregateInputType
    _min?: Api_tokensMinAggregateInputType
    _max?: Api_tokensMaxAggregateInputType
  }

  export type Api_tokensGroupByOutputType = {
    id: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date
    created_at: Date
    _count: Api_tokensCountAggregateOutputType | null
    _avg: Api_tokensAvgAggregateOutputType | null
    _sum: Api_tokensSumAggregateOutputType | null
    _min: Api_tokensMinAggregateOutputType | null
    _max: Api_tokensMaxAggregateOutputType | null
  }

  type GetApi_tokensGroupByPayload<T extends api_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Api_tokensGroupByOutputType[P]>
        }
      >
    >


  export type api_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    account_id?: boolean
    cluster_node?: boolean
    user_agent?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["api_tokens"]>



  export type api_tokensSelectScalar = {
    id?: boolean
    token?: boolean
    user_id?: boolean
    account_id?: boolean
    cluster_node?: boolean
    user_agent?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type api_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "user_id" | "account_id" | "cluster_node" | "user_agent" | "ip_address" | "expires_at" | "created_at", ExtArgs["result"]["api_tokens"]>

  export type $api_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      user_id: number
      account_id: number
      cluster_node: string
      user_agent: string
      ip_address: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["api_tokens"]>
    composites: {}
  }

  type api_tokensGetPayload<S extends boolean | null | undefined | api_tokensDefaultArgs> = $Result.GetResult<Prisma.$api_tokensPayload, S>

  type api_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_tokensCountAggregateInputType | true
    }

  export interface api_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_tokens'], meta: { name: 'api_tokens' } }
    /**
     * Find zero or one Api_tokens that matches the filter.
     * @param {api_tokensFindUniqueArgs} args - Arguments to find a Api_tokens
     * @example
     * // Get one Api_tokens
     * const api_tokens = await prisma.api_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_tokensFindUniqueArgs>(args: SelectSubset<T, api_tokensFindUniqueArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_tokensFindUniqueOrThrowArgs} args - Arguments to find a Api_tokens
     * @example
     * // Get one Api_tokens
     * const api_tokens = await prisma.api_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, api_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensFindFirstArgs} args - Arguments to find a Api_tokens
     * @example
     * // Get one Api_tokens
     * const api_tokens = await prisma.api_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_tokensFindFirstArgs>(args?: SelectSubset<T, api_tokensFindFirstArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensFindFirstOrThrowArgs} args - Arguments to find a Api_tokens
     * @example
     * // Get one Api_tokens
     * const api_tokens = await prisma.api_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, api_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_tokens
     * const api_tokens = await prisma.api_tokens.findMany()
     * 
     * // Get first 10 Api_tokens
     * const api_tokens = await prisma.api_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_tokensWithIdOnly = await prisma.api_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_tokensFindManyArgs>(args?: SelectSubset<T, api_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_tokens.
     * @param {api_tokensCreateArgs} args - Arguments to create a Api_tokens.
     * @example
     * // Create one Api_tokens
     * const Api_tokens = await prisma.api_tokens.create({
     *   data: {
     *     // ... data to create a Api_tokens
     *   }
     * })
     * 
     */
    create<T extends api_tokensCreateArgs>(args: SelectSubset<T, api_tokensCreateArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_tokens.
     * @param {api_tokensCreateManyArgs} args - Arguments to create many Api_tokens.
     * @example
     * // Create many Api_tokens
     * const api_tokens = await prisma.api_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_tokensCreateManyArgs>(args?: SelectSubset<T, api_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Api_tokens.
     * @param {api_tokensDeleteArgs} args - Arguments to delete one Api_tokens.
     * @example
     * // Delete one Api_tokens
     * const Api_tokens = await prisma.api_tokens.delete({
     *   where: {
     *     // ... filter to delete one Api_tokens
     *   }
     * })
     * 
     */
    delete<T extends api_tokensDeleteArgs>(args: SelectSubset<T, api_tokensDeleteArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_tokens.
     * @param {api_tokensUpdateArgs} args - Arguments to update one Api_tokens.
     * @example
     * // Update one Api_tokens
     * const api_tokens = await prisma.api_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_tokensUpdateArgs>(args: SelectSubset<T, api_tokensUpdateArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_tokens.
     * @param {api_tokensDeleteManyArgs} args - Arguments to filter Api_tokens to delete.
     * @example
     * // Delete a few Api_tokens
     * const { count } = await prisma.api_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_tokensDeleteManyArgs>(args?: SelectSubset<T, api_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_tokens
     * const api_tokens = await prisma.api_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_tokensUpdateManyArgs>(args: SelectSubset<T, api_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Api_tokens.
     * @param {api_tokensUpsertArgs} args - Arguments to update or create a Api_tokens.
     * @example
     * // Update or create a Api_tokens
     * const api_tokens = await prisma.api_tokens.upsert({
     *   create: {
     *     // ... data to create a Api_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_tokens we want to update
     *   }
     * })
     */
    upsert<T extends api_tokensUpsertArgs>(args: SelectSubset<T, api_tokensUpsertArgs<ExtArgs>>): Prisma__api_tokensClient<$Result.GetResult<Prisma.$api_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensCountArgs} args - Arguments to filter Api_tokens to count.
     * @example
     * // Count the number of Api_tokens
     * const count = await prisma.api_tokens.count({
     *   where: {
     *     // ... the filter for the Api_tokens we want to count
     *   }
     * })
    **/
    count<T extends api_tokensCountArgs>(
      args?: Subset<T, api_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_tokensAggregateArgs>(args: Subset<T, Api_tokensAggregateArgs>): Prisma.PrismaPromise<GetApi_tokensAggregateType<T>>

    /**
     * Group by Api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_tokensGroupByArgs} args - Group by arguments.
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
      T extends api_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_tokensGroupByArgs['orderBy'] }
        : { orderBy?: api_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_tokens model
   */
  readonly fields: api_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the api_tokens model
   */
  interface api_tokensFieldRefs {
    readonly id: FieldRef<"api_tokens", 'Int'>
    readonly token: FieldRef<"api_tokens", 'String'>
    readonly user_id: FieldRef<"api_tokens", 'Int'>
    readonly account_id: FieldRef<"api_tokens", 'Int'>
    readonly cluster_node: FieldRef<"api_tokens", 'String'>
    readonly user_agent: FieldRef<"api_tokens", 'String'>
    readonly ip_address: FieldRef<"api_tokens", 'String'>
    readonly expires_at: FieldRef<"api_tokens", 'DateTime'>
    readonly created_at: FieldRef<"api_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * api_tokens findUnique
   */
  export type api_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which api_tokens to fetch.
     */
    where: api_tokensWhereUniqueInput
  }

  /**
   * api_tokens findUniqueOrThrow
   */
  export type api_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which api_tokens to fetch.
     */
    where: api_tokensWhereUniqueInput
  }

  /**
   * api_tokens findFirst
   */
  export type api_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which api_tokens to fetch.
     */
    where?: api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_tokens to fetch.
     */
    orderBy?: api_tokensOrderByWithRelationInput | api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_tokens.
     */
    cursor?: api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_tokens.
     */
    distinct?: Api_tokensScalarFieldEnum | Api_tokensScalarFieldEnum[]
  }

  /**
   * api_tokens findFirstOrThrow
   */
  export type api_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which api_tokens to fetch.
     */
    where?: api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_tokens to fetch.
     */
    orderBy?: api_tokensOrderByWithRelationInput | api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_tokens.
     */
    cursor?: api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_tokens.
     */
    distinct?: Api_tokensScalarFieldEnum | Api_tokensScalarFieldEnum[]
  }

  /**
   * api_tokens findMany
   */
  export type api_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which api_tokens to fetch.
     */
    where?: api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_tokens to fetch.
     */
    orderBy?: api_tokensOrderByWithRelationInput | api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_tokens.
     */
    cursor?: api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_tokens.
     */
    skip?: number
    distinct?: Api_tokensScalarFieldEnum | Api_tokensScalarFieldEnum[]
  }

  /**
   * api_tokens create
   */
  export type api_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a api_tokens.
     */
    data: XOR<api_tokensCreateInput, api_tokensUncheckedCreateInput>
  }

  /**
   * api_tokens createMany
   */
  export type api_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_tokens.
     */
    data: api_tokensCreateManyInput | api_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_tokens update
   */
  export type api_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a api_tokens.
     */
    data: XOR<api_tokensUpdateInput, api_tokensUncheckedUpdateInput>
    /**
     * Choose, which api_tokens to update.
     */
    where: api_tokensWhereUniqueInput
  }

  /**
   * api_tokens updateMany
   */
  export type api_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_tokens.
     */
    data: XOR<api_tokensUpdateManyMutationInput, api_tokensUncheckedUpdateManyInput>
    /**
     * Filter which api_tokens to update
     */
    where?: api_tokensWhereInput
    /**
     * Limit how many api_tokens to update.
     */
    limit?: number
  }

  /**
   * api_tokens upsert
   */
  export type api_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the api_tokens to update in case it exists.
     */
    where: api_tokensWhereUniqueInput
    /**
     * In case the api_tokens found by the `where` argument doesn't exist, create a new api_tokens with this data.
     */
    create: XOR<api_tokensCreateInput, api_tokensUncheckedCreateInput>
    /**
     * In case the api_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_tokensUpdateInput, api_tokensUncheckedUpdateInput>
  }

  /**
   * api_tokens delete
   */
  export type api_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
    /**
     * Filter which api_tokens to delete.
     */
    where: api_tokensWhereUniqueInput
  }

  /**
   * api_tokens deleteMany
   */
  export type api_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_tokens to delete
     */
    where?: api_tokensWhereInput
    /**
     * Limit how many api_tokens to delete.
     */
    limit?: number
  }

  /**
   * api_tokens without action
   */
  export type api_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_tokens
     */
    select?: api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_tokens
     */
    omit?: api_tokensOmit<ExtArgs> | null
  }


  /**
   * Model polaris_api_tokens
   */

  export type AggregatePolaris_api_tokens = {
    _count: Polaris_api_tokensCountAggregateOutputType | null
    _avg: Polaris_api_tokensAvgAggregateOutputType | null
    _sum: Polaris_api_tokensSumAggregateOutputType | null
    _min: Polaris_api_tokensMinAggregateOutputType | null
    _max: Polaris_api_tokensMaxAggregateOutputType | null
  }

  export type Polaris_api_tokensAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type Polaris_api_tokensSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    account_id: number | null
  }

  export type Polaris_api_tokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    user_id: number | null
    account_id: number | null
    cluster_node: string | null
    user_agent: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Polaris_api_tokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    user_id: number | null
    account_id: number | null
    cluster_node: string | null
    user_agent: string | null
    ip_address: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Polaris_api_tokensCountAggregateOutputType = {
    id: number
    token: number
    user_id: number
    account_id: number
    cluster_node: number
    user_agent: number
    ip_address: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Polaris_api_tokensAvgAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type Polaris_api_tokensSumAggregateInputType = {
    id?: true
    user_id?: true
    account_id?: true
  }

  export type Polaris_api_tokensMinAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
  }

  export type Polaris_api_tokensMaxAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
  }

  export type Polaris_api_tokensCountAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    account_id?: true
    cluster_node?: true
    user_agent?: true
    ip_address?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Polaris_api_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which polaris_api_tokens to aggregate.
     */
    where?: polaris_api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polaris_api_tokens to fetch.
     */
    orderBy?: polaris_api_tokensOrderByWithRelationInput | polaris_api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: polaris_api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polaris_api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polaris_api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned polaris_api_tokens
    **/
    _count?: true | Polaris_api_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Polaris_api_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Polaris_api_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Polaris_api_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Polaris_api_tokensMaxAggregateInputType
  }

  export type GetPolaris_api_tokensAggregateType<T extends Polaris_api_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePolaris_api_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolaris_api_tokens[P]>
      : GetScalarType<T[P], AggregatePolaris_api_tokens[P]>
  }




  export type polaris_api_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: polaris_api_tokensWhereInput
    orderBy?: polaris_api_tokensOrderByWithAggregationInput | polaris_api_tokensOrderByWithAggregationInput[]
    by: Polaris_api_tokensScalarFieldEnum[] | Polaris_api_tokensScalarFieldEnum
    having?: polaris_api_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Polaris_api_tokensCountAggregateInputType | true
    _avg?: Polaris_api_tokensAvgAggregateInputType
    _sum?: Polaris_api_tokensSumAggregateInputType
    _min?: Polaris_api_tokensMinAggregateInputType
    _max?: Polaris_api_tokensMaxAggregateInputType
  }

  export type Polaris_api_tokensGroupByOutputType = {
    id: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date
    created_at: Date
    _count: Polaris_api_tokensCountAggregateOutputType | null
    _avg: Polaris_api_tokensAvgAggregateOutputType | null
    _sum: Polaris_api_tokensSumAggregateOutputType | null
    _min: Polaris_api_tokensMinAggregateOutputType | null
    _max: Polaris_api_tokensMaxAggregateOutputType | null
  }

  type GetPolaris_api_tokensGroupByPayload<T extends polaris_api_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Polaris_api_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Polaris_api_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Polaris_api_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Polaris_api_tokensGroupByOutputType[P]>
        }
      >
    >


  export type polaris_api_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    account_id?: boolean
    cluster_node?: boolean
    user_agent?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["polaris_api_tokens"]>



  export type polaris_api_tokensSelectScalar = {
    id?: boolean
    token?: boolean
    user_id?: boolean
    account_id?: boolean
    cluster_node?: boolean
    user_agent?: boolean
    ip_address?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type polaris_api_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "user_id" | "account_id" | "cluster_node" | "user_agent" | "ip_address" | "expires_at" | "created_at", ExtArgs["result"]["polaris_api_tokens"]>

  export type $polaris_api_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "polaris_api_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      user_id: number
      account_id: number
      cluster_node: string
      user_agent: string
      ip_address: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["polaris_api_tokens"]>
    composites: {}
  }

  type polaris_api_tokensGetPayload<S extends boolean | null | undefined | polaris_api_tokensDefaultArgs> = $Result.GetResult<Prisma.$polaris_api_tokensPayload, S>

  type polaris_api_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<polaris_api_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Polaris_api_tokensCountAggregateInputType | true
    }

  export interface polaris_api_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['polaris_api_tokens'], meta: { name: 'polaris_api_tokens' } }
    /**
     * Find zero or one Polaris_api_tokens that matches the filter.
     * @param {polaris_api_tokensFindUniqueArgs} args - Arguments to find a Polaris_api_tokens
     * @example
     * // Get one Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends polaris_api_tokensFindUniqueArgs>(args: SelectSubset<T, polaris_api_tokensFindUniqueArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Polaris_api_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {polaris_api_tokensFindUniqueOrThrowArgs} args - Arguments to find a Polaris_api_tokens
     * @example
     * // Get one Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends polaris_api_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, polaris_api_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Polaris_api_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensFindFirstArgs} args - Arguments to find a Polaris_api_tokens
     * @example
     * // Get one Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends polaris_api_tokensFindFirstArgs>(args?: SelectSubset<T, polaris_api_tokensFindFirstArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Polaris_api_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensFindFirstOrThrowArgs} args - Arguments to find a Polaris_api_tokens
     * @example
     * // Get one Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends polaris_api_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, polaris_api_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polaris_api_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findMany()
     * 
     * // Get first 10 Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const polaris_api_tokensWithIdOnly = await prisma.polaris_api_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends polaris_api_tokensFindManyArgs>(args?: SelectSubset<T, polaris_api_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Polaris_api_tokens.
     * @param {polaris_api_tokensCreateArgs} args - Arguments to create a Polaris_api_tokens.
     * @example
     * // Create one Polaris_api_tokens
     * const Polaris_api_tokens = await prisma.polaris_api_tokens.create({
     *   data: {
     *     // ... data to create a Polaris_api_tokens
     *   }
     * })
     * 
     */
    create<T extends polaris_api_tokensCreateArgs>(args: SelectSubset<T, polaris_api_tokensCreateArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polaris_api_tokens.
     * @param {polaris_api_tokensCreateManyArgs} args - Arguments to create many Polaris_api_tokens.
     * @example
     * // Create many Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends polaris_api_tokensCreateManyArgs>(args?: SelectSubset<T, polaris_api_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Polaris_api_tokens.
     * @param {polaris_api_tokensDeleteArgs} args - Arguments to delete one Polaris_api_tokens.
     * @example
     * // Delete one Polaris_api_tokens
     * const Polaris_api_tokens = await prisma.polaris_api_tokens.delete({
     *   where: {
     *     // ... filter to delete one Polaris_api_tokens
     *   }
     * })
     * 
     */
    delete<T extends polaris_api_tokensDeleteArgs>(args: SelectSubset<T, polaris_api_tokensDeleteArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Polaris_api_tokens.
     * @param {polaris_api_tokensUpdateArgs} args - Arguments to update one Polaris_api_tokens.
     * @example
     * // Update one Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends polaris_api_tokensUpdateArgs>(args: SelectSubset<T, polaris_api_tokensUpdateArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polaris_api_tokens.
     * @param {polaris_api_tokensDeleteManyArgs} args - Arguments to filter Polaris_api_tokens to delete.
     * @example
     * // Delete a few Polaris_api_tokens
     * const { count } = await prisma.polaris_api_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends polaris_api_tokensDeleteManyArgs>(args?: SelectSubset<T, polaris_api_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polaris_api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends polaris_api_tokensUpdateManyArgs>(args: SelectSubset<T, polaris_api_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Polaris_api_tokens.
     * @param {polaris_api_tokensUpsertArgs} args - Arguments to update or create a Polaris_api_tokens.
     * @example
     * // Update or create a Polaris_api_tokens
     * const polaris_api_tokens = await prisma.polaris_api_tokens.upsert({
     *   create: {
     *     // ... data to create a Polaris_api_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Polaris_api_tokens we want to update
     *   }
     * })
     */
    upsert<T extends polaris_api_tokensUpsertArgs>(args: SelectSubset<T, polaris_api_tokensUpsertArgs<ExtArgs>>): Prisma__polaris_api_tokensClient<$Result.GetResult<Prisma.$polaris_api_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polaris_api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensCountArgs} args - Arguments to filter Polaris_api_tokens to count.
     * @example
     * // Count the number of Polaris_api_tokens
     * const count = await prisma.polaris_api_tokens.count({
     *   where: {
     *     // ... the filter for the Polaris_api_tokens we want to count
     *   }
     * })
    **/
    count<T extends polaris_api_tokensCountArgs>(
      args?: Subset<T, polaris_api_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Polaris_api_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Polaris_api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Polaris_api_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Polaris_api_tokensAggregateArgs>(args: Subset<T, Polaris_api_tokensAggregateArgs>): Prisma.PrismaPromise<GetPolaris_api_tokensAggregateType<T>>

    /**
     * Group by Polaris_api_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {polaris_api_tokensGroupByArgs} args - Group by arguments.
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
      T extends polaris_api_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: polaris_api_tokensGroupByArgs['orderBy'] }
        : { orderBy?: polaris_api_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, polaris_api_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolaris_api_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the polaris_api_tokens model
   */
  readonly fields: polaris_api_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for polaris_api_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__polaris_api_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the polaris_api_tokens model
   */
  interface polaris_api_tokensFieldRefs {
    readonly id: FieldRef<"polaris_api_tokens", 'Int'>
    readonly token: FieldRef<"polaris_api_tokens", 'String'>
    readonly user_id: FieldRef<"polaris_api_tokens", 'Int'>
    readonly account_id: FieldRef<"polaris_api_tokens", 'Int'>
    readonly cluster_node: FieldRef<"polaris_api_tokens", 'String'>
    readonly user_agent: FieldRef<"polaris_api_tokens", 'String'>
    readonly ip_address: FieldRef<"polaris_api_tokens", 'String'>
    readonly expires_at: FieldRef<"polaris_api_tokens", 'DateTime'>
    readonly created_at: FieldRef<"polaris_api_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * polaris_api_tokens findUnique
   */
  export type polaris_api_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which polaris_api_tokens to fetch.
     */
    where: polaris_api_tokensWhereUniqueInput
  }

  /**
   * polaris_api_tokens findUniqueOrThrow
   */
  export type polaris_api_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which polaris_api_tokens to fetch.
     */
    where: polaris_api_tokensWhereUniqueInput
  }

  /**
   * polaris_api_tokens findFirst
   */
  export type polaris_api_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which polaris_api_tokens to fetch.
     */
    where?: polaris_api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polaris_api_tokens to fetch.
     */
    orderBy?: polaris_api_tokensOrderByWithRelationInput | polaris_api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polaris_api_tokens.
     */
    cursor?: polaris_api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polaris_api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polaris_api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polaris_api_tokens.
     */
    distinct?: Polaris_api_tokensScalarFieldEnum | Polaris_api_tokensScalarFieldEnum[]
  }

  /**
   * polaris_api_tokens findFirstOrThrow
   */
  export type polaris_api_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which polaris_api_tokens to fetch.
     */
    where?: polaris_api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polaris_api_tokens to fetch.
     */
    orderBy?: polaris_api_tokensOrderByWithRelationInput | polaris_api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polaris_api_tokens.
     */
    cursor?: polaris_api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polaris_api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polaris_api_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polaris_api_tokens.
     */
    distinct?: Polaris_api_tokensScalarFieldEnum | Polaris_api_tokensScalarFieldEnum[]
  }

  /**
   * polaris_api_tokens findMany
   */
  export type polaris_api_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter, which polaris_api_tokens to fetch.
     */
    where?: polaris_api_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polaris_api_tokens to fetch.
     */
    orderBy?: polaris_api_tokensOrderByWithRelationInput | polaris_api_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing polaris_api_tokens.
     */
    cursor?: polaris_api_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polaris_api_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polaris_api_tokens.
     */
    skip?: number
    distinct?: Polaris_api_tokensScalarFieldEnum | Polaris_api_tokensScalarFieldEnum[]
  }

  /**
   * polaris_api_tokens create
   */
  export type polaris_api_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a polaris_api_tokens.
     */
    data: XOR<polaris_api_tokensCreateInput, polaris_api_tokensUncheckedCreateInput>
  }

  /**
   * polaris_api_tokens createMany
   */
  export type polaris_api_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many polaris_api_tokens.
     */
    data: polaris_api_tokensCreateManyInput | polaris_api_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * polaris_api_tokens update
   */
  export type polaris_api_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a polaris_api_tokens.
     */
    data: XOR<polaris_api_tokensUpdateInput, polaris_api_tokensUncheckedUpdateInput>
    /**
     * Choose, which polaris_api_tokens to update.
     */
    where: polaris_api_tokensWhereUniqueInput
  }

  /**
   * polaris_api_tokens updateMany
   */
  export type polaris_api_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update polaris_api_tokens.
     */
    data: XOR<polaris_api_tokensUpdateManyMutationInput, polaris_api_tokensUncheckedUpdateManyInput>
    /**
     * Filter which polaris_api_tokens to update
     */
    where?: polaris_api_tokensWhereInput
    /**
     * Limit how many polaris_api_tokens to update.
     */
    limit?: number
  }

  /**
   * polaris_api_tokens upsert
   */
  export type polaris_api_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the polaris_api_tokens to update in case it exists.
     */
    where: polaris_api_tokensWhereUniqueInput
    /**
     * In case the polaris_api_tokens found by the `where` argument doesn't exist, create a new polaris_api_tokens with this data.
     */
    create: XOR<polaris_api_tokensCreateInput, polaris_api_tokensUncheckedCreateInput>
    /**
     * In case the polaris_api_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<polaris_api_tokensUpdateInput, polaris_api_tokensUncheckedUpdateInput>
  }

  /**
   * polaris_api_tokens delete
   */
  export type polaris_api_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
    /**
     * Filter which polaris_api_tokens to delete.
     */
    where: polaris_api_tokensWhereUniqueInput
  }

  /**
   * polaris_api_tokens deleteMany
   */
  export type polaris_api_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which polaris_api_tokens to delete
     */
    where?: polaris_api_tokensWhereInput
    /**
     * Limit how many polaris_api_tokens to delete.
     */
    limit?: number
  }

  /**
   * polaris_api_tokens without action
   */
  export type polaris_api_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the polaris_api_tokens
     */
    select?: polaris_api_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the polaris_api_tokens
     */
    omit?: polaris_api_tokensOmit<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type SessionsSumAggregateOutputType = {
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type SessionsMinAggregateOutputType = {
    sess_id: Bytes | null
    sess_data: string | null
    sess_time: number | null
    sess_lifetime: number | null
    modify_date: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    sess_id: Bytes | null
    sess_data: string | null
    sess_time: number | null
    sess_lifetime: number | null
    modify_date: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    sess_id: number
    sess_data: number
    sess_time: number
    sess_lifetime: number
    modify_date: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    sess_time?: true
    sess_lifetime?: true
  }

  export type SessionsSumAggregateInputType = {
    sess_time?: true
    sess_lifetime?: true
  }

  export type SessionsMinAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
    modify_date?: true
  }

  export type SessionsMaxAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
    modify_date?: true
  }

  export type SessionsCountAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
    modify_date?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
    modify_date: Date
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sess_id?: boolean
    sess_data?: boolean
    sess_time?: boolean
    sess_lifetime?: boolean
    modify_date?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    sess_id?: boolean
    sess_data?: boolean
    sess_time?: boolean
    sess_lifetime?: boolean
    modify_date?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sess_id" | "sess_data" | "sess_time" | "sess_lifetime" | "modify_date", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sess_id: Prisma.Bytes
      sess_data: string
      sess_time: number
      sess_lifetime: number
      modify_date: Date
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `sess_id`
     * const sessionsWithSess_idOnly = await prisma.sessions.findMany({ select: { sess_id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly sess_id: FieldRef<"sessions", 'Bytes'>
    readonly sess_data: FieldRef<"sessions", 'String'>
    readonly sess_time: FieldRef<"sessions", 'Int'>
    readonly sess_lifetime: FieldRef<"sessions", 'Int'>
    readonly modify_date: FieldRef<"sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model sessions_copy
   */

  export type AggregateSessions_copy = {
    _count: Sessions_copyCountAggregateOutputType | null
    _avg: Sessions_copyAvgAggregateOutputType | null
    _sum: Sessions_copySumAggregateOutputType | null
    _min: Sessions_copyMinAggregateOutputType | null
    _max: Sessions_copyMaxAggregateOutputType | null
  }

  export type Sessions_copyAvgAggregateOutputType = {
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type Sessions_copySumAggregateOutputType = {
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type Sessions_copyMinAggregateOutputType = {
    sess_id: Bytes | null
    sess_data: string | null
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type Sessions_copyMaxAggregateOutputType = {
    sess_id: Bytes | null
    sess_data: string | null
    sess_time: number | null
    sess_lifetime: number | null
  }

  export type Sessions_copyCountAggregateOutputType = {
    sess_id: number
    sess_data: number
    sess_time: number
    sess_lifetime: number
    _all: number
  }


  export type Sessions_copyAvgAggregateInputType = {
    sess_time?: true
    sess_lifetime?: true
  }

  export type Sessions_copySumAggregateInputType = {
    sess_time?: true
    sess_lifetime?: true
  }

  export type Sessions_copyMinAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
  }

  export type Sessions_copyMaxAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
  }

  export type Sessions_copyCountAggregateInputType = {
    sess_id?: true
    sess_data?: true
    sess_time?: true
    sess_lifetime?: true
    _all?: true
  }

  export type Sessions_copyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions_copy to aggregate.
     */
    where?: sessions_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions_copies to fetch.
     */
    orderBy?: sessions_copyOrderByWithRelationInput | sessions_copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessions_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions_copies
    **/
    _count?: true | Sessions_copyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sessions_copyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sessions_copySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sessions_copyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sessions_copyMaxAggregateInputType
  }

  export type GetSessions_copyAggregateType<T extends Sessions_copyAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions_copy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions_copy[P]>
      : GetScalarType<T[P], AggregateSessions_copy[P]>
  }




  export type sessions_copyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessions_copyWhereInput
    orderBy?: sessions_copyOrderByWithAggregationInput | sessions_copyOrderByWithAggregationInput[]
    by: Sessions_copyScalarFieldEnum[] | Sessions_copyScalarFieldEnum
    having?: sessions_copyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sessions_copyCountAggregateInputType | true
    _avg?: Sessions_copyAvgAggregateInputType
    _sum?: Sessions_copySumAggregateInputType
    _min?: Sessions_copyMinAggregateInputType
    _max?: Sessions_copyMaxAggregateInputType
  }

  export type Sessions_copyGroupByOutputType = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
    _count: Sessions_copyCountAggregateOutputType | null
    _avg: Sessions_copyAvgAggregateOutputType | null
    _sum: Sessions_copySumAggregateOutputType | null
    _min: Sessions_copyMinAggregateOutputType | null
    _max: Sessions_copyMaxAggregateOutputType | null
  }

  type GetSessions_copyGroupByPayload<T extends sessions_copyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sessions_copyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sessions_copyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sessions_copyGroupByOutputType[P]>
            : GetScalarType<T[P], Sessions_copyGroupByOutputType[P]>
        }
      >
    >


  export type sessions_copySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sess_id?: boolean
    sess_data?: boolean
    sess_time?: boolean
    sess_lifetime?: boolean
  }, ExtArgs["result"]["sessions_copy"]>



  export type sessions_copySelectScalar = {
    sess_id?: boolean
    sess_data?: boolean
    sess_time?: boolean
    sess_lifetime?: boolean
  }

  export type sessions_copyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sess_id" | "sess_data" | "sess_time" | "sess_lifetime", ExtArgs["result"]["sessions_copy"]>

  export type $sessions_copyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions_copy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sess_id: Prisma.Bytes
      sess_data: string
      sess_time: number
      sess_lifetime: number
    }, ExtArgs["result"]["sessions_copy"]>
    composites: {}
  }

  type sessions_copyGetPayload<S extends boolean | null | undefined | sessions_copyDefaultArgs> = $Result.GetResult<Prisma.$sessions_copyPayload, S>

  type sessions_copyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessions_copyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sessions_copyCountAggregateInputType | true
    }

  export interface sessions_copyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions_copy'], meta: { name: 'sessions_copy' } }
    /**
     * Find zero or one Sessions_copy that matches the filter.
     * @param {sessions_copyFindUniqueArgs} args - Arguments to find a Sessions_copy
     * @example
     * // Get one Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessions_copyFindUniqueArgs>(args: SelectSubset<T, sessions_copyFindUniqueArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions_copy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessions_copyFindUniqueOrThrowArgs} args - Arguments to find a Sessions_copy
     * @example
     * // Get one Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessions_copyFindUniqueOrThrowArgs>(args: SelectSubset<T, sessions_copyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions_copy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyFindFirstArgs} args - Arguments to find a Sessions_copy
     * @example
     * // Get one Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessions_copyFindFirstArgs>(args?: SelectSubset<T, sessions_copyFindFirstArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions_copy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyFindFirstOrThrowArgs} args - Arguments to find a Sessions_copy
     * @example
     * // Get one Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessions_copyFindFirstOrThrowArgs>(args?: SelectSubset<T, sessions_copyFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions_copies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions_copies
     * const sessions_copies = await prisma.sessions_copy.findMany()
     * 
     * // Get first 10 Sessions_copies
     * const sessions_copies = await prisma.sessions_copy.findMany({ take: 10 })
     * 
     * // Only select the `sess_id`
     * const sessions_copyWithSess_idOnly = await prisma.sessions_copy.findMany({ select: { sess_id: true } })
     * 
     */
    findMany<T extends sessions_copyFindManyArgs>(args?: SelectSubset<T, sessions_copyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions_copy.
     * @param {sessions_copyCreateArgs} args - Arguments to create a Sessions_copy.
     * @example
     * // Create one Sessions_copy
     * const Sessions_copy = await prisma.sessions_copy.create({
     *   data: {
     *     // ... data to create a Sessions_copy
     *   }
     * })
     * 
     */
    create<T extends sessions_copyCreateArgs>(args: SelectSubset<T, sessions_copyCreateArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions_copies.
     * @param {sessions_copyCreateManyArgs} args - Arguments to create many Sessions_copies.
     * @example
     * // Create many Sessions_copies
     * const sessions_copy = await prisma.sessions_copy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessions_copyCreateManyArgs>(args?: SelectSubset<T, sessions_copyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions_copy.
     * @param {sessions_copyDeleteArgs} args - Arguments to delete one Sessions_copy.
     * @example
     * // Delete one Sessions_copy
     * const Sessions_copy = await prisma.sessions_copy.delete({
     *   where: {
     *     // ... filter to delete one Sessions_copy
     *   }
     * })
     * 
     */
    delete<T extends sessions_copyDeleteArgs>(args: SelectSubset<T, sessions_copyDeleteArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions_copy.
     * @param {sessions_copyUpdateArgs} args - Arguments to update one Sessions_copy.
     * @example
     * // Update one Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessions_copyUpdateArgs>(args: SelectSubset<T, sessions_copyUpdateArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions_copies.
     * @param {sessions_copyDeleteManyArgs} args - Arguments to filter Sessions_copies to delete.
     * @example
     * // Delete a few Sessions_copies
     * const { count } = await prisma.sessions_copy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessions_copyDeleteManyArgs>(args?: SelectSubset<T, sessions_copyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions_copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions_copies
     * const sessions_copy = await prisma.sessions_copy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessions_copyUpdateManyArgs>(args: SelectSubset<T, sessions_copyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions_copy.
     * @param {sessions_copyUpsertArgs} args - Arguments to update or create a Sessions_copy.
     * @example
     * // Update or create a Sessions_copy
     * const sessions_copy = await prisma.sessions_copy.upsert({
     *   create: {
     *     // ... data to create a Sessions_copy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions_copy we want to update
     *   }
     * })
     */
    upsert<T extends sessions_copyUpsertArgs>(args: SelectSubset<T, sessions_copyUpsertArgs<ExtArgs>>): Prisma__sessions_copyClient<$Result.GetResult<Prisma.$sessions_copyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions_copies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyCountArgs} args - Arguments to filter Sessions_copies to count.
     * @example
     * // Count the number of Sessions_copies
     * const count = await prisma.sessions_copy.count({
     *   where: {
     *     // ... the filter for the Sessions_copies we want to count
     *   }
     * })
    **/
    count<T extends sessions_copyCountArgs>(
      args?: Subset<T, sessions_copyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sessions_copyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions_copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_copyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sessions_copyAggregateArgs>(args: Subset<T, Sessions_copyAggregateArgs>): Prisma.PrismaPromise<GetSessions_copyAggregateType<T>>

    /**
     * Group by Sessions_copy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessions_copyGroupByArgs} args - Group by arguments.
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
      T extends sessions_copyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessions_copyGroupByArgs['orderBy'] }
        : { orderBy?: sessions_copyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessions_copyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessions_copyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions_copy model
   */
  readonly fields: sessions_copyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions_copy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessions_copyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sessions_copy model
   */
  interface sessions_copyFieldRefs {
    readonly sess_id: FieldRef<"sessions_copy", 'Bytes'>
    readonly sess_data: FieldRef<"sessions_copy", 'String'>
    readonly sess_time: FieldRef<"sessions_copy", 'Int'>
    readonly sess_lifetime: FieldRef<"sessions_copy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessions_copy findUnique
   */
  export type sessions_copyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter, which sessions_copy to fetch.
     */
    where: sessions_copyWhereUniqueInput
  }

  /**
   * sessions_copy findUniqueOrThrow
   */
  export type sessions_copyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter, which sessions_copy to fetch.
     */
    where: sessions_copyWhereUniqueInput
  }

  /**
   * sessions_copy findFirst
   */
  export type sessions_copyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter, which sessions_copy to fetch.
     */
    where?: sessions_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions_copies to fetch.
     */
    orderBy?: sessions_copyOrderByWithRelationInput | sessions_copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions_copies.
     */
    cursor?: sessions_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions_copies.
     */
    distinct?: Sessions_copyScalarFieldEnum | Sessions_copyScalarFieldEnum[]
  }

  /**
   * sessions_copy findFirstOrThrow
   */
  export type sessions_copyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter, which sessions_copy to fetch.
     */
    where?: sessions_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions_copies to fetch.
     */
    orderBy?: sessions_copyOrderByWithRelationInput | sessions_copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions_copies.
     */
    cursor?: sessions_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions_copies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions_copies.
     */
    distinct?: Sessions_copyScalarFieldEnum | Sessions_copyScalarFieldEnum[]
  }

  /**
   * sessions_copy findMany
   */
  export type sessions_copyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter, which sessions_copies to fetch.
     */
    where?: sessions_copyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions_copies to fetch.
     */
    orderBy?: sessions_copyOrderByWithRelationInput | sessions_copyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions_copies.
     */
    cursor?: sessions_copyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions_copies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions_copies.
     */
    skip?: number
    distinct?: Sessions_copyScalarFieldEnum | Sessions_copyScalarFieldEnum[]
  }

  /**
   * sessions_copy create
   */
  export type sessions_copyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions_copy.
     */
    data: XOR<sessions_copyCreateInput, sessions_copyUncheckedCreateInput>
  }

  /**
   * sessions_copy createMany
   */
  export type sessions_copyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions_copies.
     */
    data: sessions_copyCreateManyInput | sessions_copyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions_copy update
   */
  export type sessions_copyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions_copy.
     */
    data: XOR<sessions_copyUpdateInput, sessions_copyUncheckedUpdateInput>
    /**
     * Choose, which sessions_copy to update.
     */
    where: sessions_copyWhereUniqueInput
  }

  /**
   * sessions_copy updateMany
   */
  export type sessions_copyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions_copies.
     */
    data: XOR<sessions_copyUpdateManyMutationInput, sessions_copyUncheckedUpdateManyInput>
    /**
     * Filter which sessions_copies to update
     */
    where?: sessions_copyWhereInput
    /**
     * Limit how many sessions_copies to update.
     */
    limit?: number
  }

  /**
   * sessions_copy upsert
   */
  export type sessions_copyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions_copy to update in case it exists.
     */
    where: sessions_copyWhereUniqueInput
    /**
     * In case the sessions_copy found by the `where` argument doesn't exist, create a new sessions_copy with this data.
     */
    create: XOR<sessions_copyCreateInput, sessions_copyUncheckedCreateInput>
    /**
     * In case the sessions_copy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessions_copyUpdateInput, sessions_copyUncheckedUpdateInput>
  }

  /**
   * sessions_copy delete
   */
  export type sessions_copyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
    /**
     * Filter which sessions_copy to delete.
     */
    where: sessions_copyWhereUniqueInput
  }

  /**
   * sessions_copy deleteMany
   */
  export type sessions_copyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions_copies to delete
     */
    where?: sessions_copyWhereInput
    /**
     * Limit how many sessions_copies to delete.
     */
    limit?: number
  }

  /**
   * sessions_copy without action
   */
  export type sessions_copyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions_copy
     */
    select?: sessions_copySelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions_copy
     */
    omit?: sessions_copyOmit<ExtArgs> | null
  }


  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    name: string | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["test"]>



  export type testSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type testOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["test"]>

  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<Prisma.$testPayload, S>

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test'], meta: { name: 'test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testFindUniqueArgs>(args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs>(args: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testFindFirstArgs>(args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testFindFirstOrThrowArgs>(args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testFindManyArgs>(args?: SelectSubset<T, testFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends testCreateArgs>(args: SelectSubset<T, testCreateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {testCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testCreateManyArgs>(args?: SelectSubset<T, testCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends testDeleteArgs>(args: SelectSubset<T, testDeleteArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testUpdateArgs>(args: SelectSubset<T, testUpdateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testDeleteManyArgs>(args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testUpdateManyArgs>(args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends testUpsertArgs>(args: SelectSubset<T, testUpsertArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
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
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test model
   */
  readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the test model
   */
  interface testFieldRefs {
    readonly id: FieldRef<"test", 'Int'>
    readonly name: FieldRef<"test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test create
   */
  export type testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data needed to create a test.
     */
    data?: XOR<testCreateInput, testUncheckedCreateInput>
  }

  /**
   * test createMany
   */
  export type testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput
  }

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
    /**
     * Limit how many tests to update.
     */
    limit?: number
  }

  /**
   * test upsert
   */
  export type testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The filter to search for the test to update in case it exists.
     */
    where: testWhereUniqueInput
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     */
    create: XOR<testCreateInput, testUncheckedCreateInput>
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testUpdateInput, testUncheckedUpdateInput>
  }

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput
  }

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput
    /**
     * Limit how many tests to delete.
     */
    limit?: number
  }

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
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


  export const Api_tokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    user_id: 'user_id',
    account_id: 'account_id',
    cluster_node: 'cluster_node',
    user_agent: 'user_agent',
    ip_address: 'ip_address',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Api_tokensScalarFieldEnum = (typeof Api_tokensScalarFieldEnum)[keyof typeof Api_tokensScalarFieldEnum]


  export const Polaris_api_tokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    user_id: 'user_id',
    account_id: 'account_id',
    cluster_node: 'cluster_node',
    user_agent: 'user_agent',
    ip_address: 'ip_address',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Polaris_api_tokensScalarFieldEnum = (typeof Polaris_api_tokensScalarFieldEnum)[keyof typeof Polaris_api_tokensScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    sess_id: 'sess_id',
    sess_data: 'sess_data',
    sess_time: 'sess_time',
    sess_lifetime: 'sess_lifetime',
    modify_date: 'modify_date'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Sessions_copyScalarFieldEnum: {
    sess_id: 'sess_id',
    sess_data: 'sess_data',
    sess_time: 'sess_time',
    sess_lifetime: 'sess_lifetime'
  };

  export type Sessions_copyScalarFieldEnum = (typeof Sessions_copyScalarFieldEnum)[keyof typeof Sessions_copyScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const api_tokensOrderByRelevanceFieldEnum: {
    token: 'token',
    cluster_node: 'cluster_node',
    user_agent: 'user_agent',
    ip_address: 'ip_address'
  };

  export type api_tokensOrderByRelevanceFieldEnum = (typeof api_tokensOrderByRelevanceFieldEnum)[keyof typeof api_tokensOrderByRelevanceFieldEnum]


  export const polaris_api_tokensOrderByRelevanceFieldEnum: {
    token: 'token',
    cluster_node: 'cluster_node',
    user_agent: 'user_agent',
    ip_address: 'ip_address'
  };

  export type polaris_api_tokensOrderByRelevanceFieldEnum = (typeof polaris_api_tokensOrderByRelevanceFieldEnum)[keyof typeof polaris_api_tokensOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    sess_data: 'sess_data'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const sessions_copyOrderByRelevanceFieldEnum: {
    sess_data: 'sess_data'
  };

  export type sessions_copyOrderByRelevanceFieldEnum = (typeof sessions_copyOrderByRelevanceFieldEnum)[keyof typeof sessions_copyOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const testOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type testOrderByRelevanceFieldEnum = (typeof testOrderByRelevanceFieldEnum)[keyof typeof testOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type api_tokensWhereInput = {
    AND?: api_tokensWhereInput | api_tokensWhereInput[]
    OR?: api_tokensWhereInput[]
    NOT?: api_tokensWhereInput | api_tokensWhereInput[]
    id?: IntFilter<"api_tokens"> | number
    token?: StringFilter<"api_tokens"> | string
    user_id?: IntFilter<"api_tokens"> | number
    account_id?: IntFilter<"api_tokens"> | number
    cluster_node?: StringFilter<"api_tokens"> | string
    user_agent?: StringFilter<"api_tokens"> | string
    ip_address?: StringFilter<"api_tokens"> | string
    expires_at?: DateTimeFilter<"api_tokens"> | Date | string
    created_at?: DateTimeFilter<"api_tokens"> | Date | string
  }

  export type api_tokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _relevance?: api_tokensOrderByRelevanceInput
  }

  export type api_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: api_tokensWhereInput | api_tokensWhereInput[]
    OR?: api_tokensWhereInput[]
    NOT?: api_tokensWhereInput | api_tokensWhereInput[]
    token?: StringFilter<"api_tokens"> | string
    user_id?: IntFilter<"api_tokens"> | number
    account_id?: IntFilter<"api_tokens"> | number
    cluster_node?: StringFilter<"api_tokens"> | string
    user_agent?: StringFilter<"api_tokens"> | string
    ip_address?: StringFilter<"api_tokens"> | string
    expires_at?: DateTimeFilter<"api_tokens"> | Date | string
    created_at?: DateTimeFilter<"api_tokens"> | Date | string
  }, "id">

  export type api_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: api_tokensCountOrderByAggregateInput
    _avg?: api_tokensAvgOrderByAggregateInput
    _max?: api_tokensMaxOrderByAggregateInput
    _min?: api_tokensMinOrderByAggregateInput
    _sum?: api_tokensSumOrderByAggregateInput
  }

  export type api_tokensScalarWhereWithAggregatesInput = {
    AND?: api_tokensScalarWhereWithAggregatesInput | api_tokensScalarWhereWithAggregatesInput[]
    OR?: api_tokensScalarWhereWithAggregatesInput[]
    NOT?: api_tokensScalarWhereWithAggregatesInput | api_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"api_tokens"> | number
    token?: StringWithAggregatesFilter<"api_tokens"> | string
    user_id?: IntWithAggregatesFilter<"api_tokens"> | number
    account_id?: IntWithAggregatesFilter<"api_tokens"> | number
    cluster_node?: StringWithAggregatesFilter<"api_tokens"> | string
    user_agent?: StringWithAggregatesFilter<"api_tokens"> | string
    ip_address?: StringWithAggregatesFilter<"api_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"api_tokens"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"api_tokens"> | Date | string
  }

  export type polaris_api_tokensWhereInput = {
    AND?: polaris_api_tokensWhereInput | polaris_api_tokensWhereInput[]
    OR?: polaris_api_tokensWhereInput[]
    NOT?: polaris_api_tokensWhereInput | polaris_api_tokensWhereInput[]
    id?: IntFilter<"polaris_api_tokens"> | number
    token?: StringFilter<"polaris_api_tokens"> | string
    user_id?: IntFilter<"polaris_api_tokens"> | number
    account_id?: IntFilter<"polaris_api_tokens"> | number
    cluster_node?: StringFilter<"polaris_api_tokens"> | string
    user_agent?: StringFilter<"polaris_api_tokens"> | string
    ip_address?: StringFilter<"polaris_api_tokens"> | string
    expires_at?: DateTimeFilter<"polaris_api_tokens"> | Date | string
    created_at?: DateTimeFilter<"polaris_api_tokens"> | Date | string
  }

  export type polaris_api_tokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _relevance?: polaris_api_tokensOrderByRelevanceInput
  }

  export type polaris_api_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: polaris_api_tokensWhereInput | polaris_api_tokensWhereInput[]
    OR?: polaris_api_tokensWhereInput[]
    NOT?: polaris_api_tokensWhereInput | polaris_api_tokensWhereInput[]
    token?: StringFilter<"polaris_api_tokens"> | string
    user_id?: IntFilter<"polaris_api_tokens"> | number
    account_id?: IntFilter<"polaris_api_tokens"> | number
    cluster_node?: StringFilter<"polaris_api_tokens"> | string
    user_agent?: StringFilter<"polaris_api_tokens"> | string
    ip_address?: StringFilter<"polaris_api_tokens"> | string
    expires_at?: DateTimeFilter<"polaris_api_tokens"> | Date | string
    created_at?: DateTimeFilter<"polaris_api_tokens"> | Date | string
  }, "id">

  export type polaris_api_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: polaris_api_tokensCountOrderByAggregateInput
    _avg?: polaris_api_tokensAvgOrderByAggregateInput
    _max?: polaris_api_tokensMaxOrderByAggregateInput
    _min?: polaris_api_tokensMinOrderByAggregateInput
    _sum?: polaris_api_tokensSumOrderByAggregateInput
  }

  export type polaris_api_tokensScalarWhereWithAggregatesInput = {
    AND?: polaris_api_tokensScalarWhereWithAggregatesInput | polaris_api_tokensScalarWhereWithAggregatesInput[]
    OR?: polaris_api_tokensScalarWhereWithAggregatesInput[]
    NOT?: polaris_api_tokensScalarWhereWithAggregatesInput | polaris_api_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"polaris_api_tokens"> | number
    token?: StringWithAggregatesFilter<"polaris_api_tokens"> | string
    user_id?: IntWithAggregatesFilter<"polaris_api_tokens"> | number
    account_id?: IntWithAggregatesFilter<"polaris_api_tokens"> | number
    cluster_node?: StringWithAggregatesFilter<"polaris_api_tokens"> | string
    user_agent?: StringWithAggregatesFilter<"polaris_api_tokens"> | string
    ip_address?: StringWithAggregatesFilter<"polaris_api_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"polaris_api_tokens"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"polaris_api_tokens"> | Date | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    sess_id?: BytesFilter<"sessions"> | Bytes
    sess_data?: StringFilter<"sessions"> | string
    sess_time?: IntFilter<"sessions"> | number
    sess_lifetime?: IntFilter<"sessions"> | number
    modify_date?: DateTimeFilter<"sessions"> | Date | string
  }

  export type sessionsOrderByWithRelationInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    modify_date?: SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    sess_id?: Bytes
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    sess_data?: StringFilter<"sessions"> | string
    sess_time?: IntFilter<"sessions"> | number
    sess_lifetime?: IntFilter<"sessions"> | number
    modify_date?: DateTimeFilter<"sessions"> | Date | string
  }, "sess_id">

  export type sessionsOrderByWithAggregationInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    modify_date?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    sess_id?: BytesWithAggregatesFilter<"sessions"> | Bytes
    sess_data?: StringWithAggregatesFilter<"sessions"> | string
    sess_time?: IntWithAggregatesFilter<"sessions"> | number
    sess_lifetime?: IntWithAggregatesFilter<"sessions"> | number
    modify_date?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
  }

  export type sessions_copyWhereInput = {
    AND?: sessions_copyWhereInput | sessions_copyWhereInput[]
    OR?: sessions_copyWhereInput[]
    NOT?: sessions_copyWhereInput | sessions_copyWhereInput[]
    sess_id?: BytesFilter<"sessions_copy"> | Bytes
    sess_data?: StringFilter<"sessions_copy"> | string
    sess_time?: IntFilter<"sessions_copy"> | number
    sess_lifetime?: IntFilter<"sessions_copy"> | number
  }

  export type sessions_copyOrderByWithRelationInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    _relevance?: sessions_copyOrderByRelevanceInput
  }

  export type sessions_copyWhereUniqueInput = Prisma.AtLeast<{
    sess_id?: Bytes
    AND?: sessions_copyWhereInput | sessions_copyWhereInput[]
    OR?: sessions_copyWhereInput[]
    NOT?: sessions_copyWhereInput | sessions_copyWhereInput[]
    sess_data?: StringFilter<"sessions_copy"> | string
    sess_time?: IntFilter<"sessions_copy"> | number
    sess_lifetime?: IntFilter<"sessions_copy"> | number
  }, "sess_id">

  export type sessions_copyOrderByWithAggregationInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    _count?: sessions_copyCountOrderByAggregateInput
    _avg?: sessions_copyAvgOrderByAggregateInput
    _max?: sessions_copyMaxOrderByAggregateInput
    _min?: sessions_copyMinOrderByAggregateInput
    _sum?: sessions_copySumOrderByAggregateInput
  }

  export type sessions_copyScalarWhereWithAggregatesInput = {
    AND?: sessions_copyScalarWhereWithAggregatesInput | sessions_copyScalarWhereWithAggregatesInput[]
    OR?: sessions_copyScalarWhereWithAggregatesInput[]
    NOT?: sessions_copyScalarWhereWithAggregatesInput | sessions_copyScalarWhereWithAggregatesInput[]
    sess_id?: BytesWithAggregatesFilter<"sessions_copy"> | Bytes
    sess_data?: StringWithAggregatesFilter<"sessions_copy"> | string
    sess_time?: IntWithAggregatesFilter<"sessions_copy"> | number
    sess_lifetime?: IntWithAggregatesFilter<"sessions_copy"> | number
  }

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    id?: IntFilter<"test"> | number
    name?: StringNullableFilter<"test"> | string | null
  }

  export type testOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: testOrderByRelevanceInput
  }

  export type testWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    name?: StringNullableFilter<"test"> | string | null
  }, "id">

  export type testOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: testCountOrderByAggregateInput
    _avg?: testAvgOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
    _sum?: testSumOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    OR?: testScalarWhereWithAggregatesInput[]
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test"> | number
    name?: StringNullableWithAggregatesFilter<"test"> | string | null
  }

  export type api_tokensCreateInput = {
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type api_tokensUncheckedCreateInput = {
    id?: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type api_tokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_tokensCreateManyInput = {
    id?: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type api_tokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type polaris_api_tokensCreateInput = {
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type polaris_api_tokensUncheckedCreateInput = {
    id?: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type polaris_api_tokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type polaris_api_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type polaris_api_tokensCreateManyInput = {
    id?: number
    token: string
    user_id: number
    account_id: number
    cluster_node: string
    user_agent: string
    ip_address: string
    expires_at: Date | string
    created_at: Date | string
  }

  export type polaris_api_tokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type polaris_api_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    cluster_node?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
    modify_date?: Date | string
  }

  export type sessionsUncheckedCreateInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
    modify_date?: Date | string
  }

  export type sessionsUpdateInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
    modify_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
    modify_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateManyInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
    modify_date?: Date | string
  }

  export type sessionsUpdateManyMutationInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
    modify_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
    modify_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessions_copyCreateInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
  }

  export type sessions_copyUncheckedCreateInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
  }

  export type sessions_copyUpdateInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
  }

  export type sessions_copyUncheckedUpdateInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
  }

  export type sessions_copyCreateManyInput = {
    sess_id: Bytes
    sess_data: string
    sess_time: number
    sess_lifetime: number
  }

  export type sessions_copyUpdateManyMutationInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
  }

  export type sessions_copyUncheckedUpdateManyInput = {
    sess_id?: BytesFieldUpdateOperationsInput | Bytes
    sess_data?: StringFieldUpdateOperationsInput | string
    sess_time?: IntFieldUpdateOperationsInput | number
    sess_lifetime?: IntFieldUpdateOperationsInput | number
  }

  export type testCreateInput = {
    name?: string | null
  }

  export type testUncheckedCreateInput = {
    id?: number
    name?: string | null
  }

  export type testUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type testUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type api_tokensOrderByRelevanceInput = {
    fields: api_tokensOrderByRelevanceFieldEnum | api_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type api_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type api_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
  }

  export type api_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type api_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type api_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
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

  export type polaris_api_tokensOrderByRelevanceInput = {
    fields: polaris_api_tokensOrderByRelevanceFieldEnum | polaris_api_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type polaris_api_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type polaris_api_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
  }

  export type polaris_api_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type polaris_api_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
    cluster_node?: SortOrder
    user_agent?: SortOrder
    ip_address?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type polaris_api_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    account_id?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    modify_date?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    modify_date?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
    modify_date?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type sessions_copyOrderByRelevanceInput = {
    fields: sessions_copyOrderByRelevanceFieldEnum | sessions_copyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessions_copyCountOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type sessions_copyAvgOrderByAggregateInput = {
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type sessions_copyMaxOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type sessions_copyMinOrderByAggregateInput = {
    sess_id?: SortOrder
    sess_data?: SortOrder
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type sessions_copySumOrderByAggregateInput = {
    sess_time?: SortOrder
    sess_lifetime?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type testOrderByRelevanceInput = {
    fields: testOrderByRelevanceFieldEnum | testOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type testCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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