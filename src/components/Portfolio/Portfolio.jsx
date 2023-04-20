import React from "react";
import "./Portfolio.css"

import ItemPortifolio from "../itemPortfolio/itemPortifolio";
import portfolio from "./Portfolio.json";

function Portfolio() {
    return (
        <main>

            {portfolio.map(
                (item, index) => 
                <ItemPortifolio
                    key={index}
                    texto={item.texto}
                    link={item.link}
                    tittle={item.tittle}
                    imagem={item.imagem}
                    alt={item.alt}
                ></ItemPortifolio>       
            )}

        </main>
    )
}

export default Portfolio;