function evento() {
    var content = "<p>" + 'Holi Laboratoria!' + "</p>";
    var contenedor = document.getElementById("contenedor");
    var elemento = document.createElement("p");
    elemento.innerHTML = "Holi Laboratoria!";
    contenedor.appendChild(elemento);
}