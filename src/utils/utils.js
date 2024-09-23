import Joi from 'joi';

class Validator {
  static validateRegister(data) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      vPassword: Joi.ref('password'), // Verificar que las contraseñas coincidan
      role:Joi.string().required()
    });

    return schema.validate(data);
  }

  static validateLogin(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    });

    return schema.validate(data);
  }

  static validateCreateCita(data) {
    const schema = Joi.object({
      cliente: Joi.string().required(),
      barbero: Joi.string().required(),
      fechaHora: Joi.date().iso().required(),
      tipoCorte: Joi.string().required(),
      telefono:Joi.string().required(),
      duracion: Joi.number().min(10).required(),
      precio: Joi.number().required(),
      pagoAdelantado: Joi.boolean(),
      referenciaPago: Joi.string().allow('', null),
      estado: Joi.string().valid('programada', 'completada', 'cancelada').default('programada'),
      notas: Joi.string().allow('', null)
    });

    return schema.validate(data);
  }
}

export default Validator;
