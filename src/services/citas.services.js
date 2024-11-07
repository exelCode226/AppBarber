import Cita from "../models/citas.models.js"



// Controlador para crear citas
export const obtenerCitas = async () => {
    try {
        return await Cita.find();
    } catch (error) {
        throw new Error('Error al obtener citas: ' + error.message);
    }
};


export const crearCitas = async (datos) => {
    try {
        console.log(datos.fechaHora);

        // Verificar si ya existe una cita en la misma fecha y hora
        const citaExiste = await Cita.findOne({ fechaHora: datos.fechaHora });
        if (citaExiste) { 
            throw new Error('Ya existe una cita en esta fecha y hora');
        }

        // Crear y guardar la nueva cita
        const nuevaCita = new Cita(datos);
        return await nuevaCita.save();

    } catch (error) {
        // Lanzar un error con el mensaje y detalles completos del error original
        throw new Error(`Error al crear la cita: ${error.message}`);
    }
}


export const getCitasbyId = async (id) => {
    return await Cita.findById(id)
};

export const updateCitas = async (id, datos) => {
    return await Cita.findByIdAndUpdate(id, datos, { new: true })
}

export const deleteCitas = async (id) => {
    return await Cita.findOneAndDelete(id)
}