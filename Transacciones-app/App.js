import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/Login';
import { useEffect, useState } from 'react';
import { NativeRouter, Route, Routes} from 'react-router-native';
import { Main } from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import  io from 'socket.io-client';

export default function App() {

  const socket = io('http://192.168.130.26:5000')

  const [usuarios,setUsuarios] = useState([])
  const [sectores,setSectores] = useState([])
  const [productos,setProductos] = useState([])

  useEffect(()=>{
    socket.emit('getUsuarios')
    socket.on('putUsuarios',(usuarios)=>{
      setUsuarios(usuarios)
      // console.log(usuarios)
    })
    socket.emit('getSectores')
    socket.on('putSectores',(sectores)=>{
      setSectores(sectores)
      // console.log(sectores)
    })
    socket.emit('getProductos')
    socket.on('putProductos',(productos)=>{
      setProductos(productos)
      // console.log(productos)
    })
  },[])

  return (
    <NativeRouter>
        <StatusBar hidden/>
        <Routes>
          <Route path={'/'} exact element={<Login usuarios={usuarios}/>}></Route>
          <Route path={'/main/:idusuario'} exact element={<Main socket={socket} usuarios={usuarios} sectores={sectores} productos={productos}/>}></Route>
        </Routes>
    </NativeRouter>
  );
}
