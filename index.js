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
    ventanaEmergente.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Fondo semi-transparente

    // Agregar el botón de cerrar (x)
    var botonCerrar = document.createElement("span");
    botonCerrar.textContent = "x";
    botonCerrar.style.position = "absolute";
    botonCerrar.style.top = "10px";
    botonCerrar.style.right = "10px";
    botonCerrar.style.color = "#fff";
    botonCerrar.style.cursor = "pointer";
    botonCerrar.addEventListener("click", cerrarVentana);
    ventanaEmergente.appendChild(botonCerrar);

    document.body.appendChild(ventanaEmergente);

    // Crear un div para el fondo negro semitransparente en el otro 50% de la pantalla
    var fondoNegro = document.createElement("div");
    fondoNegro.style.position = "fixed";
    fondoNegro.style.left = "50%";
    fondoNegro.style.top = "0";
    fondoNegro.style.width = "50%";
    fondoNegro.style.height = "100vh";
    fondoNegro.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Fondo semi-transparente
    fondoNegro.id = "fondoNegro";
    document.body.appendChild(fondoNegro);

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
  var fondoNegro = document.getElementById("fondoNegro");
  // Verificar si el clic ocurrió dentro de la ventana emergente o en el botón de cerrar
  if (
    !ventanaEmergente.contains(event.target) &&
    event.target.id !== "ventanaEmergente" &&
    event.target.id !== "fondoNegro"
  ) {
    ventanaEmergente.style.display = "none";
    fondoNegro.style.display = "none";
    // Eliminar el controlador de eventos después de cerrar la ventana emergente
    document.removeEventListener("click", cerrarVentana);
  }
}
// Función para crear la ventana emergente
function comprar() {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");
  
  if (!ventanaEmergente) {
    ventanaEmergente = document.createElement("div");
    ventanaEmergente.id = "ventanaEmergente";
    ventanaEmergente.innerHTML = "Contenido de la ventana emergente";
    ventanaEmergente.style.position = "fixed";
    ventanaEmergente.style.left = "0";
    ventanaEmergente.style.top = "0";
    ventanaEmergente.style.width = "50%";
    ventanaEmergente.style.height = "100vh";
    ventanaEmergente.style.backgroundColor = "#fff";
    ventanaEmergente.style.zIndex = "999";
    ventanaEmergente.style.padding = "20px";
    ventanaEmergente.style.boxSizing = "border-box";
    ventanaEmergente.style.overflowY = "auto";
    
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
    
    // Crear un div para el fondo negro semitransparente en el otro 50% de la pantalla
    fondoNegro = document.createElement("div");
    fondoNegro.id = "fondoNegro";
    fondoNegro.style.position = "fixed";
    fondoNegro.style.left = "50%";
    fondoNegro.style.top = "0";
    fondoNegro.style.width = "50%";
    fondoNegro.style.height = "100vh";
    fondoNegro.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Fondo semi-transparente
    fondoNegro.style.zIndex = "998";
    document.body.appendChild(fondoNegro);
    
    document.body.appendChild(ventanaEmergente);
  } else {
    ventanaEmergente.style.display = "block";
    fondoNegro.style.display = "block";
  }
}

// Función para cerrar la ventana emergente
function cerrarVentana() {
  var ventanaEmergente = document.getElementById("ventanaEmergente");
  var fondoNegro = document.getElementById("fondoNegro");
  
  if (ventanaEmergente) {
    ventanaEmergente.style.display = "none";
    fondoNegro.style.display = "none";
  }
}

// Agregar un controlador de eventos al enlace "COMPRAR"
document.getElementById("comprar").addEventListener("click", comprar);

// Agregar un controlador de eventos al enlace "COMPRAR"
document.getElementById("comprar").addEventListener("click", comprar);
