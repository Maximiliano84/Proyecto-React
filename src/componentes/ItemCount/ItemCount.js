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
    counter  > 1  && setCounter(counter - 1)
   }

if (stock === 0) {
    return(
         <div className="my-3">
        <p>SIN STOCK!!!</p>
    </div>
    )
}



return(
        <div className="container my-3">
            <h2>Counter</h2>
            <p><b>Stock: </b>{stock} </p>
            <h4> {counter} </h4>
            <button className={counter === 1? "btn btn-danger" : "btn btn-primary" } onClick={handleRestar}>-</button>
            <button className={counter === stock ? "btn btn-danger":"btn btn-primary"} onClick={handleSumar}>+</button>
            <hr/>
            
           
            <button className="btn btn-success" onClick={handleAgregar}>AGREGAR AL CARRITO</button>
           
        </div>
)
}

export default ItemCount