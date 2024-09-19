import Route from "express";
import { postCitas,getCitasbyId,getCitas, updateCitas, deleteCitas } from "../controllers/citas.controllers.js";
import { authMiddleware } from "../middlewares/validateToken.js";
import { validate } from "../middlewares/validateData.js";
import Validator from "../utils/utils.js";

const route=Route()


route.post('/citas',authMiddleware,validate(Validator.validateCreateCita),postCitas)
route.get('/citas',authMiddleware,getCitas)
route.get('/citas/:id',authMiddleware,getCitasbyId)
route.put('/citas/:id',authMiddleware,updateCitas)
route.delete('/citas/:id',authMiddleware,deleteCitas)




export default route