import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Produto } from "src/produto/entities/produto.entity";
import { ProdutoService } from "src/produto/services/produto.service";


@Controller()
export class ProdutoController {
    constructor(
        private readonly produtoService: ProdutoService
    ) { }
    @Get('/produto')
    @HttpCode(HttpStatus.OK)
    async callFindAll(): Promise<Produto[]> {
        return await this.produtoService.findAll()
    }

}