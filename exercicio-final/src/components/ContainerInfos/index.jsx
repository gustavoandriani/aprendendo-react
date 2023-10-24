import BoxInfos from "../BoxInfos"
import "./styles.css"
import CountDiversidade from "../../functions/CountDiversidade"
import CountInventarioTotal from "../../functions/CountInventarioTotal"
import CountItensAcabando from "../../functions/CountItensAcabando"

export default function ContainerInfos() {
    return (
        <div className="ContainerInfos">
            <BoxInfos infoTitulo={"Diversidade de itens"} infoQntd={CountDiversidade()} />
            <BoxInfos infoTitulo={"Inventário total"} infoQntd={CountInventarioTotal()} />
            <BoxInfos infoTitulo={"Itens recentes"} infoQntd={0} />
            <BoxInfos infoTitulo={"Itens acabando"} infoQntd={CountItensAcabando()} />
        </div>
    )
}