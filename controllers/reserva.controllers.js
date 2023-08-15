const Reserva = require('../models/Reserva');
const ctrlReservas = {};

// RENDERIZAR VISTAS
ctrlReservas.RenderObtenerReservas = (req, res) => {
    res.render('index'); 
};

ctrlReservas.RenderCrearReservas = (req, res) => {
    res.render('nueva-reserva');
};

ctrlReservas.RenderEditarReservas = (req, res) => {
   const { id } = req.params;
    res.render('actualizar-reserva', { id });
};


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const usuarios = await Reserva.findAll({
            where: {
                estado: true 
            }
        });
        return res.json(usuarios);
    } catch (error) {
        console.log('Error al obtener las usuarios', error);
        return res.status(500).json({
            message: "Error al obtener usuarios"
        })
    }
}



// Obtener una reserva
ctrlReservas.obtenerUnaReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la usuario'
        })
    }
}


// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        dni,
        telefono,
        fecha_salida,
        fecha_llegada,
        costo
    } = req.body;


    try {
        const nuevaReserva = new Reserva({
            nombre,
            apellido,
            dni,
            telefono,
            fecha_salida,
            fecha_llegada,
            costo
        });

        // los manda a la DB
        await nuevaReserva.save();

        return res.status(201).json({
            message: "Usuario creado exitosamente"
        })
    } catch (error) {
        console.log('Error al crear el usuario', error)

        return res.status(500).json({
            message: 'Error al crear el usuario'
        })
    }
}

// Actualizar una reserva
ctrlReservas.editarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)
        return res.json({message: 'Reserva editada correctamente'});
    } catch (error) {
        console.log('Error al actualizar usuario', error);
        return res.status(500).json({message: 'Error al actualizar la reserva'})
    }
}


// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.findByPk(id);
        await reserva.update({ estado: false });
        return res.json({ message: 'Reserva eliminada correctamente'})
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(500).json({
            message: 'Error al eliminar la reserva'})
    }
}


module.exports = ctrlReservas;