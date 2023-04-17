import React from "react";

import "./ItemPortifolio.css";

function ItemPortifolio(props) {
    return (
        <div className="item-portfolio">
                        <a href={props.link} title={props.tittle} target="_blank">
                            <img src={props.imagem} alt={props.alt} />
                            <p>
                                {props.texto}
                            </p>
                        </a>
                    </div>
    )
}

export default ItemPortifolio;