// Referencia al formulario
const formEditar = document.querySelector('#formEditar');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const usuarioId = formEditar.dataset.id;

// Funcion para obtener los datos de la tarea cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {

    console.log('DOM cargado');
    
    try {
        const response = await fetch(`http://127.0.0.1:4000/api/usuario/${usuarioId}`);

        // Si hubo un error al obtener los datos de un usuario
        if (!response.ok) {
            throw ({
                message: 'Error al obtener datos del usuario'
            })
        }

        // Se obtienen los datos de la respuesta (fetch)
        const { username, email } = await response.json();

        console.log({username, email})

        // username.value = username;
        // email.value = email;

        const usernameInput = document.getElementById('username')
        const emailInput = document.getElementById('email')

        emailInput.value = email;
        usernameInput.value = username;

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    }

});


// Escuchar el evento submit
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se crea un objeto con los datos del formulario
    const formData = {
        username: e.target.username.value,
        email: e.target.email.value,
    }

    try {
        // Se envia la peticion al servidor
        const resp = await fetch(`http://localhost:4000/api/usuario/${usuarioId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (resp.status !== 200) {
            throw ({
                message: 'Error al editar el usuario'
            })
        }

        const data = await resp.json();

        Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = '/usuarios';
        }, 1500);

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: error.message,
            timer: 2000,
        })
    }
});