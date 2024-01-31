import React from 'react'

export default function Carrito() {
  return (
    <div>
      <header>
        <a href="x"><button id="return">←</button></a>
        <p id="car2">Carrito</p>
      </header>
      <body>
        <img src="https://res.cloudinary.com/dkb4ozyhh/image/upload/v1706145428/Guajolotas/bbkw31mxe10ek5iepaby.png" alt="ImgCarrito" id="fondo"></img>
        <p id="msg">No hay productos</p>
      </body>
      <footer>
        <a href="x"><button id="pay">Pagar</button></a>
      </footer>
    </div>
  )
}

