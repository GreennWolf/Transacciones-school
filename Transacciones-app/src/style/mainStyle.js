import { StyleSheet,Dimensions} from 'react-native';


const mainStyle = StyleSheet.create({
    container:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        textAlign:'center',
        display:'flex',
        alignItems:'center',

    },
    subcontainer:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        display:'flex',
        alignItems:'center',
        marginTop:50,
    },
    productosContainer:{
        marginTop:10,
        width:Dimensions.get('screen').width,
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    productosSubcontainer:{
        display:'flex',
        alignItems:'center',
    },
    productText:{
        marginTop:19,
        width:50,
        height:50,
        backgroundColor:'#DC0000',
        color:'white',
        fontSize:50,
        borderWidth:1,
        borderColor:'black',
        textAlign:'center',

    },
    title:{
        fontSize:40,
        marginTop:20,
        textAlign:'center',
        marginBottom:50,
    },
    input:{
        width:50,
        height:50,
        textAlign:'center',
        borderColor:'black',
        borderWidth:1,
    },
    button:{
        marginTop:50,
        width:200,
        height:60,
        borderWidth:1,
        borderColor:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#05BFDB',
    },
    buttonText:{
        fontSize:20,
    },
});
  

export default mainStyle