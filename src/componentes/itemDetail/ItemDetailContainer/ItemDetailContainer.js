import { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import { useParams } from 'react-router-dom';

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
},[itemId] )    


    return (
        <section className='container my-5'>
            
            {
                loading
                ? <Loader/>
                : <ItemDetail item={item} />
            }
    
        
        </section>
    )
}

export default ItemDetailContainer;