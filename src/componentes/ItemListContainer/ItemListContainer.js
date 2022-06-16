import {  useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import ItemList from '../itemlist/itemList';
import { pedirDatos } from '../mock/pedirDatos';


const ItemListContainer = ()=>{




    const [items, setItems] = useState([])
    const [loading, setloading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(()=>{
        setloading(true)

        pedirDatos()
        .then((resp)=>{
            if(!categoryId){
            setItems(resp)  
            }else{
                setItems (resp.filter((item) => item.categoria === categoryId))
            }
        
        
        } )
        .catch((error) =>{
            console.log(`Error`, error)
        } )
        .finally(()=>{
            setloading(false)
        }
        )
    },[categoryId] )    


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
            {/* {
                 loading
                 ?   <Spinner animation="grow" />
 
                 : <ItemDetailContainer/>
            } */}




        </section>
    )
}

export default ItemListContainer;