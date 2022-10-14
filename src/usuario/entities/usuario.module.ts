import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "src/controllers/usuario.controller";
import { UsuarioService } from "src/services/usuario.service";
import { Usuario } from "./usuario.entity"


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
    exports: [TypeOrmModule]
})
export class UsuarioModule {};