import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_produtos' })
export class Produto {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 120, nullable: false })
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({ length: 150, nullable: false })
    @ApiProperty({ example: "email@email.com.br" })
    local: string

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 4, scale: 2, default: 0, nullable: false })
    @ApiProperty()
    valor: number

    @IsNotEmpty()
    @Column({ length: 45, nullable: false })
    @ApiProperty()
    faixa_etaria: string

    @ApiProperty()
    @ManyToOne(() => Categoria, (categoria) => categoria.product, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria[]

}