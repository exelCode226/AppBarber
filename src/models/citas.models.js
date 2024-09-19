import mongoose from 'mongoose';

const citaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  barbero: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fechaHora: { type: Date, required: true },
  telefono: { type: String, required: true },
  tipoCorte: { type: String, required: true },
  duracion: { type: Number, required: true }, // En minutos
  precio: { type: Number, required: true, min: 0 },
  pagoAdelantado: { type: Boolean, default: false },
  referenciaPago: { type: String },
  estado: {
    type: String,
    enum: ['programada', 'completada', 'cancelada'],
    default: 'programada',
  },
  notas: { type: String },
}, {
  timestamps: true, // Añade campos de `createdAt` y `updatedAt`
});

const Cita = mongoose.model('Cita', citaSchema);

export default Cita;
