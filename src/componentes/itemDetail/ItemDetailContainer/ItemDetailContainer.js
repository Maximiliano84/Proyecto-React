import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Item from '../../Item/item';
import { pedirDatos } from '../../mock/pedirDatos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

const [item, setItem] = useState(null)
const [loading, setloading] = useState(true)

const { itemId } = useParams()
console.log(itemId)
console.log(item)

useEffect(()=>{
    setloading(true)

    pedirDatos()
    .then ((resp)=>{
        setItem( resp.find((Item) => Item.id === Number(itemId)))
    })
        
   
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
            
            {
                loading
                ? <Spinner animation="grow" />
                    

               
                : <ItemDetail item={item} />

            }
    
        
        </section>
    )
}

export default ItemDetailContainer;