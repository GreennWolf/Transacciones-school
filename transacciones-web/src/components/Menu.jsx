import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export function Menu({usuarios,setUsuario}){

    const nav = useNavigate()
    const {idusuario} = useParams()

    console.log(idusuario)

    const usuario = usuarios.find(usuario => usuario.idusuario == idusuario)

    useEffect(()=>{
        setUsuario(usuario)
    },[idusuario])

    return <main>
        <section className="menu">
            <div className="menu-btn" onClick={()=>{
                nav('/CrearCuenta')
            }}>Agregar Cuenta</div>
            <div className="menu-btn">Agregar Sector</div>
            <div className="menu-btn">Agregar Cargo</div>
            <div className="menu-btn">Agregar Producto</div>
            <div className="menu-btn">Transacciones Pendientes</div>
            <div className="menu-btn">Transacciones</div>
        </section>
    </main>
}