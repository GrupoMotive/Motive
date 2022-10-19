import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "src/produto/controllers/produto.controller";
import { ProdutoService } from "src/produto/services/produto.service";
import { Produto } from "./entities/produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule]
})
export class ProdutoModule { };