console.log("Hola, mundo!");

window.onload = function () {
    document.body.innerHTML = '<h1>Hola, mundo!</h1>';
}

/*
* Pregunta: ¿Por qué sucede esto?
* Sin el .onload, no se está llamando a ningún evento para que ocurra nada, por lo que no se escribirá nada en pantalla.
*/