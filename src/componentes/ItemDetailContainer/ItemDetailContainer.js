import { useEffect, useState } from "react";
import productos from "../mock/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("...");
                }
            }, 2000);
        });

    useEffect(() => {
        getItem(productos)
            .then((res) => setItem(res))
            .catch((err) => console.log(err));

    }, []);

    return (
        <div  className="container my-5">
            <h2>Detalles del Producto</h2>
            <ItemDetail item={item} />
        </div>
        
    );
}

export default ItemDetailContainer; 