import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IPayload } from "src/interfaces/IPayload";
import { constants } from "../constants/constants";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants.secret_key
        })
    }
    async validate(payload: IPayload){
        return {id: payload.sub, email: payload.email}
    }
}