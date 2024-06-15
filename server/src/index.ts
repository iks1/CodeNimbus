import express from "express";
import {createServer} from "http";
import { useHttp } from "./http";
import { useWebSocket } from "./websocket";

const app=express();
const httpServer=createServer(app);


useHttp(app);
useWebSocket(httpServer);
const port = 3001;
httpServer.listen(port,()=>{
    console.log(`listening on *:${port}`);
})