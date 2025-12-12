
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Pictures
 * 
 */
export type Pictures = $Result.DefaultSelection<Prisma.$PicturesPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model SavePictures
 * 
 */
export type SavePictures = $Result.DefaultSelection<Prisma.$SavePicturesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pictures`: Exposes CRUD operations for the **Pictures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.pictures.findMany()
    * ```
    */
  get pictures(): Prisma.PicturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savePictures`: Exposes CRUD operations for the **SavePictures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavePictures
    * const savePictures = await prisma.savePictures.findMany()
    * ```
    */
  get savePictures(): Prisma.SavePicturesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    Pictures: 'Pictures',
    Comments: 'Comments',
    SavePictures: 'SavePictures'
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
      modelProps: "users" | "pictures" | "comments" | "savePictures"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Pictures: {
        payload: Prisma.$PicturesPayload<ExtArgs>
        fields: Prisma.PicturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PicturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PicturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          findFirst: {
            args: Prisma.PicturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PicturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          findMany: {
            args: Prisma.PicturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>[]
          }
          create: {
            args: Prisma.PicturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          createMany: {
            args: Prisma.PicturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PicturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          update: {
            args: Prisma.PicturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          deleteMany: {
            args: Prisma.PicturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PicturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PicturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturesPayload>
          }
          aggregate: {
            args: Prisma.PicturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePictures>
          }
          groupBy: {
            args: Prisma.PicturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PicturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PicturesCountArgs<ExtArgs>
            result: $Utils.Optional<PicturesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      SavePictures: {
        payload: Prisma.$SavePicturesPayload<ExtArgs>
        fields: Prisma.SavePicturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavePicturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavePicturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          findFirst: {
            args: Prisma.SavePicturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavePicturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          findMany: {
            args: Prisma.SavePicturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>[]
          }
          create: {
            args: Prisma.SavePicturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          createMany: {
            args: Prisma.SavePicturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavePicturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          update: {
            args: Prisma.SavePicturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          deleteMany: {
            args: Prisma.SavePicturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavePicturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavePicturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePicturesPayload>
          }
          aggregate: {
            args: Prisma.SavePicturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavePictures>
          }
          groupBy: {
            args: Prisma.SavePicturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavePicturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavePicturesCountArgs<ExtArgs>
            result: $Utils.Optional<SavePicturesCountAggregateOutputType> | number
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
    users?: UsersOmit
    pictures?: PicturesOmit
    comments?: CommentsOmit
    savePictures?: SavePicturesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    pictures: number
    saves: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    pictures?: boolean | UsersCountOutputTypeCountPicturesArgs
    saves?: boolean | UsersCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PicturesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePicturesWhereInput
  }


  /**
   * Count Type PicturesCountOutputType
   */

  export type PicturesCountOutputType = {
    comments: number
    saves: number
  }

  export type PicturesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PicturesCountOutputTypeCountCommentsArgs
    saves?: boolean | PicturesCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * PicturesCountOutputType without action
   */
  export type PicturesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PicturesCountOutputType
     */
    select?: PicturesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PicturesCountOutputType without action
   */
  export type PicturesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PicturesCountOutputType without action
   */
  export type PicturesCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePicturesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    age: number | null
    avatar: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    age: number
    avatar: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    age?: true
    avatar?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string | null
    fullName: string | null
    age: number
    avatar: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
    comments?: boolean | Users$commentsArgs<ExtArgs>
    pictures?: boolean | Users$picturesArgs<ExtArgs>
    saves?: boolean | Users$savesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    age?: boolean
    avatar?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "age" | "avatar", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Users$commentsArgs<ExtArgs>
    pictures?: boolean | Users$picturesArgs<ExtArgs>
    saves?: boolean | Users$savesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      pictures: Prisma.$PicturesPayload<ExtArgs>[]
      saves: Prisma.$SavePicturesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      fullName: string | null
      age: number
      avatar: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pictures<T extends Users$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Users$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends Users$savesArgs<ExtArgs> = {}>(args?: Subset<T, Users$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
    readonly avatar: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.comments
   */
  export type Users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.pictures
   */
  export type Users$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    where?: PicturesWhereInput
    orderBy?: PicturesOrderByWithRelationInput | PicturesOrderByWithRelationInput[]
    cursor?: PicturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PicturesScalarFieldEnum | PicturesScalarFieldEnum[]
  }

  /**
   * Users.saves
   */
  export type Users$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    where?: SavePicturesWhereInput
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    cursor?: SavePicturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavePicturesScalarFieldEnum | SavePicturesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Pictures
   */

  export type AggregatePictures = {
    _count: PicturesCountAggregateOutputType | null
    _avg: PicturesAvgAggregateOutputType | null
    _sum: PicturesSumAggregateOutputType | null
    _min: PicturesMinAggregateOutputType | null
    _max: PicturesMaxAggregateOutputType | null
  }

  export type PicturesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PicturesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PicturesMinAggregateOutputType = {
    id: number | null
    picName: string | null
    imgUrl: string | null
    description: string | null
    userId: number | null
  }

  export type PicturesMaxAggregateOutputType = {
    id: number | null
    picName: string | null
    imgUrl: string | null
    description: string | null
    userId: number | null
  }

  export type PicturesCountAggregateOutputType = {
    id: number
    picName: number
    imgUrl: number
    description: number
    userId: number
    _all: number
  }


  export type PicturesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PicturesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PicturesMinAggregateInputType = {
    id?: true
    picName?: true
    imgUrl?: true
    description?: true
    userId?: true
  }

  export type PicturesMaxAggregateInputType = {
    id?: true
    picName?: true
    imgUrl?: true
    description?: true
    userId?: true
  }

  export type PicturesCountAggregateInputType = {
    id?: true
    picName?: true
    imgUrl?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type PicturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to aggregate.
     */
    where?: PicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PicturesOrderByWithRelationInput | PicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PicturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PicturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PicturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PicturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PicturesMaxAggregateInputType
  }

  export type GetPicturesAggregateType<T extends PicturesAggregateArgs> = {
        [P in keyof T & keyof AggregatePictures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePictures[P]>
      : GetScalarType<T[P], AggregatePictures[P]>
  }




  export type PicturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PicturesWhereInput
    orderBy?: PicturesOrderByWithAggregationInput | PicturesOrderByWithAggregationInput[]
    by: PicturesScalarFieldEnum[] | PicturesScalarFieldEnum
    having?: PicturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PicturesCountAggregateInputType | true
    _avg?: PicturesAvgAggregateInputType
    _sum?: PicturesSumAggregateInputType
    _min?: PicturesMinAggregateInputType
    _max?: PicturesMaxAggregateInputType
  }

  export type PicturesGroupByOutputType = {
    id: number
    picName: string
    imgUrl: string
    description: string | null
    userId: number
    _count: PicturesCountAggregateOutputType | null
    _avg: PicturesAvgAggregateOutputType | null
    _sum: PicturesSumAggregateOutputType | null
    _min: PicturesMinAggregateOutputType | null
    _max: PicturesMaxAggregateOutputType | null
  }

  type GetPicturesGroupByPayload<T extends PicturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PicturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PicturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PicturesGroupByOutputType[P]>
            : GetScalarType<T[P], PicturesGroupByOutputType[P]>
        }
      >
    >


  export type PicturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    picName?: boolean
    imgUrl?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comments?: boolean | Pictures$commentsArgs<ExtArgs>
    saves?: boolean | Pictures$savesArgs<ExtArgs>
    _count?: boolean | PicturesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pictures"]>



  export type PicturesSelectScalar = {
    id?: boolean
    picName?: boolean
    imgUrl?: boolean
    description?: boolean
    userId?: boolean
  }

  export type PicturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "picName" | "imgUrl" | "description" | "userId", ExtArgs["result"]["pictures"]>
  export type PicturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    comments?: boolean | Pictures$commentsArgs<ExtArgs>
    saves?: boolean | Pictures$savesArgs<ExtArgs>
    _count?: boolean | PicturesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PicturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pictures"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      saves: Prisma.$SavePicturesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      picName: string
      imgUrl: string
      description: string | null
      userId: number
    }, ExtArgs["result"]["pictures"]>
    composites: {}
  }

  type PicturesGetPayload<S extends boolean | null | undefined | PicturesDefaultArgs> = $Result.GetResult<Prisma.$PicturesPayload, S>

  type PicturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PicturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PicturesCountAggregateInputType | true
    }

  export interface PicturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pictures'], meta: { name: 'Pictures' } }
    /**
     * Find zero or one Pictures that matches the filter.
     * @param {PicturesFindUniqueArgs} args - Arguments to find a Pictures
     * @example
     * // Get one Pictures
     * const pictures = await prisma.pictures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PicturesFindUniqueArgs>(args: SelectSubset<T, PicturesFindUniqueArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pictures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PicturesFindUniqueOrThrowArgs} args - Arguments to find a Pictures
     * @example
     * // Get one Pictures
     * const pictures = await prisma.pictures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PicturesFindUniqueOrThrowArgs>(args: SelectSubset<T, PicturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesFindFirstArgs} args - Arguments to find a Pictures
     * @example
     * // Get one Pictures
     * const pictures = await prisma.pictures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PicturesFindFirstArgs>(args?: SelectSubset<T, PicturesFindFirstArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pictures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesFindFirstOrThrowArgs} args - Arguments to find a Pictures
     * @example
     * // Get one Pictures
     * const pictures = await prisma.pictures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PicturesFindFirstOrThrowArgs>(args?: SelectSubset<T, PicturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.pictures.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.pictures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const picturesWithIdOnly = await prisma.pictures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PicturesFindManyArgs>(args?: SelectSubset<T, PicturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pictures.
     * @param {PicturesCreateArgs} args - Arguments to create a Pictures.
     * @example
     * // Create one Pictures
     * const Pictures = await prisma.pictures.create({
     *   data: {
     *     // ... data to create a Pictures
     *   }
     * })
     * 
     */
    create<T extends PicturesCreateArgs>(args: SelectSubset<T, PicturesCreateArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PicturesCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const pictures = await prisma.pictures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PicturesCreateManyArgs>(args?: SelectSubset<T, PicturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pictures.
     * @param {PicturesDeleteArgs} args - Arguments to delete one Pictures.
     * @example
     * // Delete one Pictures
     * const Pictures = await prisma.pictures.delete({
     *   where: {
     *     // ... filter to delete one Pictures
     *   }
     * })
     * 
     */
    delete<T extends PicturesDeleteArgs>(args: SelectSubset<T, PicturesDeleteArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pictures.
     * @param {PicturesUpdateArgs} args - Arguments to update one Pictures.
     * @example
     * // Update one Pictures
     * const pictures = await prisma.pictures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PicturesUpdateArgs>(args: SelectSubset<T, PicturesUpdateArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PicturesDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.pictures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PicturesDeleteManyArgs>(args?: SelectSubset<T, PicturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const pictures = await prisma.pictures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PicturesUpdateManyArgs>(args: SelectSubset<T, PicturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pictures.
     * @param {PicturesUpsertArgs} args - Arguments to update or create a Pictures.
     * @example
     * // Update or create a Pictures
     * const pictures = await prisma.pictures.upsert({
     *   create: {
     *     // ... data to create a Pictures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pictures we want to update
     *   }
     * })
     */
    upsert<T extends PicturesUpsertArgs>(args: SelectSubset<T, PicturesUpsertArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.pictures.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PicturesCountArgs>(
      args?: Subset<T, PicturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PicturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PicturesAggregateArgs>(args: Subset<T, PicturesAggregateArgs>): Prisma.PrismaPromise<GetPicturesAggregateType<T>>

    /**
     * Group by Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicturesGroupByArgs} args - Group by arguments.
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
      T extends PicturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PicturesGroupByArgs['orderBy'] }
        : { orderBy?: PicturesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PicturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPicturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pictures model
   */
  readonly fields: PicturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pictures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PicturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Pictures$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Pictures$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends Pictures$savesArgs<ExtArgs> = {}>(args?: Subset<T, Pictures$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pictures model
   */
  interface PicturesFieldRefs {
    readonly id: FieldRef<"Pictures", 'Int'>
    readonly picName: FieldRef<"Pictures", 'String'>
    readonly imgUrl: FieldRef<"Pictures", 'String'>
    readonly description: FieldRef<"Pictures", 'String'>
    readonly userId: FieldRef<"Pictures", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pictures findUnique
   */
  export type PicturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where: PicturesWhereUniqueInput
  }

  /**
   * Pictures findUniqueOrThrow
   */
  export type PicturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where: PicturesWhereUniqueInput
  }

  /**
   * Pictures findFirst
   */
  export type PicturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PicturesOrderByWithRelationInput | PicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PicturesScalarFieldEnum | PicturesScalarFieldEnum[]
  }

  /**
   * Pictures findFirstOrThrow
   */
  export type PicturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PicturesOrderByWithRelationInput | PicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PicturesScalarFieldEnum | PicturesScalarFieldEnum[]
  }

  /**
   * Pictures findMany
   */
  export type PicturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PicturesOrderByWithRelationInput | PicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PicturesScalarFieldEnum | PicturesScalarFieldEnum[]
  }

  /**
   * Pictures create
   */
  export type PicturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * The data needed to create a Pictures.
     */
    data: XOR<PicturesCreateInput, PicturesUncheckedCreateInput>
  }

  /**
   * Pictures createMany
   */
  export type PicturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PicturesCreateManyInput | PicturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pictures update
   */
  export type PicturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * The data needed to update a Pictures.
     */
    data: XOR<PicturesUpdateInput, PicturesUncheckedUpdateInput>
    /**
     * Choose, which Pictures to update.
     */
    where: PicturesWhereUniqueInput
  }

  /**
   * Pictures updateMany
   */
  export type PicturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PicturesUpdateManyMutationInput, PicturesUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PicturesWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Pictures upsert
   */
  export type PicturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * The filter to search for the Pictures to update in case it exists.
     */
    where: PicturesWhereUniqueInput
    /**
     * In case the Pictures found by the `where` argument doesn't exist, create a new Pictures with this data.
     */
    create: XOR<PicturesCreateInput, PicturesUncheckedCreateInput>
    /**
     * In case the Pictures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PicturesUpdateInput, PicturesUncheckedUpdateInput>
  }

  /**
   * Pictures delete
   */
  export type PicturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
    /**
     * Filter which Pictures to delete.
     */
    where: PicturesWhereUniqueInput
  }

  /**
   * Pictures deleteMany
   */
  export type PicturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PicturesWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Pictures.comments
   */
  export type Pictures$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Pictures.saves
   */
  export type Pictures$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    where?: SavePicturesWhereInput
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    cursor?: SavePicturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavePicturesScalarFieldEnum | SavePicturesScalarFieldEnum[]
  }

  /**
   * Pictures without action
   */
  export type PicturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pictures
     */
    select?: PicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pictures
     */
    omit?: PicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PicturesInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    userId: number | null
    picId: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    userId: number | null
    picId: number | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    comment: number
    createdAt: number
    userId: number
    picId: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    userId?: true
    picId?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    userId?: true
    picId?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    userId?: true
    picId?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    comment: string
    createdAt: Date
    userId: number
    picId: number
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    userId?: boolean
    picId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    pic?: boolean | PicturesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    userId?: boolean
    picId?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "createdAt" | "userId" | "picId", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    pic?: boolean | PicturesDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      pic: Prisma.$PicturesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      createdAt: Date
      userId: number
      picId: number
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pic<T extends PicturesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PicturesDefaultArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly comment: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly picId: FieldRef<"Comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model SavePictures
   */

  export type AggregateSavePictures = {
    _count: SavePicturesCountAggregateOutputType | null
    _avg: SavePicturesAvgAggregateOutputType | null
    _sum: SavePicturesSumAggregateOutputType | null
    _min: SavePicturesMinAggregateOutputType | null
    _max: SavePicturesMaxAggregateOutputType | null
  }

  export type SavePicturesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
  }

  export type SavePicturesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
  }

  export type SavePicturesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
    createdAt: Date | null
  }

  export type SavePicturesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    picId: number | null
    createdAt: Date | null
  }

  export type SavePicturesCountAggregateOutputType = {
    id: number
    userId: number
    picId: number
    createdAt: number
    _all: number
  }


  export type SavePicturesAvgAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
  }

  export type SavePicturesSumAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
  }

  export type SavePicturesMinAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
    createdAt?: true
  }

  export type SavePicturesMaxAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
    createdAt?: true
  }

  export type SavePicturesCountAggregateInputType = {
    id?: true
    userId?: true
    picId?: true
    createdAt?: true
    _all?: true
  }

  export type SavePicturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavePictures to aggregate.
     */
    where?: SavePicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePictures to fetch.
     */
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavePicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavePictures
    **/
    _count?: true | SavePicturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavePicturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavePicturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavePicturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavePicturesMaxAggregateInputType
  }

  export type GetSavePicturesAggregateType<T extends SavePicturesAggregateArgs> = {
        [P in keyof T & keyof AggregateSavePictures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavePictures[P]>
      : GetScalarType<T[P], AggregateSavePictures[P]>
  }




  export type SavePicturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePicturesWhereInput
    orderBy?: SavePicturesOrderByWithAggregationInput | SavePicturesOrderByWithAggregationInput[]
    by: SavePicturesScalarFieldEnum[] | SavePicturesScalarFieldEnum
    having?: SavePicturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavePicturesCountAggregateInputType | true
    _avg?: SavePicturesAvgAggregateInputType
    _sum?: SavePicturesSumAggregateInputType
    _min?: SavePicturesMinAggregateInputType
    _max?: SavePicturesMaxAggregateInputType
  }

  export type SavePicturesGroupByOutputType = {
    id: number
    userId: number
    picId: number
    createdAt: Date
    _count: SavePicturesCountAggregateOutputType | null
    _avg: SavePicturesAvgAggregateOutputType | null
    _sum: SavePicturesSumAggregateOutputType | null
    _min: SavePicturesMinAggregateOutputType | null
    _max: SavePicturesMaxAggregateOutputType | null
  }

  type GetSavePicturesGroupByPayload<T extends SavePicturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavePicturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavePicturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavePicturesGroupByOutputType[P]>
            : GetScalarType<T[P], SavePicturesGroupByOutputType[P]>
        }
      >
    >


  export type SavePicturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    picId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    pic?: boolean | PicturesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savePictures"]>



  export type SavePicturesSelectScalar = {
    id?: boolean
    userId?: boolean
    picId?: boolean
    createdAt?: boolean
  }

  export type SavePicturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "picId" | "createdAt", ExtArgs["result"]["savePictures"]>
  export type SavePicturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    pic?: boolean | PicturesDefaultArgs<ExtArgs>
  }

  export type $SavePicturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavePictures"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      pic: Prisma.$PicturesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      picId: number
      createdAt: Date
    }, ExtArgs["result"]["savePictures"]>
    composites: {}
  }

  type SavePicturesGetPayload<S extends boolean | null | undefined | SavePicturesDefaultArgs> = $Result.GetResult<Prisma.$SavePicturesPayload, S>

  type SavePicturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavePicturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavePicturesCountAggregateInputType | true
    }

  export interface SavePicturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavePictures'], meta: { name: 'SavePictures' } }
    /**
     * Find zero or one SavePictures that matches the filter.
     * @param {SavePicturesFindUniqueArgs} args - Arguments to find a SavePictures
     * @example
     * // Get one SavePictures
     * const savePictures = await prisma.savePictures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavePicturesFindUniqueArgs>(args: SelectSubset<T, SavePicturesFindUniqueArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavePictures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavePicturesFindUniqueOrThrowArgs} args - Arguments to find a SavePictures
     * @example
     * // Get one SavePictures
     * const savePictures = await prisma.savePictures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavePicturesFindUniqueOrThrowArgs>(args: SelectSubset<T, SavePicturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavePictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesFindFirstArgs} args - Arguments to find a SavePictures
     * @example
     * // Get one SavePictures
     * const savePictures = await prisma.savePictures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavePicturesFindFirstArgs>(args?: SelectSubset<T, SavePicturesFindFirstArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavePictures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesFindFirstOrThrowArgs} args - Arguments to find a SavePictures
     * @example
     * // Get one SavePictures
     * const savePictures = await prisma.savePictures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavePicturesFindFirstOrThrowArgs>(args?: SelectSubset<T, SavePicturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavePictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavePictures
     * const savePictures = await prisma.savePictures.findMany()
     * 
     * // Get first 10 SavePictures
     * const savePictures = await prisma.savePictures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savePicturesWithIdOnly = await prisma.savePictures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavePicturesFindManyArgs>(args?: SelectSubset<T, SavePicturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavePictures.
     * @param {SavePicturesCreateArgs} args - Arguments to create a SavePictures.
     * @example
     * // Create one SavePictures
     * const SavePictures = await prisma.savePictures.create({
     *   data: {
     *     // ... data to create a SavePictures
     *   }
     * })
     * 
     */
    create<T extends SavePicturesCreateArgs>(args: SelectSubset<T, SavePicturesCreateArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavePictures.
     * @param {SavePicturesCreateManyArgs} args - Arguments to create many SavePictures.
     * @example
     * // Create many SavePictures
     * const savePictures = await prisma.savePictures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavePicturesCreateManyArgs>(args?: SelectSubset<T, SavePicturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavePictures.
     * @param {SavePicturesDeleteArgs} args - Arguments to delete one SavePictures.
     * @example
     * // Delete one SavePictures
     * const SavePictures = await prisma.savePictures.delete({
     *   where: {
     *     // ... filter to delete one SavePictures
     *   }
     * })
     * 
     */
    delete<T extends SavePicturesDeleteArgs>(args: SelectSubset<T, SavePicturesDeleteArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavePictures.
     * @param {SavePicturesUpdateArgs} args - Arguments to update one SavePictures.
     * @example
     * // Update one SavePictures
     * const savePictures = await prisma.savePictures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavePicturesUpdateArgs>(args: SelectSubset<T, SavePicturesUpdateArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavePictures.
     * @param {SavePicturesDeleteManyArgs} args - Arguments to filter SavePictures to delete.
     * @example
     * // Delete a few SavePictures
     * const { count } = await prisma.savePictures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavePicturesDeleteManyArgs>(args?: SelectSubset<T, SavePicturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavePictures
     * const savePictures = await prisma.savePictures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavePicturesUpdateManyArgs>(args: SelectSubset<T, SavePicturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavePictures.
     * @param {SavePicturesUpsertArgs} args - Arguments to update or create a SavePictures.
     * @example
     * // Update or create a SavePictures
     * const savePictures = await prisma.savePictures.upsert({
     *   create: {
     *     // ... data to create a SavePictures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavePictures we want to update
     *   }
     * })
     */
    upsert<T extends SavePicturesUpsertArgs>(args: SelectSubset<T, SavePicturesUpsertArgs<ExtArgs>>): Prisma__SavePicturesClient<$Result.GetResult<Prisma.$SavePicturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesCountArgs} args - Arguments to filter SavePictures to count.
     * @example
     * // Count the number of SavePictures
     * const count = await prisma.savePictures.count({
     *   where: {
     *     // ... the filter for the SavePictures we want to count
     *   }
     * })
    **/
    count<T extends SavePicturesCountArgs>(
      args?: Subset<T, SavePicturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavePicturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavePicturesAggregateArgs>(args: Subset<T, SavePicturesAggregateArgs>): Prisma.PrismaPromise<GetSavePicturesAggregateType<T>>

    /**
     * Group by SavePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePicturesGroupByArgs} args - Group by arguments.
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
      T extends SavePicturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavePicturesGroupByArgs['orderBy'] }
        : { orderBy?: SavePicturesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavePicturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavePicturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavePictures model
   */
  readonly fields: SavePicturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavePictures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavePicturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pic<T extends PicturesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PicturesDefaultArgs<ExtArgs>>): Prisma__PicturesClient<$Result.GetResult<Prisma.$PicturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavePictures model
   */
  interface SavePicturesFieldRefs {
    readonly id: FieldRef<"SavePictures", 'Int'>
    readonly userId: FieldRef<"SavePictures", 'Int'>
    readonly picId: FieldRef<"SavePictures", 'Int'>
    readonly createdAt: FieldRef<"SavePictures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavePictures findUnique
   */
  export type SavePicturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter, which SavePictures to fetch.
     */
    where: SavePicturesWhereUniqueInput
  }

  /**
   * SavePictures findUniqueOrThrow
   */
  export type SavePicturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter, which SavePictures to fetch.
     */
    where: SavePicturesWhereUniqueInput
  }

  /**
   * SavePictures findFirst
   */
  export type SavePicturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter, which SavePictures to fetch.
     */
    where?: SavePicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePictures to fetch.
     */
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavePictures.
     */
    cursor?: SavePicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavePictures.
     */
    distinct?: SavePicturesScalarFieldEnum | SavePicturesScalarFieldEnum[]
  }

  /**
   * SavePictures findFirstOrThrow
   */
  export type SavePicturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter, which SavePictures to fetch.
     */
    where?: SavePicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePictures to fetch.
     */
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavePictures.
     */
    cursor?: SavePicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavePictures.
     */
    distinct?: SavePicturesScalarFieldEnum | SavePicturesScalarFieldEnum[]
  }

  /**
   * SavePictures findMany
   */
  export type SavePicturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter, which SavePictures to fetch.
     */
    where?: SavePicturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePictures to fetch.
     */
    orderBy?: SavePicturesOrderByWithRelationInput | SavePicturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavePictures.
     */
    cursor?: SavePicturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePictures.
     */
    skip?: number
    distinct?: SavePicturesScalarFieldEnum | SavePicturesScalarFieldEnum[]
  }

  /**
   * SavePictures create
   */
  export type SavePicturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * The data needed to create a SavePictures.
     */
    data: XOR<SavePicturesCreateInput, SavePicturesUncheckedCreateInput>
  }

  /**
   * SavePictures createMany
   */
  export type SavePicturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavePictures.
     */
    data: SavePicturesCreateManyInput | SavePicturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavePictures update
   */
  export type SavePicturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * The data needed to update a SavePictures.
     */
    data: XOR<SavePicturesUpdateInput, SavePicturesUncheckedUpdateInput>
    /**
     * Choose, which SavePictures to update.
     */
    where: SavePicturesWhereUniqueInput
  }

  /**
   * SavePictures updateMany
   */
  export type SavePicturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavePictures.
     */
    data: XOR<SavePicturesUpdateManyMutationInput, SavePicturesUncheckedUpdateManyInput>
    /**
     * Filter which SavePictures to update
     */
    where?: SavePicturesWhereInput
    /**
     * Limit how many SavePictures to update.
     */
    limit?: number
  }

  /**
   * SavePictures upsert
   */
  export type SavePicturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * The filter to search for the SavePictures to update in case it exists.
     */
    where: SavePicturesWhereUniqueInput
    /**
     * In case the SavePictures found by the `where` argument doesn't exist, create a new SavePictures with this data.
     */
    create: XOR<SavePicturesCreateInput, SavePicturesUncheckedCreateInput>
    /**
     * In case the SavePictures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavePicturesUpdateInput, SavePicturesUncheckedUpdateInput>
  }

  /**
   * SavePictures delete
   */
  export type SavePicturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
    /**
     * Filter which SavePictures to delete.
     */
    where: SavePicturesWhereUniqueInput
  }

  /**
   * SavePictures deleteMany
   */
  export type SavePicturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavePictures to delete
     */
    where?: SavePicturesWhereInput
    /**
     * Limit how many SavePictures to delete.
     */
    limit?: number
  }

  /**
   * SavePictures without action
   */
  export type SavePicturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePictures
     */
    select?: SavePicturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePictures
     */
    omit?: SavePicturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePicturesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    age: 'age',
    avatar: 'avatar'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PicturesScalarFieldEnum: {
    id: 'id',
    picName: 'picName',
    imgUrl: 'imgUrl',
    description: 'description',
    userId: 'userId'
  };

  export type PicturesScalarFieldEnum = (typeof PicturesScalarFieldEnum)[keyof typeof PicturesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    createdAt: 'createdAt',
    userId: 'userId',
    picId: 'picId'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SavePicturesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    picId: 'picId',
    createdAt: 'createdAt'
  };

  export type SavePicturesScalarFieldEnum = (typeof SavePicturesScalarFieldEnum)[keyof typeof SavePicturesScalarFieldEnum]


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


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    avatar: 'avatar'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const PicturesOrderByRelevanceFieldEnum: {
    picName: 'picName',
    imgUrl: 'imgUrl',
    description: 'description'
  };

  export type PicturesOrderByRelevanceFieldEnum = (typeof PicturesOrderByRelevanceFieldEnum)[keyof typeof PicturesOrderByRelevanceFieldEnum]


  export const CommentsOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    fullName?: StringNullableFilter<"Users"> | string | null
    age?: IntFilter<"Users"> | number
    avatar?: StringNullableFilter<"Users"> | string | null
    comments?: CommentsListRelationFilter
    pictures?: PicturesListRelationFilter
    saves?: SavePicturesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    age?: SortOrder
    avatar?: SortOrderInput | SortOrder
    comments?: CommentsOrderByRelationAggregateInput
    pictures?: PicturesOrderByRelationAggregateInput
    saves?: SavePicturesOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringNullableFilter<"Users"> | string | null
    fullName?: StringNullableFilter<"Users"> | string | null
    age?: IntFilter<"Users"> | number
    avatar?: StringNullableFilter<"Users"> | string | null
    comments?: CommentsListRelationFilter
    pictures?: PicturesListRelationFilter
    saves?: SavePicturesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    age?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    age?: IntWithAggregatesFilter<"Users"> | number
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type PicturesWhereInput = {
    AND?: PicturesWhereInput | PicturesWhereInput[]
    OR?: PicturesWhereInput[]
    NOT?: PicturesWhereInput | PicturesWhereInput[]
    id?: IntFilter<"Pictures"> | number
    picName?: StringFilter<"Pictures"> | string
    imgUrl?: StringFilter<"Pictures"> | string
    description?: StringNullableFilter<"Pictures"> | string | null
    userId?: IntFilter<"Pictures"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comments?: CommentsListRelationFilter
    saves?: SavePicturesListRelationFilter
  }

  export type PicturesOrderByWithRelationInput = {
    id?: SortOrder
    picName?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    comments?: CommentsOrderByRelationAggregateInput
    saves?: SavePicturesOrderByRelationAggregateInput
    _relevance?: PicturesOrderByRelevanceInput
  }

  export type PicturesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PicturesWhereInput | PicturesWhereInput[]
    OR?: PicturesWhereInput[]
    NOT?: PicturesWhereInput | PicturesWhereInput[]
    picName?: StringFilter<"Pictures"> | string
    imgUrl?: StringFilter<"Pictures"> | string
    description?: StringNullableFilter<"Pictures"> | string | null
    userId?: IntFilter<"Pictures"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comments?: CommentsListRelationFilter
    saves?: SavePicturesListRelationFilter
  }, "id">

  export type PicturesOrderByWithAggregationInput = {
    id?: SortOrder
    picName?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PicturesCountOrderByAggregateInput
    _avg?: PicturesAvgOrderByAggregateInput
    _max?: PicturesMaxOrderByAggregateInput
    _min?: PicturesMinOrderByAggregateInput
    _sum?: PicturesSumOrderByAggregateInput
  }

  export type PicturesScalarWhereWithAggregatesInput = {
    AND?: PicturesScalarWhereWithAggregatesInput | PicturesScalarWhereWithAggregatesInput[]
    OR?: PicturesScalarWhereWithAggregatesInput[]
    NOT?: PicturesScalarWhereWithAggregatesInput | PicturesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pictures"> | number
    picName?: StringWithAggregatesFilter<"Pictures"> | string
    imgUrl?: StringWithAggregatesFilter<"Pictures"> | string
    description?: StringNullableWithAggregatesFilter<"Pictures"> | string | null
    userId?: IntWithAggregatesFilter<"Pictures"> | number
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    userId?: IntFilter<"Comments"> | number
    picId?: IntFilter<"Comments"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    pic?: XOR<PicturesScalarRelationFilter, PicturesWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    user?: UsersOrderByWithRelationInput
    pic?: PicturesOrderByWithRelationInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    userId?: IntFilter<"Comments"> | number
    picId?: IntFilter<"Comments"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    pic?: XOR<PicturesScalarRelationFilter, PicturesWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    comment?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    userId?: IntWithAggregatesFilter<"Comments"> | number
    picId?: IntWithAggregatesFilter<"Comments"> | number
  }

  export type SavePicturesWhereInput = {
    AND?: SavePicturesWhereInput | SavePicturesWhereInput[]
    OR?: SavePicturesWhereInput[]
    NOT?: SavePicturesWhereInput | SavePicturesWhereInput[]
    id?: IntFilter<"SavePictures"> | number
    userId?: IntFilter<"SavePictures"> | number
    picId?: IntFilter<"SavePictures"> | number
    createdAt?: DateTimeFilter<"SavePictures"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    pic?: XOR<PicturesScalarRelationFilter, PicturesWhereInput>
  }

  export type SavePicturesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    pic?: PicturesOrderByWithRelationInput
  }

  export type SavePicturesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_picId?: SavePicturesUserIdPicIdCompoundUniqueInput
    AND?: SavePicturesWhereInput | SavePicturesWhereInput[]
    OR?: SavePicturesWhereInput[]
    NOT?: SavePicturesWhereInput | SavePicturesWhereInput[]
    userId?: IntFilter<"SavePictures"> | number
    picId?: IntFilter<"SavePictures"> | number
    createdAt?: DateTimeFilter<"SavePictures"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    pic?: XOR<PicturesScalarRelationFilter, PicturesWhereInput>
  }, "id" | "userId_picId">

  export type SavePicturesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
    _count?: SavePicturesCountOrderByAggregateInput
    _avg?: SavePicturesAvgOrderByAggregateInput
    _max?: SavePicturesMaxOrderByAggregateInput
    _min?: SavePicturesMinOrderByAggregateInput
    _sum?: SavePicturesSumOrderByAggregateInput
  }

  export type SavePicturesScalarWhereWithAggregatesInput = {
    AND?: SavePicturesScalarWhereWithAggregatesInput | SavePicturesScalarWhereWithAggregatesInput[]
    OR?: SavePicturesScalarWhereWithAggregatesInput[]
    NOT?: SavePicturesScalarWhereWithAggregatesInput | SavePicturesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavePictures"> | number
    userId?: IntWithAggregatesFilter<"SavePictures"> | number
    picId?: IntWithAggregatesFilter<"SavePictures"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SavePictures"> | Date | string
  }

  export type UsersCreateInput = {
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsCreateNestedManyWithoutUserInput
    pictures?: PicturesCreateNestedManyWithoutUserInput
    saves?: SavePicturesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    pictures?: PicturesUncheckedCreateNestedManyWithoutUserInput
    saves?: SavePicturesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUpdateManyWithoutUserNestedInput
    pictures?: PicturesUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    pictures?: PicturesUncheckedUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PicturesCreateInput = {
    picName: string
    imgUrl: string
    description?: string | null
    user: UsersCreateNestedOneWithoutPicturesInput
    comments?: CommentsCreateNestedManyWithoutPicInput
    saves?: SavePicturesCreateNestedManyWithoutPicInput
  }

  export type PicturesUncheckedCreateInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
    userId: number
    comments?: CommentsUncheckedCreateNestedManyWithoutPicInput
    saves?: SavePicturesUncheckedCreateNestedManyWithoutPicInput
  }

  export type PicturesUpdateInput = {
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutPicturesNestedInput
    comments?: CommentsUpdateManyWithoutPicNestedInput
    saves?: SavePicturesUpdateManyWithoutPicNestedInput
  }

  export type PicturesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    comments?: CommentsUncheckedUpdateManyWithoutPicNestedInput
    saves?: SavePicturesUncheckedUpdateManyWithoutPicNestedInput
  }

  export type PicturesCreateManyInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
    userId: number
  }

  export type PicturesUpdateManyMutationInput = {
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PicturesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateInput = {
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
    pic: PicturesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
    picId: number
  }

  export type CommentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
    pic?: PicturesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateManyInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
    picId: number
  }

  export type CommentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePicturesCreateInput = {
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutSavesInput
    pic: PicturesCreateNestedOneWithoutSavesInput
  }

  export type SavePicturesUncheckedCreateInput = {
    id?: number
    userId: number
    picId: number
    createdAt?: Date | string
  }

  export type SavePicturesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavesNestedInput
    pic?: PicturesUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavePicturesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavePicturesCreateManyInput = {
    id?: number
    userId: number
    picId: number
    createdAt?: Date | string
  }

  export type SavePicturesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavePicturesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type PicturesListRelationFilter = {
    every?: PicturesWhereInput
    some?: PicturesWhereInput
    none?: PicturesWhereInput
  }

  export type SavePicturesListRelationFilter = {
    every?: SavePicturesWhereInput
    some?: SavePicturesWhereInput
    none?: SavePicturesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PicturesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavePicturesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    avatar?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PicturesOrderByRelevanceInput = {
    fields: PicturesOrderByRelevanceFieldEnum | PicturesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PicturesCountOrderByAggregateInput = {
    id?: SortOrder
    picName?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PicturesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PicturesMaxOrderByAggregateInput = {
    id?: SortOrder
    picName?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PicturesMinOrderByAggregateInput = {
    id?: SortOrder
    picName?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type PicturesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type PicturesScalarRelationFilter = {
    is?: PicturesWhereInput
    isNot?: PicturesWhereInput
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
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

  export type SavePicturesUserIdPicIdCompoundUniqueInput = {
    userId: number
    picId: number
  }

  export type SavePicturesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavePicturesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type SavePicturesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavePicturesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavePicturesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    picId?: SortOrder
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type PicturesCreateNestedManyWithoutUserInput = {
    create?: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput> | PicturesCreateWithoutUserInput[] | PicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PicturesCreateOrConnectWithoutUserInput | PicturesCreateOrConnectWithoutUserInput[]
    createMany?: PicturesCreateManyUserInputEnvelope
    connect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
  }

  export type SavePicturesCreateNestedManyWithoutUserInput = {
    create?: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput> | SavePicturesCreateWithoutUserInput[] | SavePicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutUserInput | SavePicturesCreateOrConnectWithoutUserInput[]
    createMany?: SavePicturesCreateManyUserInputEnvelope
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type PicturesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput> | PicturesCreateWithoutUserInput[] | PicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PicturesCreateOrConnectWithoutUserInput | PicturesCreateOrConnectWithoutUserInput[]
    createMany?: PicturesCreateManyUserInputEnvelope
    connect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
  }

  export type SavePicturesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput> | SavePicturesCreateWithoutUserInput[] | SavePicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutUserInput | SavePicturesCreateOrConnectWithoutUserInput[]
    createMany?: SavePicturesCreateManyUserInputEnvelope
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type PicturesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput> | PicturesCreateWithoutUserInput[] | PicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PicturesCreateOrConnectWithoutUserInput | PicturesCreateOrConnectWithoutUserInput[]
    upsert?: PicturesUpsertWithWhereUniqueWithoutUserInput | PicturesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PicturesCreateManyUserInputEnvelope
    set?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    disconnect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    delete?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    connect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    update?: PicturesUpdateWithWhereUniqueWithoutUserInput | PicturesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PicturesUpdateManyWithWhereWithoutUserInput | PicturesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PicturesScalarWhereInput | PicturesScalarWhereInput[]
  }

  export type SavePicturesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput> | SavePicturesCreateWithoutUserInput[] | SavePicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutUserInput | SavePicturesCreateOrConnectWithoutUserInput[]
    upsert?: SavePicturesUpsertWithWhereUniqueWithoutUserInput | SavePicturesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavePicturesCreateManyUserInputEnvelope
    set?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    disconnect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    delete?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    update?: SavePicturesUpdateWithWhereUniqueWithoutUserInput | SavePicturesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavePicturesUpdateManyWithWhereWithoutUserInput | SavePicturesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type PicturesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput> | PicturesCreateWithoutUserInput[] | PicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PicturesCreateOrConnectWithoutUserInput | PicturesCreateOrConnectWithoutUserInput[]
    upsert?: PicturesUpsertWithWhereUniqueWithoutUserInput | PicturesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PicturesCreateManyUserInputEnvelope
    set?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    disconnect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    delete?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    connect?: PicturesWhereUniqueInput | PicturesWhereUniqueInput[]
    update?: PicturesUpdateWithWhereUniqueWithoutUserInput | PicturesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PicturesUpdateManyWithWhereWithoutUserInput | PicturesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PicturesScalarWhereInput | PicturesScalarWhereInput[]
  }

  export type SavePicturesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput> | SavePicturesCreateWithoutUserInput[] | SavePicturesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutUserInput | SavePicturesCreateOrConnectWithoutUserInput[]
    upsert?: SavePicturesUpsertWithWhereUniqueWithoutUserInput | SavePicturesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavePicturesCreateManyUserInputEnvelope
    set?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    disconnect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    delete?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    update?: SavePicturesUpdateWithWhereUniqueWithoutUserInput | SavePicturesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavePicturesUpdateManyWithWhereWithoutUserInput | SavePicturesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPicturesInput = {
    create?: XOR<UsersCreateWithoutPicturesInput, UsersUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPicturesInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutPicInput = {
    create?: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput> | CommentsCreateWithoutPicInput[] | CommentsUncheckedCreateWithoutPicInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPicInput | CommentsCreateOrConnectWithoutPicInput[]
    createMany?: CommentsCreateManyPicInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SavePicturesCreateNestedManyWithoutPicInput = {
    create?: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput> | SavePicturesCreateWithoutPicInput[] | SavePicturesUncheckedCreateWithoutPicInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutPicInput | SavePicturesCreateOrConnectWithoutPicInput[]
    createMany?: SavePicturesCreateManyPicInputEnvelope
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPicInput = {
    create?: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput> | CommentsCreateWithoutPicInput[] | CommentsUncheckedCreateWithoutPicInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPicInput | CommentsCreateOrConnectWithoutPicInput[]
    createMany?: CommentsCreateManyPicInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type SavePicturesUncheckedCreateNestedManyWithoutPicInput = {
    create?: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput> | SavePicturesCreateWithoutPicInput[] | SavePicturesUncheckedCreateWithoutPicInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutPicInput | SavePicturesCreateOrConnectWithoutPicInput[]
    createMany?: SavePicturesCreateManyPicInputEnvelope
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<UsersCreateWithoutPicturesInput, UsersUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPicturesInput
    upsert?: UsersUpsertWithoutPicturesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPicturesInput, UsersUpdateWithoutPicturesInput>, UsersUncheckedUpdateWithoutPicturesInput>
  }

  export type CommentsUpdateManyWithoutPicNestedInput = {
    create?: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput> | CommentsCreateWithoutPicInput[] | CommentsUncheckedCreateWithoutPicInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPicInput | CommentsCreateOrConnectWithoutPicInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPicInput | CommentsUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: CommentsCreateManyPicInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPicInput | CommentsUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPicInput | CommentsUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SavePicturesUpdateManyWithoutPicNestedInput = {
    create?: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput> | SavePicturesCreateWithoutPicInput[] | SavePicturesUncheckedCreateWithoutPicInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutPicInput | SavePicturesCreateOrConnectWithoutPicInput[]
    upsert?: SavePicturesUpsertWithWhereUniqueWithoutPicInput | SavePicturesUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: SavePicturesCreateManyPicInputEnvelope
    set?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    disconnect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    delete?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    update?: SavePicturesUpdateWithWhereUniqueWithoutPicInput | SavePicturesUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: SavePicturesUpdateManyWithWhereWithoutPicInput | SavePicturesUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPicNestedInput = {
    create?: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput> | CommentsCreateWithoutPicInput[] | CommentsUncheckedCreateWithoutPicInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPicInput | CommentsCreateOrConnectWithoutPicInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPicInput | CommentsUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: CommentsCreateManyPicInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPicInput | CommentsUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPicInput | CommentsUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type SavePicturesUncheckedUpdateManyWithoutPicNestedInput = {
    create?: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput> | SavePicturesCreateWithoutPicInput[] | SavePicturesUncheckedCreateWithoutPicInput[]
    connectOrCreate?: SavePicturesCreateOrConnectWithoutPicInput | SavePicturesCreateOrConnectWithoutPicInput[]
    upsert?: SavePicturesUpsertWithWhereUniqueWithoutPicInput | SavePicturesUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: SavePicturesCreateManyPicInputEnvelope
    set?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    disconnect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    delete?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    connect?: SavePicturesWhereUniqueInput | SavePicturesWhereUniqueInput[]
    update?: SavePicturesUpdateWithWhereUniqueWithoutPicInput | SavePicturesUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: SavePicturesUpdateManyWithWhereWithoutPicInput | SavePicturesUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type PicturesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PicturesCreateWithoutCommentsInput, PicturesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PicturesCreateOrConnectWithoutCommentsInput
    connect?: PicturesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type PicturesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PicturesCreateWithoutCommentsInput, PicturesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PicturesCreateOrConnectWithoutCommentsInput
    upsert?: PicturesUpsertWithoutCommentsInput
    connect?: PicturesWhereUniqueInput
    update?: XOR<XOR<PicturesUpdateToOneWithWhereWithoutCommentsInput, PicturesUpdateWithoutCommentsInput>, PicturesUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersCreateNestedOneWithoutSavesInput = {
    create?: XOR<UsersCreateWithoutSavesInput, UsersUncheckedCreateWithoutSavesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavesInput
    connect?: UsersWhereUniqueInput
  }

  export type PicturesCreateNestedOneWithoutSavesInput = {
    create?: XOR<PicturesCreateWithoutSavesInput, PicturesUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PicturesCreateOrConnectWithoutSavesInput
    connect?: PicturesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<UsersCreateWithoutSavesInput, UsersUncheckedCreateWithoutSavesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavesInput
    upsert?: UsersUpsertWithoutSavesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSavesInput, UsersUpdateWithoutSavesInput>, UsersUncheckedUpdateWithoutSavesInput>
  }

  export type PicturesUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<PicturesCreateWithoutSavesInput, PicturesUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PicturesCreateOrConnectWithoutSavesInput
    upsert?: PicturesUpsertWithoutSavesInput
    connect?: PicturesWhereUniqueInput
    update?: XOR<XOR<PicturesUpdateToOneWithWhereWithoutSavesInput, PicturesUpdateWithoutSavesInput>, PicturesUncheckedUpdateWithoutSavesInput>
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

  export type CommentsCreateWithoutUserInput = {
    comment: string
    createdAt?: Date | string
    pic: PicturesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    picId: number
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PicturesCreateWithoutUserInput = {
    picName: string
    imgUrl: string
    description?: string | null
    comments?: CommentsCreateNestedManyWithoutPicInput
    saves?: SavePicturesCreateNestedManyWithoutPicInput
  }

  export type PicturesUncheckedCreateWithoutUserInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutPicInput
    saves?: SavePicturesUncheckedCreateNestedManyWithoutPicInput
  }

  export type PicturesCreateOrConnectWithoutUserInput = {
    where: PicturesWhereUniqueInput
    create: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput>
  }

  export type PicturesCreateManyUserInputEnvelope = {
    data: PicturesCreateManyUserInput | PicturesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavePicturesCreateWithoutUserInput = {
    createdAt?: Date | string
    pic: PicturesCreateNestedOneWithoutSavesInput
  }

  export type SavePicturesUncheckedCreateWithoutUserInput = {
    id?: number
    picId: number
    createdAt?: Date | string
  }

  export type SavePicturesCreateOrConnectWithoutUserInput = {
    where: SavePicturesWhereUniqueInput
    create: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput>
  }

  export type SavePicturesCreateManyUserInputEnvelope = {
    data: SavePicturesCreateManyUserInput | SavePicturesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    userId?: IntFilter<"Comments"> | number
    picId?: IntFilter<"Comments"> | number
  }

  export type PicturesUpsertWithWhereUniqueWithoutUserInput = {
    where: PicturesWhereUniqueInput
    update: XOR<PicturesUpdateWithoutUserInput, PicturesUncheckedUpdateWithoutUserInput>
    create: XOR<PicturesCreateWithoutUserInput, PicturesUncheckedCreateWithoutUserInput>
  }

  export type PicturesUpdateWithWhereUniqueWithoutUserInput = {
    where: PicturesWhereUniqueInput
    data: XOR<PicturesUpdateWithoutUserInput, PicturesUncheckedUpdateWithoutUserInput>
  }

  export type PicturesUpdateManyWithWhereWithoutUserInput = {
    where: PicturesScalarWhereInput
    data: XOR<PicturesUpdateManyMutationInput, PicturesUncheckedUpdateManyWithoutUserInput>
  }

  export type PicturesScalarWhereInput = {
    AND?: PicturesScalarWhereInput | PicturesScalarWhereInput[]
    OR?: PicturesScalarWhereInput[]
    NOT?: PicturesScalarWhereInput | PicturesScalarWhereInput[]
    id?: IntFilter<"Pictures"> | number
    picName?: StringFilter<"Pictures"> | string
    imgUrl?: StringFilter<"Pictures"> | string
    description?: StringNullableFilter<"Pictures"> | string | null
    userId?: IntFilter<"Pictures"> | number
  }

  export type SavePicturesUpsertWithWhereUniqueWithoutUserInput = {
    where: SavePicturesWhereUniqueInput
    update: XOR<SavePicturesUpdateWithoutUserInput, SavePicturesUncheckedUpdateWithoutUserInput>
    create: XOR<SavePicturesCreateWithoutUserInput, SavePicturesUncheckedCreateWithoutUserInput>
  }

  export type SavePicturesUpdateWithWhereUniqueWithoutUserInput = {
    where: SavePicturesWhereUniqueInput
    data: XOR<SavePicturesUpdateWithoutUserInput, SavePicturesUncheckedUpdateWithoutUserInput>
  }

  export type SavePicturesUpdateManyWithWhereWithoutUserInput = {
    where: SavePicturesScalarWhereInput
    data: XOR<SavePicturesUpdateManyMutationInput, SavePicturesUncheckedUpdateManyWithoutUserInput>
  }

  export type SavePicturesScalarWhereInput = {
    AND?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
    OR?: SavePicturesScalarWhereInput[]
    NOT?: SavePicturesScalarWhereInput | SavePicturesScalarWhereInput[]
    id?: IntFilter<"SavePictures"> | number
    userId?: IntFilter<"SavePictures"> | number
    picId?: IntFilter<"SavePictures"> | number
    createdAt?: DateTimeFilter<"SavePictures"> | Date | string
  }

  export type UsersCreateWithoutPicturesInput = {
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsCreateNestedManyWithoutUserInput
    saves?: SavePicturesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPicturesInput = {
    id?: number
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    saves?: SavePicturesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPicturesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPicturesInput, UsersUncheckedCreateWithoutPicturesInput>
  }

  export type CommentsCreateWithoutPicInput = {
    comment: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutPicInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
  }

  export type CommentsCreateOrConnectWithoutPicInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput>
  }

  export type CommentsCreateManyPicInputEnvelope = {
    data: CommentsCreateManyPicInput | CommentsCreateManyPicInput[]
    skipDuplicates?: boolean
  }

  export type SavePicturesCreateWithoutPicInput = {
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutSavesInput
  }

  export type SavePicturesUncheckedCreateWithoutPicInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SavePicturesCreateOrConnectWithoutPicInput = {
    where: SavePicturesWhereUniqueInput
    create: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput>
  }

  export type SavePicturesCreateManyPicInputEnvelope = {
    data: SavePicturesCreateManyPicInput | SavePicturesCreateManyPicInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPicturesInput = {
    update: XOR<UsersUpdateWithoutPicturesInput, UsersUncheckedUpdateWithoutPicturesInput>
    create: XOR<UsersCreateWithoutPicturesInput, UsersUncheckedCreateWithoutPicturesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPicturesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPicturesInput, UsersUncheckedUpdateWithoutPicturesInput>
  }

  export type UsersUpdateWithoutPicturesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutPicInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPicInput, CommentsUncheckedUpdateWithoutPicInput>
    create: XOR<CommentsCreateWithoutPicInput, CommentsUncheckedCreateWithoutPicInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPicInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPicInput, CommentsUncheckedUpdateWithoutPicInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPicInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPicInput>
  }

  export type SavePicturesUpsertWithWhereUniqueWithoutPicInput = {
    where: SavePicturesWhereUniqueInput
    update: XOR<SavePicturesUpdateWithoutPicInput, SavePicturesUncheckedUpdateWithoutPicInput>
    create: XOR<SavePicturesCreateWithoutPicInput, SavePicturesUncheckedCreateWithoutPicInput>
  }

  export type SavePicturesUpdateWithWhereUniqueWithoutPicInput = {
    where: SavePicturesWhereUniqueInput
    data: XOR<SavePicturesUpdateWithoutPicInput, SavePicturesUncheckedUpdateWithoutPicInput>
  }

  export type SavePicturesUpdateManyWithWhereWithoutPicInput = {
    where: SavePicturesScalarWhereInput
    data: XOR<SavePicturesUpdateManyMutationInput, SavePicturesUncheckedUpdateManyWithoutPicInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    pictures?: PicturesCreateNestedManyWithoutUserInput
    saves?: SavePicturesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    pictures?: PicturesUncheckedCreateNestedManyWithoutUserInput
    saves?: SavePicturesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type PicturesCreateWithoutCommentsInput = {
    picName: string
    imgUrl: string
    description?: string | null
    user: UsersCreateNestedOneWithoutPicturesInput
    saves?: SavePicturesCreateNestedManyWithoutPicInput
  }

  export type PicturesUncheckedCreateWithoutCommentsInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
    userId: number
    saves?: SavePicturesUncheckedCreateNestedManyWithoutPicInput
  }

  export type PicturesCreateOrConnectWithoutCommentsInput = {
    where: PicturesWhereUniqueInput
    create: XOR<PicturesCreateWithoutCommentsInput, PicturesUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    pictures?: PicturesUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    pictures?: PicturesUncheckedUpdateManyWithoutUserNestedInput
    saves?: SavePicturesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PicturesUpsertWithoutCommentsInput = {
    update: XOR<PicturesUpdateWithoutCommentsInput, PicturesUncheckedUpdateWithoutCommentsInput>
    create: XOR<PicturesCreateWithoutCommentsInput, PicturesUncheckedCreateWithoutCommentsInput>
    where?: PicturesWhereInput
  }

  export type PicturesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PicturesWhereInput
    data: XOR<PicturesUpdateWithoutCommentsInput, PicturesUncheckedUpdateWithoutCommentsInput>
  }

  export type PicturesUpdateWithoutCommentsInput = {
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutPicturesNestedInput
    saves?: SavePicturesUpdateManyWithoutPicNestedInput
  }

  export type PicturesUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    saves?: SavePicturesUncheckedUpdateManyWithoutPicNestedInput
  }

  export type UsersCreateWithoutSavesInput = {
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsCreateNestedManyWithoutUserInput
    pictures?: PicturesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSavesInput = {
    id?: number
    email: string
    password?: string | null
    fullName?: string | null
    age: number
    avatar?: string | null
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    pictures?: PicturesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSavesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSavesInput, UsersUncheckedCreateWithoutSavesInput>
  }

  export type PicturesCreateWithoutSavesInput = {
    picName: string
    imgUrl: string
    description?: string | null
    user: UsersCreateNestedOneWithoutPicturesInput
    comments?: CommentsCreateNestedManyWithoutPicInput
  }

  export type PicturesUncheckedCreateWithoutSavesInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
    userId: number
    comments?: CommentsUncheckedCreateNestedManyWithoutPicInput
  }

  export type PicturesCreateOrConnectWithoutSavesInput = {
    where: PicturesWhereUniqueInput
    create: XOR<PicturesCreateWithoutSavesInput, PicturesUncheckedCreateWithoutSavesInput>
  }

  export type UsersUpsertWithoutSavesInput = {
    update: XOR<UsersUpdateWithoutSavesInput, UsersUncheckedUpdateWithoutSavesInput>
    create: XOR<UsersCreateWithoutSavesInput, UsersUncheckedCreateWithoutSavesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSavesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSavesInput, UsersUncheckedUpdateWithoutSavesInput>
  }

  export type UsersUpdateWithoutSavesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUpdateManyWithoutUserNestedInput
    pictures?: PicturesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    pictures?: PicturesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PicturesUpsertWithoutSavesInput = {
    update: XOR<PicturesUpdateWithoutSavesInput, PicturesUncheckedUpdateWithoutSavesInput>
    create: XOR<PicturesCreateWithoutSavesInput, PicturesUncheckedCreateWithoutSavesInput>
    where?: PicturesWhereInput
  }

  export type PicturesUpdateToOneWithWhereWithoutSavesInput = {
    where?: PicturesWhereInput
    data: XOR<PicturesUpdateWithoutSavesInput, PicturesUncheckedUpdateWithoutSavesInput>
  }

  export type PicturesUpdateWithoutSavesInput = {
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutPicturesNestedInput
    comments?: CommentsUpdateManyWithoutPicNestedInput
  }

  export type PicturesUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    comments?: CommentsUncheckedUpdateManyWithoutPicNestedInput
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    picId: number
  }

  export type PicturesCreateManyUserInput = {
    id?: number
    picName: string
    imgUrl: string
    description?: string | null
  }

  export type SavePicturesCreateManyUserInput = {
    id?: number
    picId: number
    createdAt?: Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: PicturesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picId?: IntFieldUpdateOperationsInput | number
  }

  export type PicturesUpdateWithoutUserInput = {
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUpdateManyWithoutPicNestedInput
    saves?: SavePicturesUpdateManyWithoutPicNestedInput
  }

  export type PicturesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentsUncheckedUpdateManyWithoutPicNestedInput
    saves?: SavePicturesUncheckedUpdateManyWithoutPicNestedInput
  }

  export type PicturesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    picName?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavePicturesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: PicturesUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavePicturesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavePicturesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    picId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyPicInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
  }

  export type SavePicturesCreateManyPicInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type CommentsUpdateWithoutPicInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPicInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUncheckedUpdateManyWithoutPicInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePicturesUpdateWithoutPicInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavePicturesUncheckedUpdateWithoutPicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavePicturesUncheckedUpdateManyWithoutPicInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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