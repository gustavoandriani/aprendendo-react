import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
    const product = useLoaderData() //Esse HOOK já utilizar a função do "louder" disponível no router.jsx

    return (
        <section>
            <Link to="/products"><button>Voltar</button></Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
        </section>
    )
}