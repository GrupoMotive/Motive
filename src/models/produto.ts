import Categoria from "./categoria";

export default interface Produtos {
    id: number,
    nome: string,
    local: string,
    faixa_etaria: string,
    valor: string,
    categoria: Categoria
}