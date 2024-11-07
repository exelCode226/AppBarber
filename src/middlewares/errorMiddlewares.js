// Middleware de manejo de errores
// Este middleware captura y maneja errores en la aplicación
const errorMiddleware = (err, req, res, next) => {
    // Imprime la traza del error en la consola para depuración
    console.error(err.stack);

    // Verifica el tipo de error y envía una respuesta adecuada según el código de estado
    switch (err.status) {
        case 400:
            // Error 400: solicitud incorrecta
            res.status(400).send('Solicitud incorrecta');
            break;
        case 401:
            // Error 401: no autorizado
            res.status(401).send('No autorizado. Por favor, inicie sesión');
            break;
        case 403:
            // Error 403: prohibido
            res.status(403).send('Prohibido. No tiene permisos para acceder a este recurso');
            break;
        case 404:
            // Error 404: recurso no encontrado
            res.status(404).send('Recurso no encontrado');
            break;
        case 409:
            // Error 409: conflicto (por ejemplo, al intentar crear un recurso que ya existe)
            res.status(409).send('Conflicto. La solicitud no pudo ser procesada debido a un conflicto');
            break;
        case 429:
            // Error 429: demasiadas solicitudes (para limitar peticiones)
            res.status(429).send('Demasiadas solicitudes. Por favor, intente nuevamente más tarde');
            break;
        case 500:
            // Error 500: error interno del servidor
            res.status(500).send('Algo salió mal en el servidor!');
            break;
        case 503:
            // Error 503: servicio no disponible (cuando el servidor está sobrecargado o en mantenimiento)
            res.status(503).send('Servicio no disponible. Intente nuevamente más tarde');
            break;
        default:
            // Error desconocido: respuesta genérica para errores inesperados
            res.status(500).send('Error inesperado. Estamos trabajando en ello');
            break;
    }
};

// Exporta el middleware para usarlo en la configuración de rutas principales
export default errorMiddleware;
