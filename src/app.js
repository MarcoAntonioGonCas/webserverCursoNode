const express = require('express');
const http = require('http');
const path = require('path');


const app = express();
const server = http.createServer(app);
var hbs = require('hbs');




app.set("view engine","hbs");
app.set("views",path.resolve("./src/views"));
hbs.registerPartials(path.resolve("./src/views/partials"));
app.use(express.static("./src/public"))


app.get("/", (req, res) => {
    res.render("home",{
        nombre:"Marco Antonio",
        titulo:"hola"})
})
app.get("/generic", (req, res) => {
    
    res.render("generic",{
        nombre:"Marco Antonio",
        titulo:"hola"})
})
app.get("/elements", (req, res) => {
    res.render("elements",{
        nombre:"Marco Antonio",
        titulo:"hola"})
})


app.get("*",(req,res)=>{
    // res.sendFile(path.resolve("./src/public/404.html"))
    res.sendFile(path.join(__dirname, "public/404.html"))
});

server.listen(3000,()=>{   
    console.log(`Servidor iniciado en el puerto: 3000`);
});