const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
    obra_social: Joi.string().optional(),
})

module.exports = {
    crearPaciente
}