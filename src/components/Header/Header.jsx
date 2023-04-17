import React from "react";
import mikaellAvatar from "../../assets/foto.jpg";

import "./Header.css"

function Header() {
    return (    
        <header>
            <img src={mikaellAvatar} alt="Foto de rosto de Mikaell" />
            <h1>Mikaell Bezerra da Silva</h1>
            <h3>Aluno Comeia Academy</h3>
        </header>
      )    
}

export default Header;