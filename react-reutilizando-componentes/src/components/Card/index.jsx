import styles from "./styles.module.css"
import Button from "../Button"

export default function Card(props) {
    return (
        <div className={styles.container}> 
            <img className={styles.poster} src={props.poster} width={280}/>
                
            <div>

                <h2>Pôster: {props.title}</h2>
                <p>
                    Um pôster decorativo épico do filme {props.title}. com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
                </p>
                
                <Button text="Comprar agora"/>

            </div>
            
        </div>
    )
}