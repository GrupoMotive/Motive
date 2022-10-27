import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { UsuarioModule } from "../usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { constants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: constants.secret_key,
            signOptions: {expiresIn: '24h'}
        })
    ],
    providers: [Bcrypt, UsuarioService, AuthService, JwtService,LocalStrategy],
    controllers: [],
    exports: []
})
export class AuthModule {}