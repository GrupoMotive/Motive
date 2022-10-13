import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'tb_usuarios'})
export class Usuario{
    
    @PrimaryGeneratedColumn()
    id:number
    
    @IsNotEmpty()
    @Column({length:100,nullable:false})
    nome:string
    
    @IsNotEmpty()
    @Column({length:100,nullable:false})
    email:string

    @IsNotEmpty()
    @Column({length:16,nullable:false})
    senha:string
    
    @IsNotEmpty()
    @Column({length:300,nullable:false})
    foto:string
}