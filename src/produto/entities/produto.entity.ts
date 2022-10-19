import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_produtos' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 120, nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({ length: 150, nullable: false })
    local: string

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 4, scale: 2, nullable: false })
    valor: number

    @IsNotEmpty()
    @Column({ length: 45, nullable: false })
    faixa_etaria: string

    @ManyToOne(() => Categoria, (categoria) => categoria.product, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria

}