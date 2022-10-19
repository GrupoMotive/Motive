import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Usuario } from "src/usuario/entities/usuario.entity";


@Controller()
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get('/usuario')
    @HttpCode(HttpStatus.OK)
    async callFindAll(): Promise<Usuario[]> {
        return await this.usuarioService.findAll()
    }
}