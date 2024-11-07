// routes.js
import citasRoutes from './citas.routes.js'
import authRoutes from './auth.routes.js'
import {authMiddleware} from '../middlewares/validateToken.js'
import errorMiddleware from '../middlewares/errorMiddlewares.js'

const configureRoutes = (app) => {
    app.get("/", (req, res) => res.send("Hola mundo"));
    app.use('/api/auth', authRoutes);
    app.use('/api', authMiddleware, citasRoutes);
    app.use(errorMiddleware);
};

export default configureRoutes;
