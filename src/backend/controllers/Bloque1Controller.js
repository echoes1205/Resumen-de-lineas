import Bloque1Model from "./../models/Bloque1Model.js";

//metodos de mostrar y editar
//mostrar solo un registro
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Bloque1Model.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message:error.message} )
    }
}
//mostrar un registro
export const getBloque1 = async (req, res)=> {
    try {
        const blog = Bloque1Model.findAll({
            where:{ id: req.params.id}
        })
        res.json(blog)
    } catch (error) {
        res.json( {message:error.message} )
    }
}
//crear
export const createBloque1 = async (req,res) => {
    try {
        await Bloque1Model.create(req.body)
        res.json({
            "message": "Registro creado"
        })
    } catch (error)  {
        res.json( {message:error.message} )
    }
}

//editar o actualizar registro
export const updateBloque1 = async (req, res) => {
    try{
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro creado"
        })
    } catch (error) {
        res.json( {message:error.message} )
    }
}