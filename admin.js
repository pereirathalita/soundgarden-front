const editar = document.querySelectorAll("td a");
editar.forEach((element) => element.addEventListener("click", editarEvento));

function editarEvento(event) {
  event.preventDefault();
  console.log(event);
}
