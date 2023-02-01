import Categoria from "./categoria";

export default interface Produto {
    id: number,
    nome: string,
    descricao_breve: string,
    descricao_completa: string,
    foto_url: string,
    valor: number,
    categoria: Categoria
}