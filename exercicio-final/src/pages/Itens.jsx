import useListItens from "../hooks/useListItens"

export default function Itens() {
    const { items } = useListItens()
    return (
        <div>
            {
                items > 0 ? (items.map((item) => (
                    <div>
                        <p>{}</p>
                        <p>{item.qntd}</p>
                        <p>{item.desc}</p>
                    </div>
                ))
                ) : null
            }
        </div>
    )
}