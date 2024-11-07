// Importa el módulo bcrypt para realizar hashing de contraseñas
import bcrypt from 'bcrypt';

// Función para encriptar la contraseña de forma segura
export const hashPassword = async (password) => {
    try {
        // Define el número de rondas de hashing para generar el "sal" (salt) de forma segura
        const SALT_ROUNDS = 10;
        
        // Genera el hash de la contraseña utilizando el salt
        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        
        // Retorna la contraseña hasheada
        return hash;
    } catch (error) {
        // Registra cualquier error en la consola para depuración
        console.error('Error al hashear la contraseña:', error);
        
        // Devuelve `null` explícitamente en caso de error para un mejor manejo
        return null;
    }
};
