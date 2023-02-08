import express from 'express';
import path  from 'path';
import { Server } from "socket.io";

const app = express();
const __dirname = path.resolve();
 app.use(express.static('public'));  

// app.get('/', (req, res)=> {  
//     const io = new Server(server);
//     io.on('connection',(socket)=>{
//         console.log(socket)
//         })

//     console.log('aman')
//     res.sendFile( __dirname + "/" + "idex.html" );  
//  })  


const server = app.listen(8000, ()=> {  
    const host = server.address().address  
      const port = server.address().port  
     console.log("Example app listening at http://%s:%s", host, port)  
    })  





