import { useEffect, useState } from "react"
import "./styles.css"
import BoxInfos from "../BoxInfos"
import useListItens from "../../hooks/useListItens"

export default function ContainerInfos({ addNovoItem, listItens, addNovoItemAcabando,  addNovoItemRecente }) {
    const { addItem } = useListItens()
    const [ nameItem, setNameItem ] = useState("")
    const [ qntdItem, setQntdItem ] = useState(0)
    const [ totalItens, setTotalItens ] = useState(0)
    const [ itensAcabando, setItensAcabando ] = useState(0)
    const [ itensRecentes, setItensRecentes ] = useState(0)

    useEffect(() => {
        let dataHoje = Date.now()
        let total = 0
        listItens.forEach(item => {
            total += Number(item.qntdItem)
            return setTotalItens(total)
        })
        listItens.forEach(item => {
            if(Number(item.qntdItem) < 10) {
                return setItensAcabando(itensAcabando + 1)
            }
        })
        listItens.forEach(item => {
            if(item.addData - dataHoje <= 10) {
                const itemRecente = {
                    id: item.id,
                    nameItem: item.nameItem
                }
                addNovoItemRecente(itemRecente)
                return setItensRecentes(itensRecentes + 1)
            }
        })
    }, [listItens])

    const formItem = (ev) => {
        ev.preventDefault()

        addItem({ nameItem, qntdItem, desc: "Olá, mundo!" })

       // if (Number(item.qntdItem) < 10 ) {
       //     const itemAcabando = {
       //         id: item.id,
       //         nameItem: item.nameItem,
       //         qntdItem: item.qntdItem
       //     }
       //     addNovoItemAcabando(itemAcabando)
       // }

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
                <form onSubmit={formItem}>
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