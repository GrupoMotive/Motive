import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UsuarioController } from "src/usuario/controllers/usuario.controller";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Usuario } from "./entities/usuario.entity"


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService, Bcrypt],
    exports: [TypeOrmModule]
})
export class UsuarioModule { };