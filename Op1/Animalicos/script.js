function PopUpSuricato() {
  return "Soy un suricato";
}
function PopUpArmadillo() {
	return "Soy un armadillo";
}
function PopUpPentauro() {
	return "Soy un pentauro del az\u00FAcar";
}
function PopUpQuokka() {
	return "Soy un quokka";
}
function PopUpErizo() {
	return "Soy un erizo europeo";
}
function PopUpPanda() {
	return "Soy un panda rojo";
}

function PopUpAsia() {
	return "De Asia vienen el Pentauro del az\u00FAcar y el panda rojo";
}

function desaparece(nombre) {
	var button = document.getElementById(nombre).style.visibility = 'hidden';
}

function aparece(nombre) {
	var button = document.getElementById(nombre).style.visibility = 'visible';
}

function boton(nombre) {
	var button = document.getElementById(nombre);
	if (button.style.visibility == 'hidden') {
		button.style.visibility == 'visible';
	}
	else {
		button.style.visibility == 'hidden'
	}
}