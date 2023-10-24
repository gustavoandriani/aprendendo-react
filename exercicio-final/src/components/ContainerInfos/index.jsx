import { useEffect, useState } from "react"
import "./styles.css"
import listaItens from "../../database.json"
import BoxInfos from "../BoxInfos"

export default function ContainerInfos() {
    const [ listItens, setListItens ] = useState([])
    const [ nameItem, setNameItem ] = useState("")
    const [ qntdItem, setQntdItem ] = useState(0)
    const [ totalItens, setTotalItens ] = useState(0)
    const [ itensAcabando, setItensAcabando ] = useState(0)
    const [ itensRecentes, setItensRecentes ] = useState(0)

    useEffect(() => {
        let dataHoje = Date.now()
        let total = 0
        listItens.forEach(item => {
            total += Number(item.nmrItens)
            if(Number(item.nmrItens) < 10) {
                return setItensAcabando(itensAcabando + 1)
            }
            return total
        })

        listItens.forEach(item => {
            if(item.addData - dataHoje <= 10) {
                return setItensRecentes(itensRecentes + 1)
            }
        })
        setTotalItens(total)
    }, [listItens])

    const addItem = (ev) => {
        ev.preventDefault()

        const newItem = {
            id: Math.floor(Math.random() * 100000),
            nameItem: nameItem,
            nmrItens: qntdItem,
            addData: Date.now()
        }

        setListItens((state) => [...state, newItem])
        setNameItem("")
        setQntdItem("")
    }

    return (
        <>
            <div className="ContainerInfos">
                <BoxInfos infoTitulo={"Diversidade de itens"} infoQntd={listItens.length} />
                <BoxInfos infoTitulo={"Inventário total"} infoQntd={totalItens} />
                <BoxInfos infoTitulo={"Itens recentes"} infoQntd={itensRecentes} />
                <BoxInfos infoTitulo={"Itens acabando"} infoQntd={itensAcabando} />
            </div>
            <div>
                <form onSubmit={addItem}>
                    <input
                        type="text"
                        value={nameItem}
                        required
                        onChange={(ev) => setNameItem(ev.target.value)}
                    />
                    <input
                        type="number"
                        value={qntdItem}
                        required
                        onChange={(ev) => setQntdItem(ev.target.value)}
                    />
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </>
    )
}