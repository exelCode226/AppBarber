// Importa el módulo jsonwebtoken para manejar tokens JWT
import jwt from 'jsonwebtoken';
// Importa la configuración del proyecto, que contiene el secreto para verificar el token
import config from '../config/config.js';

// Middleware de autenticación
// Este middleware verifica si el usuario tiene un token válido antes de permitir el acceso
export const authMiddleware = (req, res, next) => {
    // Obtiene el token de las cookies o del encabezado de autorización
    const token = req.cookies.token || req.headers['authorization'];

    // Verifica si el token está presente
    if (!token) {
        // Si no hay token, responde con un error 401 (no autorizado)
        return res.status(401).json({ message: "Acceso denegado. No hay token." });
    }

    try {
        // Verifica el token usando el secreto configurado en el proyecto
        const decoded = jwt.verify(token, config.jwtSecret);
        
        // Almacena el ID del usuario decodificado en la solicitud para uso posterior
        req.userId = decoded.id;
        
        // Pasa al siguiente middleware o controlador si el token es válido
        next();
    } catch (error) {
        // Si el token es inválido o ha expirado, responde con un error 401
        return res.status(401).json({ message: "Token inválido." });
    }
};
