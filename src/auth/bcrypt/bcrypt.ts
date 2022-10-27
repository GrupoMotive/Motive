import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt"

@Injectable()
export class Bcrypt {

    async hashPassword(senha: string): Promise<string> {

        const salts = 10
        return await bcrypt.hash(senha, salts)
    }

    async comparePassword(senhaDigitada: string, senhaHash: string): Promise<boolean> {

        return await bcrypt.compare(senhaDigitada, senhaHash);

    }


}