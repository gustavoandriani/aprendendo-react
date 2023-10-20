import { useState } from "react"

async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?")
    const data = await response.json()
    return data.results
}

export default function App() {
    const [pokemon, setPokemon] = useState([])
    const [pokemonShow, setPokemonShow] = useState(null)

    if (pokemon.length === 0) {
        fetchPokemon().then(results => {
            console.log("Requisição realizada.")
            console.log(results)
            setPokemon(results)
        })
    }

    const showDetails = async (url) => {
        const data = await fetch(url).then(res => res.json())
        console.log(data)
        setPokemonShow(data)
    }

    return (
        <div className="app">
            <div>
                <h2>Pokémon</h2>
                <ul className="pokemon">
                    {pokemon.map(mon => (
                        <li key={mon.name}>
                        <span>{mon.name}</span>
                        <button
                            onClick={() => showDetails(mon.url)}
                        >
                            Ver detalhes
                        </button>
                        </li>
                    ))}
                </ul>
            </div>

            {pokemonShow && (
                <div>
                    <h2>{pokemonShow.name}</h2>
                    <img 
                        src={pokemonShow.sprites.front_default} 
                        alt="" 
                    />

                    <div className="stat">
                        <b>Tipo: </b>
                        {pokemonShow.types.map(({type}) => (
                            <span key={type.name}>{type.name}</span>
                        ))}
                    </div>
                    <div className="stat">
                        <b>Altura: </b>{pokemonShow.height / 10}M
                    </div>
                    <div className="stat">
                        <b>Peso: </b>{pokemonShow.weight / 10}Kg
                    </div>
                    <div className="stat">
                        <b>Atributos</b>
                        <ul>
                            {pokemonShow.stats.map(({ base_stat, stat}) => (
                                <li key={stat.name}>
                                    {stat.name}: {base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="stat">
                        <b>Habilidades</b>
                        <ul>
                            {pokemonShow.abilities.map(({ ability, is_hidden }) => (
                                <li key={ability.name}>
                                    {ability.name}
                                    {is_hidden && " (secreta)"}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}