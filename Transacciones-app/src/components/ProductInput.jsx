import React, { useEffect, useState } from "react";
import mainStyle from "../style/mainStyle";
import { Text,View,TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export function ProductInput({productos,idsectorO,idsectorD,setCantidad,setIdProducto}){

    const [producto,setProducto] = useState('')
    const [prodList,setProdList] = useState([])
    const [defaultProd,setdefaultProd] = useState(prodList[0])
    useEffect(()=>{
        productos.map(producto =>{
            if(producto.idsector == idsectorO){
                prodList.push(producto.nombre)
                // console.log(producto,prodList)
            }
        })

        prodList.map(prod =>{
            const producto = productos.find(producto => producto.nombre == prod)
            if(producto.idsector != idsectorO){
                var indice = prodList.indexOf(producto.nombre); // obtenemos el indice
                prodList.splice(indice, 1)
                console.log(prodList)
            }
        })
        
        setdefaultProd(prodList[0])
        setProducto(prodList[0])
    },[idsectorO])

    useEffect(()=>{
        setProducto(prodList[0])
        setdefaultProd(prodList[0])
    },[])

    useEffect(()=>{
        const prod = productos.find(prod => prod.nombre == producto)
        if(prod != undefined){
            console.log(prod.idproducto)
            setIdProducto(prod.idproducto)
        }
    },[producto])

    return  <View style={mainStyle.productosContainer}>
    <View style={mainStyle.productosSubcontainer}>
        <Text>Producto</Text>
        <SelectDropdown data={prodList} defaultValue={defaultProd} onSelect={(val)=>{
            setProducto(val)
        }} ></SelectDropdown>
    </View>
    <View style={mainStyle.productosSubcontainer}>
        <Text>Cantidad</Text>
        <TextInput keyboardType="number-pad" onChangeText={(val)=>{
            setCantidad(val)
        }} style={mainStyle.input}/>
    </View>
    {/* <View style={mainStyle.productosSubcontainer}>
        <Text style={mainStyle.productText}>-</Text>
    </View> */}
</View>
}