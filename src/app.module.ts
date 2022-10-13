import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rootCertificates } from 'tls';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_motive',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


