import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { UsuarioModule } from "../usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { constants } from "./constants/constants";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: constants.secret_key,
            signOptions: {expiresIn: '24h'}
        })
    ],
    providers: [Bcrypt, UsuarioService],
    controllers: [],
    exports: []
})
export class AuthModule {}