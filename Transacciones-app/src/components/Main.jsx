import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import mainStyle from '../style/mainStyle'
import { ProductInput } from "./ProductInput";
import { useParams } from "react-router-native";

export function Main({usuarios,sectores,productos,socket}){

    const [sectoresName , setSectoresName] = useState([])

    const [sectorO,setSectorO] = useState(sectoresName[0])
    const [sectorD,setSectorD] = useState(sectoresName[0])
    const [idsectorO,setIdSectorO] = useState('')
    const [idsectorD,setIdSectorD] = useState('')
    const [idproducto , setIdProducto] = useState('')
    const [cantidad , setCantidad] = useState('')
    const {idusuario} = useParams()

    const usuario = usuarios.find(usuario => usuario.idusuario == idusuario)
    
    // console.log(usuario)

    const [fecha , setFecha] = useState(dateToMysqlDatetime(new Date))

    console.log(fecha)
    var data = {
        idusuario,
        idsectorO,
        idsectorD,
        idproducto,
        cantidad,
        fecha,
    }

    function dateToMysqlDatetime(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
      }


    useEffect(()=>{
        sectores.map(sector =>{
            sectoresName.push(sector.nombre)
            // console.log(sectoresName)
            setSectorO(sectoresName[0])
            setSectorD(sectoresName[0])
        })

    },[sectores])

    useEffect(()=>{
        const sectorDid = sectores.find(sectorDid => sectorDid.nombre == sectorD)
        const sectorOid = sectores.find(sectorOid => sectorOid.nombre == sectorO)
        if(sectorOid != undefined && sectorOid != null && sectorDid != undefined && sectorDid != null){
            setIdSectorD(sectorDid.idsector)
            setIdSectorO(sectorOid.idsector)
        }
    },[sectorD,sectorO])

    return <View style={mainStyle.container}>
        <View style={mainStyle.subcontainer}>
            <Text style={mainStyle.title}>Transacciones</Text>
            <Text>Se envia desde:</Text>
            <SelectDropdown data={sectoresName} defaultValue={sectoresName[0]} onSelect={(val)=>{
                setSectorO(val)
                console.log(val)
            }}></SelectDropdown>
            <Text>Se envia a:</Text>
            <SelectDropdown data={sectoresName} defaultValue={sectoresName[0]} onSelect={(val)=>{
                setSectorD(val)
                console.log(val)
            }}></SelectDropdown>
            <ProductInput idsectorD={idsectorD} idsectorO={idsectorO} setIdProducto={setIdProducto} setCantidad={setCantidad} productos={productos}/>
            <Pressable style={mainStyle.button}  onPress={()=>{
                socket.emit('sendTransaccion',data)
            }}><Text style={mainStyle.buttonText}>Enviar</Text></Pressable>
        </View>
    </View>
}