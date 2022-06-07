import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    const producto = [...item][0]
    console.log(producto)

    return (
        <>
            <div>
                {
                    item.length ?
                        <>
                            <div>
                                <div>
                                    <img src={producto.img} alt={producto.img} />
                                </div>
                                <div>
                                    <h3>{producto.nombre}</h3>
                                    <h4>Precio:{producto.precio} </h4>
                                    <p>{producto.desc}</p>
                                    <ItemCount stock="10" initial="1"/>
                                    <button className="btn btn-primary">AGREGAR AL CARRITO</button>
                                </div>
                            </div>
                        </>
                        : "Cargando..."
                }
            </div>
        </>
    );
}

export default ItemDetail; 