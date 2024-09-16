import  Route  from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";

const route=Route()

route.post('/register',register)
route.get('/login',login)
route.get('/logout',logout)

export default route