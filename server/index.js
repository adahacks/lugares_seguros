
const express = require("express");

const {router} = require("./routes/index");

const server=express();


server.use(express.json());

server.use(router);
/*server.get('/saludar', (req,res)=>{
    return res.status(200).send("Hola mi nombre es Karina");
})*/

module.exports={server};