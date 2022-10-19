import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "src/produto/entities/produto.entity";
import { Repository } from "typeorm";


@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find()
    }
}