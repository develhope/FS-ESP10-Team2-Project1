function plantilla() {
  var ventanaEmergente = document.getElementById("navbar-ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");

  if (!fondoNegro) {
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
  var ventanaEmergente = document.getElementById("navbar-ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");

  if (ventanaEmergente && fondoNegro) {
    ventanaEmergente.style.left = "-50%"; // Ocultar la ventana emergente
    fondoNegro.style.opacity = "0"; // Ocultar el fondo negro

    setTimeout(function () {
      fondoNegro.remove();
    }, 300);
  }
}

document.getElementById("comprar").addEventListener("click", comprar);
document.getElementById("descubrir").addEventListener("click", descubrir);
document.getElementById("ayuda").addEventListener("click", ayuda);
