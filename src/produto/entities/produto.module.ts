import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "src/controllers/produto.controller";
import { ProdutoService } from "src/services/produto.service";
import { Produto } from "./produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature ([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule]
})
export class ProdutoModule {};