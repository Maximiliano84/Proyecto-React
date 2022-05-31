import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import Navbar from './componentes/Navbar/Navbar';
//import Nosotros from "./componentes/Nosotros/Nosotros";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import CartWidget from './componentes/CartWidget/CartWidget';
//import Counter from "./componentes/counter/counter"
import ItemCount from './componentes/ItemCount/ItemCount';
function App() {

  const producto= {
    nombre: `Gorro de Lana`,
    color: `Negro`,
    precio: `$1200`
  }

 
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/> 

         {/* <Counter/> */}
         <ItemCount stock="10" initial="1"/>

         <CartWidget/>
         <ItemListContainer nombre= {producto.nombre} color= {producto.color} precio={producto.precio} />
   
      </header>
  
    </div>
  );
}

export default App;
