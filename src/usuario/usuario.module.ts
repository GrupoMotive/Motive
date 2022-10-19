import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "src/usuario/controllers/usuario.controller";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Usuario } from "./entities/usuario.entity"


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [TypeOrmModule]
})
export class UsuarioModule { };