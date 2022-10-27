import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Controller('/usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    callCreate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }


}