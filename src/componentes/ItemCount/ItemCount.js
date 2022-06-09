import { useState, useEffect } from "react"


const ItemCount = ({stock}) => {

    const [contador, setContador]= useState(1)
    
    const incrementar = ()=> {
        if(contador < stock){
            setContador(contador + 1)
        }else{
             alert("No hay stock")
            }
}

    const decrementar = ()=> {
    if(contador > 1){
        setContador(contador - 1)
    }else{
        alert("No puede elegir menos de 1 producto")
    }
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
            <button className="btn btn-primary" onClick={agregar}>AGREGAR AL CARRITO</button>

            
            
        </div>
)
}

export default ItemCount