function getEventos() {
  const url = "https://xp41-soundgarden-api.herokuapp.com/events";
  fetch(url)
    .then((response) => response.json())
    .then((data) => listarEventos(data))
    .catch((err) => console.log(err));
}

function listarEventos(eventos) {
  eventos.forEach((evento) => {
    let article = document.createElement("article");
    article.classList.add("evento", "card", "p-5", "m-3");
    const attractionsStr = evento.attractions.toString();
    article.innerHTML = `<h2>${evento.name} - ${evento.scheduled}</h2>
      <h4>${attractionsStr}</h4>
      <p>${evento.description}</p>
      <button id=${evento._id} onclick='abrirModal()' class="btn btn-primary">Reservar ingresso no ${evento.name.bold()}!</button>`;
    document.querySelector("#articleEvento").appendChild(article);
  });
}

getEventos();
