
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
 * Model member_log
 * 
 */
export type member_log = $Result.DefaultSelection<Prisma.$member_logPayload>
/**
 * Model members
 * 
 */
export type members = $Result.DefaultSelection<Prisma.$membersPayload>
/**
 * Model member_acl_paths
 * 
 */
export type member_acl_paths = $Result.DefaultSelection<Prisma.$member_acl_pathsPayload>
/**
 * Model member_acl_rules
 * 
 */
export type member_acl_rules = $Result.DefaultSelection<Prisma.$member_acl_rulesPayload>
/**
 * Model servers
 * 
 */
export type servers = $Result.DefaultSelection<Prisma.$serversPayload>
/**
 * Model servers_ips
 * 
 */
export type servers_ips = $Result.DefaultSelection<Prisma.$servers_ipsPayload>
/**
 * Model servers_properties
 * 
 */
export type servers_properties = $Result.DefaultSelection<Prisma.$servers_propertiesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const member_log_action: {
  SAVE: 'SAVE',
  DELETE: 'DELETE'
};

export type member_log_action = (typeof member_log_action)[keyof typeof member_log_action]


export const members_verify: {
  NO: 'NO',
  YES: 'YES'
};

export type members_verify = (typeof members_verify)[keyof typeof members_verify]


export const member_acl_paths_permission_type: {
  R: 'R',
  W: 'W',
  D: 'D'
};

export type member_acl_paths_permission_type = (typeof member_acl_paths_permission_type)[keyof typeof member_acl_paths_permission_type]


export const member_acl_rules_require_acl: {
  YES: 'YES',
  NO: 'NO'
};

export type member_acl_rules_require_acl = (typeof member_acl_rules_require_acl)[keyof typeof member_acl_rules_require_acl]


export const servers_type: {
  REGULAR: 'REGULAR',
  VB: 'VB'
};

export type servers_type = (typeof servers_type)[keyof typeof servers_type]


export const servers_rvm: {
  ZERO: 'ZERO',
  ONE: 'ONE'
};

export type servers_rvm = (typeof servers_rvm)[keyof typeof servers_rvm]

}

export type member_log_action = $Enums.member_log_action

export const member_log_action: typeof $Enums.member_log_action

export type members_verify = $Enums.members_verify

export const members_verify: typeof $Enums.members_verify

export type member_acl_paths_permission_type = $Enums.member_acl_paths_permission_type

export const member_acl_paths_permission_type: typeof $Enums.member_acl_paths_permission_type

export type member_acl_rules_require_acl = $Enums.member_acl_rules_require_acl

export const member_acl_rules_require_acl: typeof $Enums.member_acl_rules_require_acl

export type servers_type = $Enums.servers_type

export const servers_type: typeof $Enums.servers_type

export type servers_rvm = $Enums.servers_rvm

