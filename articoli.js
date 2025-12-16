import express from "express";
import  {articoli}  from "./data.js";
import { log } from "console";

const app = express()
const port = 8888

app.get("/", (req,res)=>{
res.send("miao")
})
app.get("/bacheca",(req,res)=>{
    res.json(articoli)
})

app.listen(port, function(){
    console.log("il server è ascoltato dalla porta"+ port)
})
app.use(express.static("public"))