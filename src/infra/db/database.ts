import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default (): TypeOrmModuleOptions => {
  const DatabaseProvider: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'booktop',
    entities: [
      join(__dirname, '..', '..', 'api', '**', 'entities', '*.entity.{ts,js}'),
    ],
    migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
    synchronize: false,
  };

  return DatabaseProvider;
};
