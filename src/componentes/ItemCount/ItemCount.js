import { useState, useEffect } from "react"


const ItemCount = ({stock}) => {

    const [contador, setContador]= useState(1)
    
    const incrementar = ({stock})=> {
        setContador(contador + 1)
        if(contador >= 10)
        alert("No hay stock")
}

    const decrementar = ({initial})=> {
    setContador(contador - 1)
    if(contador <= 1)
    alert("No puede elegir menos de 1 producto")
}

    const agregar = () => {
    console.log("Se esta agregando el producto")
}
   
useEffect(() => {
    console.log("componente montado")
},[contador])

return(
        <div className="container my-1">
            <h2>Counter</h2>
            <hr/>
            <p><b>Stock: </b>{stock} </p>
            <h4> {contador} </h4>
            <button className="btn btn-primary" onClick={decrementar}>-</button>
            <button className="btn btn-primary" onClick={incrementar}>+</button>
            <button className="btn btn-primary" onClick={agregar}>AGREGAR</button>

            
            <p>PyH del ultimo click: {new Date().toLocaleString()} </p>
        </div>
)
}

export default ItemCount