import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.send("nombre: Luis Sepulveda cedula: 28306536 seccion: 3")
})

app.listen(3000)
console.log('server on port', 3000)