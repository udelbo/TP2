//controlador de usuario

module.exports = {
    
    listar: async (req, res) => {
        try{
            console.log('Listado de usuarios')

            res.json({
                message: 'Listado de usuarios'
            })
        }catch(e){
            console.log(e)
        }
    },
    crear: async (req, res) => {
        try{
            console.log('Crear usuario')

            res.json({
                message: 'Crear usuario'
            })
        }catch(e){
            console.log(e)
        }
    },
    listarInfo: async (req, res) => {
        try{
            console.log('Información del paciente ' + req.params.idUsuario)

            res.json({
                message: 'Información del paciente ' + req.params.idUsuario
            })
        }catch(e){
            console.log(e)
        }
    },
}