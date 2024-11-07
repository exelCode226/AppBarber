// Importa dotenv para manejar variables de entorno
import dotenv from 'dotenv';

// Carga las variables de entorno desde un archivo .env
// Esto permite configurar valores sensibles fuera del código
dotenv.config();

// Configuración general de la aplicación
const config = {
  // Configura el puerto de la aplicación, con un valor predeterminado de 4000 si PORT no está definido
  port: process.env.PORT || 4000,

  // URI de conexión a la base de datos, con valor predeterminado si DB_URI no está en el archivo .env
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/barber-app',

  // Clave secreta para firmar tokens JWT, usa un valor predeterminado si JWT_SECRET no está definido
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',

  // SID de la cuenta de Twilio para la autenticación de API
  accountSid: process.env.ACCOUNTSID || 'your_account_sid',  // Cambia a tu Account SID real de Twilio

  // Token de autenticación de Twilio para proteger las llamadas a la API
  authToken: process.env.AUTHTOKEN || 'your_auth_token',    // Cambia a tu Auth Token real de Twilio

  // Configuración del servicio de correo electrónico
  emailService: {
    // Nombre del servicio de correo electrónico (por ejemplo, Gmail)
    service: process.env.EMAIL_SERVICE || 'gmail',

    // Correo electrónico del remitente de notificaciones
    user: process.env.EMAIL_USER || 'exelagualimpia@gmail.com',

    // Contraseña del correo electrónico, con valor predeterminado para seguridad
    pass: process.env.EMAIL_PASS || 'your-email-password'   // Cambia a tu contraseña real
  },
  // Aquí puedes agregar otras configuraciones o servicios adicionales
};

// Exporta la configuración para su uso en otros módulos de la aplicación
export default config;
