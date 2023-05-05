import { Header } from "./components/Header";
import './style/app.css'
import { Menu } from "./components/Menu"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from 'socket.io-client'
import { CrearCuenta } from "./components/CrearCuenta";
import { useEffect, useState } from "react";
import { Login } from "./components/Login";

function App() {

  const socket = io('http://192.168.130.26:5000')
  const [usuarios , setUsuarios] = useState([])
  const [usuario , setUsuario] = useState('')

  const [sectores,setSectores] = useState([])
  const [cargos,setCargos] = useState([])
  const [productos,setProductos] = useState([])
  const [transacciones,setTransacciones] = useState([])
  const [transaccionesPen,setTransaccionesPen] = useState([])

  useEffect(()=>{
    GetUser()
    GetSectores()
    GetProductos()
    GetCargos()
    GetTransacciones()
    GetTransaccionesPen()
  },[])

  function GetUser(){
    socket.emit('getUsuarios')
    socket.on('putUsuarios',(usuarios)=>{
      setUsuarios(usuarios)
      console.log(usuarios)
    })
  }

  function GetProductos(){
    socket.emit('getProductos')
    socket.on('putProductos',(productos)=>{
      setProductos(productos)
      // console.log(productos)
    })
  }

  function GetTransacciones(){
    socket.emit('getTransacciones')
    socket.on('putTransacciones',(Transacciones)=>{
      setTransacciones(Transacciones)
      // console.log(Transacciones)
    })
  }

  function GetTransaccionesPen(){
    socket.emit('getTransaccionesPen')
    socket.on('putTransaccionesPen',(TransaccionesPen)=>{
      setTransaccionesPen(TransaccionesPen)
      // console.log(Transacciones)
    })
  }

  function GetSectores(){
    socket.emit('getSectores')
    socket.on('putSectores',(sectores)=>{
      setSectores(sectores)
      // console.log(sectores)
    })
  }

  function GetCargos(){
    socket.emit('getCargos')
    socket.on('putCargos',(cargos)=>{
      setCargos(cargos)
      console.log(cargos)
    })
  }

  return (
    <BrowserRouter>
      <Header usuario={usuario}/>
      <Routes>
        <Route path="/" element={<Login usuarios={usuarios} setUsuario={setUsuario}/>}/>
        <Route path="/Menu/:idusuario" element={<Menu usuarios={usuarios} setUsuario={setUsuario}/>}/>
        <Route path="/CrearCuenta" element={<CrearCuenta socket={socket}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
