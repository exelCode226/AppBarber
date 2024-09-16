import User from "../models/auth.models.js"

export const register = async (req, res) => {
    const { name, email, password, vPassword } = req.body
    const userExiste =await User.findOne({ email })
    if (password !== vPassword) return console.log('Datos incorrectos')
    if (!userExiste) return res.send('Email ya esta en uso..')
     const userCreate=await User.create({
        name: name,
        email: email,
        password: password,


    })
    res.status(200).json({ mensaje: "Usuario registrado con exito","User": userCreate })
}

export const login = async (req, res) => {
    res.send('Login')
}

export const logout = async (req, res) => {
    res.send('Logout')
}