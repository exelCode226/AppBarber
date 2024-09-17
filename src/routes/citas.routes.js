import Route from "express";
import { postCitas } from "../controllers/citas.controllers.js";
import { authMiddleware } from "../middlewares/validateToken.js";
import { validate } from "../middlewares/validateData.js";
import Validator from "../utils/utils.js";

const route=Route()


route.post('/citas',authMiddleware,validate(Validator.validateCreateCita),postCitas)




export default route