import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { CategoriaService } from "src/services/categoria.service";

@Controller()
export class CategoriaController{
    constructor (private readonly categoriaService: CategoriaService){}
    
    @Get('/categoria')
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise <Categoria[]> {
       return this.categoriaService.findAll()
    
    }
}