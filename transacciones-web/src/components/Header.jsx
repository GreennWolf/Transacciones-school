import React from "react";
import { useNavigate } from "react-router";

export function Header({usuario}){
    
    const nav = useNavigate()
    
    return <header>
        <h1 onClick={()=>{
            nav('/')
        }}>Transacciones App</h1>
        <h2>{usuario.apenom}</h2>
    </header>
}