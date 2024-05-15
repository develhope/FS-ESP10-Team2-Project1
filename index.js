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

  const elementsAvailables = {
    buy: {
      content: ".navbar-ventanaEmergente-contenido_opc_comprar",
      button: ".navbar-ventanaEmergente-opc_comprar-button",
      subElements: {
        1: ".navbar-ventanaEmergente-contenido_opc_comprar-Set_por_tema",
        2: ".navbar-ventanaEmergente-contenido_opc_comprar-Edades",
        3: ".navbar-ventanaEmergente-contenido_opc_comprar-Rangos_de_precios",
        4: ".navbar-ventanaEmergente-contenido_opc_comprar-Articulos-LEGO",
        5: ".navbar-ventanaEmergente-contenido_opc_comprar-Intereses",
        6: ".navbar-ventanaEmergente-contenido_opc_comprar-Pick_and_build",
      },
    },
    discover: {
      content: ".navbar-ventanaEmergente-contenido_opc_descubrir",
      button: ".navbar-ventanaEmergente-opc_descubrir-button",
      subElements: {
        1: ".navbar-ventanaEmergente-contenido_opc_descubrir-Nuestros_valores",
        2: ".navbar-ventanaEmergente-contenido_opc_descubrir-Nuestras_apps",
        3: ".navbar-ventanaEmergente-contenido_opc_descubrir-Nuestras_revistas",
      },
    },
    help: {
      content: ".navbar-ventanaEmergente-contenido_opc_ayuda",
      button: ".navbar-ventanaEmergente-opc_ayuda-button",
    },
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

    // Obtener las claves del objeto "elementsAvailables"
    const keys = Object.keys(elementsAvailables);

    // Verificar si la opción está presente como una clave en el objeto "elementsAvailables"
    if (!keys.includes(opc) && !numAvailables.includes(opc)) {
      console.error(
        `Error: La opción '${opc}' no es válida. Las opciones disponibles son: 
        (${keys.join(", ")}) o (${numAvailables.join(", ")})`
      );
      return true;
    }

    return false;
  }

  /**
   * Muestra el menú principal y actualiza los estilos de los elementos disponibles según la opción seleccionada.
   */
  function mainMenuShow() {
    // console.log("#opc: " + opc);

    /**
     * Muestra la sección correspondiente del menú según la opción seleccionada.
     */
    function showSection() {
      for (let key in elementsAvailables) {
        if (Object.hasOwnProperty.call(elementsAvailables, key)) {
          // Obtener los selectores de los elementos
          const elementContentSelector = elementsAvailables[key].content;
          const elementButtonSelector = elementsAvailables[key].button;

          // Encontrar los elementos correspondientes
          const elementContent = document.querySelector(elementContentSelector);
          const elementButton = document.querySelector(elementButtonSelector);

          // Mostrar todos los elementos si opc es el segundo valor del array "numAvailables"
          if (opc === numAvailables[1]) {
            elementContent.style.display = "flex";

            elementButton.style.textDecorationLine = "underline";
          } else {
            // Ocultar todos los elementos excepto el que corresponde a la opción actual

            if (elementContentSelector !== elementsAvailables[opc].content) {
              elementContent.style.display = "none";
            } else {
              elementContent.style.display = "flex";
            }

            if (elementButtonSelector !== elementsAvailables[opc].button) {
              elementButton.style.textDecorationLine = "none";
            } else {
              elementButton.style.textDecorationLine = "underline";
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
    function adjustPopUpWidth() {
      const screenWidth = window.innerWidth;
      popUp.style.width = screenWidth < 901 ? "100%" : "50%";
    }
    window.addEventListener("resize", adjustPopUpWidth);
    // Llamamos a la función una vez para ajustar el ancho del popUp al tamaño inicial de la ventana
    adjustPopUpWidth();

    popUp.offsetHeight;

    popUp.style.left = "0";
    background.style.opacity = "1";
  }

  function hideWithTransition(popUp, background) {
    // const screenWidth = window.innerWidth;

    // Se define la posición del popUp según el ancho de la pantalla
    // popUp.style.left = screenWidth < 901 ? "-100%" : "-50%";

    //!#warning: (Me gustaria mejorar esta parte, pero funciona bien aunque siento que no es muy practico)
    // Para evitar un bug, asignamos directamente -100% independientemente del tamaño de la ventana actual
    popUp.style.left = "-100%";

    background.style.opacity = "0";
    setTimeout(() => background.remove(), 300);
  }
}

// document.getElementById("comprar").addEventListener("click", comprar);
// document.getElementById("descubrir").addEventListener("click", descubrir);
// document.getElementById("ayuda").addEventListener("click", ayuda);
