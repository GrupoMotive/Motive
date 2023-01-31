import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    /*     TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'db_motive',
          entities: [Categoria, Usuario, Produto],
          synchronize: true,
        }), */
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      synchronize: true
    }),
    CategoriaModule,
    UsuarioModule,
    ProdutoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }


