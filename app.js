const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
function agregarAlCarrito(id) {
  carrito.push(id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Curso agregado al carrito");
}
function cargarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  let suma = 0;
  lista.innerHTML = "";
  carrito.forEach(id => {
    let nombre, precio;
    if (id === "prim") {
      nombre = "Curso de matemática para primaria";
      precio = 70;
    } else if (id === "sec") {
      nombre = "Curso de matemática para secundaria";
      precio = 80;
    } else if (id === "preu") {
      nombre = "Curso de matemática Pre Universitario.";
      precio = 100;
    } else {
      nombre = "Curso desconocido";
      precio = 0;
    }
    suma += precio;
    const li = document.createElement("li");
    li.textContent = `${nombre} - $${precio}`;
    lista.appendChild(li);
  });
  total.textContent = `Total: $${suma.toFixed(2)}`;
}
function simularPago(e) {
  e.preventDefault();
  alert("Pago exitoso. Gracias por tu compra.");
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
  return false;
}
if (location.pathname.includes("carrito.html")) cargarCarrito();