import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "src/controllers/categoria.controller";
import { CategoriaService } from "src/services/categoria.service";
import { Categoria } from "./categoria.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})

export class CategoriaModule {};