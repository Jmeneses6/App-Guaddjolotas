import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <a href="/index/index3.html"><p id="sesionG" style={{
            textDecoration: "underline",
            color: "#FA4A0C",
            marginLeft: "1.5rem",
            marginTop: "2rem",
            fontSize: "20px",
            marginBottom: "-1rem",
          }}>Guajolotas</p></a>
        <p id="sesionB" style={{
          marginLeft: "9rem",
          marginTop: "-1.3rem",
          fontSize: "20px",
          color: "gray",
        }}>Bebidas</p>
        <p id="sesionT" style={{
          marginLeft: "15rem",
          marginTop: "-2.7rem",
          fontSize: "20px",
          color: "gray",
        }}>Tamales</p>
      </div>
    )
  }
}
