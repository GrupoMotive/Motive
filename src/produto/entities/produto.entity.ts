import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column({ type: 'decimal', precision: 2, scale: 2, nullable: false })
    valor: number

    @IsNotEmpty()
    @Column({ length: 45, nullable: false })
    faixa_etaria: string

}