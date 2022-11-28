//controlador de medicos

module.exports = {
    
    listar: async (req, res) => {
        try{
            console.log('Listado de medicos')

            res.json({
                message: 'Listado de medicos'
            })
        }catch(e){
            console.log(e)
        }
    },
    crear: async (req, res) => {
        try{
            console.log('crear medico')

            res.json({
                message: 'crear medico'
            })
        }catch(e){
            console.log(e)
        }
    },
    listarInfo: async (req, res) => {
        try{
            console.log('Info de medico ' + req.params.idMedico)

            res.json({
                message: 'Info de medico ' + req.params.idMedico
            })
        }catch(e){
            console.log(e)
        }
    },
}