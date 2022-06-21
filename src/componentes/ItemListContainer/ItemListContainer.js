import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemlist/itemList';
import Loader from '../Loader/Loader';
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
        
            
            {
                loading
                ?   <Loader/>

                : <ItemList items={items}/>
            }
            




        </section>
    )
}

export default ItemListContainer;