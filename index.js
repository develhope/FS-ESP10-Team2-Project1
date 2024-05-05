// Función para crear la ventana emergente
function comprar() {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  if (!ventanaEmergente) {
    ventanaEmergente = document.createElement("div");
    ventanaEmergente.id = "ventanaEmergente";
    ventanaEmergente.style.position = "fixed";
    ventanaEmergente.style.left = "0";
    ventanaEmergente.style.top = "0";
    ventanaEmergente.style.width = "50%";
    ventanaEmergente.style.height = "100vh";
    ventanaEmergente.style.backgroundColor = "rgba(255,255,255)";
    document.body.appendChild(ventanaEmergente);
    // Agregar el controlador de eventos para cerrar la ventana emergente
    document.addEventListener("click", cerrarVentana);
  } else {
    ventanaEmergente.style.display = "block";
    // Si la ventana emergente ya existe y está oculta, agregar el controlador de eventos nuevamente
    document.addEventListener("click", cerrarVentana);
  }
}

// Función para cerrar la ventana emergente
function cerrarVentana(event) {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  var comprarLink = document.getElementById("comprar");
  // Verificar si el clic ocurrió fuera de la ventana emergente y el enlace "COMPRAR"
  if (event.target !== ventanaEmergente && event.target !== comprarLink) {
    ventanaEmergente.style.display = "none";
    // Eliminar el controlador de eventos después de cerrar la ventana emergente
    document.removeEventListener("click", cerrarVentana);
  }
}

// Agregar un controlador de eventos al enlace "COMPRAR"
document.getElementById("comprar").addEventListener("click", comprar);
