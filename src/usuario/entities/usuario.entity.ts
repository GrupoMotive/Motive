import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tb_usuarios' })
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string

    @IsEmail()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    email: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string

    @IsNotEmpty()
    @Column({ length: 5000, nullable: false })
    @ApiProperty()
    foto: string
}