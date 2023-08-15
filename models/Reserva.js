// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require('../database');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: new Date().getTime()
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
      fecha_salida: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_llegada: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    costo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')

    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

Reserva.sync({force: false}).then(()=> {
    console.log('Tabla de reservas creada')
})

module.exports = Reserva;