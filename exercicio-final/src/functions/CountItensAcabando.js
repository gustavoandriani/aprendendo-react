import listaItens from "../../database.json"

export default function CountItensAcabando() {
    let itensAcabando = 0
    listaItens.forEach(item => {
        if(item.qntdItem < 10) {
            return itensAcabando += 1
        } else {
            null
        }
    });
    return itensAcabando
}