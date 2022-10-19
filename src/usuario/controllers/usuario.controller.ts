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

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    callFindById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return this.usuarioService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    callFindByName(@Param('nome') nome: string): Promise<Usuario[]> {
        return this.usuarioService.findByName(nome);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    callDelete(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.delete(id);
    }

}