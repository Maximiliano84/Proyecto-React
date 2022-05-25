import { Button } from 'react-bootstrap';

const ItemListContainer = ({nombre, color, precio})=>{

    return (
        <section className='container my-5'>
            <h2>Nuestros productos</h2>
            <hr/>

            <p> <b>PRODUCTO:</b> {nombre} </p>
            <p> <b>COLOR:</b> {color} </p>
            <p><b>PRECIO:</b> {precio} </p>
            <Button variant="success">Agregar</Button><Button variant="danger" size="sm">Quitar</Button>
            
        </section>

       
    )
}

export default ItemListContainer;