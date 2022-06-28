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
      article.classList.add("evento")
      article.classList.add("card")
      article.classList.add("p-5")
      article.classList.add("m-3")
      const attractionsStr = evento.attractions.toString();
      article.innerHTML = `<h2>${evento.name} - ${evento.scheduled}</h2>
      <h4>${attractionsStr}</h4>
      <p>${evento.description}</p>
      <button id="button" class="btn btn-primary">Reservar ingresso no ${evento.name.bold()}!</button>
      <div id="meuModal" class="modal">
      <div class="modal-content">
      <span class="close">&times;</span>
      <p>Para reservar seu ingresso no evento, basta preencher com seus dados abaixo! :)</p>
      <form class="col-6" id="create-event-form">
      <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" aria-describedby="nome">
      </div>
      <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" id="email" aria-describedby="email">
      </div>
      <br>
      <button type="submit" class="btn btn-primary">enviar</button>
      </div>
      </div>`
      document.querySelector("#articleEvento").appendChild(article);
    });
    
    
    // vai abrir o modal qdo clicar no botão
    
    const modal = document.getElementById("meuModal");
    const btns = document.querySelectorAll(".btn"+".btn-primary");
    
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        modal.style.display = "block"
      });
    }

    // fecha o modal ao clicar

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    // fecha o modal qdo alguem clica fora

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  getEventos();

  
