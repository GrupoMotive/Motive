import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tb_usuarios' })
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty({ message: "Nome não informado!" })
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string

    @IsEmail({}, { message: "Email inválido!" })
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    email: string

    @MinLength(8)
    @IsNotEmpty({ message: "Senha não informada!" })
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string
}