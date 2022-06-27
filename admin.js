function getEventos() {
const url = "https://xp41-soundgarden-api.herokuapp.com/events";
  fetch(url)
    .then((response) => response.json())
    .then((data) => listarEventos(data))
    .catch(err => console.log(err));
}

function listarEventos(eventos) {
  eventos.forEach((evento, index) => {
    const tr = document.createElement("tr");
    const attractionsStr = evento.attractions.toString();
    tr.innerHTML = `<th scope="row">${index+4}</th>
    <td>${evento.scheduled}</td>
    <td>${evento.name}</td>
    <td>${attractionsStr}</td>
    <td>
        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${evento._id}" _id="${evento._id}" id="editar-evento" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${evento._id}" _id="${evento._id}" class="btn btn-danger">excluir</a>
    </td>`;
    document.querySelector("table tbody").appendChild(tr);
  });
}

getEventos();
