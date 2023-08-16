const { check } = require("express-validator")
const { validateSchema } = require("../helpers/validateHealper")

const validateCreate = [
check("nombre")
.exists(),

check("costo")
.exists()
.isNumeric().withMessage("El costo debe ser un valor numerico"),

(req, res, next) =>{
    validateSchema(req, res, next)
}
]

module.exports = { validateCreate }