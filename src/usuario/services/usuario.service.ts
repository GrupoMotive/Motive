import { HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { };

    async create(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOneBy({ id });

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return buscaUsuario;
    }

    async findByName(nome: string): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        });
    }

    async update(usuario: Usuario): Promise<Usuario> {

        const buscaUsuario = await this.findById(usuario.id);

        if (!buscaUsuario || !usuario.id)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.save(usuario);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaUsuario = await this.findById(id);

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.delete(id);
    }
}