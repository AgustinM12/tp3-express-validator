// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { validateCreate } = require("../validators/reservas.validation")

const {
RenderObtenerReservas,
RenderCrearReservas,
RenderEditarReservas,
crearReserva,
obtenerReservas,
obtenerUnaReserva,
editarReserva,
eliminarReserva

} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', RenderObtenerReservas)

// Formulario para crear una reserva
router.get('/nueva-reserva', RenderCrearReservas)

// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', RenderEditarReservas)


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/app/', obtenerReservas);
 
// Crear una reserva
router.post('/nueva-reserva', validateCreate, crearReserva);

router.get('/app/:id', obtenerUnaReserva);
 
// Actualizar una reserva
router.put('/app/:id', editarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/app/:id', eliminarReserva);
;

 
 module.exports = router;