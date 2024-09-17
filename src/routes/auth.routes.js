import  Route  from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";

const route=Route()

route.post('/register',register)
route.post('/login',login)
route.post('/logout',logout)

export default route