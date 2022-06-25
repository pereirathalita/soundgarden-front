const form = document.getElementById('edit-event-form');
form.addEventListener('submit', alterarEvento);

function getEvento() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const url = "https://xp41-soundgarden-api.herokuapp.com/events/" + id;

  fetch(url)
    .then((response) => response.json())
    .then((json) => completarCampos(json));
}

function completarCampos (json) {
  document.getElementById('nome').value = json.name;
  document.getElementById('banner').value = json.poster;
  document.getElementById('atracoes').value = json.attractions.toString();
  document.getElementById('descricao').value = json.description;
  document.getElementById('data').value = json.scheduled;
  document.getElementById('lotacao').value = json.number_tickets;
}

function alterarEvento () {
  event.preventDefault();
  console.log('olá')
}


getEvento();
