import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ItemList from '../itemlist/itemList';
import { pedirDatos } from '../mock/pedirDatos';
import { getItem } from '../ItemDetailContainer/ItemDetail';

const ItemListContainer = ()=>{

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
            {
                 loading
                 ?   <Spinner animation="grow" />
 
                 : <getItem/>
            }




        </section>
    )
}

export default ItemListContainer;