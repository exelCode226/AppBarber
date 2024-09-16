const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Imprime la traza del error en la consola

    // Verifica el tipo de error para enviar una respuesta adecuada
    if (err.status === 404) {
        res.status(404).send('Recurso no encontrado');
    } else if (err.status === 400) {
        res.status(400).send('Solicitud incorrecta');
    } else {
        res.status(500).send('Algo salió mal!');
    }
};

export default errorMiddleware;
