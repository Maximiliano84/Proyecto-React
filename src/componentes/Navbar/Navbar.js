import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";
import{ Link } from "react-router-dom"

const Navbar  = () => {

    return (
        <header className="header">
            <div className="header__container">
                
                <Link to={"/"} ><h1 className="header__logo">PROYECTO CODER</h1></Link>

                <nav className="header__navbar">
                    <Link to= {"/categorias/pashminas"} className= "header__navlink">Pashminas</Link>
                    <Link to= {"/categorias/gorros"} className= "header__navlink">Gorros</Link>
                    <Link to= {"/categorias/bufandas"} className= "header__navlink">Bufandas</Link>
                    <Link to= {"/contacto"} className= "header__navlink">contacto</Link>
                    <Link to= {"/cart"} className= "header__navlink">cart</Link>
                </nav>
                 <div className="cart">
                   <CartWidget/>
                </div>
             </div>   
        </header>
    )
}

export default Navbar