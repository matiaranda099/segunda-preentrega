import "./navBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="class_nav">
                <div className="nav_tittle">
                    <NavLink to='/'><h1>XtreamGames</h1></NavLink>
                </div>
                <ul className="class_list">
                    <li>
                        <NavLink to='/categoria/PS4'>Juegos de Ps4</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/PS5'>Juegos de Ps5</NavLink>
                    </li>
                    <li>
                        <NavLink to='/carrito/Carrito'>Carrito</NavLink>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}