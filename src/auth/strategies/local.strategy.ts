import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";



export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(){
        super({
            usernameField: 'email',
            passwordField: 'senha'
        });
    }

    validate(email: string, senha: string){
        
    }
}