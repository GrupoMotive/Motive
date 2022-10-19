import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_categorias' })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, nullable: false })
    modalidade: string

    @Column({ length: 100, nullable: false })
    municipio: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    product: Produto[]

}