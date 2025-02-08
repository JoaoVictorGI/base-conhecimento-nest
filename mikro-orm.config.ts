import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const mikroOrmConfig: Options = {
  dbName: 'nestjs',
  user: 'admin',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  driver: PostgreSqlDriver,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
};

export default mikroOrmConfig;
