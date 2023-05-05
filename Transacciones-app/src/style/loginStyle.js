import { StyleSheet,Dimensions} from 'react-native';


const loginStyle = StyleSheet.create({
    container:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        textAlign:'center',
        display:'flex',
        alignItems:'center',

    },
    title:{
        fontSize:40,
        marginTop:50,
        textAlign:'center',
        marginBottom:50,
    },
    input:{
        marginBottom:50,
        width:200,
        height:50,
        textAlign:'center',
        borderColor:'black',
        borderWidth:1,
    },
    error:{
        fontSize:18,
        width:210,
        textAlign:'center',
        color:'red',
        marginTop:-25,
        marginBottom:25,
    },
});
  

export default loginStyle