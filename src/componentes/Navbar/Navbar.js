import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";
const Navbar  = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">PROYECTO CODER</h1>

                <nav className="header__navbar">
                    <p className= "header__navlink">Enlace 1</p>
                    <p className= "header__navlink">Enlace 2</p>
                    <p className= "header__navlink">Enlace 3</p>
                </nav>
                 <div className="cart">
                   <CartWidget/>
                </div>
             </div>   
        </header>
    )
}

export default Navbar