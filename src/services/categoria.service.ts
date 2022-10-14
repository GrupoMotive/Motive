import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Repository } from "typeorm";


@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){};

    async findAll(): Promise<Categoria[]>{
        return await this.categoriaRepository.find();
    }
};