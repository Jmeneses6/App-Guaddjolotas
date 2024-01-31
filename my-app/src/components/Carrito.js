import React from 'react'

export default function Carrito() {
  return (
    <div>
      <header>
        <a href="x"><button id="return" style={{
          borderColor: "transparent",
          backgroundColor: "transparent",
          fontSize: "24px",
          float: "left",
          marginTop: "-0.4rem",
          marginLeft: "1rem",
          marginRight: "-3.4rem"
        }}>←</button></a>
        <p id="car" style={{
          textAlign: "center",
          fontSize: "22px",
          marginLeft: "-5rem",
          marginTop: "3rem",
          fontWeight: "bold",
          fontFamily: 'Inter',
        }}>Carrito</p>
      </header>
      <body>
        <img src="https://res.cloudinary.com/dkb4ozyhh/image/upload/v1706145428/Guajolotas/bbkw31mxe10ek5iepaby.png" alt="ImgCarrito" id="fondo" style={{
          width: "150px",
          height: "150px",
          marginTop: "11rem",
          marginLeft: "6.5rem",
        }}></img>
        <p id="msg" style={{
          textAlign: "center",
          fontSize: "20px",
          marginTop: "0.5rem",
          fontWeight: "bold",
          fontFamily: 'Inter'
        }}>No hay productos</p>
      </body>
      <footer>
        <a href="x"><button id="pay" style={{
          backgroundColor: "#FA4A0C",
          color: "white",
          borderColor: "transparent",
          borderRadius: "30px",
          width: "300px",
          height: "60px",
          marginLeft: "3rem",
          marginTop: "7rem",
          fontSize: "17px",
          fontFamily: 'Inter'
        }}>Pagar</button></a>
      </footer>
    </div>
  )
}

