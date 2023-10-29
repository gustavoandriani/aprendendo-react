import { Link, useParams } from "react-router-dom"
import useListItens from "../hooks/useListItens"
import MuiButton from "../components/MuiButton"

export default function Item() {
    const { items } = useListItens()
    const { itemId } = useParams()

    const item = items.find(i => i.id === +itemId)

    if (!item) {
        return (
            <h2>Oops... Item não encontrado!</h2>
        )
    }
    return(
        <section>
            <Link to="/itens">
                <MuiButton 
                    textButton="Voltar"
                    colorButton="secondary"
                />
            </Link>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <MuiButton 
                textButton={item.qntd}
                colorButton="success"
            />
        </section>
    )
}