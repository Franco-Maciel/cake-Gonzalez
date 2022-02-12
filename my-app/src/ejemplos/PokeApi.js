/*import { useEffect, useState } from "react"

export const PokeApi = () => {
   
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    
    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( (resp) => resp.json() )
            .then( (data) => {
                setPokemon(data)
            })
    }, [id])

    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr/>

            {pokemon && 
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            }

            <hr/>
            <button 
                onClick={handleAnterior} 
                className="btn btn-outline-primary mx-3"
                disabled={id === 1}
            >
                Anterior
            </button>
            
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>
        </div>
    )
}*/