// Importa las dependencias necesarias
import express from 'express'                 // Framework para crear aplicaciones web en Node.js
import config from './src/config/config.js'   // Configuración general de la aplicación (puerto, URI de BD, etc.)
import conection from './db.js'               // Función para conectar a la base de datos
import configureMiddleware from './src/middlewares/middlewares.js'
import configureRoutes from './src/routes/routes.js'

// Crea una instancia de la aplicación Express
const app = express()

// Ruta de prueba para verificar si el servidor responde correctamente
app.get("/", (req, res) => {
    res.send("Hola mundo")
})

// Conexión a la base de datos
conection(config.dbURI).catch(error => {
    console.error("Error al conectar con la base de datos:", error)
});


// Rutas de la API y midlewares
// Configurar middlewares y rutas
configureMiddleware(app);
configureRoutes(app);

// Inicia el servidor en el puerto especificado en la configuración
app.listen(config.port, () => {
    console.log(`Servidor escuchando por el puerto ${config.port}`)
})
