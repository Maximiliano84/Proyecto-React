//import { useState, useEffect } from "react"
//import { Link } from "react-router-dom"

const ItemCount = ({stock, setCounter, counter, handleAgregar}) => {
    
    const handleSumar = ()=> {
        if(counter < stock){
            setCounter(counter + 1)
        }else{
             alert("No hay stock")
            }
}

    const handleRestar = ()=> {
    if(counter > 1){
        setCounter(counter - 1)
    }else{
        alert("No puede elegir menos de 1 producto")
    }
}


return(
        <div className="container my-3">
            <h2>Counter</h2>
            <p><b>Stock: </b>{stock} </p>
            <h4> {counter} </h4>
            <button className="btn btn-primary" onClick={handleRestar}>-</button>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            <hr/>
            
           
            <button className="btn btn-success" onClick={handleAgregar}>AGREGAR AL CARRITO</button>
           
        </div>
)
}

export default ItemCount