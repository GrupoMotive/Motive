import { Body, Controller, Post, UseGuards } from "@nestjs/common";
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
    login(@Body() usuario: IUsuarioLogin) {
        return this.authService.login(usuario)
    }
}