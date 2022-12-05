//controlador de paciente

const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
    
    listar: async (req, res) => {
        const patients = await models.paciente.findAll()

        res.json({
            success: true,
            data: {
                pacientes: patients
            }
        })
    },
    listarInfo: async (req, res, next) => {
        try {
            const patient = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })
            if(!patient) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: patient
                }
            })
        }catch(err){
            return next(err)
        }
    },
    crear: async (req, res) => {
        const patient = await models.paciente.create(req.body)

        res.json({
            success: true,
            data: {
                id: patient.id
            }
        })
    }
}