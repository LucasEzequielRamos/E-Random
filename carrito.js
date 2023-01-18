let productoParaCarrito = obtenerDelLs("carrito");

const contenedorCarrito = document.querySelector(".item-venta");

function actualizarCarrito(array) {
  array.forEach((prod) => {
    const article = document.createElement("article");
    article.className = "articulo-carrito row";
    article.innerHTML = `
      <div class="nombre-envio col-9">
      <span class="nombre-item">${prod.title}</span>
      <p class="envio-item">Envio gratis</p>
      <div class="botones-item">
          <ul class="lista-botones">
              <li class="boton-eliminar" id="boton-${prod.id}">Eliminar</li>
              <li>Comprar ahora</li>
              <li>Guardar para despues</li>
          </ul>
      </div>
  </div>
  <div class="precio-carrito col-3">
      <span class="precio-numero">
         $${prod.price}
      </span>
  </div>
      `;
    contenedorCarrito.appendChild(article);
  });
}
actualizarCarrito(productoParaCarrito);

function eliminarDelCarrito(array) {
  const botonEliminar = document.querySelectorAll(`.boton-eliminar`);
  botonEliminar.forEach((boton) => {
    boton.onclick = () => {
      const id = boton.id.slice(6);
      const filtrarProducto = array.filter((element) => {
        return element.id != Number(id);
      });

      productoParaCarrito = filtrarProducto;
      localStorage.setItem("carrito", JSON.stringify(productoParaCarrito));
      console.log(productoParaCarrito);
      eliminarDelCarrito(productoParaCarrito);
      actualizarCarrito(productoParaCarrito);
    };
  });
}
eliminarDelCarrito(productoParaCarrito);

console.log(productoParaCarrito);
