import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import Navbar from './componentes/Navbar/Navbar';
//import Nosotros from "./componentes/Nosotros/Nosotros";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
// import CartWidget from './componentes/CartWidget/CartWidget';
// import Counter from "./componentes/counter/counter"
// import ItemCount from './componentes/ItemCount/ItemCount';
//import PokeApi from './componentes/ejemplos/PokeApi';}
import Nosotros from "./componentes/Nosotros/Nosotros"
import Contacto from "./componentes/Contacto/Contacto"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/itemDetail/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/cart/cart';
import  { CartProvider } from './componentes/context/CartContext';



function App() {
 


  return (
    
    
    <div className="App">
      <header className="App-header">
      <CartProvider>

        <BrowserRouter>
              <Navbar/> 

              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/nosotros' element={ <Nosotros/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='/cart' element={<Cart/>} />
                {/* <Route path='*' element={<Navigate to={"/"} />} /> */}
              </Routes>

              {/* <PokeApi/>      */}
             
              

              {/* <Counter/> */}
              

              {/* <CartWidget/>
              
              <ItemDetailcontainer/> */}
        </BrowserRouter>
       
      </CartProvider>
      </header>
  
    </div>
  );
}

export default App;
