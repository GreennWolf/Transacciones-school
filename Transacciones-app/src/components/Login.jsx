import React, { useState } from "react";
import { View,Text, TextInput, Button } from "react-native";
import loginStyle from '../style/loginStyle'
import { useNavigate } from "react-router-native";

export function Login({usuarios}){

    const [dni , setDni] = useState('')
    const [contraseña , setContraseña] = useState('')
    const [error , setError] = useState('')

    const nav = useNavigate()
    
    function Comprobar(){
        console.log(usuarios)
        const usuario = usuarios.find(usuario => usuario.dni == dni && usuario.password == contraseña)
        if(usuario != undefined && usuario != null){
            console.log(usuario.idusuario)
            nav(`/main/${usuario.idusuario}`)
        }else{
            console.log(false,usuario,contraseña,dni)
            setError('No se encontro el usuario , contraseña o dni incorrecto')
        }
    }

    return <View style={loginStyle.container}>
        <Text style={loginStyle.title}>Inica Sesion</Text>
        <TextInput style={loginStyle.input} onChangeText={(value)=>{
            setDni(value)
        }} keyboardType="number-pad" placeholder="D.N.I"></TextInput>
        <TextInput style={loginStyle.input} onChangeText={(value)=>{
            setContraseña(value)
        }}  textContentType="password" autoCapitalize={'none'} secureTextEntry={true} type  placeholder="Contraseña"></TextInput>
        <Text style={loginStyle.error}>{error}</Text>
        <Button onPress={()=>{
            Comprobar()
        }} title="Inciar Sesion"></Button>
    </View>
}