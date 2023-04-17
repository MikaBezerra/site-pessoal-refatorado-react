import React from "react";

import {Link} from "react-router-dom";

import "./Navbar.css"

function Navbar () {
    return (
        <nav>
          <ul>
            <li><Link to="/" className="buttom-menu">Home</Link></li>
            <li><Link to="/portfolio" className="buttom-menu">Portfolio</Link></li>
            <li><Link to="/contato" className="buttom-menu">Contato</Link></li>
          </ul>
        </nav>
    )
}

export default Navbar;