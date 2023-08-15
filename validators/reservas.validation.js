const { check } = require("express-validator")

const { validationResult } = require("../helpers/validateHealper")

const validateCreate = [
check("nombre")
.exists()
.not()
.isEmpty(),

check("costo")
.exists()
.isNumeric(),

check("email")
.exists()
.isEmail(),

(req, res, next) =>{
validationResult(req, res, next)
}

]

module.exports = {
    validateCreate
}