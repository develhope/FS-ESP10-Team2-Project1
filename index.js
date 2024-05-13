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
  const optionsAvailable = [0, 1, "buy", "discover", "help"]; // Declara las opciones disponibles

  // Verifica si la opción es inválida
  if (invalidOpc()) {
    return;
  }

  if (opc === 0) {
    mainMenuClose(); // Cierra el menú si la opción es 0
  } else {
    mainMenuShow(); // Muestra el menú si la opción es diferente de 0
  }

  // Verifica si la opción es indefinida, nula o una cadena vacía, y si está dentro de las opciones disponibles
  function invalidOpc() {
    if (opc === undefined || opc === null || opc === "") {
      console.error(
        "Error: El parámetro 'opc' no está definido o es una cadena vacía."
      );
      return true;
    }

    if (!optionsAvailable.includes(opc)) {
      console.error(
        `Error: La opción '${opc}' no es válida. Las opciones disponibles son: 
      (${optionsAvailable.slice(2).join(", ")})`
      );
      return true;
    }

    return false;
  }

  function mainMenuShow() {
    const popUp = document.querySelector(".navbar-ventanaEmergente");
    let background = document.getElementById("fondoNegro");

    if (!background) {
      background = makeBackgroundBlack(); // Crea y configura el fondo negro si no existe
      document.body.appendChild(background);
      document.body.appendChild(popUp);
      applyTransitions(popUp, background); // Aplica las transiciones al mostrar el menú
    }

    //! Crear una función para mostrar la sección correspondiente segun la (opc)
    switch (opc) {
      case optionsAvailable[1]:
        break;
      case optionsAvailable[2]:
        break;
      case optionsAvailable[3]:
        break;
      case optionsAvailable[4]:
        break;
    }
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
