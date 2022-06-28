import {useCartContext} from "../context/CartContext"
import { BsTrash } from "react-icons/bs"
import CarritoVacio from "./carritoVacio"
import { Link } from "react-router-dom"


const Cart = () => {

const {cart, precioTotal, vaciarCarrito, eliminarItem} = useCartContext()

if (cart.length === 0) return <CarritoVacio/>
   

    return (
        <div className="container my-5">
             <h2>Carrito</h2>
             <hr></hr>

            {
             cart.map((item) => (
                <div key={item.id} className="my-2">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad:{item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => eliminarItem(item.id)} className="btn btn-danger"><BsTrash/></button>
                    <hr/>
                </div>
             ))

            }



                <h4>TOTAL: ${precioTotal()} </h4>  
                <button onClick={vaciarCarrito} className="bt btn-danger">Vaciar Carrito</button> 
                <Link to="/checkout" className="btn btn-success mx-4">Terminar mi Compra</Link>
        </div>
    )
   
}


export default Cart