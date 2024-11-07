// Importa Route de Express para definir rutas
import Route from "express";

// Importa controladores para manejar la lógica de cada ruta
import { postCitas, getCitasbyId, getCitas, updateCitas, deleteCitas } from "../controllers/citas.controllers.js";

// Importa middleware de autenticación para proteger las rutas
import { authMiddleware } from "../middlewares/validateToken.js";

// Importa middleware de validación de datos
import { validate } from "../middlewares/validateData.js";

// Importa el validador para verificar datos de entrada según las reglas definidas
import Validator from "../utils/utils.js";

// Crea una instancia de Route para manejar rutas relacionadas con citas
const route = Route();

// Define las rutas para la entidad "citas", con validación y autenticación

// Ruta para crear una nueva cita (requiere autenticación y validación de datos)
route.post('/citas', authMiddleware, validate(Validator.validateCreateCita), postCitas);

// Ruta para obtener todas las citas (requiere autenticación)
route.get('/citas', authMiddleware, getCitas);

// Ruta para obtener una cita específica por su ID (requiere autenticación)
route.get('/citas/:id', authMiddleware, getCitasbyId);

// Ruta para actualizar una cita específica por su ID (requiere autenticación)
route.put('/citas/:id', authMiddleware, updateCitas);

// Ruta para eliminar una cita específica por su ID (requiere autenticación)
route.delete('/citas/:id', authMiddleware, deleteCitas);

// Exporta las rutas para su uso en otros módulos de la aplicación
export default route;
