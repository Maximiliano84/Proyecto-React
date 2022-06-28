import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { collection, getDocs, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { async } from "@firebase/util"

const Checkout = () => {
    

    const { cart, precioTotal, vaciarCarrito } = useCartContext()

    const [ orderId, setOrderId ] = useState(null)

    const [values, setValues] = useState({
        nombre: ``,
        email: ``,
        direccion:``
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        if (values.nombre.length < 5){
            alert("El nombre es demasiado corto")
            return
        }
        if (values.email.length < 5){
            alert("El nombre es invalido")
            return
        }
        if (values.direccion.length < 5){
            alert("Direccion incorrecta")
            return
        }

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: precioTotal()
        }

        
        const batch = writeBatch(db)
        const ordersRer = collection(db, "orders");
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), `in`, cart.map(el => el.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
       })

       if (outOfStock.length === 0) {
           addDoc(ordersRer, orden)
             .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                vaciarCarrito()
            })
       } else {
        alert("Hay items sin stock")
       }
     }
        
        if (orderId) {
            return (
                <div className="container my-5">
                <h2>Gracias por su compra!!!</h2>
                <hr/>
                <p>Su numero de orden es: {orderId} </p>
            </div>
        )
    }
    
    if (cart.length === 0){
        return <Navigate to={"/"}/>
    }
    
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"Nombre"}
                    className="form-control my-2"
                    />
                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"EMail"}
                    className="form-control my-2"
                    />
                <input
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"Direccion"}
                    className="form-control my-2"
                    />

                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>

                 <button onClick={vaciarCarrito} className="btn btn-danger my-2">Cancelar mi Compra</button>
        </div>
               
               )
            }
            
            export default Checkout


            // cart.forEach((item) => {
        
            //     const docRef = doc(db, "productos", item.id)
        
            //     getDoc(docRef)
            //         .then((doc) =>{
            //             if ((doc.data().stock - item.cantidad) >= 0){
            //                 updateDoc(docRef,{
            //                     stock: doc.data().stock - item.cantidad
            //                 })
            //             } else{
            //                alert("Sin stock:" + item.nombre) 
            //             }
            //         })
            // }) 