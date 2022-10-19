import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";

@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) { };

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: {
                product: true
            }
        });
    }

    async findById(id: number): Promise<Categoria> {
        const buscaCategoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                product: true
            }
        });

        if (!buscaCategoria) {
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
        }

        return buscaCategoria;
    }

    async findByName(modalidade: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                modalidade: ILike(`%${modalidade}%`)
            },
            relations: {
                product: true
            }
        });
    }

    async update(categoria: Categoria): Promise<Categoria> {

        const buscaCategoria = await this.findById(categoria.id);

        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        const buscaCategoria = await this.findById(id);

        if (!buscaCategoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.delete(id);
    }

}