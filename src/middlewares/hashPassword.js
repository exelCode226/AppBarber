import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    try {
        const SALT = 10
        const hash = await bcrypt.hash(password, SALT)
        return hash
    } catch (error) {
        console.log(error)
    }

}