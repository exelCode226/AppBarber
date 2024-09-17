import config from "../config/config.js"
import { hashPassword } from "../middlewares/hashPassword.js"
import User from "../models/auth.models.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try {

        const { name, email, password, vPassword } = req.body

        // if (!name || !email || !password || !vPassword) {
        //     return res.status(400).json({ message: 'Por favor, ingresa todos los datos' });
        // }

        const userExiste = await User.findOne({ email })

        //if (password !== vPassword) return console.log('Datos incorrectos')
        if (userExiste) return res.send('Email ya esta en uso..')

        const Hashpassword = await hashPassword(password)



        const userCreate = await User.create({
            name: name,
            email: email,
            password: Hashpassword,


        })


        res.status(200).json({ mensaje: "Usuario registrado con exito", "User": userCreate })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error interno del servidor' });

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validación de datos
        if (!email || !password) return res.status(400).json({ message: "Ingresar todos los datos" });
        
        // Buscar usuario en la base de datos
        const existe = await User.findOne({ email });
        if (!existe) return res.status(404).json({ message: "Usuario no existe" });
        
        // Validar contraseña
        const ContraValida = await bcrypt.compare(password, existe.password);
        if (!ContraValida) return res.status(401).json({ message: "Contraseña incorrecta" });

        // Generar token JWT
        const token = jwt.sign({ id: existe._id }, config.jwtSecret, {
            expiresIn: '1h'
        });

        // Enviar cookie con el token
        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'production' // Solo en HTTPS en producción
        });

        // Respuesta exitosa
        res.status(200).json({ message: "Inicio de sesión exitoso", token });

    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const logout = async (req, res) => {

    // Limpiar la cookie que contiene el token
    res.clearCookie('token', {
        httpOnly: true, // Para asegurar que la cookie no es accesible por JavaScript del cliente
        secure: process.env.NODE_ENV === 'production' // Asegurar que la cookie solo se envía sobre HTTPS en producción
    });

    res.status(200).json({ message: "Logout exitoso" });
};



