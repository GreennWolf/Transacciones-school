import express from 'express';
import { Server } from 'socket.io';
import http, { validateHeaderValue } from 'http';
import mysql from 'mysql';
import cors from 'cors';

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agricola',
});

con.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});


io.on('connection',(socket)=>{
    // console.log('CONNECTED::' + socket.id)

    socket.on('getUsuarios',()=>{
        con.query(
            'SELECT * FROM usuarios',
            function(err, usuarios) {
                if (err) throw err;
                io.emit('putUsuarios',usuarios)
                console.log(usuarios)
            }
        );
    })

    socket.on('getSectores',()=>{
        con.query(
            'SELECT * FROM sectores',
            function(err, sectores) {
                if (err) throw err;
                io.emit('putSectores',sectores)
                console.log(sectores)
            }
        );
    })

    socket.on('getProductos',()=>{
        con.query(
            'SELECT * FROM productos',
            function(err, productos) {
                if (err) throw err;
                io.emit('putProductos',productos)
                console.log(productos)
            }
        );
    })

    socket.on('getTransacciones',()=>{
        con.query(
            'SELECT * FROM transacciones',
            function(err, Transacciones) {
                if (err) throw err;
                io.emit('putTransacciones',Transacciones)
                console.log(Transacciones)
            }
        );
    })

    socket.on('getTransaccionesPen',()=>{
        con.query(
            'SELECT * FROM transacciones_pen',
            function(err, Transacciones_pen) {
                if (err) throw err;
                io.emit('putTransaccionesPen',Transacciones_pen)
                console.log(Transacciones_pen)
            }
        );
    })

    socket.on('getCargos',()=>{
        con.query(
            'SELECT * FROM cargos',
            function(err, cargos) {
                if (err) throw err;
                io.emit('putCargos',cargos)
                console.log(cargos)
            }
        );
    })

    socket.on('sendTransaccion',(data)=>{
        console.log(data)
        const {idusuario,idsectorO,idsectorD,idproducto,cantidad,fecha} = data
        con.query(
            `INSERT INTO \`transacciones_pen\` (\`idusuario\`, \`idsector_o\`, \`idsector_d\`, \`idproducto\`, \`cantidad\`, \`fecha\`) VALUES ('${idusuario}','${idsectorO}','${idsectorD}','${idproducto}','${cantidad}','${fecha}')`,
            function(err, Transacciones) {
                if (err) throw err;
                console.log(Transacciones)
            }
        );        
    })

    socket.on('createAccount',(data)=>{
        console.log(data,'data cuebta')
        const {apenom,password,dni,cargo,admin} = data
        console.log(admin)
        var validacion ;
        if(admin){
            validacion = 1
        }else{
            validacion = 0
        }
        con.query(
            `INSERT INTO \`usuarios\` (\`apenom\`, \`dni\`, \`password\`, \`idcargo\`, \`admin\`) VALUES ('${apenom}','${dni}','${password}','${cargo}','${validacion}')`,
            function(err, account) {
                if (err) throw err;
                console.log(account)
            }
        );        
    })
})

server.listen(5000,()=>{
    console.log('listen port 5000')
})