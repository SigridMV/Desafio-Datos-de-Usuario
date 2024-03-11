const getUsuarios = (async () => {
  const url = "https://randomuser.me/api/?results=10";

  try {
    const response = await fetch(url);
    const data = await response.json();

    let lista = document.querySelector("#user-data");
    let html = '';

    data.results.forEach((element) => {
        html += `<div class="user-card">
        <img src='${element.picture.large}' >
            <p><strong>Nombre: </strong>${element.name.first} ${element.name.last}</p>
            <p>Email: ${element.email}</p>
            <p>Teléfono: ${element.phone}</p>
            </div>`;
    });
    lista.innerHTML = html;
  } catch (err) {
    // Método catch() para atrapar errores
    console.log(err);
  }

})();
