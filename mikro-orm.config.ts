import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const mikroOrmConfig: Options = {
  dbName: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  driver: PostgreSqlDriver,
  // driverOptions: {
  //   connection: {
  //     ssl: { rejectUnauthorized: false }
  //   },
  // },
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
};

export default mikroOrmConfig;
