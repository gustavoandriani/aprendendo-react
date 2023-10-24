import listaItens from "../../database.json"

export default function CountDiversidade() {
    const diversidadeItens = listaItens.length
    return diversidadeItens
}