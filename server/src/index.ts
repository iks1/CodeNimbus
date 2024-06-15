import express from "express";
import {createServer} from "http";

const app=express();

const httpServer=createServer(app);
const port = 3001;
httpServer.listen(port,()=>{
    console.log(`listening on *:${port}`);
})