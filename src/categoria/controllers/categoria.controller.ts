import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { DeleteResult } from "typeorm";

@Controller('/categoria')
export class CategoriaController {

    constructor(
        private readonly categoriaService: CategoriaService
    ) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    callCreate(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome', ParseIntPipe) nome: string): Promise<Categoria[]> {
        return this.categoriaService.findByName(nome);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    Update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    callDelete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.categoriaService.delete(id)
    }
}