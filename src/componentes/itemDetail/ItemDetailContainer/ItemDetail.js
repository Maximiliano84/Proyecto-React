import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

 const [cantidad, setCantidad] = useState(1)

 const navigate = useNavigate()

 const handleVolver = () => {
     navigate(-1)
 }
 
 const handleAgregar = () => {
    const itemToCart = {
        ...item,
        cantidad
    }
    console.log(itemToCart)
}


    return (
        <>
            <div>
                {
                 <div>
                        <div>
                          <img src={item.img} alt={item.img} />
                        </div>
                         <div>
                               <h3>{item.nombre}</h3>
                               <h4>Precio:{item.precio} </h4>
                               <p>{item.desc}</p>
                               <ItemCount 
                               initial="1" 
                               stock= {item.stock} 
                               setCounter={setCantidad} 
                               counter={cantidad} 
                               handleAgregar={handleAgregar}
                              />

                               <button onClick={handleVolver}>VOLVER</button>
                                    
                         </div>
                </div>
                      
                }
            </div>
        </>
    );
}

export default ItemDetail; 