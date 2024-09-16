import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Configuración general
const config = {
  port: process.env.PORT || 4000,
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/barber-app',
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
  emailService: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    user: process.env.EMAIL_USER || 'your-email@example.com',
    pass: process.env.EMAIL_PASS || 'your-email-password'
  },
  // Agregar otros servicios o configuraciones aquí
};

export default config;
