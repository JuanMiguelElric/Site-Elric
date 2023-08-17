import React, {useState} from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

import "../App.css";


const Singup = () => {
    const [email, setEmail]= useState("");
    const [emailconf, setEmailConf]= useState("");
    const [senha, setSenha]= useState("");
    const [error, setError]= useState("");
    const {signup}=useAuth();

    const enviofor = (event) => {
        event.preventDefault();
        if(!email | !emailconf | !senha){
          setError("Preencha todos os campos");
          return;
        }else if(email !== emailconf){
          setError("os email não são iguais");
          return;
        }
        const res = signup(email,senha);
        if (res) {
          setError(res);
          return;
        }
        alert("usuário cadastrado com sucesso!")
    }
    return(
        <div>
            <div className="formulario">
                <h1>Cadastrar-se</h1>
                <form onSubmit={enviofor}>
                    <label>
                        Nome: <br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu Email" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Email: <br />
                        <input type="email" value={emailconf} onChange={(e)=> setEmailConf(e.target.value)} placeholder="Confrime seu email" />

                    </label>
                    
                    <br />
                    <br />
                    <label>
                        Senha:<br />
                        <input type="password" onChange={(e)=> setSenha(e.target.value)} placeholder="Digite uma senha" value={senha}  />
                    </label>
                    <br />
                    <br />
                    <small > {error}</small>
                    <small>Tem conta ? <Link to="/login">Acesse aqui!</Link></small>
                    <br />
                    <br />
                    <br />
                    <button className="submit" type="submit" > Cadastrar-se</button>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Singup;