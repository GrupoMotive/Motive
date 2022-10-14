import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/entities/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/entities/produto.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/entities/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_motive',
      entities: [Categoria, Usuario, Produto],
      synchronize: true,
    }),
    CategoriaModule,
    UsuarioModule,
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }


