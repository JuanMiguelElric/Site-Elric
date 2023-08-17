import React from "react";
import "../../App.css";

import Menu from "../menu/menu";


const PaginaInicial = ()=>{
    return(
        <div>
            <Menu />
            <div className="texto">
                <h1>PROSPERIDADE  </h1>
                <h1>INTERSTELAR</h1>
                <br/>
                <br />
                <p> Você está pronto para impulsionar o seu negócio ou marca pessoal para novos horizontes? Apresento Soluções web sob meddida, do marketting a sistemas automaziadores.Projetado para empresas e pessoas físicas que desejam se destacar no mundo digital.Não perca mais tempo e entra nessa nave espacial de prosperidade.</p>
                <br />
                <br />
                <div>
                <button className="submit"> ACIONAR PROPULSÃO</button>

                </div>
            </div>
        </div>
    )
}
export default PaginaInicial;