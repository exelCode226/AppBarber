export const validate = (validationSchema) => {
    return (req, res, next) => {
      const { error } = validationSchema(req.body);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      next(); // Si no hay errores, continuar con el siguiente middleware o controlador
    };
  };
  