import express from 'express'
import config from './src/config/config.js'
import conection from './db.js'
import errorMiddleware from './src/middlewares/errorMiddlewares.js'
import authRoutes from './src/routes/auth.routes.js'
import citasRoutes from './src/routes/citas.routes.js'
import morgan from "morgan";
import { authMiddleware } from './src/middlewares/validateToken.js'
import cookieParser from 'cookie-parser'
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cookieParser())
app.get("/",(req,res)=> {
    res.send("Hola mundo")
})

conection(config.dbURI)

app.use('/api/auth',authRoutes)
app.use('/api',authMiddleware,citasRoutes)
app.use(errorMiddleware)

app.listen(config.port,()=> {
    console.log(`Servidor escuchando por el puerto ${config.port}`)
})

