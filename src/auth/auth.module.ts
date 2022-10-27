import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { UsuarioModule } from "../usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { constants } from "./constants/constants";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: constants.secret_key,
            signOptions: { expiresIn: '24h' }
        })
    ],
    controllers: [AuthController],
    providers: [Bcrypt, UsuarioService, AuthService, JwtStrategy, LocalStrategy],
    exports: []
})
export class AuthModule { }