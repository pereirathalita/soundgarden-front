const botoesEditar = document.querySelectorAll("td a");
// botoesEditar.forEach((element) =>
//   element.addEventListener("click", editarEvento)
// );

const url = "https://xp41-soundgarden-api.herokuapp.com/events";

// function editarEvento(event) {
//   event.preventDefault();
//   console.log(event);
// }

function getEventos() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => listarEventos(data));
}

function listarEventos(eventos) {
  console.log(
    "🚀 ~ file: admin.js ~ line 20 ~ listarEventos ~ eventos",
    eventos
  );

  eventos.forEach((evento, index) => {
    const tr = document.createElement("tr");
    const attractionsStr = evento.attractions.toString();
    tr.innerHTML = `<th scope="row">${index+4}</th>
    <td>${evento.scheduled}</td>
    <td>${evento.name}</td>
    <td>${attractionsStr}</td>
    <td>
        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html" class="btn btn-secondary">editar</a>
        <a href="editar-evento.html" class="btn btn-danger">excluir</a>
    </td>`;
    document.querySelector("table tbody").appendChild(tr);
  });
}

getEventos();
