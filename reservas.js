// vai abrir o modal qdo clicar no botão

const modal = document.getElementById("meuModal");

function abrirModal() {
  event.preventDefault();
  modal.style.display = "block";
  modal.setAttribute("id_evento", event.target.id);
}

// reserva igresso para evento onsubmit

const form = document.querySelector("#meuModal form");
form.addEventListener("submit", reservarIngresso);

async function reservarIngresso() {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const id = modal.getAttribute("id_evento");
  console.log("🚀 ~ file: reservas.js ~ line 21 ~ reservarIngresso ~ id", id);

  const url = "https://xp41-soundgarden-api.herokuapp.com/bookings";

  const reserva = {
    owner_name: nome,
    owner_email: email,
    number_tickets: 1,
    event_id: id,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(reserva),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (response.ok) {
      alert("reserva feita com sucesso!");
    } else {
      console.log(response);
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    if (err.message === "400") alert("insira um email válido");
    console.log(typeof err);
  }
}

// fecha o modal ao clicar

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// fecha o modal qdo alguem clica fora

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
