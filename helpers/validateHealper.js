const { validationResult } = require("express-validator")

const validateSchema = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        // return res.status(400).json({ errors: errors.array() })

        const errorMessages = errors.array().map(error => error.msg);
        const errorMessage = errorMessages.join(', ');
        return res.status(400).send(errorMessage);
    }

    next();

}

module.exports = { validateSchema }