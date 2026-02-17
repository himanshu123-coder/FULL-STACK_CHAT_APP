import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
 
let userCount = 0;

 let allSocket: WebSocket[] = [];
 wss.on("connection",(socket) =>{

    allSocket.push(socket);
    userCount = userCount +1;
    console.log("user Connected #" + userCount);
      socket.on("message", (message) =>{
        console.log("message recieved  " + message.toString());

        allSocket.forEach(s =>{
            s.send(message.toString() + ": its from server");
        })
      })
    
 })