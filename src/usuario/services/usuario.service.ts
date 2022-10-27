import { HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
        
    ) { };

    async create(usuario: Usuario): Promise<Usuario> {
        const buscaUsuario = await this.findByEmail (usuario.email) 
        if (!buscaUsuario) {
            usuario.senha = await this.bcrypt.hashPassword (usuario.senha)
            return await this.usuarioRepository.save(usuario)
        }
        
        throw new HttpException('O usuário já existe', HttpStatus.BAD_REQUEST);
        
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findByEmail(email: string): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOneBy({ email });

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return buscaUsuario;
    }

    async findById(id: number): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOneBy({ id });

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return buscaUsuario;
    }

    async update(usuario: Usuario): Promise<Usuario> {
        await this.findById(usuario.id)

        const buscaEmail = await this.findByEmail(usuario.email)

        if (buscaEmail && buscaEmail.id !== usuario.id){
            throw new HttpException('O e-mail já existe', HttpStatus.BAD_REQUEST);
        }

        usuario.senha = await this.bcrypt.hashPassword (usuario.senha) 
        return this.usuarioRepository.save(usuario)
        
    }
}