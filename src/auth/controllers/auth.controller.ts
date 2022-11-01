import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ApiTags } from "@nestjs/swagger";
import { IUsuarioLogin } from "src/interfaces/IUsuárioLogin";
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
    login(@Body() usuario: IUsuarioLogin) {
        return this.authService.login(usuario)
    }
}