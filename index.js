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
  var opc = opc;
  // Objeto que mapea cada opción a su correspondiente selector CSS
  const elemetAvailables = {
    buy: ".navbar-ventanaEmergente-contenido_opc_comprar",
    discover: ".navbar-ventanaEmergente-contenido_opc_descubrir",
    help: ".navbar-ventanaEmergente-contenido_opc_ayuda",
  };

  const numAvailables = [0, 1];

  // Verifica si la opción es inválida y devuelve true si lo es, de lo contrario, false
  if (invalidOpc()) return;

  // Evalúa si la opción es 0 y llama a la función "mainMenuClose" si es verdadero, de lo contrario, llama a "mainMenuShow"
  opc === 0 ? mainMenuClose() : mainMenuShow();

  // Verifica si la opción es indefinida, nula o una cadena vacía, y si está dentro de las opciones disponibles
  function invalidOpc() {
    if (opc === undefined || opc === null || opc === "") {
      console.error(
        "Error: El parámetro 'opc' no está definido o es una cadena vacía."
      );
      return true;
    }

    // Obtener las claves del objeto "elemetAvailables"
    const keys = Object.keys(elemetAvailables);

    // Verificar si la opción está presente como una clave en el objeto "elemetAvailables"
    if (!keys.includes(opc) && !numAvailables.includes(opc)) {
      console.error(
        `Error: La opción '${opc}' no es válida. Las opciones disponibles son: 
        (${keys.join(", ")}) o (${numAvailables.join(", ")})`
      );
      return true;
    }

    return false;
  }

  function mainMenuShow() {
    function showSection() {
      // Recorremos todas las clases en "elemetAvailables"
      for (const key in elemetAvailables) {
        if (Object.hasOwnProperty.call(elemetAvailables, key)) {
          const selector = elemetAvailables[key];
          const element = document.querySelector(selector);

          // Mostramos todos los elementos si opc es el segundo valor del array "numAvailables"
          if (opc === numAvailables[1]) {
            element.style.display = "flex";
          } else {
            // Ocultamos todos los elementos excepto el que corresponde a la opción actual
            if (selector !== elemetAvailables[opc]) {
              element.style.display = "none";
            } else {
              element.style.display = "flex"; // Mostramos el elemento actual
            }
          }
        }
      }
    }

    const popUp = document.querySelector(".navbar-ventanaEmergente");
    let background = document.getElementById("fondoNegro");

    if (!background) {
      background = makeBackgroundBlack(); // Crea y configura el fondo negro si no existe
      document.body.appendChild(background);
      document.body.appendChild(popUp);
      applyTransitions(popUp, background); // Aplica las transiciones al mostrar el menú
    }

    showSection();
  }

  function mainMenuClose() {
    const popUp = document.querySelector(".navbar-ventanaEmergente");
    const background = document.getElementById("fondoNegro");

    if (popUp && background) {
      hideWithTransition(popUp, background); // Oculta el menú con transiciones
    }
  }

  // Configura el fondo negro con estilos y event listener
  function makeBackgroundBlack() {
    const background = document.createElement("div");
    background.id = "fondoNegro";
    background.style.position = "fixed";
    background.style.top = "0";
    background.style.right = "0";
    background.style.bottom = "0";
    background.style.left = "0";
    background.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    background.style.zIndex = "998";
    background.style.transition = "opacity 0.3s ease";
    background.addEventListener("click", () => mainMenu(0));
    return background;
  }

  function applyTransitions(popUp, background) {
    popUp.offsetHeight;
    popUp.style.left = "0"; // Muestra el menú con transición
    background.style.opacity = "1"; // Muestra el fondo negro con transición
  }

  function hideWithTransition(popUp, background) {
    popUp.style.left = "-50%"; // Oculta el menú con transición
    background.style.opacity = "0"; // Oculta el fondo negro con transición
    setTimeout(() => background.remove(), 300); // Elimina el fondo negro después de la transición
  }
}

// document.getElementById("comprar").addEventListener("click", comprar);
// document.getElementById("descubrir").addEventListener("click", descubrir);
// document.getElementById("ayuda").addEventListener("click", ayuda);
