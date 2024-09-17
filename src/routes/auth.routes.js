import  Route  from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validateData.js";
import Validator from "../utils/utils.js";

const route=Route()

route.post('/register',validate(Validator.validateRegister),register)
route.post('/login',login)
route.post('/logout',logout)

export default route