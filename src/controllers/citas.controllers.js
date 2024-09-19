import Cita from "../models/citas.models.js"


export const postCitas = async (req, res) => {
    try {
        const { fechaHora, barbero, cliente, tipoCorte, duracion, precio, pagoAdelantado, referenciaPago, estado, notas } = req.body
        const existe = await Cita.findOne({ fechaHora })
        if (existe) return res.status(400).json({ message: "Esta cita ya esta ocupada" })
        const createCita = await Cita.create({
            fechaHora,
            barbero, cliente, referenciaPago, estado, tipoCorte, duracion, notas, precio, pagoAdelantado,
        })
        res.status(200).json({ message: "Cita creada", cita: createCita })

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
        console.log(error)
    }


}

export const getCitas = async (req, res) => {
    try {
        const data = await Cita.find({})
        return res.status(200).json({ data: data })
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" })
        console.log(error)
    }
}

export const getCitasbyId = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar la cita usando el ID
        const existe = await Cita.findOne({ _id: id });

        // Verificar si la cita existe
        if (!existe) {
            return res.status(404).json({ message: "No existe la cita" });
        }

        // Retornar la cita encontrada
        return res.status(200).json({ data: existe });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export const updateCitas = async (req, res) => {
    try {
        const { id } = req.params
        const { tipoCorte } = req.body
        const existe = await Cita.findById(id)
        if (!existe) return res.status(400).json({ message: "No existe la cita" })
        const updateCitas = await Cita.findByIdAndUpdate(
            id,
            { tipoCorte: tipoCorte },
            { new: true })
        res.status(200).json({ message: "Actualizado correctamente", updateCitas })


    } catch (error) {
        res.status(500).json({ message: "error en el servidor" })
    }


}

export const deleteCitas= async (req,res) => {
    try {
        const { id } =req.params
        if(!id)return res.status(400).json({message:"No se encuentra el usuario"})

    } catch (error) {
        res.status(500).json({message:"Error en el servidor"})
    }
}