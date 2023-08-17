import React,{useState} from "react";
import "../../App.css"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () =>{
    const {signin} =useAuth();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] =useState("");
    const [error, setError] =useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !senha) {
          setError("Preencha todos os campos");
          return;
        }
        
        const res = await signin(email, senha);
    
        if (res) {
          setError(res);
          return;
        }else{
            navigate("/dashboard")

        }
        
      };

    return(
        <div>
            <div className="formulario">
                <h1>Entrar</h1>
                <form>
                    <label>
                        Email:<br />
                        <input type="email" placeholder="Email" onChange={(e) => [setEmail(e.target.value), setError("")]}/> 
                    </label>
                    <br />
                    <br />
                    <label>
                        Senha: <br />
                        <input color="black" type= "password" placeholder="Senha"onChange={(e) => [setSenha(e.target.value), setError("")]}/>
                    </label>
                    <br/>
                    <br />
                    <small>Não possio conta ? <Link to="/cadastrar">Clique Aqui</Link></small>
                    <br />
                    <small>{error}</small>
                    <br/>
                    <button className="submit" onClick={handleLogin}>Enviar</button>
                    
                </form>

            </div>

        </div>
    );
}
export default Login;