import express from "express"
import dotenv from "dotenv"

import cors from "cors"
import path from "path";

import cookieparser from "cookie-parser"

import authRoutes from "./routes/auth.route.js";

import messageRoutes from "./routes/message.route.js"

import { connectDB } from "./lib/db.js";


import {app,server} from "./lib/socket.js";
dotenv.config()
const PORT=process.env.PORT
const __dirname=path.resolve();




app.use(express.json());
app.use(cookieparser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"));
    })
}



server.listen(PORT,()=>{
    console.log("Server is runing on port:"+PORT);
    connectDB();
})