import { Controller, Get, Res } from "@nestjs/common"
import { ApiExcludeEndpoint } from "@nestjs/swagger"

@Controller ()

export class AppController {
    constructor () {}
    
    @ApiExcludeEndpoint ()
    @Get ()

    async redirect (
        @Res ()
        resposta: any
    ) {
        return resposta.redirect('/swagger')
    }

}