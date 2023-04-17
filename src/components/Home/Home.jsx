import React from "react";

import "./Home.css";
import data from "./Home.json";


function Home() {
    return (
        <>
            <section>
                <h2>Resumo</h2>
                <p>
                    {data.resumo}
                </p>
            </section>

            <section>
                <h2>Acadêmico</h2>
                <ul>
                    {data.academico.map((item,index) =>(
                        <li key={index}>
                            <b>({item.tempo})</b> - {item.informacao}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Profissional</h2>
                <ul>
                    {data.profissional.map((item,index) =>(
                        <li key={index}>
                            <b>({item.tempo})</b> - {item.informacao}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Home;