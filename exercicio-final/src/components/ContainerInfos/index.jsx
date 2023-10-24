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

    useEffect(() => {
        let total = 0
        listItens.forEach(item => {
            total += item.qntdItem
        })
        
        setTotalItens(total)
        setItensAcabando(itensAcabando)
    }, [listItens])

    const addItem = (ev) => {
        ev.preventDefault()

        const newItem = {
            id: Math.floor(Math.random() * 100000),
            nameItem: nameItem,
            qntdItem: qntdItem,
            addData: new Date()
        }

        setListItens((state) => [...state, newItem])
        setNameItem("")
        setQntdItem("")
    }

    console.log(listItens)

    return (
        <>
            <div className="ContainerInfos">
                <BoxInfos infoTitulo={"Diversidade de itens"} infoQntd={listItens.length} />
                <BoxInfos infoTitulo={"Inventário total"} infoQntd={totalItens} />
                <BoxInfos infoTitulo={"Itens recentes"} infoQntd={0} />
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