import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "src/produto/entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);
    }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find()
    }

    async findById(id: number): Promise<Produto> {

        const buscarProduto = await this.produtoRepository.findOneBy({ id });

        if (!buscarProduto) {
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
        }

        return buscarProduto;
    }

    async findByName(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        });
    }

    async update(produto: Produto): Promise<Produto> {

        const buscaProduto = await this.findById(produto.id);

        if (!buscaProduto || !produto.id) {
            throw new HttpException('Produto não encontrado !', HttpStatus.NOT_FOUND);
        }

        return await this.produtoRepository.save(produto);

    }

    async delete(id: number): Promise<DeleteResult> {

        const buscaProduto = await this.findById(id);

        if (!buscaProduto) {
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        }

        return await this.produtoRepository.delete(id);

    }
}
