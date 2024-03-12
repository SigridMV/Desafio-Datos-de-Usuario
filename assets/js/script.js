// Función asíncrona para obtener usuarios
const getUsuarios = (async () => {
  const url = "https://randomuser.me/api/?results=10"; // URL de la API que proporciona datos de usuarios

  try {
    const response = await fetch(url); // Realizar una solicitud GET a la URL
    const data = await response.json(); // Convertir la respuesta a formato JSON

    let lista = document.querySelector("#user-data"); // Selec el elemento(DOM) donde se mostrarán los datos de usuario
    let html = ''; // Variable para almacenar el HTML generado

    // Iterar sobre cada usuario en los resultados de la respuesta
    data.results.forEach((element) => {
       // Generar HTML para cada usuario y agregarlo a la variable html
      html += `<div class="user-card">
        <img src='${element.picture.large}' > <!-- Imagen del usuario -->
            <p><strong>Nombre: </strong>${element.name.first} ${element.name.last}</p> <!-- Nombre del usuario -->
            <p>Email: ${element.email}</p> <!-- Email del usuario -->
            <p>Teléfono: ${element.phone}</p> <!-- Teléfono del usuario -->
            </div>`;
    });
    lista.innerHTML = html; // Insertar el HTML generado en el elemento del DOM
  } catch (err) {
    // Método catch() para atrapar errores en caso de que la solicitud falle
    console.log(err);
  }
})();
