import Categoria from "./categoria";

export default interface Produtos {
    id: number,
    nome: string,
    descricao: string,
    foto_url: string
    valor: number,
    categoria: Categoria
}