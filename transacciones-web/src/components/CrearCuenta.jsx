import React, { useState } from 'react'
import Escuela from '../Img/escuela.jpg'

export function CrearCuenta({socket}) {

    const [apenom,setApenom] = useState('')
    const [password,setPassword] = useState('')
    const [dni,setDni] = useState('')
    const [cargo,setCargo] = useState('')
    const [admin,setAdmin] = useState(false)

    function sendAccount(){
        const data ={
            apenom,
            password,
            dni,
            cargo,
            admin,
        }
        console.log(admin)
        socket.emit('createAccount',data)
    }

  return <div className="contenedor">
  <h1 className="logo"><span className="nombre-empresa">Crear cuenta</span> </h1>
  <div className="wrapper animated bounceInLeft">
    <div className="info-empresa">
      <ul className="servicios">
        <li><i className="fa fa-map-marker"></i><img src={Escuela} alt="Escuela"/></li>
      </ul>
    </div>
    <div className="contacto">
      <form className="formulario">
        <p>
          <label>Nombre</label>
          <input className='input-crear' onChange={(e)=>{
            setApenom(e.target.value)
          }} type="text" required/>
        </p>
        <p>
          <label>Contraseña</label>
          <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
        </p>
        <p>
          <label>Documento</label>
          <input type="text" id="dni"  onChange={(e)=>{
            setDni(e.target.value)
          }} maxlength="8"  onkeypress="return (event.charCode >= 45 && event.charCode <= 57)"/>
        </p>

        <p>
          <label>Cargo</label>
          <select onChange={(e)=>{
            setCargo(e.target.value)
          }} name="cargos" id="">
            <option value="1">Admin</option>
            <option value="2">Administrador</option>
          </select>
        </p>

        <p>
          <label id="label-admin">Admin</label>
          <input type="checkbox" id="input-admin" onClick={()=>{
            setAdmin(!admin)
            console.log(admin)
          }} className="mycheck"/> <label for="input-admin"></label>
        </p>

        
        <p class="full">
          <button onClick={()=>{
            sendAccount()
          }} className="boton-enviar">Enviar</button>
        </p>
      </form>
    </div>
  </div>
</div>
  
}

