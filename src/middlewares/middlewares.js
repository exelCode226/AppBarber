// middlewares.js
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const configureMiddleware = (app) => {
  // Middlewares
app.use(express.json())                       // Permite el manejo de JSON en las solicitudes
app.use(express.urlencoded({ extended: true })) // Permite manejar datos de formularios
app.use(morgan('dev'))                        // Registra cada solicitud en consola para propósitos de depuración
app.use(cookieParser())                       // Habilita el manejo de cookies
app.use(helmet())                             //es una buena práctica para proteger la aplicación con configuraciones de seguridad HTTP por defecto.

};

export default configureMiddleware;
