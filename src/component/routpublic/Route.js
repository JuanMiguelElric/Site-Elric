import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../login/login"
import PaginaInicial from '../pageinicial/index';
import Singup from '../../singup/index';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../../screensappp/private/dashboard';

function Rota () {
    const Private = ({ Item}) =>{
        const{signed} = useAuth();
        return signed > 0? <Item /> :<signin />;
    };
    return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/cadastrar" element={<Singup />} />
        <Route  path="/dashboard" element={<Private Item={Dashboard} />} />
   
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<PaginaInicial />} />
        
      </Routes>
    </BrowserRouter>

    )
}
export default Rota;