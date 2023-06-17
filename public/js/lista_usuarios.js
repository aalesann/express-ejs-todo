const tablaUsuarios = document.querySelector('#listaUsuarios');

// Función para obtener los usaurios
const obtenerUsuarios = async () => {

    const token =  localStorage.getItem('token')
    console.log(token);
    const response = await fetch('http://localhost:4000/api/usuarios', {
        headers: {
            'Authorization': token
        }
    });

    if (response.status === 404) {
        return [];
    }

    if (response.status !== 200) {
        const { message } = await response.json()
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
        return;
    }

    const data = await response.json();

    return data;
}

const mostrarUsuarios = (usuarios) => {
    if (usuarios.length === 0) {
        tablaUsuarios.innerHTML = `
            <tr>
                <td>No hay usuarios</td>
            </tr>
        `;
    }

    usuarios.forEach(usuario => {
        tablaUsuarios.innerHTML += `
                    <tr>
                        <td>${usuario.username}</td>
                        <td>${usuario.email}</td>
                        <td>${(usuario.estado) ? 'Si' : 'No' }</td>
                        <td>
                            <button onclick=eliminarUsuario(event) class="btn btn-danger btn-sm" data-id="${usuario.id}">Eliminar</button>
                            <a href="/usuario/editar/${usuario.id}" class="btn btn-warning btn-sm">Editar</a>
                        </td>
                    </tr>
                `;
    });

};

const eliminarUsuario = async (event) => {
    const id = event.target.dataset.id;

    try {
        const res = await fetch(`http://localhost:4000/api/usuario/${id}`, {
            method: 'DELETE'
        });

        const data = await res.json();

        Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado',
            text: data.message,
        });
        
        setTimeout(() => {
            window.location.reload();
        }, 2200);

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    }

}

// Programar el evento cuando se carga toda la vista (sin los datos de usuarios)
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM Cargado');

    const usuarios = await obtenerUsuarios();

    // Mostrar usuarios en la tabla
    mostrarUsuarios(usuarios);
});