import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import hamburguer from "../../images/hamburguer.png";

function Menu() {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const hamburguertoogle= () =>{
        setMenuVisivel (!menuVisivel);
    };
    return(
        <div className="menu">
            <ul>
                <li className="Afastar">
                    <button onClick={hamburguertoogle}><img src={hamburguer} className="menuburg" alt="hamburguermenuicon"/></button>
                    {menuVisivel &&(

                    <div className="menu-bar fundomenu">
                        <div >
                            <button onClick={hamburguertoogle} className="botaofechar"> <FaTimes size={30}/></button>
                            <p>Planos</p>
                            <br/>
                            <p>Forma De pagamento</p>
                            <br/>
                            <p>Trabalhos Realizados</p>
                            <br/>
                            <p>Satisfação Dos Clientes</p>
                            <br/>
                            <p>
                                <Link className="texlink" to="/login">
                                    Entrar

                                </Link>
                            
                            </p>

                        </div>

                    </div>
                    )}

                </li>
                <li className="Afastar" > Seja bem vindo(a)!</li>
                <li> CONTATO</li>
                <li>Trabalhos </li>
                <li><Link className="texlink" to="/login">Entrar</Link></li>

            </ul>
        </div>
    );
}
export default Menu;