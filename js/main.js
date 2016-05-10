function gettextoValue() {
	var texto = document.getElementById("texto");
	return texto.value;
}
function añadir() {
	var textoValue = gettextoValue();
	if (textoValue !== "") {
		doañadir(textoValue);
		clean();
	}
}

function doañadir(textoDeContenido) {
	var place = document.getElementById("place");
	var content = '<div class="box">' +
    '<div class="check"><input type="checkbox">' +  textoDeContenido  +'</input><i class="glyphicon glyphicon-trash"></i>' +
    '</div>';

	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "añadir";
	elemento.innerHTML = content;

	//Agregar elementos
	place.appendChild(elemento);
}
function remover(textoDeContenido){
	
}

function clean() {
	var texto = document.getElementById("texto");
	texto.value = "";
	texto.focus();
}