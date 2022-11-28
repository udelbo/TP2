//controlador de usuario

const models = require('../database/models/index')

module.exports = {
    
    listar: async (req, res) => {
        const users = await models.usuario.findAll()

        res.json({
            success: true,
            data: {
                usuarios: users
            }
        })
    },
    listarInfo: async (req, res) => {
        const user = await models.usuario.findOne({
            where: {
                id: req.params.idUsuario
            }
        })

        res.json({
            success: true,
            data: {
                usuarios: user
            }
        })
    },
    crear: async (req, res) => {
        const user = await models.usuario.create(req.body)

        res.json({
            success: true,
            data: {
                id: user.id
            }
        })
    }
}