import mongoose from "mongoose"

const conection=async(url)=> {
    try {
       await mongoose.connect(url)
        console.log('Conexion a la base de datos exitosa')
    } catch (error) {
        
        console.log("Conexion a la base de datos fallo",error)
        process.exit(1)
    }
}
export default conection