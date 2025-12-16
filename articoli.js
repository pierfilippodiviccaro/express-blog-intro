import express from "express";
import { articoli } from "./data.js";

const app = express()
const port = 3000

app.get("/", (req,res)=>{
res.send("miao")
    console.log("ciao dalla miao corporation");

})
app.get("/articoli")