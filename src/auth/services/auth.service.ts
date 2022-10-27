import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { IUsuarioTrafegavel } from "src/interfaces/IUsuarioTrafegavel";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";

@Injectable()
export class AuthService{
    
    constructor(
        private usuarioService: UsuarioService,
        private bcrypt: Bcrypt
    ){}

    async validateUser(email: string, senha: string): Promise <IUsuarioTrafegavel | null>{
      const usuario =  await this.usuarioService.findByEmail(email);

      if(!usuario){
        return null;
      }

      const match = this.bcrypt.comparePassword(senha, usuario.senha);

      if(usuario && match){
        const {senha, ...usuarioTrefegavel} = usuario
        return usuarioTrefegavel;
      }

      return null;
    }
}




