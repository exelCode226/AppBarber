import User from "../models/auth.models.js"


export const serviceRegister = async (email) => {
    try {
        const existe = User.findOne({email})
        if (existe) {
            return('No existe el usuario')
        }
    } catch (error) {
        return('Error en el servidor',error)
    }
}