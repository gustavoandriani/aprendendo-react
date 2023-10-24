import listaItens from "../../database.json"

export default function CountInventarioTotal() {
    var total = 0
    listaItens.forEach(item => {
       total += item.qntdItem
    });
    return total
}