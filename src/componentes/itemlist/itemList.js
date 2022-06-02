import Item from "../Item/item";

const ItemList = ({items} ) =>{ 

    return (
                <div>
                    <h2>Nuestros productos</h2>
                    <hr/>
                    {
                    items.map((item) => <Item key={item.id} item={item}/> )
                     }
                </div>
    )           
}

export default ItemList;








    