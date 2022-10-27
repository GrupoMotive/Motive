import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { IUsuarioLogin } from "src/interfaces/IUsuárioLogin";
import { LocalAuthGuard } from "../guards/local.guard";
import { AuthService } from "../services/auth.service";

@Controller('/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Body() usuario: IUsuarioLogin) {
        return this.authService.login(usuario)
    }
}