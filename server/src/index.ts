import dotenv from "dotenv";
dotenv.config();
import express from "express"; 
import {createServer} from "http";
import { useHttp } from "./http";
import { useWebSocket } from "./websocket";
import cors from "cors";
 

const app=express();
app.use(cors());
const httpServer=createServer(app);

useWebSocket(httpServer);
useHttp(app);
const port = 3001;
httpServer.listen(port,()=>{
    console.log(`listening on *:${port}`);
})