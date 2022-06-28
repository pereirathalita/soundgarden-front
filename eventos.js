function getEventos() {
  const url = "https://xp41-soundgarden-api.herokuapp.com/events";
    fetch(url)
      .then((response) => response.json())
      .then((data) => listarEventos(data))
      .catch(err => console.log(err));
  }
  
  function listarEventos(eventos) {
      eventos.forEach((evento) => {
      let article = document.createElement("article");
      article.classList.add("evento", "card", "p-5", "m-3");
      const attractionsStr = evento.attractions.toString();
      article.innerHTML = `<h2>${evento.name} - ${evento.scheduled}</h2>
      <h4>${attractionsStr}</h4>
      <p>${evento.description}</p>
      <a href=reservas.html?id=${evento._id} class="btn btn-primary">reservar ingresso</a>`
      document.querySelector("body > main > section:nth-child(1) > div.container.d-flex.justify-content-center.align-items-center.flex-wrap").appendChild(article);
    });
  }
  
  getEventos();
  