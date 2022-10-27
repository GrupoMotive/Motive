import { Controller, Post, UseGuards } from "@nestjs/common";
import { IUsuarioLogin } from "src/interfaces/IUsuárioLogin";
import { LocalAuthGuard } from "../guards/local.guard";

@Controller('/auth')
export class AuthController{
    constructor(){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(usuario: IUsuarioLogin){
        return usuario
    }
}