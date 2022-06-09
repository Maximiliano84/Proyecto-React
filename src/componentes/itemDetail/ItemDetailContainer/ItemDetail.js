import { useNavigate } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

 const navigate = useNavigate()

 const handleVolver = () => {
     navigate(-1)
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
                               <ItemCount initial="1" stock= "10"/>
                               <button onClick={handleVolver}>VOLVER</button>
                                    
                                 </div>
                         </div>
                      
                }
            </div>
        </>
    );
}

export default ItemDetail; 