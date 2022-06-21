import { useEffect, useState } from "react"




const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
   
const handleSiguiente = () => {
    setId(id + 1)
}
const handleAnterior = () => {
    id > 1 && setId(id - 1)
}

console.log(id)

    useEffect(() => {

         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) =>  resp.json())
            .then((data) => {
            setPokemon(data)
            })

    },[id])

    return (
        <div className="container my-5">
            <h2>Poke API</h2>
            <hr></hr>

            <button className="btn btn-outline-primary" onClick={handleAnterior}>ANTERIOR</button> 
            <button className="btn btn-primary mx-3" onClick={handleSiguiente}>SIGUIENTE</button> 

            <h3>{pokemon?.name} </h3>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name}></img>
                


        </div>
    )
}

export default PokeApi