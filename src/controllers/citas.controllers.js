export const postCitas = (req, res) => {
    const { ...datos } = req.body



    res.json(datos)
}