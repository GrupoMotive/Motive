import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { IUsuarioTrafegavel } from "src/interfaces/IUsuarioTrafegavel";
import { AuthService } from "../services/auth.service";



export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private authService: AuthService
    ){
        super({
            usernameField: 'email',
            passwordField: 'senha'
        });
    }

    async validate(email: string, senha: string): Promise<IUsuarioTrafegavel>{
       const usuario = await this.authService.validateUser(email, senha);

       if(!usuario){
        throw new UnauthorizedException();
       }
       return usuario
    }
}