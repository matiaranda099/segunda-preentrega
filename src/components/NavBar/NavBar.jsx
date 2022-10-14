import "./navBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="class_nav">
                <div className="nav_tittle">
                    <h1>XtreamGames</h1>
                </div>
                <ul className="class_list">
                    <li>
                        <a href="https://www.google.com.ar/">Juegos</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ar/">Accesorios</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ar/">Audiovisuales</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}