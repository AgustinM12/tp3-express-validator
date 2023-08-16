const formNuevaReserva = document.getElementById('formNuevaReserva')

formNuevaReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const dni = document.getElementById('dni').value
    const telefono = document.getElementById('telefono').value
    const fecha_salida = document.getElementById('fecha_salida').value
    const fecha_llegada = document.getElementById('fecha_llegada').value
    const costo = document.getElementById('costo').value

    const usuario = {
        nombre,
        apellido,
        dni,
        telefono,
        fecha_salida,
        fecha_llegada,
        costo
    }


try{

    const respuesta = await fetch('/api/nueva-reserva', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
        
    });
    
    const datos = await respuesta.json()

    Swal.fire({
        title: '¡Reserva creada exitosamente!',
        text: datos.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    setTimeout(()=> {
        window.location.href = '/api'
    }, 1500)

}catch(error){


  
        return Swal.fire({
            title: '¡Error!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
  


}









});