import React from 'react'
import { BEBIDA, GUAD, TAMAL } from '../helpers/url'
import { GetData } from '../helpers/peticiones'
// import React, { useState } from 'react';

const Nav = () => {
  // const [pintar, usePintar] = useState
  const listar = async (url) => {
    const response = await GetData(url)
    console.log(response)
  }
  return (
    <div>
      <div>
        <p id="sesionG" onClick={() => listar(GUAD)}>Guajolotas</p>
        <p id="sesionB" onClick={() => listar(BEBIDA)}>Bebidas</p>
        <p id="sesionT" onClick={() => listar(TAMAL)}>Tamales</p>
      </div>
    </div>
  )
}

export default Nav