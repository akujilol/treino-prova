import express from "express";
import { veiculoRouter } from "./routes/route.js"; 

const port = 3000
const app = express()

app.use(express.json())
app.get("/", (req, res) =>{
    res.json ({
        mensagem: 'API FleetManage funcionando'
    })
})

app.use('/veiculos', veiculoRouter)
app.listen(port,() =>{
    console.log(`API rodando em http://localhost:${port}`)
})