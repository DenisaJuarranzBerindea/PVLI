console.log("Hola, mundo!");

window.onload = function () {
    document.body.innerHTML = '<h1>Hola, mundo!</h1>';
}

/*
* Pregunta: �Por qu� sucede esto?
* Sin el .onload, no se est� llamando a ning�n evento para que ocurra nada, por lo que no se escribir� nada en pantalla.
*/