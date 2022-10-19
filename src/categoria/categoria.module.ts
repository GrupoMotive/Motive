import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "src/categoria/controllers/categoria.controller";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { Categoria } from "./entities/categoria.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})

export class CategoriaModule { };