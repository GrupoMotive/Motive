import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ApiTags } from "@nestjs/swagger";
import { UsuarioLogin } from "../entities/usuarioLogin";
import { LocalAuthGuard } from "../guards/local.guard";
import { AuthService } from "../services/auth.service";

@ApiTags('Usuario')
@Controller('/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @HttpCode(HttpStatus.OK)
    login(@Body() usuario: UsuarioLogin) {
        return this.authService.login(usuario)
    }
}