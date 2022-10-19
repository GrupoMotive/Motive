import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "src/produto/services/produto.service";
import { Produto } from "src/produto/entities/produto.entity";

@Controller('/produto')
export class ProdutoController {
    constructor(
        private readonly produtoService: ProdutoService
    ) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    callCreate(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    callFindById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    callFindByName(@Param('nome') nome: string) {
        return this.produtoService.findByName(nome);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() produto: Produto): Promise<Produto> {

        return this.produtoService.update(produto);

    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    callDelete(@Param('id', ParseIntPipe) id: number) {

        return this.produtoService.delete(id);

    }

}