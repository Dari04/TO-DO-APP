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
    '<div class="check" id="check"><input type="checkbox" onclick="marcarTexto(this)">' +  textoDeContenido  +'<i class="glyphicon glyphicon-trash"></i>' +
    '</div>';

	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "añadir";
	elemento.innerHTML = content;

	//Agregar elementos
	place.appendChild(elemento);
}


function clean() {
	var texto = document.getElementById("texto");
	texto.value = "";
	texto.focus();
}
function marcarTexto(elemento){
	var marcado = elemento.checked;
	var textoPorMarcar = elemento.nextSibling;
	if(marcado==true){
		textoPorMarcar.classlist.add("tachado");
	}else {
		textoPorMarcar.classlist.remove("tachado");
	}
	
}