export const servers_rvm: typeof $Enums.servers_rvm

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Member_logs
 * const member_logs = await prisma.member_log.findMany()
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
   * // Fetch zero or more Member_logs
   * const member_logs = await prisma.member_log.findMany()
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
   * `prisma.member_log`: Exposes CRUD operations for the **member_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_logs
    * const member_logs = await prisma.member_log.findMany()
    * ```
    */
  get member_log(): Prisma.member_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_acl_paths`: Exposes CRUD operations for the **member_acl_paths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_acl_paths
    * const member_acl_paths = await prisma.member_acl_paths.findMany()
    * ```
    */
  get member_acl_paths(): Prisma.member_acl_pathsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_acl_rules`: Exposes CRUD operations for the **member_acl_rules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_acl_rules
    * const member_acl_rules = await prisma.member_acl_rules.findMany()
    * ```
    */
  get member_acl_rules(): Prisma.member_acl_rulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers`: Exposes CRUD operations for the **servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.servers.findMany()
    * ```
    */
  get servers(): Prisma.serversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers_ips`: Exposes CRUD operations for the **servers_ips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers_ips
    * const servers_ips = await prisma.servers_ips.findMany()
    * ```
    */
  get servers_ips(): Prisma.servers_ipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers_properties`: Exposes CRUD operations for the **servers_properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers_properties
    * const servers_properties = await prisma.servers_properties.findMany()
    * ```
    */
  get servers_properties(): Prisma.servers_propertiesDelegate<ExtArgs, ClientOptions>;
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
    member_log: 'member_log',
    members: 'members',
    member_acl_paths: 'member_acl_paths',
    member_acl_rules: 'member_acl_rules',
    servers: 'servers',
    servers_ips: 'servers_ips',
    servers_properties: 'servers_properties'
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
      modelProps: "member_log" | "members" | "member_acl_paths" | "member_acl_rules" | "servers" | "servers_ips" | "servers_properties"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      member_log: {
        payload: Prisma.$member_logPayload<ExtArgs>
        fields: Prisma.member_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.member_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.member_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          findFirst: {
            args: Prisma.member_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.member_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          findMany: {
            args: Prisma.member_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>[]
          }
          create: {
            args: Prisma.member_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          createMany: {
            args: Prisma.member_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.member_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          update: {
            args: Prisma.member_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          deleteMany: {
            args: Prisma.member_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.member_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.member_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_logPayload>
          }
          aggregate: {
            args: Prisma.Member_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_log>
          }
          groupBy: {
            args: Prisma.member_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.member_logCountArgs<ExtArgs>
            result: $Utils.Optional<Member_logCountAggregateOutputType> | number
          }
        }
      }
      members: {
        payload: Prisma.$membersPayload<ExtArgs>
        fields: Prisma.membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findFirst: {
            args: Prisma.membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          findMany: {
            args: Prisma.membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>[]
          }
          create: {
            args: Prisma.membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          createMany: {
            args: Prisma.membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          update: {
            args: Prisma.membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          deleteMany: {
            args: Prisma.membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.membersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      member_acl_paths: {
        payload: Prisma.$member_acl_pathsPayload<ExtArgs>
        fields: Prisma.member_acl_pathsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.member_acl_pathsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.member_acl_pathsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          findFirst: {
            args: Prisma.member_acl_pathsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.member_acl_pathsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          findMany: {
            args: Prisma.member_acl_pathsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>[]
          }
          create: {
            args: Prisma.member_acl_pathsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          createMany: {
            args: Prisma.member_acl_pathsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.member_acl_pathsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          update: {
            args: Prisma.member_acl_pathsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          deleteMany: {
            args: Prisma.member_acl_pathsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.member_acl_pathsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.member_acl_pathsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_pathsPayload>
          }
          aggregate: {
            args: Prisma.Member_acl_pathsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_acl_paths>
          }
          groupBy: {
            args: Prisma.member_acl_pathsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_acl_pathsGroupByOutputType>[]
          }
          count: {
            args: Prisma.member_acl_pathsCountArgs<ExtArgs>
            result: $Utils.Optional<Member_acl_pathsCountAggregateOutputType> | number
          }
        }
      }
      member_acl_rules: {
        payload: Prisma.$member_acl_rulesPayload<ExtArgs>
        fields: Prisma.member_acl_rulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.member_acl_rulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.member_acl_rulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          findFirst: {
            args: Prisma.member_acl_rulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.member_acl_rulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          findMany: {
            args: Prisma.member_acl_rulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>[]
          }
          create: {
            args: Prisma.member_acl_rulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          createMany: {
            args: Prisma.member_acl_rulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.member_acl_rulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          update: {
            args: Prisma.member_acl_rulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          deleteMany: {
            args: Prisma.member_acl_rulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.member_acl_rulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.member_acl_rulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$member_acl_rulesPayload>
          }
          aggregate: {
            args: Prisma.Member_acl_rulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_acl_rules>
          }
          groupBy: {
            args: Prisma.member_acl_rulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_acl_rulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.member_acl_rulesCountArgs<ExtArgs>
            result: $Utils.Optional<Member_acl_rulesCountAggregateOutputType> | number
          }
        }
      }
      servers: {
        payload: Prisma.$serversPayload<ExtArgs>
        fields: Prisma.serversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findFirst: {
            args: Prisma.serversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          findMany: {
            args: Prisma.serversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>[]
          }
          create: {
            args: Prisma.serversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          createMany: {
            args: Prisma.serversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.serversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          update: {
            args: Prisma.serversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          deleteMany: {
            args: Prisma.serversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serversPayload>
          }
          aggregate: {
            args: Prisma.ServersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers>
          }
          groupBy: {
            args: Prisma.serversGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServersGroupByOutputType>[]
          }
          count: {
            args: Prisma.serversCountArgs<ExtArgs>
            result: $Utils.Optional<ServersCountAggregateOutputType> | number
          }
        }
      }
      servers_ips: {
        payload: Prisma.$servers_ipsPayload<ExtArgs>
        fields: Prisma.servers_ipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servers_ipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servers_ipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          findFirst: {
            args: Prisma.servers_ipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servers_ipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          findMany: {
            args: Prisma.servers_ipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>[]
          }
          create: {
            args: Prisma.servers_ipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          createMany: {
            args: Prisma.servers_ipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servers_ipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          update: {
            args: Prisma.servers_ipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          deleteMany: {
            args: Prisma.servers_ipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servers_ipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servers_ipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_ipsPayload>
          }
          aggregate: {
            args: Prisma.Servers_ipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers_ips>
          }
          groupBy: {
            args: Prisma.servers_ipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Servers_ipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.servers_ipsCountArgs<ExtArgs>
            result: $Utils.Optional<Servers_ipsCountAggregateOutputType> | number
          }
        }
      }
      servers_properties: {
        payload: Prisma.$servers_propertiesPayload<ExtArgs>
        fields: Prisma.servers_propertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servers_propertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servers_propertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          findFirst: {
            args: Prisma.servers_propertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servers_propertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          findMany: {
            args: Prisma.servers_propertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>[]
          }
          create: {
            args: Prisma.servers_propertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          createMany: {
            args: Prisma.servers_propertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servers_propertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          update: {
            args: Prisma.servers_propertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          deleteMany: {
            args: Prisma.servers_propertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servers_propertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servers_propertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servers_propertiesPayload>
          }
          aggregate: {
            args: Prisma.Servers_propertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers_properties>
          }
          groupBy: {
            args: Prisma.servers_propertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Servers_propertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servers_propertiesCountArgs<ExtArgs>
            result: $Utils.Optional<Servers_propertiesCountAggregateOutputType> | number
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
    member_log?: member_logOmit
    members?: membersOmit
    member_acl_paths?: member_acl_pathsOmit
    member_acl_rules?: member_acl_rulesOmit
    servers?: serversOmit
    servers_ips?: servers_ipsOmit
    servers_properties?: servers_propertiesOmit
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
   * Model member_log
   */

  export type AggregateMember_log = {
    _count: Member_logCountAggregateOutputType | null
    _avg: Member_logAvgAggregateOutputType | null
    _sum: Member_logSumAggregateOutputType | null
    _min: Member_logMinAggregateOutputType | null
    _max: Member_logMaxAggregateOutputType | null
  }

  export type Member_logAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
    account_id: number | null
  }

  export type Member_logSumAggregateOutputType = {
    id: number | null
    member_id: number | null
    account_id: number | null
  }

  export type Member_logMinAggregateOutputType = {
    id: number | null
    ip_address: string | null
    created_at: Date | null
    member_id: number | null
    section: string | null
    sub_section: string | null
    action: $Enums.member_log_action | null
    altered: string | null
    data: string | null
    original_data: string | null
    account_id: number | null
  }

  export type Member_logMaxAggregateOutputType = {
    id: number | null
    ip_address: string | null
    created_at: Date | null
    member_id: number | null
    section: string | null
    sub_section: string | null
    action: $Enums.member_log_action | null
    altered: string | null
    data: string | null
    original_data: string | null
    account_id: number | null
  }

  export type Member_logCountAggregateOutputType = {
    id: number
    ip_address: number
    created_at: number
    member_id: number
    section: number
    sub_section: number
    action: number
    altered: number
    data: number
    original_data: number
    account_id: number
    _all: number
  }


  export type Member_logAvgAggregateInputType = {
    id?: true
    member_id?: true
    account_id?: true
  }

  export type Member_logSumAggregateInputType = {
    id?: true
    member_id?: true
    account_id?: true
  }

  export type Member_logMinAggregateInputType = {
    id?: true
    ip_address?: true
    created_at?: true
    member_id?: true
    section?: true
    sub_section?: true
    action?: true
    altered?: true
    data?: true
    original_data?: true
    account_id?: true
  }

  export type Member_logMaxAggregateInputType = {
    id?: true
    ip_address?: true
    created_at?: true
    member_id?: true
    section?: true
    sub_section?: true
    action?: true
    altered?: true
    data?: true
    original_data?: true
    account_id?: true
  }

  export type Member_logCountAggregateInputType = {
    id?: true
    ip_address?: true
    created_at?: true
    member_id?: true
    section?: true
    sub_section?: true
    action?: true
    altered?: true
    data?: true
    original_data?: true
    account_id?: true
    _all?: true
  }

  export type Member_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_log to aggregate.
     */
    where?: member_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_logs to fetch.
     */
    orderBy?: member_logOrderByWithRelationInput | member_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: member_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned member_logs
    **/
    _count?: true | Member_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_logMaxAggregateInputType
  }

  export type GetMember_logAggregateType<T extends Member_logAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_log[P]>
      : GetScalarType<T[P], AggregateMember_log[P]>
  }




  export type member_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_logWhereInput
    orderBy?: member_logOrderByWithAggregationInput | member_logOrderByWithAggregationInput[]
    by: Member_logScalarFieldEnum[] | Member_logScalarFieldEnum
    having?: member_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Member_logCountAggregateInputType | true
    _avg?: Member_logAvgAggregateInputType
    _sum?: Member_logSumAggregateInputType
    _min?: Member_logMinAggregateInputType
    _max?: Member_logMaxAggregateInputType
  }

  export type Member_logGroupByOutputType = {
    id: number
    ip_address: string
    created_at: Date
    member_id: number
    section: string | null
    sub_section: string | null
    action: $Enums.member_log_action | null
    altered: string | null
    data: string | null
    original_data: string | null
    account_id: number | null
    _count: Member_logCountAggregateOutputType | null
    _avg: Member_logAvgAggregateOutputType | null
    _sum: Member_logSumAggregateOutputType | null
    _min: Member_logMinAggregateOutputType | null
    _max: Member_logMaxAggregateOutputType | null
  }

  type GetMember_logGroupByPayload<T extends member_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_logGroupByOutputType[P]>
            : GetScalarType<T[P], Member_logGroupByOutputType[P]>
        }
      >
    >


  export type member_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip_address?: boolean
    created_at?: boolean
    member_id?: boolean
    section?: boolean
    sub_section?: boolean
    action?: boolean
    altered?: boolean
    data?: boolean
    original_data?: boolean
    account_id?: boolean
  }, ExtArgs["result"]["member_log"]>



  export type member_logSelectScalar = {
    id?: boolean
    ip_address?: boolean
    created_at?: boolean
    member_id?: boolean
    section?: boolean
    sub_section?: boolean
    action?: boolean
    altered?: boolean
    data?: boolean
    original_data?: boolean
    account_id?: boolean
  }

  export type member_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip_address" | "created_at" | "member_id" | "section" | "sub_section" | "action" | "altered" | "data" | "original_data" | "account_id", ExtArgs["result"]["member_log"]>

  export type $member_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip_address: string
      created_at: Date
      member_id: number
      section: string | null
      sub_section: string | null
      action: $Enums.member_log_action | null
      altered: string | null
      data: string | null
      original_data: string | null
      account_id: number | null
    }, ExtArgs["result"]["member_log"]>
    composites: {}
  }

  type member_logGetPayload<S extends boolean | null | undefined | member_logDefaultArgs> = $Result.GetResult<Prisma.$member_logPayload, S>

  type member_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<member_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_logCountAggregateInputType | true
    }

  export interface member_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member_log'], meta: { name: 'member_log' } }
    /**
     * Find zero or one Member_log that matches the filter.
     * @param {member_logFindUniqueArgs} args - Arguments to find a Member_log
     * @example
     * // Get one Member_log
     * const member_log = await prisma.member_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends member_logFindUniqueArgs>(args: SelectSubset<T, member_logFindUniqueArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {member_logFindUniqueOrThrowArgs} args - Arguments to find a Member_log
     * @example
     * // Get one Member_log
     * const member_log = await prisma.member_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends member_logFindUniqueOrThrowArgs>(args: SelectSubset<T, member_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logFindFirstArgs} args - Arguments to find a Member_log
     * @example
     * // Get one Member_log
     * const member_log = await prisma.member_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends member_logFindFirstArgs>(args?: SelectSubset<T, member_logFindFirstArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logFindFirstOrThrowArgs} args - Arguments to find a Member_log
     * @example
     * // Get one Member_log
     * const member_log = await prisma.member_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends member_logFindFirstOrThrowArgs>(args?: SelectSubset<T, member_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_logs
     * const member_logs = await prisma.member_log.findMany()
     * 
     * // Get first 10 Member_logs
     * const member_logs = await prisma.member_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const member_logWithIdOnly = await prisma.member_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends member_logFindManyArgs>(args?: SelectSubset<T, member_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_log.
     * @param {member_logCreateArgs} args - Arguments to create a Member_log.
     * @example
     * // Create one Member_log
     * const Member_log = await prisma.member_log.create({
     *   data: {
     *     // ... data to create a Member_log
     *   }
     * })
     * 
     */
    create<T extends member_logCreateArgs>(args: SelectSubset<T, member_logCreateArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_logs.
     * @param {member_logCreateManyArgs} args - Arguments to create many Member_logs.
     * @example
     * // Create many Member_logs
     * const member_log = await prisma.member_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends member_logCreateManyArgs>(args?: SelectSubset<T, member_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_log.
     * @param {member_logDeleteArgs} args - Arguments to delete one Member_log.
     * @example
     * // Delete one Member_log
     * const Member_log = await prisma.member_log.delete({
     *   where: {
     *     // ... filter to delete one Member_log
     *   }
     * })
     * 
     */
    delete<T extends member_logDeleteArgs>(args: SelectSubset<T, member_logDeleteArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_log.
     * @param {member_logUpdateArgs} args - Arguments to update one Member_log.
     * @example
     * // Update one Member_log
     * const member_log = await prisma.member_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends member_logUpdateArgs>(args: SelectSubset<T, member_logUpdateArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_logs.
     * @param {member_logDeleteManyArgs} args - Arguments to filter Member_logs to delete.
     * @example
     * // Delete a few Member_logs
     * const { count } = await prisma.member_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends member_logDeleteManyArgs>(args?: SelectSubset<T, member_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_logs
     * const member_log = await prisma.member_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends member_logUpdateManyArgs>(args: SelectSubset<T, member_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_log.
     * @param {member_logUpsertArgs} args - Arguments to update or create a Member_log.
     * @example
     * // Update or create a Member_log
     * const member_log = await prisma.member_log.upsert({
     *   create: {
     *     // ... data to create a Member_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_log we want to update
     *   }
     * })
     */
    upsert<T extends member_logUpsertArgs>(args: SelectSubset<T, member_logUpsertArgs<ExtArgs>>): Prisma__member_logClient<$Result.GetResult<Prisma.$member_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logCountArgs} args - Arguments to filter Member_logs to count.
     * @example
     * // Count the number of Member_logs
     * const count = await prisma.member_log.count({
     *   where: {
     *     // ... the filter for the Member_logs we want to count
     *   }
     * })
    **/
    count<T extends member_logCountArgs>(
      args?: Subset<T, member_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_logAggregateArgs>(args: Subset<T, Member_logAggregateArgs>): Prisma.PrismaPromise<GetMember_logAggregateType<T>>

    /**
     * Group by Member_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_logGroupByArgs} args - Group by arguments.
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
      T extends member_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: member_logGroupByArgs['orderBy'] }
        : { orderBy?: member_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, member_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member_log model
   */
  readonly fields: member_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__member_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the member_log model
   */
  interface member_logFieldRefs {
    readonly id: FieldRef<"member_log", 'Int'>
    readonly ip_address: FieldRef<"member_log", 'String'>
    readonly created_at: FieldRef<"member_log", 'DateTime'>
    readonly member_id: FieldRef<"member_log", 'Int'>
    readonly section: FieldRef<"member_log", 'String'>
    readonly sub_section: FieldRef<"member_log", 'String'>
    readonly action: FieldRef<"member_log", 'member_log_action'>
    readonly altered: FieldRef<"member_log", 'String'>
    readonly data: FieldRef<"member_log", 'String'>
    readonly original_data: FieldRef<"member_log", 'String'>
    readonly account_id: FieldRef<"member_log", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * member_log findUnique
   */
  export type member_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter, which member_log to fetch.
     */
    where: member_logWhereUniqueInput
  }

  /**
   * member_log findUniqueOrThrow
   */
  export type member_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter, which member_log to fetch.
     */
    where: member_logWhereUniqueInput
  }

  /**
   * member_log findFirst
   */
  export type member_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter, which member_log to fetch.
     */
    where?: member_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_logs to fetch.
     */
    orderBy?: member_logOrderByWithRelationInput | member_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_logs.
     */
    cursor?: member_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_logs.
     */
    distinct?: Member_logScalarFieldEnum | Member_logScalarFieldEnum[]
  }

  /**
   * member_log findFirstOrThrow
   */
  export type member_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter, which member_log to fetch.
     */
    where?: member_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_logs to fetch.
     */
    orderBy?: member_logOrderByWithRelationInput | member_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_logs.
     */
    cursor?: member_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_logs.
     */
    distinct?: Member_logScalarFieldEnum | Member_logScalarFieldEnum[]
  }

  /**
   * member_log findMany
   */
  export type member_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter, which member_logs to fetch.
     */
    where?: member_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_logs to fetch.
     */
    orderBy?: member_logOrderByWithRelationInput | member_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing member_logs.
     */
    cursor?: member_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_logs.
     */
    skip?: number
    distinct?: Member_logScalarFieldEnum | Member_logScalarFieldEnum[]
  }

  /**
   * member_log create
   */
  export type member_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * The data needed to create a member_log.
     */
    data: XOR<member_logCreateInput, member_logUncheckedCreateInput>
  }

  /**
   * member_log createMany
   */
  export type member_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many member_logs.
     */
    data: member_logCreateManyInput | member_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member_log update
   */
  export type member_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * The data needed to update a member_log.
     */
    data: XOR<member_logUpdateInput, member_logUncheckedUpdateInput>
    /**
     * Choose, which member_log to update.
     */
    where: member_logWhereUniqueInput
  }

  /**
   * member_log updateMany
   */
  export type member_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update member_logs.
     */
    data: XOR<member_logUpdateManyMutationInput, member_logUncheckedUpdateManyInput>
    /**
     * Filter which member_logs to update
     */
    where?: member_logWhereInput
    /**
     * Limit how many member_logs to update.
     */
    limit?: number
  }

  /**
   * member_log upsert
   */
  export type member_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * The filter to search for the member_log to update in case it exists.
     */
    where: member_logWhereUniqueInput
    /**
     * In case the member_log found by the `where` argument doesn't exist, create a new member_log with this data.
     */
    create: XOR<member_logCreateInput, member_logUncheckedCreateInput>
    /**
     * In case the member_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<member_logUpdateInput, member_logUncheckedUpdateInput>
  }

  /**
   * member_log delete
   */
  export type member_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
    /**
     * Filter which member_log to delete.
     */
    where: member_logWhereUniqueInput
  }

  /**
   * member_log deleteMany
   */
  export type member_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_logs to delete
     */
    where?: member_logWhereInput
    /**
     * Limit how many member_logs to delete.
     */
    limit?: number
  }

  /**
   * member_log without action
   */
  export type member_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_log
     */
    select?: member_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_log
     */
    omit?: member_logOmit<ExtArgs> | null
  }


  /**
   * Model members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersAvgAggregateOutputType = {
    id: number | null
    acl_access_profile: number | null
    user_level: number | null
  }

  export type MembersSumAggregateOutputType = {
    id: number | null
    acl_access_profile: number | null
    user_level: number | null
  }

  export type MembersMinAggregateOutputType = {
    id: number | null
    u_id: string | null
    username: string | null
    first_name: string | null
    last_name: string | null
    google_id: string | null
    email: string | null
    salt: string | null
    algo: string | null
    password: string | null
    email_verification_key: string | null
    verify: $Enums.members_verify | null
    google_key: string | null
    acl_access_profile: number | null
    user_level: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MembersMaxAggregateOutputType = {
    id: number | null
    u_id: string | null
    username: string | null
    first_name: string | null
    last_name: string | null
    google_id: string | null
    email: string | null
    salt: string | null
    algo: string | null
    password: string | null
    email_verification_key: string | null
    verify: $Enums.members_verify | null
    google_key: string | null
    acl_access_profile: number | null
    user_level: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    u_id: number
    username: number
    first_name: number
    last_name: number
    google_id: number
    email: number
    salt: number
    algo: number
    password: number
    email_verification_key: number
    verify: number
    google_key: number
    acl_access_profile: number
    user_level: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type MembersAvgAggregateInputType = {
    id?: true
    acl_access_profile?: true
    user_level?: true
  }

  export type MembersSumAggregateInputType = {
    id?: true
    acl_access_profile?: true
    user_level?: true
  }

  export type MembersMinAggregateInputType = {
    id?: true
    u_id?: true
    username?: true
    first_name?: true
    last_name?: true
    google_id?: true
    email?: true
    salt?: true
    algo?: true
    password?: true
    email_verification_key?: true
    verify?: true
    google_key?: true
    acl_access_profile?: true
    user_level?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    u_id?: true
    username?: true
    first_name?: true
    last_name?: true
    google_id?: true
    email?: true
    salt?: true
    algo?: true
    password?: true
    email_verification_key?: true
    verify?: true
    google_key?: true
    acl_access_profile?: true
    user_level?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    u_id?: true
    username?: true
    first_name?: true
    last_name?: true
    google_id?: true
    email?: true
    salt?: true
    algo?: true
    password?: true
    email_verification_key?: true
    verify?: true
    google_key?: true
    acl_access_profile?: true
    user_level?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to aggregate.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membersWhereInput
    orderBy?: membersOrderByWithAggregationInput | membersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _avg?: MembersAvgAggregateInputType
    _sum?: MembersSumAggregateInputType
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: number
    u_id: string
    username: string
    first_name: string | null
    last_name: string | null
    google_id: string
    email: string
    salt: string
    algo: string
    password: string
    email_verification_key: string
    verify: $Enums.members_verify | null
    google_key: string | null
    acl_access_profile: number | null
    user_level: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    u_id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    google_id?: boolean
    email?: boolean
    salt?: boolean
    algo?: boolean
    password?: boolean
    email_verification_key?: boolean
    verify?: boolean
    google_key?: boolean
    acl_access_profile?: boolean
    user_level?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["members"]>



  export type membersSelectScalar = {
    id?: boolean
    u_id?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    google_id?: boolean
    email?: boolean
    salt?: boolean
    algo?: boolean
    password?: boolean
    email_verification_key?: boolean
    verify?: boolean
    google_key?: boolean
    acl_access_profile?: boolean
    user_level?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "u_id" | "username" | "first_name" | "last_name" | "google_id" | "email" | "salt" | "algo" | "password" | "email_verification_key" | "verify" | "google_key" | "acl_access_profile" | "user_level" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["members"]>

  export type $membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "members"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      u_id: string
      username: string
      first_name: string | null
      last_name: string | null
      google_id: string
      email: string
      salt: string
      algo: string
      password: string
      email_verification_key: string
      verify: $Enums.members_verify | null
      google_key: string | null
      acl_access_profile: number | null
      user_level: number | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type membersGetPayload<S extends boolean | null | undefined | membersDefaultArgs> = $Result.GetResult<Prisma.$membersPayload, S>

  type membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['members'], meta: { name: 'members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {membersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membersFindUniqueArgs>(args: SelectSubset<T, membersFindUniqueArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {membersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membersFindUniqueOrThrowArgs>(args: SelectSubset<T, membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membersFindFirstArgs>(args?: SelectSubset<T, membersFindFirstArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membersFindFirstOrThrowArgs>(args?: SelectSubset<T, membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends membersFindManyArgs>(args?: SelectSubset<T, membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {membersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends membersCreateArgs>(args: SelectSubset<T, membersCreateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {membersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membersCreateManyArgs>(args?: SelectSubset<T, membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Members.
     * @param {membersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends membersDeleteArgs>(args: SelectSubset<T, membersDeleteArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {membersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membersUpdateArgs>(args: SelectSubset<T, membersUpdateArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {membersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membersDeleteManyArgs>(args?: SelectSubset<T, membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membersUpdateManyArgs>(args: SelectSubset<T, membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Members.
     * @param {membersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends membersUpsertArgs>(args: SelectSubset<T, membersUpsertArgs<ExtArgs>>): Prisma__membersClient<$Result.GetResult<Prisma.$membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends membersCountArgs>(
      args?: Subset<T, membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersGroupByArgs} args - Group by arguments.
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
      T extends membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membersGroupByArgs['orderBy'] }
        : { orderBy?: membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the members model
   */
  readonly fields: membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the members model
   */
  interface membersFieldRefs {
    readonly id: FieldRef<"members", 'Int'>
    readonly u_id: FieldRef<"members", 'String'>
    readonly username: FieldRef<"members", 'String'>
    readonly first_name: FieldRef<"members", 'String'>
    readonly last_name: FieldRef<"members", 'String'>
    readonly google_id: FieldRef<"members", 'String'>
    readonly email: FieldRef<"members", 'String'>
    readonly salt: FieldRef<"members", 'String'>
    readonly algo: FieldRef<"members", 'String'>
    readonly password: FieldRef<"members", 'String'>
    readonly email_verification_key: FieldRef<"members", 'String'>
    readonly verify: FieldRef<"members", 'members_verify'>
    readonly google_key: FieldRef<"members", 'String'>
    readonly acl_access_profile: FieldRef<"members", 'Int'>
    readonly user_level: FieldRef<"members", 'Int'>
    readonly created_at: FieldRef<"members", 'DateTime'>
    readonly updated_at: FieldRef<"members", 'DateTime'>
    readonly deleted_at: FieldRef<"members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * members findUnique
   */
  export type membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findUniqueOrThrow
   */
  export type membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findFirst
   */
  export type membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findFirstOrThrow
   */
  export type membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members findMany
   */
  export type membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: membersOrderByWithRelationInput | membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * members create
   */
  export type membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * The data needed to create a members.
     */
    data: XOR<membersCreateInput, membersUncheckedCreateInput>
  }

  /**
   * members createMany
   */
  export type membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: membersCreateManyInput | membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * members update
   */
  export type membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * The data needed to update a members.
     */
    data: XOR<membersUpdateInput, membersUncheckedUpdateInput>
    /**
     * Choose, which members to update.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members updateMany
   */
  export type membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: membersWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * members upsert
   */
  export type membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * The filter to search for the members to update in case it exists.
     */
    where: membersWhereUniqueInput
    /**
     * In case the members found by the `where` argument doesn't exist, create a new members with this data.
     */
    create: XOR<membersCreateInput, membersUncheckedCreateInput>
    /**
     * In case the members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membersUpdateInput, membersUncheckedUpdateInput>
  }

  /**
   * members delete
   */
  export type membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
    /**
     * Filter which members to delete.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members deleteMany
   */
  export type membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: membersWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * members without action
   */
  export type membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the members
     */
    omit?: membersOmit<ExtArgs> | null
  }


  /**
   * Model member_acl_paths
   */

  export type AggregateMember_acl_paths = {
    _count: Member_acl_pathsCountAggregateOutputType | null
    _avg: Member_acl_pathsAvgAggregateOutputType | null
    _sum: Member_acl_pathsSumAggregateOutputType | null
    _min: Member_acl_pathsMinAggregateOutputType | null
    _max: Member_acl_pathsMaxAggregateOutputType | null
  }

  export type Member_acl_pathsAvgAggregateOutputType = {
    id: number | null
  }

  export type Member_acl_pathsSumAggregateOutputType = {
    id: number | null
  }

  export type Member_acl_pathsMinAggregateOutputType = {
    id: number | null
    u_id: string | null
    section_name: string | null
    name: string | null
    route_name: string | null
    path: string | null
    permission_type: $Enums.member_acl_paths_permission_type | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Member_acl_pathsMaxAggregateOutputType = {
    id: number | null
    u_id: string | null
    section_name: string | null
    name: string | null
    route_name: string | null
    path: string | null
    permission_type: $Enums.member_acl_paths_permission_type | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Member_acl_pathsCountAggregateOutputType = {
    id: number
    u_id: number
    section_name: number
    name: number
    route_name: number
    path: number
    permission_type: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Member_acl_pathsAvgAggregateInputType = {
    id?: true
  }

  export type Member_acl_pathsSumAggregateInputType = {
    id?: true
  }

  export type Member_acl_pathsMinAggregateInputType = {
    id?: true
    u_id?: true
    section_name?: true
    name?: true
    route_name?: true
    path?: true
    permission_type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Member_acl_pathsMaxAggregateInputType = {
    id?: true
    u_id?: true
    section_name?: true
    name?: true
    route_name?: true
    path?: true
    permission_type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Member_acl_pathsCountAggregateInputType = {
    id?: true
    u_id?: true
    section_name?: true
    name?: true
    route_name?: true
    path?: true
    permission_type?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Member_acl_pathsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_acl_paths to aggregate.
     */
    where?: member_acl_pathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_paths to fetch.
     */
    orderBy?: member_acl_pathsOrderByWithRelationInput | member_acl_pathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: member_acl_pathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned member_acl_paths
    **/
    _count?: true | Member_acl_pathsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_acl_pathsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_acl_pathsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_acl_pathsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_acl_pathsMaxAggregateInputType
  }

  export type GetMember_acl_pathsAggregateType<T extends Member_acl_pathsAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_acl_paths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_acl_paths[P]>
      : GetScalarType<T[P], AggregateMember_acl_paths[P]>
  }




  export type member_acl_pathsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_acl_pathsWhereInput
    orderBy?: member_acl_pathsOrderByWithAggregationInput | member_acl_pathsOrderByWithAggregationInput[]
    by: Member_acl_pathsScalarFieldEnum[] | Member_acl_pathsScalarFieldEnum
    having?: member_acl_pathsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Member_acl_pathsCountAggregateInputType | true
    _avg?: Member_acl_pathsAvgAggregateInputType
    _sum?: Member_acl_pathsSumAggregateInputType
    _min?: Member_acl_pathsMinAggregateInputType
    _max?: Member_acl_pathsMaxAggregateInputType
  }

  export type Member_acl_pathsGroupByOutputType = {
    id: number
    u_id: string
    section_name: string
    name: string
    route_name: string
    path: string
    permission_type: $Enums.member_acl_paths_permission_type
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Member_acl_pathsCountAggregateOutputType | null
    _avg: Member_acl_pathsAvgAggregateOutputType | null
    _sum: Member_acl_pathsSumAggregateOutputType | null
    _min: Member_acl_pathsMinAggregateOutputType | null
    _max: Member_acl_pathsMaxAggregateOutputType | null
  }

  type GetMember_acl_pathsGroupByPayload<T extends member_acl_pathsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_acl_pathsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_acl_pathsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_acl_pathsGroupByOutputType[P]>
            : GetScalarType<T[P], Member_acl_pathsGroupByOutputType[P]>
        }
      >
    >


  export type member_acl_pathsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    u_id?: boolean
    section_name?: boolean
    name?: boolean
    route_name?: boolean
    path?: boolean
    permission_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["member_acl_paths"]>



  export type member_acl_pathsSelectScalar = {
    id?: boolean
    u_id?: boolean
    section_name?: boolean
    name?: boolean
    route_name?: boolean
    path?: boolean
    permission_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type member_acl_pathsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "u_id" | "section_name" | "name" | "route_name" | "path" | "permission_type" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["member_acl_paths"]>

  export type $member_acl_pathsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member_acl_paths"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      u_id: string
      section_name: string
      name: string
      route_name: string
      path: string
      permission_type: $Enums.member_acl_paths_permission_type
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["member_acl_paths"]>
    composites: {}
  }

  type member_acl_pathsGetPayload<S extends boolean | null | undefined | member_acl_pathsDefaultArgs> = $Result.GetResult<Prisma.$member_acl_pathsPayload, S>

  type member_acl_pathsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<member_acl_pathsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_acl_pathsCountAggregateInputType | true
    }

  export interface member_acl_pathsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member_acl_paths'], meta: { name: 'member_acl_paths' } }
    /**
     * Find zero or one Member_acl_paths that matches the filter.
     * @param {member_acl_pathsFindUniqueArgs} args - Arguments to find a Member_acl_paths
     * @example
     * // Get one Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends member_acl_pathsFindUniqueArgs>(args: SelectSubset<T, member_acl_pathsFindUniqueArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_acl_paths that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {member_acl_pathsFindUniqueOrThrowArgs} args - Arguments to find a Member_acl_paths
     * @example
     * // Get one Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends member_acl_pathsFindUniqueOrThrowArgs>(args: SelectSubset<T, member_acl_pathsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_acl_paths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsFindFirstArgs} args - Arguments to find a Member_acl_paths
     * @example
     * // Get one Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends member_acl_pathsFindFirstArgs>(args?: SelectSubset<T, member_acl_pathsFindFirstArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_acl_paths that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsFindFirstOrThrowArgs} args - Arguments to find a Member_acl_paths
     * @example
     * // Get one Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends member_acl_pathsFindFirstOrThrowArgs>(args?: SelectSubset<T, member_acl_pathsFindFirstOrThrowArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_acl_paths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findMany()
     * 
     * // Get first 10 Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const member_acl_pathsWithIdOnly = await prisma.member_acl_paths.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends member_acl_pathsFindManyArgs>(args?: SelectSubset<T, member_acl_pathsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_acl_paths.
     * @param {member_acl_pathsCreateArgs} args - Arguments to create a Member_acl_paths.
     * @example
     * // Create one Member_acl_paths
     * const Member_acl_paths = await prisma.member_acl_paths.create({
     *   data: {
     *     // ... data to create a Member_acl_paths
     *   }
     * })
     * 
     */
    create<T extends member_acl_pathsCreateArgs>(args: SelectSubset<T, member_acl_pathsCreateArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_acl_paths.
     * @param {member_acl_pathsCreateManyArgs} args - Arguments to create many Member_acl_paths.
     * @example
     * // Create many Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends member_acl_pathsCreateManyArgs>(args?: SelectSubset<T, member_acl_pathsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_acl_paths.
     * @param {member_acl_pathsDeleteArgs} args - Arguments to delete one Member_acl_paths.
     * @example
     * // Delete one Member_acl_paths
     * const Member_acl_paths = await prisma.member_acl_paths.delete({
     *   where: {
     *     // ... filter to delete one Member_acl_paths
     *   }
     * })
     * 
     */
    delete<T extends member_acl_pathsDeleteArgs>(args: SelectSubset<T, member_acl_pathsDeleteArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_acl_paths.
     * @param {member_acl_pathsUpdateArgs} args - Arguments to update one Member_acl_paths.
     * @example
     * // Update one Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends member_acl_pathsUpdateArgs>(args: SelectSubset<T, member_acl_pathsUpdateArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_acl_paths.
     * @param {member_acl_pathsDeleteManyArgs} args - Arguments to filter Member_acl_paths to delete.
     * @example
     * // Delete a few Member_acl_paths
     * const { count } = await prisma.member_acl_paths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends member_acl_pathsDeleteManyArgs>(args?: SelectSubset<T, member_acl_pathsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_acl_paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends member_acl_pathsUpdateManyArgs>(args: SelectSubset<T, member_acl_pathsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_acl_paths.
     * @param {member_acl_pathsUpsertArgs} args - Arguments to update or create a Member_acl_paths.
     * @example
     * // Update or create a Member_acl_paths
     * const member_acl_paths = await prisma.member_acl_paths.upsert({
     *   create: {
     *     // ... data to create a Member_acl_paths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_acl_paths we want to update
     *   }
     * })
     */
    upsert<T extends member_acl_pathsUpsertArgs>(args: SelectSubset<T, member_acl_pathsUpsertArgs<ExtArgs>>): Prisma__member_acl_pathsClient<$Result.GetResult<Prisma.$member_acl_pathsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_acl_paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsCountArgs} args - Arguments to filter Member_acl_paths to count.
     * @example
     * // Count the number of Member_acl_paths
     * const count = await prisma.member_acl_paths.count({
     *   where: {
     *     // ... the filter for the Member_acl_paths we want to count
     *   }
     * })
    **/
    count<T extends member_acl_pathsCountArgs>(
      args?: Subset<T, member_acl_pathsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_acl_pathsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_acl_paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_acl_pathsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_acl_pathsAggregateArgs>(args: Subset<T, Member_acl_pathsAggregateArgs>): Prisma.PrismaPromise<GetMember_acl_pathsAggregateType<T>>

    /**
     * Group by Member_acl_paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_pathsGroupByArgs} args - Group by arguments.
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
      T extends member_acl_pathsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: member_acl_pathsGroupByArgs['orderBy'] }
        : { orderBy?: member_acl_pathsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, member_acl_pathsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_acl_pathsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member_acl_paths model
   */
  readonly fields: member_acl_pathsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member_acl_paths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__member_acl_pathsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the member_acl_paths model
   */
  interface member_acl_pathsFieldRefs {
    readonly id: FieldRef<"member_acl_paths", 'Int'>
    readonly u_id: FieldRef<"member_acl_paths", 'String'>
    readonly section_name: FieldRef<"member_acl_paths", 'String'>
    readonly name: FieldRef<"member_acl_paths", 'String'>
    readonly route_name: FieldRef<"member_acl_paths", 'String'>
    readonly path: FieldRef<"member_acl_paths", 'String'>
    readonly permission_type: FieldRef<"member_acl_paths", 'member_acl_paths_permission_type'>
    readonly created_at: FieldRef<"member_acl_paths", 'DateTime'>
    readonly updated_at: FieldRef<"member_acl_paths", 'DateTime'>
    readonly deleted_at: FieldRef<"member_acl_paths", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * member_acl_paths findUnique
   */
  export type member_acl_pathsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_paths to fetch.
     */
    where: member_acl_pathsWhereUniqueInput
  }

  /**
   * member_acl_paths findUniqueOrThrow
   */
  export type member_acl_pathsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_paths to fetch.
     */
    where: member_acl_pathsWhereUniqueInput
  }

  /**
   * member_acl_paths findFirst
   */
  export type member_acl_pathsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_paths to fetch.
     */
    where?: member_acl_pathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_paths to fetch.
     */
    orderBy?: member_acl_pathsOrderByWithRelationInput | member_acl_pathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_acl_paths.
     */
    cursor?: member_acl_pathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_acl_paths.
     */
    distinct?: Member_acl_pathsScalarFieldEnum | Member_acl_pathsScalarFieldEnum[]
  }

  /**
   * member_acl_paths findFirstOrThrow
   */
  export type member_acl_pathsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_paths to fetch.
     */
    where?: member_acl_pathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_paths to fetch.
     */
    orderBy?: member_acl_pathsOrderByWithRelationInput | member_acl_pathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_acl_paths.
     */
    cursor?: member_acl_pathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_acl_paths.
     */
    distinct?: Member_acl_pathsScalarFieldEnum | Member_acl_pathsScalarFieldEnum[]
  }

  /**
   * member_acl_paths findMany
   */
  export type member_acl_pathsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_paths to fetch.
     */
    where?: member_acl_pathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_paths to fetch.
     */
    orderBy?: member_acl_pathsOrderByWithRelationInput | member_acl_pathsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing member_acl_paths.
     */
    cursor?: member_acl_pathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_paths.
     */
    skip?: number
    distinct?: Member_acl_pathsScalarFieldEnum | Member_acl_pathsScalarFieldEnum[]
  }

  /**
   * member_acl_paths create
   */
  export type member_acl_pathsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * The data needed to create a member_acl_paths.
     */
    data: XOR<member_acl_pathsCreateInput, member_acl_pathsUncheckedCreateInput>
  }

  /**
   * member_acl_paths createMany
   */
  export type member_acl_pathsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many member_acl_paths.
     */
    data: member_acl_pathsCreateManyInput | member_acl_pathsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member_acl_paths update
   */
  export type member_acl_pathsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * The data needed to update a member_acl_paths.
     */
    data: XOR<member_acl_pathsUpdateInput, member_acl_pathsUncheckedUpdateInput>
    /**
     * Choose, which member_acl_paths to update.
     */
    where: member_acl_pathsWhereUniqueInput
  }

  /**
   * member_acl_paths updateMany
   */
  export type member_acl_pathsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update member_acl_paths.
     */
    data: XOR<member_acl_pathsUpdateManyMutationInput, member_acl_pathsUncheckedUpdateManyInput>
    /**
     * Filter which member_acl_paths to update
     */
    where?: member_acl_pathsWhereInput
    /**
     * Limit how many member_acl_paths to update.
     */
    limit?: number
  }

  /**
   * member_acl_paths upsert
   */
  export type member_acl_pathsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * The filter to search for the member_acl_paths to update in case it exists.
     */
    where: member_acl_pathsWhereUniqueInput
    /**
     * In case the member_acl_paths found by the `where` argument doesn't exist, create a new member_acl_paths with this data.
     */
    create: XOR<member_acl_pathsCreateInput, member_acl_pathsUncheckedCreateInput>
    /**
     * In case the member_acl_paths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<member_acl_pathsUpdateInput, member_acl_pathsUncheckedUpdateInput>
  }

  /**
   * member_acl_paths delete
   */
  export type member_acl_pathsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
    /**
     * Filter which member_acl_paths to delete.
     */
    where: member_acl_pathsWhereUniqueInput
  }

  /**
   * member_acl_paths deleteMany
   */
  export type member_acl_pathsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_acl_paths to delete
     */
    where?: member_acl_pathsWhereInput
    /**
     * Limit how many member_acl_paths to delete.
     */
    limit?: number
  }

  /**
   * member_acl_paths without action
   */
  export type member_acl_pathsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_paths
     */
    select?: member_acl_pathsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_paths
     */
    omit?: member_acl_pathsOmit<ExtArgs> | null
  }


  /**
   * Model member_acl_rules
   */

  export type AggregateMember_acl_rules = {
    _count: Member_acl_rulesCountAggregateOutputType | null
    _avg: Member_acl_rulesAvgAggregateOutputType | null
    _sum: Member_acl_rulesSumAggregateOutputType | null
    _min: Member_acl_rulesMinAggregateOutputType | null
    _max: Member_acl_rulesMaxAggregateOutputType | null
  }

  export type Member_acl_rulesAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
    minimum_tier_level: number | null
  }

  export type Member_acl_rulesSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
    minimum_tier_level: number | null
  }

  export type Member_acl_rulesMinAggregateOutputType = {
    id: number | null
    u_id: string | null
    parent_id: number | null
    app: string | null
    minimum_tier_level: number | null
    name: string | null
    section_name: string | null
    require_acl: $Enums.member_acl_rules_require_acl | null
    tutorial_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Member_acl_rulesMaxAggregateOutputType = {
    id: number | null
    u_id: string | null
    parent_id: number | null
    app: string | null
    minimum_tier_level: number | null
    name: string | null
    section_name: string | null
    require_acl: $Enums.member_acl_rules_require_acl | null
    tutorial_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Member_acl_rulesCountAggregateOutputType = {
    id: number
    u_id: number
    parent_id: number
    app: number
    minimum_tier_level: number
    name: number
    section_name: number
    require_acl: number
    tutorial_url: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Member_acl_rulesAvgAggregateInputType = {
    id?: true
    parent_id?: true
    minimum_tier_level?: true
  }

  export type Member_acl_rulesSumAggregateInputType = {
    id?: true
    parent_id?: true
    minimum_tier_level?: true
  }

  export type Member_acl_rulesMinAggregateInputType = {
    id?: true
    u_id?: true
    parent_id?: true
    app?: true
    minimum_tier_level?: true
    name?: true
    section_name?: true
    require_acl?: true
    tutorial_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Member_acl_rulesMaxAggregateInputType = {
    id?: true
    u_id?: true
    parent_id?: true
    app?: true
    minimum_tier_level?: true
    name?: true
    section_name?: true
    require_acl?: true
    tutorial_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Member_acl_rulesCountAggregateInputType = {
    id?: true
    u_id?: true
    parent_id?: true
    app?: true
    minimum_tier_level?: true
    name?: true
    section_name?: true
    require_acl?: true
    tutorial_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Member_acl_rulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_acl_rules to aggregate.
     */
    where?: member_acl_rulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_rules to fetch.
     */
    orderBy?: member_acl_rulesOrderByWithRelationInput | member_acl_rulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: member_acl_rulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned member_acl_rules
    **/
    _count?: true | Member_acl_rulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_acl_rulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_acl_rulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_acl_rulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_acl_rulesMaxAggregateInputType
  }

  export type GetMember_acl_rulesAggregateType<T extends Member_acl_rulesAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_acl_rules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_acl_rules[P]>
      : GetScalarType<T[P], AggregateMember_acl_rules[P]>
  }




  export type member_acl_rulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: member_acl_rulesWhereInput
    orderBy?: member_acl_rulesOrderByWithAggregationInput | member_acl_rulesOrderByWithAggregationInput[]
    by: Member_acl_rulesScalarFieldEnum[] | Member_acl_rulesScalarFieldEnum
    having?: member_acl_rulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Member_acl_rulesCountAggregateInputType | true
    _avg?: Member_acl_rulesAvgAggregateInputType
    _sum?: Member_acl_rulesSumAggregateInputType
    _min?: Member_acl_rulesMinAggregateInputType
    _max?: Member_acl_rulesMaxAggregateInputType
  }

  export type Member_acl_rulesGroupByOutputType = {
    id: number
    u_id: string
    parent_id: number
    app: string
    minimum_tier_level: number | null
    name: string
    section_name: string
    require_acl: $Enums.member_acl_rules_require_acl
    tutorial_url: string | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Member_acl_rulesCountAggregateOutputType | null
    _avg: Member_acl_rulesAvgAggregateOutputType | null
    _sum: Member_acl_rulesSumAggregateOutputType | null
    _min: Member_acl_rulesMinAggregateOutputType | null
    _max: Member_acl_rulesMaxAggregateOutputType | null
  }

  type GetMember_acl_rulesGroupByPayload<T extends member_acl_rulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_acl_rulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_acl_rulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_acl_rulesGroupByOutputType[P]>
            : GetScalarType<T[P], Member_acl_rulesGroupByOutputType[P]>
        }
      >
    >


  export type member_acl_rulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    u_id?: boolean
    parent_id?: boolean
    app?: boolean
    minimum_tier_level?: boolean
    name?: boolean
    section_name?: boolean
    require_acl?: boolean
    tutorial_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["member_acl_rules"]>



  export type member_acl_rulesSelectScalar = {
    id?: boolean
    u_id?: boolean
    parent_id?: boolean
    app?: boolean
    minimum_tier_level?: boolean
    name?: boolean
    section_name?: boolean
    require_acl?: boolean
    tutorial_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type member_acl_rulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "u_id" | "parent_id" | "app" | "minimum_tier_level" | "name" | "section_name" | "require_acl" | "tutorial_url" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["member_acl_rules"]>

  export type $member_acl_rulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member_acl_rules"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      u_id: string
      parent_id: number
      app: string
      minimum_tier_level: number | null
      name: string
      section_name: string
      require_acl: $Enums.member_acl_rules_require_acl
      tutorial_url: string | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["member_acl_rules"]>
    composites: {}
  }

  type member_acl_rulesGetPayload<S extends boolean | null | undefined | member_acl_rulesDefaultArgs> = $Result.GetResult<Prisma.$member_acl_rulesPayload, S>

  type member_acl_rulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<member_acl_rulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_acl_rulesCountAggregateInputType | true
    }

  export interface member_acl_rulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member_acl_rules'], meta: { name: 'member_acl_rules' } }
    /**
     * Find zero or one Member_acl_rules that matches the filter.
     * @param {member_acl_rulesFindUniqueArgs} args - Arguments to find a Member_acl_rules
     * @example
     * // Get one Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends member_acl_rulesFindUniqueArgs>(args: SelectSubset<T, member_acl_rulesFindUniqueArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_acl_rules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {member_acl_rulesFindUniqueOrThrowArgs} args - Arguments to find a Member_acl_rules
     * @example
     * // Get one Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends member_acl_rulesFindUniqueOrThrowArgs>(args: SelectSubset<T, member_acl_rulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_acl_rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesFindFirstArgs} args - Arguments to find a Member_acl_rules
     * @example
     * // Get one Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends member_acl_rulesFindFirstArgs>(args?: SelectSubset<T, member_acl_rulesFindFirstArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_acl_rules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesFindFirstOrThrowArgs} args - Arguments to find a Member_acl_rules
     * @example
     * // Get one Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends member_acl_rulesFindFirstOrThrowArgs>(args?: SelectSubset<T, member_acl_rulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_acl_rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findMany()
     * 
     * // Get first 10 Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const member_acl_rulesWithIdOnly = await prisma.member_acl_rules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends member_acl_rulesFindManyArgs>(args?: SelectSubset<T, member_acl_rulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_acl_rules.
     * @param {member_acl_rulesCreateArgs} args - Arguments to create a Member_acl_rules.
     * @example
     * // Create one Member_acl_rules
     * const Member_acl_rules = await prisma.member_acl_rules.create({
     *   data: {
     *     // ... data to create a Member_acl_rules
     *   }
     * })
     * 
     */
    create<T extends member_acl_rulesCreateArgs>(args: SelectSubset<T, member_acl_rulesCreateArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_acl_rules.
     * @param {member_acl_rulesCreateManyArgs} args - Arguments to create many Member_acl_rules.
     * @example
     * // Create many Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends member_acl_rulesCreateManyArgs>(args?: SelectSubset<T, member_acl_rulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_acl_rules.
     * @param {member_acl_rulesDeleteArgs} args - Arguments to delete one Member_acl_rules.
     * @example
     * // Delete one Member_acl_rules
     * const Member_acl_rules = await prisma.member_acl_rules.delete({
     *   where: {
     *     // ... filter to delete one Member_acl_rules
     *   }
     * })
     * 
     */
    delete<T extends member_acl_rulesDeleteArgs>(args: SelectSubset<T, member_acl_rulesDeleteArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_acl_rules.
     * @param {member_acl_rulesUpdateArgs} args - Arguments to update one Member_acl_rules.
     * @example
     * // Update one Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends member_acl_rulesUpdateArgs>(args: SelectSubset<T, member_acl_rulesUpdateArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_acl_rules.
     * @param {member_acl_rulesDeleteManyArgs} args - Arguments to filter Member_acl_rules to delete.
     * @example
     * // Delete a few Member_acl_rules
     * const { count } = await prisma.member_acl_rules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends member_acl_rulesDeleteManyArgs>(args?: SelectSubset<T, member_acl_rulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_acl_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends member_acl_rulesUpdateManyArgs>(args: SelectSubset<T, member_acl_rulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_acl_rules.
     * @param {member_acl_rulesUpsertArgs} args - Arguments to update or create a Member_acl_rules.
     * @example
     * // Update or create a Member_acl_rules
     * const member_acl_rules = await prisma.member_acl_rules.upsert({
     *   create: {
     *     // ... data to create a Member_acl_rules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_acl_rules we want to update
     *   }
     * })
     */
    upsert<T extends member_acl_rulesUpsertArgs>(args: SelectSubset<T, member_acl_rulesUpsertArgs<ExtArgs>>): Prisma__member_acl_rulesClient<$Result.GetResult<Prisma.$member_acl_rulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_acl_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesCountArgs} args - Arguments to filter Member_acl_rules to count.
     * @example
     * // Count the number of Member_acl_rules
     * const count = await prisma.member_acl_rules.count({
     *   where: {
     *     // ... the filter for the Member_acl_rules we want to count
     *   }
     * })
    **/
    count<T extends member_acl_rulesCountArgs>(
      args?: Subset<T, member_acl_rulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_acl_rulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_acl_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_acl_rulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_acl_rulesAggregateArgs>(args: Subset<T, Member_acl_rulesAggregateArgs>): Prisma.PrismaPromise<GetMember_acl_rulesAggregateType<T>>

    /**
     * Group by Member_acl_rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {member_acl_rulesGroupByArgs} args - Group by arguments.
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
      T extends member_acl_rulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: member_acl_rulesGroupByArgs['orderBy'] }
        : { orderBy?: member_acl_rulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, member_acl_rulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_acl_rulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member_acl_rules model
   */
  readonly fields: member_acl_rulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member_acl_rules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__member_acl_rulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the member_acl_rules model
   */
  interface member_acl_rulesFieldRefs {
    readonly id: FieldRef<"member_acl_rules", 'Int'>
    readonly u_id: FieldRef<"member_acl_rules", 'String'>
    readonly parent_id: FieldRef<"member_acl_rules", 'Int'>
    readonly app: FieldRef<"member_acl_rules", 'String'>
    readonly minimum_tier_level: FieldRef<"member_acl_rules", 'Int'>
    readonly name: FieldRef<"member_acl_rules", 'String'>
    readonly section_name: FieldRef<"member_acl_rules", 'String'>
    readonly require_acl: FieldRef<"member_acl_rules", 'member_acl_rules_require_acl'>
    readonly tutorial_url: FieldRef<"member_acl_rules", 'String'>
    readonly created_at: FieldRef<"member_acl_rules", 'DateTime'>
    readonly updated_at: FieldRef<"member_acl_rules", 'DateTime'>
    readonly deleted_at: FieldRef<"member_acl_rules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * member_acl_rules findUnique
   */
  export type member_acl_rulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_rules to fetch.
     */
    where: member_acl_rulesWhereUniqueInput
  }

  /**
   * member_acl_rules findUniqueOrThrow
   */
  export type member_acl_rulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_rules to fetch.
     */
    where: member_acl_rulesWhereUniqueInput
  }

  /**
   * member_acl_rules findFirst
   */
  export type member_acl_rulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_rules to fetch.
     */
    where?: member_acl_rulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_rules to fetch.
     */
    orderBy?: member_acl_rulesOrderByWithRelationInput | member_acl_rulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_acl_rules.
     */
    cursor?: member_acl_rulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_acl_rules.
     */
    distinct?: Member_acl_rulesScalarFieldEnum | Member_acl_rulesScalarFieldEnum[]
  }

  /**
   * member_acl_rules findFirstOrThrow
   */
  export type member_acl_rulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_rules to fetch.
     */
    where?: member_acl_rulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_rules to fetch.
     */
    orderBy?: member_acl_rulesOrderByWithRelationInput | member_acl_rulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for member_acl_rules.
     */
    cursor?: member_acl_rulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of member_acl_rules.
     */
    distinct?: Member_acl_rulesScalarFieldEnum | Member_acl_rulesScalarFieldEnum[]
  }

  /**
   * member_acl_rules findMany
   */
  export type member_acl_rulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter, which member_acl_rules to fetch.
     */
    where?: member_acl_rulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of member_acl_rules to fetch.
     */
    orderBy?: member_acl_rulesOrderByWithRelationInput | member_acl_rulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing member_acl_rules.
     */
    cursor?: member_acl_rulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` member_acl_rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` member_acl_rules.
     */
    skip?: number
    distinct?: Member_acl_rulesScalarFieldEnum | Member_acl_rulesScalarFieldEnum[]
  }

  /**
   * member_acl_rules create
   */
  export type member_acl_rulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * The data needed to create a member_acl_rules.
     */
    data: XOR<member_acl_rulesCreateInput, member_acl_rulesUncheckedCreateInput>
  }

  /**
   * member_acl_rules createMany
   */
  export type member_acl_rulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many member_acl_rules.
     */
    data: member_acl_rulesCreateManyInput | member_acl_rulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member_acl_rules update
   */
  export type member_acl_rulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * The data needed to update a member_acl_rules.
     */
    data: XOR<member_acl_rulesUpdateInput, member_acl_rulesUncheckedUpdateInput>
    /**
     * Choose, which member_acl_rules to update.
     */
    where: member_acl_rulesWhereUniqueInput
  }

  /**
   * member_acl_rules updateMany
   */
  export type member_acl_rulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update member_acl_rules.
     */
    data: XOR<member_acl_rulesUpdateManyMutationInput, member_acl_rulesUncheckedUpdateManyInput>
    /**
     * Filter which member_acl_rules to update
     */
    where?: member_acl_rulesWhereInput
    /**
     * Limit how many member_acl_rules to update.
     */
    limit?: number
  }

  /**
   * member_acl_rules upsert
   */
  export type member_acl_rulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * The filter to search for the member_acl_rules to update in case it exists.
     */
    where: member_acl_rulesWhereUniqueInput
    /**
     * In case the member_acl_rules found by the `where` argument doesn't exist, create a new member_acl_rules with this data.
     */
    create: XOR<member_acl_rulesCreateInput, member_acl_rulesUncheckedCreateInput>
    /**
     * In case the member_acl_rules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<member_acl_rulesUpdateInput, member_acl_rulesUncheckedUpdateInput>
  }

  /**
   * member_acl_rules delete
   */
  export type member_acl_rulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
    /**
     * Filter which member_acl_rules to delete.
     */
    where: member_acl_rulesWhereUniqueInput
  }

  /**
   * member_acl_rules deleteMany
   */
  export type member_acl_rulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member_acl_rules to delete
     */
    where?: member_acl_rulesWhereInput
    /**
     * Limit how many member_acl_rules to delete.
     */
    limit?: number
  }

  /**
   * member_acl_rules without action
   */
  export type member_acl_rulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member_acl_rules
     */
    select?: member_acl_rulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member_acl_rules
     */
    omit?: member_acl_rulesOmit<ExtArgs> | null
  }


  /**
   * Model servers
   */

  export type AggregateServers = {
    _count: ServersCountAggregateOutputType | null
    _avg: ServersAvgAggregateOutputType | null
    _sum: ServersSumAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  export type ServersAvgAggregateOutputType = {
    id: number | null
    provision: number | null
    close: number | null
    state: number | null
    master: number | null
    master_active: number | null
    provision_request_value: number | null
    instance_id: number | null
  }

  export type ServersSumAggregateOutputType = {
    id: number | null
    provision: number | null
    close: number | null
    state: number | null
    master: number | null
    master_active: number | null
    provision_request_value: number | null
    instance_id: number | null
  }

  export type ServersMinAggregateOutputType = {
    id: number | null
    hostname: string | null
    provision: number | null
    close: number | null
    state: number | null
    type: $Enums.servers_type | null
    last_update_time: Date | null
    cluster: string | null
    master: number | null
    master_active: number | null
    projectx_node_version: string | null
    rvm: $Enums.servers_rvm | null
    service: string | null
    provision_request_value: number | null
    location: string | null
    instance_id: number | null
    last_requested_at: Date | null
  }

  export type ServersMaxAggregateOutputType = {
    id: number | null
    hostname: string | null
    provision: number | null
    close: number | null
    state: number | null
    type: $Enums.servers_type | null
    last_update_time: Date | null
    cluster: string | null
    master: number | null
    master_active: number | null
    projectx_node_version: string | null
    rvm: $Enums.servers_rvm | null
    service: string | null
    provision_request_value: number | null
    location: string | null
    instance_id: number | null
    last_requested_at: Date | null
  }

  export type ServersCountAggregateOutputType = {
    id: number
    hostname: number
    provision: number
    close: number
    state: number
    type: number
    last_update_time: number
    cluster: number
    master: number
    master_active: number
    projectx_node_version: number
    rvm: number
    service: number
    provision_request_value: number
    location: number
    instance_id: number
    last_requested_at: number
    _all: number
  }


  export type ServersAvgAggregateInputType = {
    id?: true
    provision?: true
    close?: true
    state?: true
    master?: true
    master_active?: true
    provision_request_value?: true
    instance_id?: true
  }

  export type ServersSumAggregateInputType = {
    id?: true
    provision?: true
    close?: true
    state?: true
    master?: true
    master_active?: true
    provision_request_value?: true
    instance_id?: true
  }

  export type ServersMinAggregateInputType = {
    id?: true
    hostname?: true
    provision?: true
    close?: true
    state?: true
    type?: true
    last_update_time?: true
    cluster?: true
    master?: true
    master_active?: true
    projectx_node_version?: true
    rvm?: true
    service?: true
    provision_request_value?: true
    location?: true
    instance_id?: true
    last_requested_at?: true
  }

  export type ServersMaxAggregateInputType = {
    id?: true
    hostname?: true
    provision?: true
    close?: true
    state?: true
    type?: true
    last_update_time?: true
    cluster?: true
    master?: true
    master_active?: true
    projectx_node_version?: true
    rvm?: true
    service?: true
    provision_request_value?: true
    location?: true
    instance_id?: true
    last_requested_at?: true
  }

  export type ServersCountAggregateInputType = {
    id?: true
    hostname?: true
    provision?: true
    close?: true
    state?: true
    type?: true
    last_update_time?: true
    cluster?: true
    master?: true
    master_active?: true
    projectx_node_version?: true
    rvm?: true
    service?: true
    provision_request_value?: true
    location?: true
    instance_id?: true
    last_requested_at?: true
    _all?: true
  }

  export type ServersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to aggregate.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servers
    **/
    _count?: true | ServersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServersMaxAggregateInputType
  }

  export type GetServersAggregateType<T extends ServersAggregateArgs> = {
        [P in keyof T & keyof AggregateServers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers[P]>
      : GetScalarType<T[P], AggregateServers[P]>
  }




  export type serversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serversWhereInput
    orderBy?: serversOrderByWithAggregationInput | serversOrderByWithAggregationInput[]
    by: ServersScalarFieldEnum[] | ServersScalarFieldEnum
    having?: serversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServersCountAggregateInputType | true
    _avg?: ServersAvgAggregateInputType
    _sum?: ServersSumAggregateInputType
    _min?: ServersMinAggregateInputType
    _max?: ServersMaxAggregateInputType
  }

  export type ServersGroupByOutputType = {
    id: number
    hostname: string
    provision: number
    close: number
    state: number
    type: $Enums.servers_type | null
    last_update_time: Date
    cluster: string
    master: number
    master_active: number
    projectx_node_version: string
    rvm: $Enums.servers_rvm
    service: string
    provision_request_value: number
    location: string | null
    instance_id: number
    last_requested_at: Date | null
    _count: ServersCountAggregateOutputType | null
    _avg: ServersAvgAggregateOutputType | null
    _sum: ServersSumAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  type GetServersGroupByPayload<T extends serversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServersGroupByOutputType[P]>
            : GetScalarType<T[P], ServersGroupByOutputType[P]>
        }
      >
    >


  export type serversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostname?: boolean
    provision?: boolean
    close?: boolean
    state?: boolean
    type?: boolean
    last_update_time?: boolean
    cluster?: boolean
    master?: boolean
    master_active?: boolean
    projectx_node_version?: boolean
    rvm?: boolean
    service?: boolean
    provision_request_value?: boolean
    location?: boolean
    instance_id?: boolean
    last_requested_at?: boolean
  }, ExtArgs["result"]["servers"]>



  export type serversSelectScalar = {
    id?: boolean
    hostname?: boolean
    provision?: boolean
    close?: boolean
    state?: boolean
    type?: boolean
    last_update_time?: boolean
    cluster?: boolean
    master?: boolean
    master_active?: boolean
    projectx_node_version?: boolean
    rvm?: boolean
    service?: boolean
    provision_request_value?: boolean
    location?: boolean
    instance_id?: boolean
    last_requested_at?: boolean
  }

  export type serversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hostname" | "provision" | "close" | "state" | "type" | "last_update_time" | "cluster" | "master" | "master_active" | "projectx_node_version" | "rvm" | "service" | "provision_request_value" | "location" | "instance_id" | "last_requested_at", ExtArgs["result"]["servers"]>

  export type $serversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hostname: string
      provision: number
      close: number
      state: number
      type: $Enums.servers_type | null
      last_update_time: Date
      cluster: string
      master: number
      master_active: number
      projectx_node_version: string
      rvm: $Enums.servers_rvm
      service: string
      provision_request_value: number
      location: string | null
      instance_id: number
      last_requested_at: Date | null
    }, ExtArgs["result"]["servers"]>
    composites: {}
  }

  type serversGetPayload<S extends boolean | null | undefined | serversDefaultArgs> = $Result.GetResult<Prisma.$serversPayload, S>

  type serversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServersCountAggregateInputType | true
    }

  export interface serversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servers'], meta: { name: 'servers' } }
    /**
     * Find zero or one Servers that matches the filter.
     * @param {serversFindUniqueArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serversFindUniqueArgs>(args: SelectSubset<T, serversFindUniqueArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serversFindUniqueOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serversFindUniqueOrThrowArgs>(args: SelectSubset<T, serversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serversFindFirstArgs>(args?: SelectSubset<T, serversFindFirstArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindFirstOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serversFindFirstOrThrowArgs>(args?: SelectSubset<T, serversFindFirstOrThrowArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.servers.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serversWithIdOnly = await prisma.servers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serversFindManyArgs>(args?: SelectSubset<T, serversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers.
     * @param {serversCreateArgs} args - Arguments to create a Servers.
     * @example
     * // Create one Servers
     * const Servers = await prisma.servers.create({
     *   data: {
     *     // ... data to create a Servers
     *   }
     * })
     * 
     */
    create<T extends serversCreateArgs>(args: SelectSubset<T, serversCreateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {serversCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serversCreateManyArgs>(args?: SelectSubset<T, serversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servers.
     * @param {serversDeleteArgs} args - Arguments to delete one Servers.
     * @example
     * // Delete one Servers
     * const Servers = await prisma.servers.delete({
     *   where: {
     *     // ... filter to delete one Servers
     *   }
     * })
     * 
     */
    delete<T extends serversDeleteArgs>(args: SelectSubset<T, serversDeleteArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers.
     * @param {serversUpdateArgs} args - Arguments to update one Servers.
     * @example
     * // Update one Servers
     * const servers = await prisma.servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serversUpdateArgs>(args: SelectSubset<T, serversUpdateArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {serversDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serversDeleteManyArgs>(args?: SelectSubset<T, serversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serversUpdateManyArgs>(args: SelectSubset<T, serversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servers.
     * @param {serversUpsertArgs} args - Arguments to update or create a Servers.
     * @example
     * // Update or create a Servers
     * const servers = await prisma.servers.upsert({
     *   create: {
     *     // ... data to create a Servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers we want to update
     *   }
     * })
     */
    upsert<T extends serversUpsertArgs>(args: SelectSubset<T, serversUpsertArgs<ExtArgs>>): Prisma__serversClient<$Result.GetResult<Prisma.$serversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.servers.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends serversCountArgs>(
      args?: Subset<T, serversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServersAggregateArgs>(args: Subset<T, ServersAggregateArgs>): Prisma.PrismaPromise<GetServersAggregateType<T>>

    /**
     * Group by Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serversGroupByArgs} args - Group by arguments.
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
      T extends serversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serversGroupByArgs['orderBy'] }
        : { orderBy?: serversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, serversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servers model
   */
  readonly fields: serversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the servers model
   */
  interface serversFieldRefs {
    readonly id: FieldRef<"servers", 'Int'>
    readonly hostname: FieldRef<"servers", 'String'>
    readonly provision: FieldRef<"servers", 'Int'>
    readonly close: FieldRef<"servers", 'Int'>
    readonly state: FieldRef<"servers", 'Int'>
    readonly type: FieldRef<"servers", 'servers_type'>
    readonly last_update_time: FieldRef<"servers", 'DateTime'>
    readonly cluster: FieldRef<"servers", 'String'>
    readonly master: FieldRef<"servers", 'Int'>
    readonly master_active: FieldRef<"servers", 'Int'>
    readonly projectx_node_version: FieldRef<"servers", 'String'>
    readonly rvm: FieldRef<"servers", 'servers_rvm'>
    readonly service: FieldRef<"servers", 'String'>
    readonly provision_request_value: FieldRef<"servers", 'Int'>
    readonly location: FieldRef<"servers", 'String'>
    readonly instance_id: FieldRef<"servers", 'Int'>
    readonly last_requested_at: FieldRef<"servers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * servers findUnique
   */
  export type serversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findUniqueOrThrow
   */
  export type serversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers findFirst
   */
  export type serversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findFirstOrThrow
   */
  export type serversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers findMany
   */
  export type serversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter, which servers to fetch.
     */
    where?: serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers to fetch.
     */
    orderBy?: serversOrderByWithRelationInput | serversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servers.
     */
    cursor?: serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers.
     */
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * servers create
   */
  export type serversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data needed to create a servers.
     */
    data: XOR<serversCreateInput, serversUncheckedCreateInput>
  }

  /**
   * servers createMany
   */
  export type serversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers.
     */
    data: serversCreateManyInput | serversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers update
   */
  export type serversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The data needed to update a servers.
     */
    data: XOR<serversUpdateInput, serversUncheckedUpdateInput>
    /**
     * Choose, which servers to update.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers updateMany
   */
  export type serversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers.
     */
    data: XOR<serversUpdateManyMutationInput, serversUncheckedUpdateManyInput>
    /**
     * Filter which servers to update
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to update.
     */
    limit?: number
  }

  /**
   * servers upsert
   */
  export type serversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * The filter to search for the servers to update in case it exists.
     */
    where: serversWhereUniqueInput
    /**
     * In case the servers found by the `where` argument doesn't exist, create a new servers with this data.
     */
    create: XOR<serversCreateInput, serversUncheckedCreateInput>
    /**
     * In case the servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serversUpdateInput, serversUncheckedUpdateInput>
  }

  /**
   * servers delete
   */
  export type serversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
    /**
     * Filter which servers to delete.
     */
    where: serversWhereUniqueInput
  }

  /**
   * servers deleteMany
   */
  export type serversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to delete
     */
    where?: serversWhereInput
    /**
     * Limit how many servers to delete.
     */
    limit?: number
  }

  /**
   * servers without action
   */
  export type serversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers
     */
    select?: serversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers
     */
    omit?: serversOmit<ExtArgs> | null
  }


  /**
   * Model servers_ips
   */

  export type AggregateServers_ips = {
    _count: Servers_ipsCountAggregateOutputType | null
    _avg: Servers_ipsAvgAggregateOutputType | null
    _sum: Servers_ipsSumAggregateOutputType | null
    _min: Servers_ipsMinAggregateOutputType | null
    _max: Servers_ipsMaxAggregateOutputType | null
  }

  export type Servers_ipsAvgAggregateOutputType = {
    id: number | null
    servers_id: number | null
    instance: number | null
  }

  export type Servers_ipsSumAggregateOutputType = {
    id: number | null
    servers_id: number | null
    instance: number | null
  }

  export type Servers_ipsMinAggregateOutputType = {
    id: number | null
    servers_id: number | null
    ip: string | null
    comment: string | null
    instance: number | null
  }

  export type Servers_ipsMaxAggregateOutputType = {
    id: number | null
    servers_id: number | null
    ip: string | null
    comment: string | null
    instance: number | null
  }

  export type Servers_ipsCountAggregateOutputType = {
    id: number
    servers_id: number
    ip: number
    comment: number
    instance: number
    _all: number
  }


  export type Servers_ipsAvgAggregateInputType = {
    id?: true
    servers_id?: true
    instance?: true
  }

  export type Servers_ipsSumAggregateInputType = {
    id?: true
    servers_id?: true
    instance?: true
  }

  export type Servers_ipsMinAggregateInputType = {
    id?: true
    servers_id?: true
    ip?: true
    comment?: true
    instance?: true
  }

  export type Servers_ipsMaxAggregateInputType = {
    id?: true
    servers_id?: true
    ip?: true
    comment?: true
    instance?: true
  }

  export type Servers_ipsCountAggregateInputType = {
    id?: true
    servers_id?: true
    ip?: true
    comment?: true
    instance?: true
    _all?: true
  }

  export type Servers_ipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers_ips to aggregate.
     */
    where?: servers_ipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_ips to fetch.
     */
    orderBy?: servers_ipsOrderByWithRelationInput | servers_ipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servers_ipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servers_ips
    **/
    _count?: true | Servers_ipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Servers_ipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Servers_ipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Servers_ipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Servers_ipsMaxAggregateInputType
  }

  export type GetServers_ipsAggregateType<T extends Servers_ipsAggregateArgs> = {
        [P in keyof T & keyof AggregateServers_ips]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers_ips[P]>
      : GetScalarType<T[P], AggregateServers_ips[P]>
  }




  export type servers_ipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servers_ipsWhereInput
    orderBy?: servers_ipsOrderByWithAggregationInput | servers_ipsOrderByWithAggregationInput[]
    by: Servers_ipsScalarFieldEnum[] | Servers_ipsScalarFieldEnum
    having?: servers_ipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Servers_ipsCountAggregateInputType | true
    _avg?: Servers_ipsAvgAggregateInputType
    _sum?: Servers_ipsSumAggregateInputType
    _min?: Servers_ipsMinAggregateInputType
    _max?: Servers_ipsMaxAggregateInputType
  }

  export type Servers_ipsGroupByOutputType = {
    id: number
    servers_id: number
    ip: string
    comment: string
    instance: number
    _count: Servers_ipsCountAggregateOutputType | null
    _avg: Servers_ipsAvgAggregateOutputType | null
    _sum: Servers_ipsSumAggregateOutputType | null
    _min: Servers_ipsMinAggregateOutputType | null
    _max: Servers_ipsMaxAggregateOutputType | null
  }

  type GetServers_ipsGroupByPayload<T extends servers_ipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Servers_ipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Servers_ipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Servers_ipsGroupByOutputType[P]>
            : GetScalarType<T[P], Servers_ipsGroupByOutputType[P]>
        }
      >
    >


  export type servers_ipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servers_id?: boolean
    ip?: boolean
    comment?: boolean
    instance?: boolean
  }, ExtArgs["result"]["servers_ips"]>



  export type servers_ipsSelectScalar = {
    id?: boolean
    servers_id?: boolean
    ip?: boolean
    comment?: boolean
    instance?: boolean
  }

  export type servers_ipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servers_id" | "ip" | "comment" | "instance", ExtArgs["result"]["servers_ips"]>

  export type $servers_ipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servers_ips"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servers_id: number
      ip: string
      comment: string
      instance: number
    }, ExtArgs["result"]["servers_ips"]>
    composites: {}
  }

  type servers_ipsGetPayload<S extends boolean | null | undefined | servers_ipsDefaultArgs> = $Result.GetResult<Prisma.$servers_ipsPayload, S>

  type servers_ipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servers_ipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Servers_ipsCountAggregateInputType | true
    }

  export interface servers_ipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servers_ips'], meta: { name: 'servers_ips' } }
    /**
     * Find zero or one Servers_ips that matches the filter.
     * @param {servers_ipsFindUniqueArgs} args - Arguments to find a Servers_ips
     * @example
     * // Get one Servers_ips
     * const servers_ips = await prisma.servers_ips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servers_ipsFindUniqueArgs>(args: SelectSubset<T, servers_ipsFindUniqueArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers_ips that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servers_ipsFindUniqueOrThrowArgs} args - Arguments to find a Servers_ips
     * @example
     * // Get one Servers_ips
     * const servers_ips = await prisma.servers_ips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servers_ipsFindUniqueOrThrowArgs>(args: SelectSubset<T, servers_ipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers_ips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsFindFirstArgs} args - Arguments to find a Servers_ips
     * @example
     * // Get one Servers_ips
     * const servers_ips = await prisma.servers_ips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servers_ipsFindFirstArgs>(args?: SelectSubset<T, servers_ipsFindFirstArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers_ips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsFindFirstOrThrowArgs} args - Arguments to find a Servers_ips
     * @example
     * // Get one Servers_ips
     * const servers_ips = await prisma.servers_ips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servers_ipsFindFirstOrThrowArgs>(args?: SelectSubset<T, servers_ipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers_ips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers_ips
     * const servers_ips = await prisma.servers_ips.findMany()
     * 
     * // Get first 10 Servers_ips
     * const servers_ips = await prisma.servers_ips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servers_ipsWithIdOnly = await prisma.servers_ips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servers_ipsFindManyArgs>(args?: SelectSubset<T, servers_ipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers_ips.
     * @param {servers_ipsCreateArgs} args - Arguments to create a Servers_ips.
     * @example
     * // Create one Servers_ips
     * const Servers_ips = await prisma.servers_ips.create({
     *   data: {
     *     // ... data to create a Servers_ips
     *   }
     * })
     * 
     */
    create<T extends servers_ipsCreateArgs>(args: SelectSubset<T, servers_ipsCreateArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers_ips.
     * @param {servers_ipsCreateManyArgs} args - Arguments to create many Servers_ips.
     * @example
     * // Create many Servers_ips
     * const servers_ips = await prisma.servers_ips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servers_ipsCreateManyArgs>(args?: SelectSubset<T, servers_ipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servers_ips.
     * @param {servers_ipsDeleteArgs} args - Arguments to delete one Servers_ips.
     * @example
     * // Delete one Servers_ips
     * const Servers_ips = await prisma.servers_ips.delete({
     *   where: {
     *     // ... filter to delete one Servers_ips
     *   }
     * })
     * 
     */
    delete<T extends servers_ipsDeleteArgs>(args: SelectSubset<T, servers_ipsDeleteArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers_ips.
     * @param {servers_ipsUpdateArgs} args - Arguments to update one Servers_ips.
     * @example
     * // Update one Servers_ips
     * const servers_ips = await prisma.servers_ips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servers_ipsUpdateArgs>(args: SelectSubset<T, servers_ipsUpdateArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers_ips.
     * @param {servers_ipsDeleteManyArgs} args - Arguments to filter Servers_ips to delete.
     * @example
     * // Delete a few Servers_ips
     * const { count } = await prisma.servers_ips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servers_ipsDeleteManyArgs>(args?: SelectSubset<T, servers_ipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers_ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers_ips
     * const servers_ips = await prisma.servers_ips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servers_ipsUpdateManyArgs>(args: SelectSubset<T, servers_ipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servers_ips.
     * @param {servers_ipsUpsertArgs} args - Arguments to update or create a Servers_ips.
     * @example
     * // Update or create a Servers_ips
     * const servers_ips = await prisma.servers_ips.upsert({
     *   create: {
     *     // ... data to create a Servers_ips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers_ips we want to update
     *   }
     * })
     */
    upsert<T extends servers_ipsUpsertArgs>(args: SelectSubset<T, servers_ipsUpsertArgs<ExtArgs>>): Prisma__servers_ipsClient<$Result.GetResult<Prisma.$servers_ipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers_ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsCountArgs} args - Arguments to filter Servers_ips to count.
     * @example
     * // Count the number of Servers_ips
     * const count = await prisma.servers_ips.count({
     *   where: {
     *     // ... the filter for the Servers_ips we want to count
     *   }
     * })
    **/
    count<T extends servers_ipsCountArgs>(
      args?: Subset<T, servers_ipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Servers_ipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers_ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Servers_ipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Servers_ipsAggregateArgs>(args: Subset<T, Servers_ipsAggregateArgs>): Prisma.PrismaPromise<GetServers_ipsAggregateType<T>>

    /**
     * Group by Servers_ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_ipsGroupByArgs} args - Group by arguments.
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
      T extends servers_ipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servers_ipsGroupByArgs['orderBy'] }
        : { orderBy?: servers_ipsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servers_ipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServers_ipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servers_ips model
   */
  readonly fields: servers_ipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servers_ips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servers_ipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the servers_ips model
   */
  interface servers_ipsFieldRefs {
    readonly id: FieldRef<"servers_ips", 'Int'>
    readonly servers_id: FieldRef<"servers_ips", 'Int'>
    readonly ip: FieldRef<"servers_ips", 'String'>
    readonly comment: FieldRef<"servers_ips", 'String'>
    readonly instance: FieldRef<"servers_ips", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * servers_ips findUnique
   */
  export type servers_ipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter, which servers_ips to fetch.
     */
    where: servers_ipsWhereUniqueInput
  }

  /**
   * servers_ips findUniqueOrThrow
   */
  export type servers_ipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter, which servers_ips to fetch.
     */
    where: servers_ipsWhereUniqueInput
  }

  /**
   * servers_ips findFirst
   */
  export type servers_ipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter, which servers_ips to fetch.
     */
    where?: servers_ipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_ips to fetch.
     */
    orderBy?: servers_ipsOrderByWithRelationInput | servers_ipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers_ips.
     */
    cursor?: servers_ipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers_ips.
     */
    distinct?: Servers_ipsScalarFieldEnum | Servers_ipsScalarFieldEnum[]
  }

  /**
   * servers_ips findFirstOrThrow
   */
  export type servers_ipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter, which servers_ips to fetch.
     */
    where?: servers_ipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_ips to fetch.
     */
    orderBy?: servers_ipsOrderByWithRelationInput | servers_ipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers_ips.
     */
    cursor?: servers_ipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers_ips.
     */
    distinct?: Servers_ipsScalarFieldEnum | Servers_ipsScalarFieldEnum[]
  }

  /**
   * servers_ips findMany
   */
  export type servers_ipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter, which servers_ips to fetch.
     */
    where?: servers_ipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_ips to fetch.
     */
    orderBy?: servers_ipsOrderByWithRelationInput | servers_ipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servers_ips.
     */
    cursor?: servers_ipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_ips.
     */
    skip?: number
    distinct?: Servers_ipsScalarFieldEnum | Servers_ipsScalarFieldEnum[]
  }

  /**
   * servers_ips create
   */
  export type servers_ipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * The data needed to create a servers_ips.
     */
    data: XOR<servers_ipsCreateInput, servers_ipsUncheckedCreateInput>
  }

  /**
   * servers_ips createMany
   */
  export type servers_ipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers_ips.
     */
    data: servers_ipsCreateManyInput | servers_ipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers_ips update
   */
  export type servers_ipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * The data needed to update a servers_ips.
     */
    data: XOR<servers_ipsUpdateInput, servers_ipsUncheckedUpdateInput>
    /**
     * Choose, which servers_ips to update.
     */
    where: servers_ipsWhereUniqueInput
  }

  /**
   * servers_ips updateMany
   */
  export type servers_ipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers_ips.
     */
    data: XOR<servers_ipsUpdateManyMutationInput, servers_ipsUncheckedUpdateManyInput>
    /**
     * Filter which servers_ips to update
     */
    where?: servers_ipsWhereInput
    /**
     * Limit how many servers_ips to update.
     */
    limit?: number
  }

  /**
   * servers_ips upsert
   */
  export type servers_ipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * The filter to search for the servers_ips to update in case it exists.
     */
    where: servers_ipsWhereUniqueInput
    /**
     * In case the servers_ips found by the `where` argument doesn't exist, create a new servers_ips with this data.
     */
    create: XOR<servers_ipsCreateInput, servers_ipsUncheckedCreateInput>
    /**
     * In case the servers_ips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servers_ipsUpdateInput, servers_ipsUncheckedUpdateInput>
  }

  /**
   * servers_ips delete
   */
  export type servers_ipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
    /**
     * Filter which servers_ips to delete.
     */
    where: servers_ipsWhereUniqueInput
  }

  /**
   * servers_ips deleteMany
   */
  export type servers_ipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers_ips to delete
     */
    where?: servers_ipsWhereInput
    /**
     * Limit how many servers_ips to delete.
     */
    limit?: number
  }

  /**
   * servers_ips without action
   */
  export type servers_ipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_ips
     */
    select?: servers_ipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_ips
     */
    omit?: servers_ipsOmit<ExtArgs> | null
  }


  /**
   * Model servers_properties
   */

  export type AggregateServers_properties = {
    _count: Servers_propertiesCountAggregateOutputType | null
    _avg: Servers_propertiesAvgAggregateOutputType | null
    _sum: Servers_propertiesSumAggregateOutputType | null
    _min: Servers_propertiesMinAggregateOutputType | null
    _max: Servers_propertiesMaxAggregateOutputType | null
  }

  export type Servers_propertiesAvgAggregateOutputType = {
    id: number | null
    servers_id: number | null
  }

  export type Servers_propertiesSumAggregateOutputType = {
    id: number | null
    servers_id: number | null
  }

  export type Servers_propertiesMinAggregateOutputType = {
    id: number | null
    servers_id: number | null
    name: string | null
    value: string | null
  }

  export type Servers_propertiesMaxAggregateOutputType = {
    id: number | null
    servers_id: number | null
    name: string | null
    value: string | null
  }

  export type Servers_propertiesCountAggregateOutputType = {
    id: number
    servers_id: number
    name: number
    value: number
    _all: number
  }


  export type Servers_propertiesAvgAggregateInputType = {
    id?: true
    servers_id?: true
  }

  export type Servers_propertiesSumAggregateInputType = {
    id?: true
    servers_id?: true
  }

  export type Servers_propertiesMinAggregateInputType = {
    id?: true
    servers_id?: true
    name?: true
    value?: true
  }

  export type Servers_propertiesMaxAggregateInputType = {
    id?: true
    servers_id?: true
    name?: true
    value?: true
  }

  export type Servers_propertiesCountAggregateInputType = {
    id?: true
    servers_id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type Servers_propertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers_properties to aggregate.
     */
    where?: servers_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_properties to fetch.
     */
    orderBy?: servers_propertiesOrderByWithRelationInput | servers_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servers_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servers_properties
    **/
    _count?: true | Servers_propertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Servers_propertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Servers_propertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Servers_propertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Servers_propertiesMaxAggregateInputType
  }

  export type GetServers_propertiesAggregateType<T extends Servers_propertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateServers_properties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers_properties[P]>
      : GetScalarType<T[P], AggregateServers_properties[P]>
  }




  export type servers_propertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servers_propertiesWhereInput
    orderBy?: servers_propertiesOrderByWithAggregationInput | servers_propertiesOrderByWithAggregationInput[]
    by: Servers_propertiesScalarFieldEnum[] | Servers_propertiesScalarFieldEnum
    having?: servers_propertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Servers_propertiesCountAggregateInputType | true
    _avg?: Servers_propertiesAvgAggregateInputType
    _sum?: Servers_propertiesSumAggregateInputType
    _min?: Servers_propertiesMinAggregateInputType
    _max?: Servers_propertiesMaxAggregateInputType
  }

  export type Servers_propertiesGroupByOutputType = {
    id: number
    servers_id: number
    name: string
    value: string
    _count: Servers_propertiesCountAggregateOutputType | null
    _avg: Servers_propertiesAvgAggregateOutputType | null
    _sum: Servers_propertiesSumAggregateOutputType | null
    _min: Servers_propertiesMinAggregateOutputType | null
    _max: Servers_propertiesMaxAggregateOutputType | null
  }

  type GetServers_propertiesGroupByPayload<T extends servers_propertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Servers_propertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Servers_propertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Servers_propertiesGroupByOutputType[P]>
            : GetScalarType<T[P], Servers_propertiesGroupByOutputType[P]>
        }
      >
    >


  export type servers_propertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servers_id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["servers_properties"]>



  export type servers_propertiesSelectScalar = {
    id?: boolean
    servers_id?: boolean
    name?: boolean
    value?: boolean
  }

  export type servers_propertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servers_id" | "name" | "value", ExtArgs["result"]["servers_properties"]>

  export type $servers_propertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servers_properties"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servers_id: number
      name: string
      value: string
    }, ExtArgs["result"]["servers_properties"]>
    composites: {}
  }

  type servers_propertiesGetPayload<S extends boolean | null | undefined | servers_propertiesDefaultArgs> = $Result.GetResult<Prisma.$servers_propertiesPayload, S>

  type servers_propertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servers_propertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Servers_propertiesCountAggregateInputType | true
    }

  export interface servers_propertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servers_properties'], meta: { name: 'servers_properties' } }
    /**
     * Find zero or one Servers_properties that matches the filter.
     * @param {servers_propertiesFindUniqueArgs} args - Arguments to find a Servers_properties
     * @example
     * // Get one Servers_properties
     * const servers_properties = await prisma.servers_properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servers_propertiesFindUniqueArgs>(args: SelectSubset<T, servers_propertiesFindUniqueArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers_properties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servers_propertiesFindUniqueOrThrowArgs} args - Arguments to find a Servers_properties
     * @example
     * // Get one Servers_properties
     * const servers_properties = await prisma.servers_properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servers_propertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, servers_propertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers_properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesFindFirstArgs} args - Arguments to find a Servers_properties
     * @example
     * // Get one Servers_properties
     * const servers_properties = await prisma.servers_properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servers_propertiesFindFirstArgs>(args?: SelectSubset<T, servers_propertiesFindFirstArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers_properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesFindFirstOrThrowArgs} args - Arguments to find a Servers_properties
     * @example
     * // Get one Servers_properties
     * const servers_properties = await prisma.servers_properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servers_propertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, servers_propertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers_properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers_properties
     * const servers_properties = await prisma.servers_properties.findMany()
     * 
     * // Get first 10 Servers_properties
     * const servers_properties = await prisma.servers_properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servers_propertiesWithIdOnly = await prisma.servers_properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servers_propertiesFindManyArgs>(args?: SelectSubset<T, servers_propertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers_properties.
     * @param {servers_propertiesCreateArgs} args - Arguments to create a Servers_properties.
     * @example
     * // Create one Servers_properties
     * const Servers_properties = await prisma.servers_properties.create({
     *   data: {
     *     // ... data to create a Servers_properties
     *   }
     * })
     * 
     */
    create<T extends servers_propertiesCreateArgs>(args: SelectSubset<T, servers_propertiesCreateArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers_properties.
     * @param {servers_propertiesCreateManyArgs} args - Arguments to create many Servers_properties.
     * @example
     * // Create many Servers_properties
     * const servers_properties = await prisma.servers_properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servers_propertiesCreateManyArgs>(args?: SelectSubset<T, servers_propertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servers_properties.
     * @param {servers_propertiesDeleteArgs} args - Arguments to delete one Servers_properties.
     * @example
     * // Delete one Servers_properties
     * const Servers_properties = await prisma.servers_properties.delete({
     *   where: {
     *     // ... filter to delete one Servers_properties
     *   }
     * })
     * 
     */
    delete<T extends servers_propertiesDeleteArgs>(args: SelectSubset<T, servers_propertiesDeleteArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers_properties.
     * @param {servers_propertiesUpdateArgs} args - Arguments to update one Servers_properties.
     * @example
     * // Update one Servers_properties
     * const servers_properties = await prisma.servers_properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servers_propertiesUpdateArgs>(args: SelectSubset<T, servers_propertiesUpdateArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers_properties.
     * @param {servers_propertiesDeleteManyArgs} args - Arguments to filter Servers_properties to delete.
     * @example
     * // Delete a few Servers_properties
     * const { count } = await prisma.servers_properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servers_propertiesDeleteManyArgs>(args?: SelectSubset<T, servers_propertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers_properties
     * const servers_properties = await prisma.servers_properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servers_propertiesUpdateManyArgs>(args: SelectSubset<T, servers_propertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servers_properties.
     * @param {servers_propertiesUpsertArgs} args - Arguments to update or create a Servers_properties.
     * @example
     * // Update or create a Servers_properties
     * const servers_properties = await prisma.servers_properties.upsert({
     *   create: {
     *     // ... data to create a Servers_properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers_properties we want to update
     *   }
     * })
     */
    upsert<T extends servers_propertiesUpsertArgs>(args: SelectSubset<T, servers_propertiesUpsertArgs<ExtArgs>>): Prisma__servers_propertiesClient<$Result.GetResult<Prisma.$servers_propertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesCountArgs} args - Arguments to filter Servers_properties to count.
     * @example
     * // Count the number of Servers_properties
     * const count = await prisma.servers_properties.count({
     *   where: {
     *     // ... the filter for the Servers_properties we want to count
     *   }
     * })
    **/
    count<T extends servers_propertiesCountArgs>(
      args?: Subset<T, servers_propertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Servers_propertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Servers_propertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Servers_propertiesAggregateArgs>(args: Subset<T, Servers_propertiesAggregateArgs>): Prisma.PrismaPromise<GetServers_propertiesAggregateType<T>>

    /**
     * Group by Servers_properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servers_propertiesGroupByArgs} args - Group by arguments.
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
      T extends servers_propertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servers_propertiesGroupByArgs['orderBy'] }
        : { orderBy?: servers_propertiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servers_propertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServers_propertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servers_properties model
   */
  readonly fields: servers_propertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servers_properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servers_propertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the servers_properties model
   */
  interface servers_propertiesFieldRefs {
    readonly id: FieldRef<"servers_properties", 'Int'>
    readonly servers_id: FieldRef<"servers_properties", 'Int'>
    readonly name: FieldRef<"servers_properties", 'String'>
    readonly value: FieldRef<"servers_properties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servers_properties findUnique
   */
  export type servers_propertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter, which servers_properties to fetch.
     */
    where: servers_propertiesWhereUniqueInput
  }

  /**
   * servers_properties findUniqueOrThrow
   */
  export type servers_propertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter, which servers_properties to fetch.
     */
    where: servers_propertiesWhereUniqueInput
  }

  /**
   * servers_properties findFirst
   */
  export type servers_propertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter, which servers_properties to fetch.
     */
    where?: servers_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_properties to fetch.
     */
    orderBy?: servers_propertiesOrderByWithRelationInput | servers_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers_properties.
     */
    cursor?: servers_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers_properties.
     */
    distinct?: Servers_propertiesScalarFieldEnum | Servers_propertiesScalarFieldEnum[]
  }

  /**
   * servers_properties findFirstOrThrow
   */
  export type servers_propertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter, which servers_properties to fetch.
     */
    where?: servers_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_properties to fetch.
     */
    orderBy?: servers_propertiesOrderByWithRelationInput | servers_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servers_properties.
     */
    cursor?: servers_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servers_properties.
     */
    distinct?: Servers_propertiesScalarFieldEnum | Servers_propertiesScalarFieldEnum[]
  }

  /**
   * servers_properties findMany
   */
  export type servers_propertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter, which servers_properties to fetch.
     */
    where?: servers_propertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servers_properties to fetch.
     */
    orderBy?: servers_propertiesOrderByWithRelationInput | servers_propertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servers_properties.
     */
    cursor?: servers_propertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servers_properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servers_properties.
     */
    skip?: number
    distinct?: Servers_propertiesScalarFieldEnum | Servers_propertiesScalarFieldEnum[]
  }

  /**
   * servers_properties create
   */
  export type servers_propertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * The data needed to create a servers_properties.
     */
    data: XOR<servers_propertiesCreateInput, servers_propertiesUncheckedCreateInput>
  }

  /**
   * servers_properties createMany
   */
  export type servers_propertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers_properties.
     */
    data: servers_propertiesCreateManyInput | servers_propertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servers_properties update
   */
  export type servers_propertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * The data needed to update a servers_properties.
     */
    data: XOR<servers_propertiesUpdateInput, servers_propertiesUncheckedUpdateInput>
    /**
     * Choose, which servers_properties to update.
     */
    where: servers_propertiesWhereUniqueInput
  }

  /**
   * servers_properties updateMany
   */
  export type servers_propertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers_properties.
     */
    data: XOR<servers_propertiesUpdateManyMutationInput, servers_propertiesUncheckedUpdateManyInput>
    /**
     * Filter which servers_properties to update
     */
    where?: servers_propertiesWhereInput
    /**
     * Limit how many servers_properties to update.
     */
    limit?: number
  }

  /**
   * servers_properties upsert
   */
  export type servers_propertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * The filter to search for the servers_properties to update in case it exists.
     */
    where: servers_propertiesWhereUniqueInput
    /**
     * In case the servers_properties found by the `where` argument doesn't exist, create a new servers_properties with this data.
     */
    create: XOR<servers_propertiesCreateInput, servers_propertiesUncheckedCreateInput>
    /**
     * In case the servers_properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servers_propertiesUpdateInput, servers_propertiesUncheckedUpdateInput>
  }

  /**
   * servers_properties delete
   */
  export type servers_propertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
    /**
     * Filter which servers_properties to delete.
     */
    where: servers_propertiesWhereUniqueInput
  }

  /**
   * servers_properties deleteMany
   */
  export type servers_propertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers_properties to delete
     */
    where?: servers_propertiesWhereInput
    /**
     * Limit how many servers_properties to delete.
     */
    limit?: number
  }

  /**
   * servers_properties without action
   */
  export type servers_propertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servers_properties
     */
    select?: servers_propertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servers_properties
     */
    omit?: servers_propertiesOmit<ExtArgs> | null
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


  export const Member_logScalarFieldEnum: {
    id: 'id',
    ip_address: 'ip_address',
    created_at: 'created_at',
    member_id: 'member_id',
    section: 'section',
    sub_section: 'sub_section',
    action: 'action',
    altered: 'altered',
    data: 'data',
    original_data: 'original_data',
    account_id: 'account_id'
  };

  export type Member_logScalarFieldEnum = (typeof Member_logScalarFieldEnum)[keyof typeof Member_logScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id',
    u_id: 'u_id',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    google_id: 'google_id',
    email: 'email',
    salt: 'salt',
    algo: 'algo',
    password: 'password',
    email_verification_key: 'email_verification_key',
    verify: 'verify',
    google_key: 'google_key',
    acl_access_profile: 'acl_access_profile',
    user_level: 'user_level',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const Member_acl_pathsScalarFieldEnum: {
    id: 'id',
    u_id: 'u_id',
    section_name: 'section_name',
    name: 'name',
    route_name: 'route_name',
    path: 'path',
    permission_type: 'permission_type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Member_acl_pathsScalarFieldEnum = (typeof Member_acl_pathsScalarFieldEnum)[keyof typeof Member_acl_pathsScalarFieldEnum]


  export const Member_acl_rulesScalarFieldEnum: {
    id: 'id',
    u_id: 'u_id',
    parent_id: 'parent_id',
    app: 'app',
    minimum_tier_level: 'minimum_tier_level',
    name: 'name',
    section_name: 'section_name',
    require_acl: 'require_acl',
    tutorial_url: 'tutorial_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Member_acl_rulesScalarFieldEnum = (typeof Member_acl_rulesScalarFieldEnum)[keyof typeof Member_acl_rulesScalarFieldEnum]


  export const ServersScalarFieldEnum: {
    id: 'id',
    hostname: 'hostname',
    provision: 'provision',
    close: 'close',
    state: 'state',
    type: 'type',
    last_update_time: 'last_update_time',
    cluster: 'cluster',
    master: 'master',
    master_active: 'master_active',
    projectx_node_version: 'projectx_node_version',
    rvm: 'rvm',
    service: 'service',
    provision_request_value: 'provision_request_value',
    location: 'location',
    instance_id: 'instance_id',
    last_requested_at: 'last_requested_at'
  };

  export type ServersScalarFieldEnum = (typeof ServersScalarFieldEnum)[keyof typeof ServersScalarFieldEnum]


  export const Servers_ipsScalarFieldEnum: {
    id: 'id',
    servers_id: 'servers_id',
    ip: 'ip',
    comment: 'comment',
    instance: 'instance'
  };

  export type Servers_ipsScalarFieldEnum = (typeof Servers_ipsScalarFieldEnum)[keyof typeof Servers_ipsScalarFieldEnum]


  export const Servers_propertiesScalarFieldEnum: {
    id: 'id',
    servers_id: 'servers_id',
    name: 'name',
    value: 'value'
  };

  export type Servers_propertiesScalarFieldEnum = (typeof Servers_propertiesScalarFieldEnum)[keyof typeof Servers_propertiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const member_logOrderByRelevanceFieldEnum: {
    ip_address: 'ip_address',
    section: 'section',
    sub_section: 'sub_section',
    altered: 'altered',
    data: 'data',
    original_data: 'original_data'
  };

  export type member_logOrderByRelevanceFieldEnum = (typeof member_logOrderByRelevanceFieldEnum)[keyof typeof member_logOrderByRelevanceFieldEnum]


  export const membersOrderByRelevanceFieldEnum: {
    u_id: 'u_id',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    google_id: 'google_id',
    email: 'email',
    salt: 'salt',
    algo: 'algo',
    password: 'password',
    email_verification_key: 'email_verification_key',
    google_key: 'google_key'
  };

  export type membersOrderByRelevanceFieldEnum = (typeof membersOrderByRelevanceFieldEnum)[keyof typeof membersOrderByRelevanceFieldEnum]


  export const member_acl_pathsOrderByRelevanceFieldEnum: {
    u_id: 'u_id',
    section_name: 'section_name',
    name: 'name',
    route_name: 'route_name',
    path: 'path'
  };

  export type member_acl_pathsOrderByRelevanceFieldEnum = (typeof member_acl_pathsOrderByRelevanceFieldEnum)[keyof typeof member_acl_pathsOrderByRelevanceFieldEnum]


  export const member_acl_rulesOrderByRelevanceFieldEnum: {
    u_id: 'u_id',
    app: 'app',
    name: 'name',
    section_name: 'section_name',
    tutorial_url: 'tutorial_url'
  };

  export type member_acl_rulesOrderByRelevanceFieldEnum = (typeof member_acl_rulesOrderByRelevanceFieldEnum)[keyof typeof member_acl_rulesOrderByRelevanceFieldEnum]


  export const serversOrderByRelevanceFieldEnum: {
    hostname: 'hostname',
    cluster: 'cluster',
    projectx_node_version: 'projectx_node_version',
    service: 'service',
    location: 'location'
  };

  export type serversOrderByRelevanceFieldEnum = (typeof serversOrderByRelevanceFieldEnum)[keyof typeof serversOrderByRelevanceFieldEnum]


  export const servers_ipsOrderByRelevanceFieldEnum: {
    ip: 'ip',
    comment: 'comment'
  };

  export type servers_ipsOrderByRelevanceFieldEnum = (typeof servers_ipsOrderByRelevanceFieldEnum)[keyof typeof servers_ipsOrderByRelevanceFieldEnum]


  export const servers_propertiesOrderByRelevanceFieldEnum: {
    name: 'name',
    value: 'value'
  };

  export type servers_propertiesOrderByRelevanceFieldEnum = (typeof servers_propertiesOrderByRelevanceFieldEnum)[keyof typeof servers_propertiesOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'member_log_action'
   */
  export type Enummember_log_actionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_log_action'>
    


  /**
   * Reference to a field of type 'members_verify'
   */
  export type Enummembers_verifyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'members_verify'>
    


  /**
   * Reference to a field of type 'member_acl_paths_permission_type'
   */
  export type Enummember_acl_paths_permission_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_acl_paths_permission_type'>
    


  /**
   * Reference to a field of type 'member_acl_rules_require_acl'
   */
  export type Enummember_acl_rules_require_aclFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_acl_rules_require_acl'>
    


  /**
   * Reference to a field of type 'servers_type'
   */
  export type Enumservers_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'servers_type'>
    


  /**
   * Reference to a field of type 'servers_rvm'
   */
  export type Enumservers_rvmFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'servers_rvm'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type member_logWhereInput = {
    AND?: member_logWhereInput | member_logWhereInput[]
    OR?: member_logWhereInput[]
    NOT?: member_logWhereInput | member_logWhereInput[]
    id?: IntFilter<"member_log"> | number
    ip_address?: StringFilter<"member_log"> | string
    created_at?: DateTimeFilter<"member_log"> | Date | string
    member_id?: IntFilter<"member_log"> | number
    section?: StringNullableFilter<"member_log"> | string | null
    sub_section?: StringNullableFilter<"member_log"> | string | null
    action?: Enummember_log_actionNullableFilter<"member_log"> | $Enums.member_log_action | null
    altered?: StringNullableFilter<"member_log"> | string | null
    data?: StringNullableFilter<"member_log"> | string | null
    original_data?: StringNullableFilter<"member_log"> | string | null
    account_id?: IntNullableFilter<"member_log"> | number | null
  }

  export type member_logOrderByWithRelationInput = {
    id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    section?: SortOrderInput | SortOrder
    sub_section?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    altered?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    original_data?: SortOrderInput | SortOrder
    account_id?: SortOrderInput | SortOrder
    _relevance?: member_logOrderByRelevanceInput
  }

  export type member_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: member_logWhereInput | member_logWhereInput[]
    OR?: member_logWhereInput[]
    NOT?: member_logWhereInput | member_logWhereInput[]
    ip_address?: StringFilter<"member_log"> | string
    created_at?: DateTimeFilter<"member_log"> | Date | string
    member_id?: IntFilter<"member_log"> | number
    section?: StringNullableFilter<"member_log"> | string | null
    sub_section?: StringNullableFilter<"member_log"> | string | null
    action?: Enummember_log_actionNullableFilter<"member_log"> | $Enums.member_log_action | null
    altered?: StringNullableFilter<"member_log"> | string | null
    data?: StringNullableFilter<"member_log"> | string | null
    original_data?: StringNullableFilter<"member_log"> | string | null
    account_id?: IntNullableFilter<"member_log"> | number | null
  }, "id">

  export type member_logOrderByWithAggregationInput = {
    id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    section?: SortOrderInput | SortOrder
    sub_section?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    altered?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    original_data?: SortOrderInput | SortOrder
    account_id?: SortOrderInput | SortOrder
    _count?: member_logCountOrderByAggregateInput
    _avg?: member_logAvgOrderByAggregateInput
    _max?: member_logMaxOrderByAggregateInput
    _min?: member_logMinOrderByAggregateInput
    _sum?: member_logSumOrderByAggregateInput
  }

  export type member_logScalarWhereWithAggregatesInput = {
    AND?: member_logScalarWhereWithAggregatesInput | member_logScalarWhereWithAggregatesInput[]
    OR?: member_logScalarWhereWithAggregatesInput[]
    NOT?: member_logScalarWhereWithAggregatesInput | member_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member_log"> | number
    ip_address?: StringWithAggregatesFilter<"member_log"> | string
    created_at?: DateTimeWithAggregatesFilter<"member_log"> | Date | string
    member_id?: IntWithAggregatesFilter<"member_log"> | number
    section?: StringNullableWithAggregatesFilter<"member_log"> | string | null
    sub_section?: StringNullableWithAggregatesFilter<"member_log"> | string | null
    action?: Enummember_log_actionNullableWithAggregatesFilter<"member_log"> | $Enums.member_log_action | null
    altered?: StringNullableWithAggregatesFilter<"member_log"> | string | null
    data?: StringNullableWithAggregatesFilter<"member_log"> | string | null
    original_data?: StringNullableWithAggregatesFilter<"member_log"> | string | null
    account_id?: IntNullableWithAggregatesFilter<"member_log"> | number | null
  }

  export type membersWhereInput = {
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    id?: IntFilter<"members"> | number
    u_id?: StringFilter<"members"> | string
    username?: StringFilter<"members"> | string
    first_name?: StringNullableFilter<"members"> | string | null
    last_name?: StringNullableFilter<"members"> | string | null
    google_id?: StringFilter<"members"> | string
    email?: StringFilter<"members"> | string
    salt?: StringFilter<"members"> | string
    algo?: StringFilter<"members"> | string
    password?: StringFilter<"members"> | string
    email_verification_key?: StringFilter<"members"> | string
    verify?: Enummembers_verifyNullableFilter<"members"> | $Enums.members_verify | null
    google_key?: StringNullableFilter<"members"> | string | null
    acl_access_profile?: IntNullableFilter<"members"> | number | null
    user_level?: IntNullableFilter<"members"> | number | null
    created_at?: DateTimeNullableFilter<"members"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"members"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"members"> | Date | string | null
  }

  export type membersOrderByWithRelationInput = {
    id?: SortOrder
    u_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    google_id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    algo?: SortOrder
    password?: SortOrder
    email_verification_key?: SortOrder
    verify?: SortOrderInput | SortOrder
    google_key?: SortOrderInput | SortOrder
    acl_access_profile?: SortOrderInput | SortOrder
    user_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: membersOrderByRelevanceInput
  }

  export type membersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: membersWhereInput | membersWhereInput[]
    OR?: membersWhereInput[]
    NOT?: membersWhereInput | membersWhereInput[]
    u_id?: StringFilter<"members"> | string
    username?: StringFilter<"members"> | string
    first_name?: StringNullableFilter<"members"> | string | null
    last_name?: StringNullableFilter<"members"> | string | null
    google_id?: StringFilter<"members"> | string
    email?: StringFilter<"members"> | string
    salt?: StringFilter<"members"> | string
    algo?: StringFilter<"members"> | string
    password?: StringFilter<"members"> | string
    email_verification_key?: StringFilter<"members"> | string
    verify?: Enummembers_verifyNullableFilter<"members"> | $Enums.members_verify | null
    google_key?: StringNullableFilter<"members"> | string | null
    acl_access_profile?: IntNullableFilter<"members"> | number | null
    user_level?: IntNullableFilter<"members"> | number | null
    created_at?: DateTimeNullableFilter<"members"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"members"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"members"> | Date | string | null
  }, "id">

  export type membersOrderByWithAggregationInput = {
    id?: SortOrder
    u_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    google_id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    algo?: SortOrder
    password?: SortOrder
    email_verification_key?: SortOrder
    verify?: SortOrderInput | SortOrder
    google_key?: SortOrderInput | SortOrder
    acl_access_profile?: SortOrderInput | SortOrder
    user_level?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: membersCountOrderByAggregateInput
    _avg?: membersAvgOrderByAggregateInput
    _max?: membersMaxOrderByAggregateInput
    _min?: membersMinOrderByAggregateInput
    _sum?: membersSumOrderByAggregateInput
  }

  export type membersScalarWhereWithAggregatesInput = {
    AND?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    OR?: membersScalarWhereWithAggregatesInput[]
    NOT?: membersScalarWhereWithAggregatesInput | membersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"members"> | number
    u_id?: StringWithAggregatesFilter<"members"> | string
    username?: StringWithAggregatesFilter<"members"> | string
    first_name?: StringNullableWithAggregatesFilter<"members"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"members"> | string | null
    google_id?: StringWithAggregatesFilter<"members"> | string
    email?: StringWithAggregatesFilter<"members"> | string
    salt?: StringWithAggregatesFilter<"members"> | string
    algo?: StringWithAggregatesFilter<"members"> | string
    password?: StringWithAggregatesFilter<"members"> | string
    email_verification_key?: StringWithAggregatesFilter<"members"> | string
    verify?: Enummembers_verifyNullableWithAggregatesFilter<"members"> | $Enums.members_verify | null
    google_key?: StringNullableWithAggregatesFilter<"members"> | string | null
    acl_access_profile?: IntNullableWithAggregatesFilter<"members"> | number | null
    user_level?: IntNullableWithAggregatesFilter<"members"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"members"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"members"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"members"> | Date | string | null
  }

  export type member_acl_pathsWhereInput = {
    AND?: member_acl_pathsWhereInput | member_acl_pathsWhereInput[]
    OR?: member_acl_pathsWhereInput[]
    NOT?: member_acl_pathsWhereInput | member_acl_pathsWhereInput[]
    id?: IntFilter<"member_acl_paths"> | number
    u_id?: StringFilter<"member_acl_paths"> | string
    section_name?: StringFilter<"member_acl_paths"> | string
    name?: StringFilter<"member_acl_paths"> | string
    route_name?: StringFilter<"member_acl_paths"> | string
    path?: StringFilter<"member_acl_paths"> | string
    permission_type?: Enummember_acl_paths_permission_typeFilter<"member_acl_paths"> | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFilter<"member_acl_paths"> | Date | string
    updated_at?: DateTimeNullableFilter<"member_acl_paths"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"member_acl_paths"> | Date | string | null
  }

  export type member_acl_pathsOrderByWithRelationInput = {
    id?: SortOrder
    u_id?: SortOrder
    section_name?: SortOrder
    name?: SortOrder
    route_name?: SortOrder
    path?: SortOrder
    permission_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: member_acl_pathsOrderByRelevanceInput
  }

  export type member_acl_pathsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    u_id_path?: member_acl_pathsU_idPathCompoundUniqueInput
    AND?: member_acl_pathsWhereInput | member_acl_pathsWhereInput[]
    OR?: member_acl_pathsWhereInput[]
    NOT?: member_acl_pathsWhereInput | member_acl_pathsWhereInput[]
    u_id?: StringFilter<"member_acl_paths"> | string
    section_name?: StringFilter<"member_acl_paths"> | string
    name?: StringFilter<"member_acl_paths"> | string
    route_name?: StringFilter<"member_acl_paths"> | string
    path?: StringFilter<"member_acl_paths"> | string
    permission_type?: Enummember_acl_paths_permission_typeFilter<"member_acl_paths"> | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFilter<"member_acl_paths"> | Date | string
    updated_at?: DateTimeNullableFilter<"member_acl_paths"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"member_acl_paths"> | Date | string | null
  }, "id" | "u_id_path">

  export type member_acl_pathsOrderByWithAggregationInput = {
    id?: SortOrder
    u_id?: SortOrder
    section_name?: SortOrder
    name?: SortOrder
    route_name?: SortOrder
    path?: SortOrder
    permission_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: member_acl_pathsCountOrderByAggregateInput
    _avg?: member_acl_pathsAvgOrderByAggregateInput
    _max?: member_acl_pathsMaxOrderByAggregateInput
    _min?: member_acl_pathsMinOrderByAggregateInput
    _sum?: member_acl_pathsSumOrderByAggregateInput
  }

  export type member_acl_pathsScalarWhereWithAggregatesInput = {
    AND?: member_acl_pathsScalarWhereWithAggregatesInput | member_acl_pathsScalarWhereWithAggregatesInput[]
    OR?: member_acl_pathsScalarWhereWithAggregatesInput[]
    NOT?: member_acl_pathsScalarWhereWithAggregatesInput | member_acl_pathsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member_acl_paths"> | number
    u_id?: StringWithAggregatesFilter<"member_acl_paths"> | string
    section_name?: StringWithAggregatesFilter<"member_acl_paths"> | string
    name?: StringWithAggregatesFilter<"member_acl_paths"> | string
    route_name?: StringWithAggregatesFilter<"member_acl_paths"> | string
    path?: StringWithAggregatesFilter<"member_acl_paths"> | string
    permission_type?: Enummember_acl_paths_permission_typeWithAggregatesFilter<"member_acl_paths"> | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeWithAggregatesFilter<"member_acl_paths"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"member_acl_paths"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"member_acl_paths"> | Date | string | null
  }

  export type member_acl_rulesWhereInput = {
    AND?: member_acl_rulesWhereInput | member_acl_rulesWhereInput[]
    OR?: member_acl_rulesWhereInput[]
    NOT?: member_acl_rulesWhereInput | member_acl_rulesWhereInput[]
    id?: IntFilter<"member_acl_rules"> | number
    u_id?: StringFilter<"member_acl_rules"> | string
    parent_id?: IntFilter<"member_acl_rules"> | number
    app?: StringFilter<"member_acl_rules"> | string
    minimum_tier_level?: IntNullableFilter<"member_acl_rules"> | number | null
    name?: StringFilter<"member_acl_rules"> | string
    section_name?: StringFilter<"member_acl_rules"> | string
    require_acl?: Enummember_acl_rules_require_aclFilter<"member_acl_rules"> | $Enums.member_acl_rules_require_acl
    tutorial_url?: StringNullableFilter<"member_acl_rules"> | string | null
    created_at?: DateTimeFilter<"member_acl_rules"> | Date | string
    updated_at?: DateTimeNullableFilter<"member_acl_rules"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"member_acl_rules"> | Date | string | null
  }

  export type member_acl_rulesOrderByWithRelationInput = {
    id?: SortOrder
    u_id?: SortOrder
    parent_id?: SortOrder
    app?: SortOrder
    minimum_tier_level?: SortOrderInput | SortOrder
    name?: SortOrder
    section_name?: SortOrder
    require_acl?: SortOrder
    tutorial_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: member_acl_rulesOrderByRelevanceInput
  }

  export type member_acl_rulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    u_id?: string
    AND?: member_acl_rulesWhereInput | member_acl_rulesWhereInput[]
    OR?: member_acl_rulesWhereInput[]
    NOT?: member_acl_rulesWhereInput | member_acl_rulesWhereInput[]
    parent_id?: IntFilter<"member_acl_rules"> | number
    app?: StringFilter<"member_acl_rules"> | string
    minimum_tier_level?: IntNullableFilter<"member_acl_rules"> | number | null
    name?: StringFilter<"member_acl_rules"> | string
    section_name?: StringFilter<"member_acl_rules"> | string
    require_acl?: Enummember_acl_rules_require_aclFilter<"member_acl_rules"> | $Enums.member_acl_rules_require_acl
    tutorial_url?: StringNullableFilter<"member_acl_rules"> | string | null
    created_at?: DateTimeFilter<"member_acl_rules"> | Date | string
    updated_at?: DateTimeNullableFilter<"member_acl_rules"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"member_acl_rules"> | Date | string | null
  }, "id" | "u_id">

  export type member_acl_rulesOrderByWithAggregationInput = {
    id?: SortOrder
    u_id?: SortOrder
    parent_id?: SortOrder
    app?: SortOrder
    minimum_tier_level?: SortOrderInput | SortOrder
    name?: SortOrder
    section_name?: SortOrder
    require_acl?: SortOrder
    tutorial_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: member_acl_rulesCountOrderByAggregateInput
    _avg?: member_acl_rulesAvgOrderByAggregateInput
    _max?: member_acl_rulesMaxOrderByAggregateInput
    _min?: member_acl_rulesMinOrderByAggregateInput
    _sum?: member_acl_rulesSumOrderByAggregateInput
  }

  export type member_acl_rulesScalarWhereWithAggregatesInput = {
    AND?: member_acl_rulesScalarWhereWithAggregatesInput | member_acl_rulesScalarWhereWithAggregatesInput[]
    OR?: member_acl_rulesScalarWhereWithAggregatesInput[]
    NOT?: member_acl_rulesScalarWhereWithAggregatesInput | member_acl_rulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member_acl_rules"> | number
    u_id?: StringWithAggregatesFilter<"member_acl_rules"> | string
    parent_id?: IntWithAggregatesFilter<"member_acl_rules"> | number
    app?: StringWithAggregatesFilter<"member_acl_rules"> | string
    minimum_tier_level?: IntNullableWithAggregatesFilter<"member_acl_rules"> | number | null
    name?: StringWithAggregatesFilter<"member_acl_rules"> | string
    section_name?: StringWithAggregatesFilter<"member_acl_rules"> | string
    require_acl?: Enummember_acl_rules_require_aclWithAggregatesFilter<"member_acl_rules"> | $Enums.member_acl_rules_require_acl
    tutorial_url?: StringNullableWithAggregatesFilter<"member_acl_rules"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"member_acl_rules"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"member_acl_rules"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"member_acl_rules"> | Date | string | null
  }

  export type serversWhereInput = {
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    id?: IntFilter<"servers"> | number
    hostname?: StringFilter<"servers"> | string
    provision?: IntFilter<"servers"> | number
    close?: IntFilter<"servers"> | number
    state?: IntFilter<"servers"> | number
    type?: Enumservers_typeNullableFilter<"servers"> | $Enums.servers_type | null
    last_update_time?: DateTimeFilter<"servers"> | Date | string
    cluster?: StringFilter<"servers"> | string
    master?: IntFilter<"servers"> | number
    master_active?: IntFilter<"servers"> | number
    projectx_node_version?: StringFilter<"servers"> | string
    rvm?: Enumservers_rvmFilter<"servers"> | $Enums.servers_rvm
    service?: StringFilter<"servers"> | string
    provision_request_value?: IntFilter<"servers"> | number
    location?: StringNullableFilter<"servers"> | string | null
    instance_id?: IntFilter<"servers"> | number
    last_requested_at?: DateTimeNullableFilter<"servers"> | Date | string | null
  }

  export type serversOrderByWithRelationInput = {
    id?: SortOrder
    hostname?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    type?: SortOrderInput | SortOrder
    last_update_time?: SortOrder
    cluster?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    projectx_node_version?: SortOrder
    rvm?: SortOrder
    service?: SortOrder
    provision_request_value?: SortOrder
    location?: SortOrderInput | SortOrder
    instance_id?: SortOrder
    last_requested_at?: SortOrderInput | SortOrder
    _relevance?: serversOrderByRelevanceInput
  }

  export type serversWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: serversWhereInput | serversWhereInput[]
    OR?: serversWhereInput[]
    NOT?: serversWhereInput | serversWhereInput[]
    hostname?: StringFilter<"servers"> | string
    provision?: IntFilter<"servers"> | number
    close?: IntFilter<"servers"> | number
    state?: IntFilter<"servers"> | number
    type?: Enumservers_typeNullableFilter<"servers"> | $Enums.servers_type | null
    last_update_time?: DateTimeFilter<"servers"> | Date | string
    cluster?: StringFilter<"servers"> | string
    master?: IntFilter<"servers"> | number
    master_active?: IntFilter<"servers"> | number
    projectx_node_version?: StringFilter<"servers"> | string
    rvm?: Enumservers_rvmFilter<"servers"> | $Enums.servers_rvm
    service?: StringFilter<"servers"> | string
    provision_request_value?: IntFilter<"servers"> | number
    location?: StringNullableFilter<"servers"> | string | null
    instance_id?: IntFilter<"servers"> | number
    last_requested_at?: DateTimeNullableFilter<"servers"> | Date | string | null
  }, "id">

  export type serversOrderByWithAggregationInput = {
    id?: SortOrder
    hostname?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    type?: SortOrderInput | SortOrder
    last_update_time?: SortOrder
    cluster?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    projectx_node_version?: SortOrder
    rvm?: SortOrder
    service?: SortOrder
    provision_request_value?: SortOrder
    location?: SortOrderInput | SortOrder
    instance_id?: SortOrder
    last_requested_at?: SortOrderInput | SortOrder
    _count?: serversCountOrderByAggregateInput
    _avg?: serversAvgOrderByAggregateInput
    _max?: serversMaxOrderByAggregateInput
    _min?: serversMinOrderByAggregateInput
    _sum?: serversSumOrderByAggregateInput
  }

  export type serversScalarWhereWithAggregatesInput = {
    AND?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    OR?: serversScalarWhereWithAggregatesInput[]
    NOT?: serversScalarWhereWithAggregatesInput | serversScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"servers"> | number
    hostname?: StringWithAggregatesFilter<"servers"> | string
    provision?: IntWithAggregatesFilter<"servers"> | number
    close?: IntWithAggregatesFilter<"servers"> | number
    state?: IntWithAggregatesFilter<"servers"> | number
    type?: Enumservers_typeNullableWithAggregatesFilter<"servers"> | $Enums.servers_type | null
    last_update_time?: DateTimeWithAggregatesFilter<"servers"> | Date | string
    cluster?: StringWithAggregatesFilter<"servers"> | string
    master?: IntWithAggregatesFilter<"servers"> | number
    master_active?: IntWithAggregatesFilter<"servers"> | number
    projectx_node_version?: StringWithAggregatesFilter<"servers"> | string
    rvm?: Enumservers_rvmWithAggregatesFilter<"servers"> | $Enums.servers_rvm
    service?: StringWithAggregatesFilter<"servers"> | string
    provision_request_value?: IntWithAggregatesFilter<"servers"> | number
    location?: StringNullableWithAggregatesFilter<"servers"> | string | null
    instance_id?: IntWithAggregatesFilter<"servers"> | number
    last_requested_at?: DateTimeNullableWithAggregatesFilter<"servers"> | Date | string | null
  }

  export type servers_ipsWhereInput = {
    AND?: servers_ipsWhereInput | servers_ipsWhereInput[]
    OR?: servers_ipsWhereInput[]
    NOT?: servers_ipsWhereInput | servers_ipsWhereInput[]
    id?: IntFilter<"servers_ips"> | number
    servers_id?: IntFilter<"servers_ips"> | number
    ip?: StringFilter<"servers_ips"> | string
    comment?: StringFilter<"servers_ips"> | string
    instance?: IntFilter<"servers_ips"> | number
  }

  export type servers_ipsOrderByWithRelationInput = {
    id?: SortOrder
    servers_id?: SortOrder
    ip?: SortOrder
    comment?: SortOrder
    instance?: SortOrder
    _relevance?: servers_ipsOrderByRelevanceInput
  }

  export type servers_ipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servers_ipsWhereInput | servers_ipsWhereInput[]
    OR?: servers_ipsWhereInput[]
    NOT?: servers_ipsWhereInput | servers_ipsWhereInput[]
    servers_id?: IntFilter<"servers_ips"> | number
    ip?: StringFilter<"servers_ips"> | string
    comment?: StringFilter<"servers_ips"> | string
    instance?: IntFilter<"servers_ips"> | number
  }, "id">

  export type servers_ipsOrderByWithAggregationInput = {
    id?: SortOrder
    servers_id?: SortOrder
    ip?: SortOrder
    comment?: SortOrder
    instance?: SortOrder
    _count?: servers_ipsCountOrderByAggregateInput
    _avg?: servers_ipsAvgOrderByAggregateInput
    _max?: servers_ipsMaxOrderByAggregateInput
    _min?: servers_ipsMinOrderByAggregateInput
    _sum?: servers_ipsSumOrderByAggregateInput
  }

  export type servers_ipsScalarWhereWithAggregatesInput = {
    AND?: servers_ipsScalarWhereWithAggregatesInput | servers_ipsScalarWhereWithAggregatesInput[]
    OR?: servers_ipsScalarWhereWithAggregatesInput[]
    NOT?: servers_ipsScalarWhereWithAggregatesInput | servers_ipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"servers_ips"> | number
    servers_id?: IntWithAggregatesFilter<"servers_ips"> | number
    ip?: StringWithAggregatesFilter<"servers_ips"> | string
    comment?: StringWithAggregatesFilter<"servers_ips"> | string
    instance?: IntWithAggregatesFilter<"servers_ips"> | number
  }

  export type servers_propertiesWhereInput = {
    AND?: servers_propertiesWhereInput | servers_propertiesWhereInput[]
    OR?: servers_propertiesWhereInput[]
    NOT?: servers_propertiesWhereInput | servers_propertiesWhereInput[]
    id?: IntFilter<"servers_properties"> | number
    servers_id?: IntFilter<"servers_properties"> | number
    name?: StringFilter<"servers_properties"> | string
    value?: StringFilter<"servers_properties"> | string
  }

  export type servers_propertiesOrderByWithRelationInput = {
    id?: SortOrder
    servers_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _relevance?: servers_propertiesOrderByRelevanceInput
  }

  export type servers_propertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servers_propertiesWhereInput | servers_propertiesWhereInput[]
    OR?: servers_propertiesWhereInput[]
    NOT?: servers_propertiesWhereInput | servers_propertiesWhereInput[]
    servers_id?: IntFilter<"servers_properties"> | number
    name?: StringFilter<"servers_properties"> | string
    value?: StringFilter<"servers_properties"> | string
  }, "id">

  export type servers_propertiesOrderByWithAggregationInput = {
    id?: SortOrder
    servers_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: servers_propertiesCountOrderByAggregateInput
    _avg?: servers_propertiesAvgOrderByAggregateInput
    _max?: servers_propertiesMaxOrderByAggregateInput
    _min?: servers_propertiesMinOrderByAggregateInput
    _sum?: servers_propertiesSumOrderByAggregateInput
  }

  export type servers_propertiesScalarWhereWithAggregatesInput = {
    AND?: servers_propertiesScalarWhereWithAggregatesInput | servers_propertiesScalarWhereWithAggregatesInput[]
    OR?: servers_propertiesScalarWhereWithAggregatesInput[]
    NOT?: servers_propertiesScalarWhereWithAggregatesInput | servers_propertiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"servers_properties"> | number
    servers_id?: IntWithAggregatesFilter<"servers_properties"> | number
    name?: StringWithAggregatesFilter<"servers_properties"> | string
    value?: StringWithAggregatesFilter<"servers_properties"> | string
  }

  export type member_logCreateInput = {
    ip_address: string
    created_at: Date | string
    member_id: number
    section?: string | null
    sub_section?: string | null
    action?: $Enums.member_log_action | null
    altered?: string | null
    data?: string | null
    original_data?: string | null
    account_id?: number | null
  }

  export type member_logUncheckedCreateInput = {
    id?: number
    ip_address: string
    created_at: Date | string
    member_id: number
    section?: string | null
    sub_section?: string | null
    action?: $Enums.member_log_action | null
    altered?: string | null
    data?: string | null
    original_data?: string | null
    account_id?: number | null
  }

  export type member_logUpdateInput = {
    ip_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: IntFieldUpdateOperationsInput | number
    section?: NullableStringFieldUpdateOperationsInput | string | null
    sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableEnummember_log_actionFieldUpdateOperationsInput | $Enums.member_log_action | null
    altered?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    original_data?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type member_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: IntFieldUpdateOperationsInput | number
    section?: NullableStringFieldUpdateOperationsInput | string | null
    sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableEnummember_log_actionFieldUpdateOperationsInput | $Enums.member_log_action | null
    altered?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    original_data?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type member_logCreateManyInput = {
    id?: number
    ip_address: string
    created_at: Date | string
    member_id: number
    section?: string | null
    sub_section?: string | null
    action?: $Enums.member_log_action | null
    altered?: string | null
    data?: string | null
    original_data?: string | null
    account_id?: number | null
  }

  export type member_logUpdateManyMutationInput = {
    ip_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: IntFieldUpdateOperationsInput | number
    section?: NullableStringFieldUpdateOperationsInput | string | null
    sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableEnummember_log_actionFieldUpdateOperationsInput | $Enums.member_log_action | null
    altered?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    original_data?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type member_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: IntFieldUpdateOperationsInput | number
    section?: NullableStringFieldUpdateOperationsInput | string | null
    sub_section?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableEnummember_log_actionFieldUpdateOperationsInput | $Enums.member_log_action | null
    altered?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    original_data?: NullableStringFieldUpdateOperationsInput | string | null
    account_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membersCreateInput = {
    u_id: string
    username: string
    first_name?: string | null
    last_name?: string | null
    google_id: string
    email: string
    salt: string
    algo: string
    password: string
    email_verification_key: string
    verify?: $Enums.members_verify | null
    google_key?: string | null
    acl_access_profile?: number | null
    user_level?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type membersUncheckedCreateInput = {
    id?: number
    u_id: string
    username: string
    first_name?: string | null
    last_name?: string | null
    google_id: string
    email: string
    salt: string
    algo: string
    password: string
    email_verification_key: string
    verify?: $Enums.members_verify | null
    google_key?: string | null
    acl_access_profile?: number | null
    user_level?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type membersUpdateInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    algo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_verification_key?: StringFieldUpdateOperationsInput | string
    verify?: NullableEnummembers_verifyFieldUpdateOperationsInput | $Enums.members_verify | null
    google_key?: NullableStringFieldUpdateOperationsInput | string | null
    acl_access_profile?: NullableIntFieldUpdateOperationsInput | number | null
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type membersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    algo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_verification_key?: StringFieldUpdateOperationsInput | string
    verify?: NullableEnummembers_verifyFieldUpdateOperationsInput | $Enums.members_verify | null
    google_key?: NullableStringFieldUpdateOperationsInput | string | null
    acl_access_profile?: NullableIntFieldUpdateOperationsInput | number | null
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type membersCreateManyInput = {
    id?: number
    u_id: string
    username: string
    first_name?: string | null
    last_name?: string | null
    google_id: string
    email: string
    salt: string
    algo: string
    password: string
    email_verification_key: string
    verify?: $Enums.members_verify | null
    google_key?: string | null
    acl_access_profile?: number | null
    user_level?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type membersUpdateManyMutationInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    algo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_verification_key?: StringFieldUpdateOperationsInput | string
    verify?: NullableEnummembers_verifyFieldUpdateOperationsInput | $Enums.members_verify | null
    google_key?: NullableStringFieldUpdateOperationsInput | string | null
    acl_access_profile?: NullableIntFieldUpdateOperationsInput | number | null
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type membersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    algo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_verification_key?: StringFieldUpdateOperationsInput | string
    verify?: NullableEnummembers_verifyFieldUpdateOperationsInput | $Enums.members_verify | null
    google_key?: NullableStringFieldUpdateOperationsInput | string | null
    acl_access_profile?: NullableIntFieldUpdateOperationsInput | number | null
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_pathsCreateInput = {
    u_id: string
    section_name: string
    name: string
    route_name: string
    path: string
    permission_type?: $Enums.member_acl_paths_permission_type
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_pathsUncheckedCreateInput = {
    id?: number
    u_id: string
    section_name: string
    name: string
    route_name: string
    path: string
    permission_type?: $Enums.member_acl_paths_permission_type
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_pathsUpdateInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    route_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    permission_type?: Enummember_acl_paths_permission_typeFieldUpdateOperationsInput | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_pathsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    route_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    permission_type?: Enummember_acl_paths_permission_typeFieldUpdateOperationsInput | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_pathsCreateManyInput = {
    id?: number
    u_id: string
    section_name: string
    name: string
    route_name: string
    path: string
    permission_type?: $Enums.member_acl_paths_permission_type
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_pathsUpdateManyMutationInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    route_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    permission_type?: Enummember_acl_paths_permission_typeFieldUpdateOperationsInput | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_pathsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    route_name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    permission_type?: Enummember_acl_paths_permission_typeFieldUpdateOperationsInput | $Enums.member_acl_paths_permission_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_rulesCreateInput = {
    u_id: string
    parent_id: number
    app: string
    minimum_tier_level?: number | null
    name: string
    section_name: string
    require_acl?: $Enums.member_acl_rules_require_acl
    tutorial_url?: string | null
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_rulesUncheckedCreateInput = {
    id?: number
    u_id: string
    parent_id: number
    app: string
    minimum_tier_level?: number | null
    name: string
    section_name: string
    require_acl?: $Enums.member_acl_rules_require_acl
    tutorial_url?: string | null
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_rulesUpdateInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    app?: StringFieldUpdateOperationsInput | string
    minimum_tier_level?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    require_acl?: Enummember_acl_rules_require_aclFieldUpdateOperationsInput | $Enums.member_acl_rules_require_acl
    tutorial_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_rulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    app?: StringFieldUpdateOperationsInput | string
    minimum_tier_level?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    require_acl?: Enummember_acl_rules_require_aclFieldUpdateOperationsInput | $Enums.member_acl_rules_require_acl
    tutorial_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_rulesCreateManyInput = {
    id?: number
    u_id: string
    parent_id: number
    app: string
    minimum_tier_level?: number | null
    name: string
    section_name: string
    require_acl?: $Enums.member_acl_rules_require_acl
    tutorial_url?: string | null
    created_at: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type member_acl_rulesUpdateManyMutationInput = {
    u_id?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    app?: StringFieldUpdateOperationsInput | string
    minimum_tier_level?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    require_acl?: Enummember_acl_rules_require_aclFieldUpdateOperationsInput | $Enums.member_acl_rules_require_acl
    tutorial_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type member_acl_rulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    u_id?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    app?: StringFieldUpdateOperationsInput | string
    minimum_tier_level?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    section_name?: StringFieldUpdateOperationsInput | string
    require_acl?: Enummember_acl_rules_require_aclFieldUpdateOperationsInput | $Enums.member_acl_rules_require_acl
    tutorial_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serversCreateInput = {
    hostname: string
    provision: number
    close: number
    state: number
    type?: $Enums.servers_type | null
    last_update_time: Date | string
    cluster: string
    master: number
    master_active: number
    projectx_node_version?: string
    rvm?: $Enums.servers_rvm
    service: string
    provision_request_value: number
    location?: string | null
    instance_id?: number
    last_requested_at?: Date | string | null
  }

  export type serversUncheckedCreateInput = {
    id?: number
    hostname: string
    provision: number
    close: number
    state: number
    type?: $Enums.servers_type | null
    last_update_time: Date | string
    cluster: string
    master: number
    master_active: number
    projectx_node_version?: string
    rvm?: $Enums.servers_rvm
    service: string
    provision_request_value: number
    location?: string | null
    instance_id?: number
    last_requested_at?: Date | string | null
  }

  export type serversUpdateInput = {
    hostname?: StringFieldUpdateOperationsInput | string
    provision?: IntFieldUpdateOperationsInput | number
    close?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumservers_typeFieldUpdateOperationsInput | $Enums.servers_type | null
    last_update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: StringFieldUpdateOperationsInput | string
    master?: IntFieldUpdateOperationsInput | number
    master_active?: IntFieldUpdateOperationsInput | number
    projectx_node_version?: StringFieldUpdateOperationsInput | string
    rvm?: Enumservers_rvmFieldUpdateOperationsInput | $Enums.servers_rvm
    service?: StringFieldUpdateOperationsInput | string
    provision_request_value?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: IntFieldUpdateOperationsInput | number
    last_requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serversUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    provision?: IntFieldUpdateOperationsInput | number
    close?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumservers_typeFieldUpdateOperationsInput | $Enums.servers_type | null
    last_update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: StringFieldUpdateOperationsInput | string
    master?: IntFieldUpdateOperationsInput | number
    master_active?: IntFieldUpdateOperationsInput | number
    projectx_node_version?: StringFieldUpdateOperationsInput | string
    rvm?: Enumservers_rvmFieldUpdateOperationsInput | $Enums.servers_rvm
    service?: StringFieldUpdateOperationsInput | string
    provision_request_value?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: IntFieldUpdateOperationsInput | number
    last_requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serversCreateManyInput = {
    id?: number
    hostname: string
    provision: number
    close: number
    state: number
    type?: $Enums.servers_type | null
    last_update_time: Date | string
    cluster: string
    master: number
    master_active: number
    projectx_node_version?: string
    rvm?: $Enums.servers_rvm
    service: string
    provision_request_value: number
    location?: string | null
    instance_id?: number
    last_requested_at?: Date | string | null
  }

  export type serversUpdateManyMutationInput = {
    hostname?: StringFieldUpdateOperationsInput | string
    provision?: IntFieldUpdateOperationsInput | number
    close?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumservers_typeFieldUpdateOperationsInput | $Enums.servers_type | null
    last_update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: StringFieldUpdateOperationsInput | string
    master?: IntFieldUpdateOperationsInput | number
    master_active?: IntFieldUpdateOperationsInput | number
    projectx_node_version?: StringFieldUpdateOperationsInput | string
    rvm?: Enumservers_rvmFieldUpdateOperationsInput | $Enums.servers_rvm
    service?: StringFieldUpdateOperationsInput | string
    provision_request_value?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: IntFieldUpdateOperationsInput | number
    last_requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serversUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostname?: StringFieldUpdateOperationsInput | string
    provision?: IntFieldUpdateOperationsInput | number
    close?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumservers_typeFieldUpdateOperationsInput | $Enums.servers_type | null
    last_update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: StringFieldUpdateOperationsInput | string
    master?: IntFieldUpdateOperationsInput | number
    master_active?: IntFieldUpdateOperationsInput | number
    projectx_node_version?: StringFieldUpdateOperationsInput | string
    rvm?: Enumservers_rvmFieldUpdateOperationsInput | $Enums.servers_rvm
    service?: StringFieldUpdateOperationsInput | string
    provision_request_value?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    instance_id?: IntFieldUpdateOperationsInput | number
    last_requested_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type servers_ipsCreateInput = {
    servers_id: number
    ip: string
    comment: string
    instance?: number
  }

  export type servers_ipsUncheckedCreateInput = {
    id?: number
    servers_id: number
    ip: string
    comment: string
    instance?: number
  }

  export type servers_ipsUpdateInput = {
    servers_id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
  }

  export type servers_ipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servers_id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
  }

  export type servers_ipsCreateManyInput = {
    id?: number
    servers_id: number
    ip: string
    comment: string
    instance?: number
  }

  export type servers_ipsUpdateManyMutationInput = {
    servers_id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
  }

  export type servers_ipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servers_id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
  }

  export type servers_propertiesCreateInput = {
    servers_id: number
    name: string
    value: string
  }

  export type servers_propertiesUncheckedCreateInput = {
    id?: number
    servers_id: number
    name: string
    value: string
  }

  export type servers_propertiesUpdateInput = {
    servers_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type servers_propertiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servers_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type servers_propertiesCreateManyInput = {
    id?: number
    servers_id: number
    name: string
    value: string
  }

  export type servers_propertiesUpdateManyMutationInput = {
    servers_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type servers_propertiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servers_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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

  export type Enummember_log_actionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_log_action | Enummember_log_actionFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_log_action[] | null
    notIn?: $Enums.member_log_action[] | null
    not?: NestedEnummember_log_actionNullableFilter<$PrismaModel> | $Enums.member_log_action | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type member_logOrderByRelevanceInput = {
    fields: member_logOrderByRelevanceFieldEnum | member_logOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type member_logCountOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    section?: SortOrder
    sub_section?: SortOrder
    action?: SortOrder
    altered?: SortOrder
    data?: SortOrder
    original_data?: SortOrder
    account_id?: SortOrder
  }

  export type member_logAvgOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    account_id?: SortOrder
  }

  export type member_logMaxOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    section?: SortOrder
    sub_section?: SortOrder
    action?: SortOrder
    altered?: SortOrder
    data?: SortOrder
    original_data?: SortOrder
    account_id?: SortOrder
  }

  export type member_logMinOrderByAggregateInput = {
    id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    section?: SortOrder
    sub_section?: SortOrder
    action?: SortOrder
    altered?: SortOrder
    data?: SortOrder
    original_data?: SortOrder
    account_id?: SortOrder
  }

  export type member_logSumOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
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

  export type Enummember_log_actionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_log_action | Enummember_log_actionFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_log_action[] | null
    notIn?: $Enums.member_log_action[] | null
    not?: NestedEnummember_log_actionNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_log_action | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_log_actionNullableFilter<$PrismaModel>
    _max?: NestedEnummember_log_actionNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enummembers_verifyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.members_verify | Enummembers_verifyFieldRefInput<$PrismaModel> | null
    in?: $Enums.members_verify[] | null
    notIn?: $Enums.members_verify[] | null
    not?: NestedEnummembers_verifyNullableFilter<$PrismaModel> | $Enums.members_verify | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type membersOrderByRelevanceInput = {
    fields: membersOrderByRelevanceFieldEnum | membersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type membersCountOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    google_id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    algo?: SortOrder
    password?: SortOrder
    email_verification_key?: SortOrder
    verify?: SortOrder
    google_key?: SortOrder
    acl_access_profile?: SortOrder
    user_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type membersAvgOrderByAggregateInput = {
    id?: SortOrder
    acl_access_profile?: SortOrder
    user_level?: SortOrder
  }

  export type membersMaxOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    google_id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    algo?: SortOrder
    password?: SortOrder
    email_verification_key?: SortOrder
    verify?: SortOrder
    google_key?: SortOrder
    acl_access_profile?: SortOrder
    user_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type membersMinOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    google_id?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    algo?: SortOrder
    password?: SortOrder
    email_verification_key?: SortOrder
    verify?: SortOrder
    google_key?: SortOrder
    acl_access_profile?: SortOrder
    user_level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type membersSumOrderByAggregateInput = {
    id?: SortOrder
    acl_access_profile?: SortOrder
    user_level?: SortOrder
  }

  export type Enummembers_verifyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.members_verify | Enummembers_verifyFieldRefInput<$PrismaModel> | null
    in?: $Enums.members_verify[] | null
    notIn?: $Enums.members_verify[] | null
    not?: NestedEnummembers_verifyNullableWithAggregatesFilter<$PrismaModel> | $Enums.members_verify | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummembers_verifyNullableFilter<$PrismaModel>
    _max?: NestedEnummembers_verifyNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enummember_acl_paths_permission_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_paths_permission_type | Enummember_acl_paths_permission_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_paths_permission_type[]
    notIn?: $Enums.member_acl_paths_permission_type[]
    not?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel> | $Enums.member_acl_paths_permission_type
  }

  export type member_acl_pathsOrderByRelevanceInput = {
    fields: member_acl_pathsOrderByRelevanceFieldEnum | member_acl_pathsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type member_acl_pathsU_idPathCompoundUniqueInput = {
    u_id: string
    path: string
  }

  export type member_acl_pathsCountOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    section_name?: SortOrder
    name?: SortOrder
    route_name?: SortOrder
    path?: SortOrder
    permission_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_pathsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type member_acl_pathsMaxOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    section_name?: SortOrder
    name?: SortOrder
    route_name?: SortOrder
    path?: SortOrder
    permission_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_pathsMinOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    section_name?: SortOrder
    name?: SortOrder
    route_name?: SortOrder
    path?: SortOrder
    permission_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_pathsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enummember_acl_paths_permission_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_paths_permission_type | Enummember_acl_paths_permission_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_paths_permission_type[]
    notIn?: $Enums.member_acl_paths_permission_type[]
    not?: NestedEnummember_acl_paths_permission_typeWithAggregatesFilter<$PrismaModel> | $Enums.member_acl_paths_permission_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel>
    _max?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel>
  }

  export type Enummember_acl_rules_require_aclFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_rules_require_acl | Enummember_acl_rules_require_aclFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_rules_require_acl[]
    notIn?: $Enums.member_acl_rules_require_acl[]
    not?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel> | $Enums.member_acl_rules_require_acl
  }

  export type member_acl_rulesOrderByRelevanceInput = {
    fields: member_acl_rulesOrderByRelevanceFieldEnum | member_acl_rulesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type member_acl_rulesCountOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    parent_id?: SortOrder
    app?: SortOrder
    minimum_tier_level?: SortOrder
    name?: SortOrder
    section_name?: SortOrder
    require_acl?: SortOrder
    tutorial_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_rulesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    minimum_tier_level?: SortOrder
  }

  export type member_acl_rulesMaxOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    parent_id?: SortOrder
    app?: SortOrder
    minimum_tier_level?: SortOrder
    name?: SortOrder
    section_name?: SortOrder
    require_acl?: SortOrder
    tutorial_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_rulesMinOrderByAggregateInput = {
    id?: SortOrder
    u_id?: SortOrder
    parent_id?: SortOrder
    app?: SortOrder
    minimum_tier_level?: SortOrder
    name?: SortOrder
    section_name?: SortOrder
    require_acl?: SortOrder
    tutorial_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type member_acl_rulesSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    minimum_tier_level?: SortOrder
  }

  export type Enummember_acl_rules_require_aclWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_rules_require_acl | Enummember_acl_rules_require_aclFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_rules_require_acl[]
    notIn?: $Enums.member_acl_rules_require_acl[]
    not?: NestedEnummember_acl_rules_require_aclWithAggregatesFilter<$PrismaModel> | $Enums.member_acl_rules_require_acl
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel>
    _max?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel>
  }

  export type Enumservers_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_type | Enumservers_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.servers_type[] | null
    notIn?: $Enums.servers_type[] | null
    not?: NestedEnumservers_typeNullableFilter<$PrismaModel> | $Enums.servers_type | null
  }

  export type Enumservers_rvmFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_rvm | Enumservers_rvmFieldRefInput<$PrismaModel>
    in?: $Enums.servers_rvm[]
    notIn?: $Enums.servers_rvm[]
    not?: NestedEnumservers_rvmFilter<$PrismaModel> | $Enums.servers_rvm
  }

  export type serversOrderByRelevanceInput = {
    fields: serversOrderByRelevanceFieldEnum | serversOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type serversCountOrderByAggregateInput = {
    id?: SortOrder
    hostname?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    type?: SortOrder
    last_update_time?: SortOrder
    cluster?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    projectx_node_version?: SortOrder
    rvm?: SortOrder
    service?: SortOrder
    provision_request_value?: SortOrder
    location?: SortOrder
    instance_id?: SortOrder
    last_requested_at?: SortOrder
  }

  export type serversAvgOrderByAggregateInput = {
    id?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    provision_request_value?: SortOrder
    instance_id?: SortOrder
  }

  export type serversMaxOrderByAggregateInput = {
    id?: SortOrder
    hostname?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    type?: SortOrder
    last_update_time?: SortOrder
    cluster?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    projectx_node_version?: SortOrder
    rvm?: SortOrder
    service?: SortOrder
    provision_request_value?: SortOrder
    location?: SortOrder
    instance_id?: SortOrder
    last_requested_at?: SortOrder
  }

  export type serversMinOrderByAggregateInput = {
    id?: SortOrder
    hostname?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    type?: SortOrder
    last_update_time?: SortOrder
    cluster?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    projectx_node_version?: SortOrder
    rvm?: SortOrder
    service?: SortOrder
    provision_request_value?: SortOrder
    location?: SortOrder
    instance_id?: SortOrder
    last_requested_at?: SortOrder
  }

  export type serversSumOrderByAggregateInput = {
    id?: SortOrder
    provision?: SortOrder
    close?: SortOrder
    state?: SortOrder
    master?: SortOrder
    master_active?: SortOrder
    provision_request_value?: SortOrder
    instance_id?: SortOrder
  }

  export type Enumservers_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_type | Enumservers_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.servers_type[] | null
    notIn?: $Enums.servers_type[] | null
    not?: NestedEnumservers_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.servers_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumservers_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumservers_typeNullableFilter<$PrismaModel>
  }

  export type Enumservers_rvmWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_rvm | Enumservers_rvmFieldRefInput<$PrismaModel>
    in?: $Enums.servers_rvm[]
    notIn?: $Enums.servers_rvm[]
    not?: NestedEnumservers_rvmWithAggregatesFilter<$PrismaModel> | $Enums.servers_rvm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumservers_rvmFilter<$PrismaModel>
    _max?: NestedEnumservers_rvmFilter<$PrismaModel>
  }

  export type servers_ipsOrderByRelevanceInput = {
    fields: servers_ipsOrderByRelevanceFieldEnum | servers_ipsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type servers_ipsCountOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    ip?: SortOrder
    comment?: SortOrder
    instance?: SortOrder
  }

  export type servers_ipsAvgOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    instance?: SortOrder
  }

  export type servers_ipsMaxOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    ip?: SortOrder
    comment?: SortOrder
    instance?: SortOrder
  }

  export type servers_ipsMinOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    ip?: SortOrder
    comment?: SortOrder
    instance?: SortOrder
  }

  export type servers_ipsSumOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    instance?: SortOrder
  }

  export type servers_propertiesOrderByRelevanceInput = {
    fields: servers_propertiesOrderByRelevanceFieldEnum | servers_propertiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type servers_propertiesCountOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type servers_propertiesAvgOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
  }

  export type servers_propertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type servers_propertiesMinOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type servers_propertiesSumOrderByAggregateInput = {
    id?: SortOrder
    servers_id?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnummember_log_actionFieldUpdateOperationsInput = {
    set?: $Enums.member_log_action | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnummembers_verifyFieldUpdateOperationsInput = {
    set?: $Enums.members_verify | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enummember_acl_paths_permission_typeFieldUpdateOperationsInput = {
    set?: $Enums.member_acl_paths_permission_type
  }

  export type Enummember_acl_rules_require_aclFieldUpdateOperationsInput = {
    set?: $Enums.member_acl_rules_require_acl
  }

  export type NullableEnumservers_typeFieldUpdateOperationsInput = {
    set?: $Enums.servers_type | null
  }

  export type Enumservers_rvmFieldUpdateOperationsInput = {
    set?: $Enums.servers_rvm
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

  export type NestedEnummember_log_actionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.member_log_action | Enummember_log_actionFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_log_action[] | null
    notIn?: $Enums.member_log_action[] | null
    not?: NestedEnummember_log_actionNullableFilter<$PrismaModel> | $Enums.member_log_action | null
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

  export type NestedEnummember_log_actionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_log_action | Enummember_log_actionFieldRefInput<$PrismaModel> | null
    in?: $Enums.member_log_action[] | null
    notIn?: $Enums.member_log_action[] | null
    not?: NestedEnummember_log_actionNullableWithAggregatesFilter<$PrismaModel> | $Enums.member_log_action | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummember_log_actionNullableFilter<$PrismaModel>
    _max?: NestedEnummember_log_actionNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnummembers_verifyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.members_verify | Enummembers_verifyFieldRefInput<$PrismaModel> | null
    in?: $Enums.members_verify[] | null
    notIn?: $Enums.members_verify[] | null
    not?: NestedEnummembers_verifyNullableFilter<$PrismaModel> | $Enums.members_verify | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnummembers_verifyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.members_verify | Enummembers_verifyFieldRefInput<$PrismaModel> | null
    in?: $Enums.members_verify[] | null
    notIn?: $Enums.members_verify[] | null
    not?: NestedEnummembers_verifyNullableWithAggregatesFilter<$PrismaModel> | $Enums.members_verify | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummembers_verifyNullableFilter<$PrismaModel>
    _max?: NestedEnummembers_verifyNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_paths_permission_type | Enummember_acl_paths_permission_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_paths_permission_type[]
    notIn?: $Enums.member_acl_paths_permission_type[]
    not?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel> | $Enums.member_acl_paths_permission_type
  }

  export type NestedEnummember_acl_paths_permission_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_paths_permission_type | Enummember_acl_paths_permission_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_paths_permission_type[]
    notIn?: $Enums.member_acl_paths_permission_type[]
    not?: NestedEnummember_acl_paths_permission_typeWithAggregatesFilter<$PrismaModel> | $Enums.member_acl_paths_permission_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel>
    _max?: NestedEnummember_acl_paths_permission_typeFilter<$PrismaModel>
  }

  export type NestedEnummember_acl_rules_require_aclFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_rules_require_acl | Enummember_acl_rules_require_aclFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_rules_require_acl[]
    notIn?: $Enums.member_acl_rules_require_acl[]
    not?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel> | $Enums.member_acl_rules_require_acl
  }

  export type NestedEnummember_acl_rules_require_aclWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_acl_rules_require_acl | Enummember_acl_rules_require_aclFieldRefInput<$PrismaModel>
    in?: $Enums.member_acl_rules_require_acl[]
    notIn?: $Enums.member_acl_rules_require_acl[]
    not?: NestedEnummember_acl_rules_require_aclWithAggregatesFilter<$PrismaModel> | $Enums.member_acl_rules_require_acl
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel>
    _max?: NestedEnummember_acl_rules_require_aclFilter<$PrismaModel>
  }

  export type NestedEnumservers_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_type | Enumservers_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.servers_type[] | null
    notIn?: $Enums.servers_type[] | null
    not?: NestedEnumservers_typeNullableFilter<$PrismaModel> | $Enums.servers_type | null
  }

  export type NestedEnumservers_rvmFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_rvm | Enumservers_rvmFieldRefInput<$PrismaModel>
    in?: $Enums.servers_rvm[]
    notIn?: $Enums.servers_rvm[]
    not?: NestedEnumservers_rvmFilter<$PrismaModel> | $Enums.servers_rvm
  }

  export type NestedEnumservers_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_type | Enumservers_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.servers_type[] | null
    notIn?: $Enums.servers_type[] | null
    not?: NestedEnumservers_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.servers_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumservers_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumservers_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumservers_rvmWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.servers_rvm | Enumservers_rvmFieldRefInput<$PrismaModel>
    in?: $Enums.servers_rvm[]
    notIn?: $Enums.servers_rvm[]
    not?: NestedEnumservers_rvmWithAggregatesFilter<$PrismaModel> | $Enums.servers_rvm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumservers_rvmFilter<$PrismaModel>
    _max?: NestedEnumservers_rvmFilter<$PrismaModel>
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