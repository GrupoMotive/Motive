import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Body, Post, Put, UseGuards } from "@nestjs/common/decorators";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Usuario')
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

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }

}