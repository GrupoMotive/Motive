import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_categorias' })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, nullable: false })
    modalidade: string

    @Column({ length: 100, nullable: false })
    municipio: string

}