/**
 * Función para cerrar el preNavbar.
 */
function closePreNavbar() {
  const preNavbar = document.querySelector(".preNavbar");
  preNavbar.style.display = "none";
}

/**
 * Función para controlar el menú principal.
 * @param {number|string} opc - Opción seleccionada. Puede ser un número (0 o 1) o una cadena de texto ("buy", "discover", "help").
 * Si opc es 0, se cerrará el menú. Si es 1, se mostrará el menú sin ninguna opción, útil para debugear.
 */
function mainMenu(opc) {
  // Verificar si opc está definido o es una cadena vacía
  if (opc === undefined || opc === null || opc === "") {
    console.error(
      "Error: El parámetro 'opc' no está definido o es una cadena vacía."
    );
    return; // Salir de la función
  }

  // Verificar si opc es una de las opciones disponibles
  var opcionesDisponibles = [Number(0), Number(1), "buy", "discover", "help"];
  if (!opcionesDisponibles.includes(opc)) {
    console.error(
      `Error: La opción '${opc}' no es válida. Las opciones disponibles son: 
    (${opcionesDisponibles.slice(2).join(", ")})`
    );
    return; // Salir de la función
  }

  // Mostrar la ventana emergente si la opción seleccionada no es 0
  if (opc !== 0) {
    // Crear el fondo negro si no existe
    var ventanaEmergente = document.querySelector(".navbar-ventanaEmergente");
    var fondoNegro = document.getElementById("fondoNegro");

    if (!fondoNegro) {
      fondoNegro = document.createElement("div");
      fondoNegro.id = "fondoNegro";
      fondoNegro.style.position = "fixed";
      fondoNegro.style.top = "0";
      fondoNegro.style.right = "0";
      fondoNegro.style.bottom = "0";
      fondoNegro.style.left = "0";
      fondoNegro.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      fondoNegro.style.zIndex = "998";
      fondoNegro.style.transition = "opacity 0.3s ease"; // Transición de opacidad
      fondoNegro.addEventListener("click", function () {
        mainMenu(0); // Cerrar la ventana emergente al hacer clic en el fondo negro
      });

      document.body.appendChild(fondoNegro); // Agregar el fondo negro al DOM
      document.body.appendChild(ventanaEmergente); // Agregar la ventana emergente al DOM

      // Forzar un reflow antes de aplicar la transición
      ventanaEmergente.offsetHeight;
      ventanaEmergente.style.left = "0"; // Mostrar la ventana emergente con transición
      fondoNegro.style.opacity = "1"; // Mostrar el fondo negro con transición
    }
  } else if (opc === 0) {
    // Cerrar la ventana emergente si la opción seleccionada es 0
    var ventanaEmergente = document.querySelector(".navbar-ventanaEmergente");
    var fondoNegro = document.getElementById("fondoNegro");

    if (ventanaEmergente && fondoNegro) {
      ventanaEmergente.style.left = "-50%"; // Ocultar la ventana emergente
      fondoNegro.style.opacity = "0"; // Ocultar el fondo negro

      setTimeout(function () {
        fondoNegro.remove(); // Eliminar el fondo negro después de la transición
      }, 300);
    }
  }
}

// document.getElementById("comprar").addEventListener("click", comprar);
// document.getElementById("descubrir").addEventListener("click", descubrir);
// document.getElementById("ayuda").addEventListener("click", ayuda);
