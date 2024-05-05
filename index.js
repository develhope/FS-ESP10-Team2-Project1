function comprar() {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");

  if (!ventanaEmergente) {
    ventanaEmergente = document.createElement("div");
    ventanaEmergente.id = "ventanaEmergente";
    ventanaEmergente.innerHTML = "Contenido de la ventana emergente";
    ventanaEmergente.style.position = "fixed";
    ventanaEmergente.style.left = "-50%"; // Inicialmente fuera de la pantalla
    ventanaEmergente.style.top = "0";
    ventanaEmergente.style.width = "50%";
    ventanaEmergente.style.height = "100vh";
    ventanaEmergente.style.backgroundColor = "#fff";
    ventanaEmergente.style.zIndex = "999";
    ventanaEmergente.style.padding = "20px";
    ventanaEmergente.style.boxSizing = "border-box";
    ventanaEmergente.style.overflowY = "auto";
    ventanaEmergente.style.transition = "left 0.3s ease"; // Transición de izquierda a derecha

    // Agregar el botón de cerrar (x)
    var botonCerrar = document.createElement("span");
    botonCerrar.textContent = "x";
    botonCerrar.style.position = "absolute";
    botonCerrar.style.top = "10px";
    botonCerrar.style.right = "10px";
    botonCerrar.style.color = "#000";
    botonCerrar.style.cursor = "pointer";
    botonCerrar.addEventListener("click", cerrarVentana);
    ventanaEmergente.appendChild(botonCerrar);

    fondoNegro = document.createElement("div");
    fondoNegro.id = "fondoNegro";
    fondoNegro.style.position = "fixed";
    fondoNegro.style.left = "50%";
    fondoNegro.style.top = "0";
    fondoNegro.style.width = "50%";
    fondoNegro.style.height = "100vh";
    fondoNegro.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    fondoNegro.style.zIndex = "998";
    fondoNegro.style.transition = "opacity 0.3s ease"; // Transición de opacidad
    fondoNegro.addEventListener("click", cerrarVentana);

    document.body.appendChild(fondoNegro);
    document.body.appendChild(ventanaEmergente);

    // Forzar un reflow antes de aplicar la transición
    ventanaEmergente.offsetHeight;
    ventanaEmergente.style.left = "0"; // Mostrar la ventana emergente con transición
    fondoNegro.style.opacity = "1"; // Mostrar el fondo negro con transición
  }
}

function cerrarVentana() {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");

  if (ventanaEmergente && fondoNegro) {
    ventanaEmergente.style.left = "-50%"; // Ocultar la ventana emergente
    fondoNegro.style.opacity = "0"; // Ocultar el fondo negro

    setTimeout(function () {
      ventanaEmergente.remove();
      fondoNegro.remove();
    }, 300);
  }
}

document.getElementById("comprar").addEventListener("click", comprar);
