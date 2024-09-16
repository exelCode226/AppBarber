import express from 'express'
import config from './src/config/config.js'
import conection from './db.js'
import errorMiddleware from './src/middlewares/errorMiddlewares.js'
import authRoutes from './src/routes/auth.routes.js'
import morgan from "morgan";
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.get("/",(req,res)=> {
    res.send("Hola mundo")
})




conection(config.dbURI)



app.use('/api/auth',authRoutes)

app.use(errorMiddleware)

app.listen(config.port,()=> {
    console.log(`Servidor escuchando por el puerto ${config.port}`)
})

