import { useEffect, useState } from "react"
import "./styles.css"
import BoxInfos from "../BoxInfos"
import useListItens from "../../hooks/useListItens"

export default function ContainerInfos() {
    const { items, addItem } = useListItens()
    const [ name, setName ] = useState("")
    const [ qntd, setQntd ] = useState(0)
    const [ totalItens, setTotalItens ] = useState(0)
    const [ itensAcabando, setItensAcabando ] = useState(0)
    const [ itensRecentes, setItensRecentes ] = useState(0)

    useEffect(() => {
        let dataHoje = Date.now()
        let total = 0
        items.forEach(item => {
            total += Number(item.qntd)
            return setTotalItens(total)
        })
        items.forEach(item => {
            if(Number(item.qntd) < 10) {
                return setItensAcabando(itensAcabando + 1)
            }
        })
        items.forEach(item => {
            if(item.addData - dataHoje <= 10) {
                return setItensRecentes(itensRecentes + 1)
            }
        })
    }, [items])

    return (
        <>
            <div className="ContainerInfos">
                <BoxInfos infoTitulo={"Diversidade de itens"} infoQntd={items.length} />
                <BoxInfos infoTitulo={"Inventário total"} infoQntd={totalItens} />
                <BoxInfos infoTitulo={"Itens recentes"} infoQntd={itensRecentes} />
                <BoxInfos infoTitulo={"Itens acabando"} infoQntd={itensAcabando} />
            </div>
        </>
    )
}