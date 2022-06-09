import { Link } from "react-router-dom"


const Item = ({item}) =>{

    return (
        <div >
            <h2>{item.nombre}</h2>
            <img src={item.img}/>
            <p>{item.desc} </p>
            <h4>Stock:{item.stock}</h4>
            <h4><b>Precio:</b>${item.precio}</h4>

            <Link to= {`/item/${item.id}`}>
                <button className="btn btn-primary my-2">Ver Mas</button>
            </Link>
            <hr></hr>
        </div>
    )
}

export default Item