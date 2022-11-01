import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { ProdutoController } from "src/produto/controllers/produto.controller";
import { ProdutoService } from "src/produto/services/produto.service";
import { Produto } from "./entities/produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), Categoria],
    controllers: [ProdutoController],
    providers: [ProdutoService, CategoriaService],
    exports: [TypeOrmModule]
})
export class ProdutoModule { };