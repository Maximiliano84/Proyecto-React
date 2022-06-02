import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import ItemList from '../itemlist/itemList';
import { pedirDatos } from '../mock/pedirDatos';


const ItemListContainer = ({nombre, color, precio})=>{

const [items, setItems] = useState([])
const [loading, setloading] = useState(true)


useEffect(()=>{
    setloading(true)

    pedirDatos()
    .then((resp)=>{
        setItems(resp)
       
    } )
    .catch((error) =>{
        console.log(`Error`, error)
    } )
    .finally(()=>{
        setloading(false)
    }
     )
},[] )    


    return (
        <section className='container my-5'>
            

            {/* <p> <b>PRODUCTO:</b> {nombre} </p>
            <p> <b>COLOR:</b> {color} </p>
            <p><b>PRECIO:</b> {precio} </p>
            <Button variant="success">Agregar</Button><Button variant="danger" size="sm">Quitar</Button> */}
            
            {
                loading
                ?   <Spinner animation="grow" />

                : <ItemList items={items}/>
            }

        </section>
    )
}

export default ItemListContainer;