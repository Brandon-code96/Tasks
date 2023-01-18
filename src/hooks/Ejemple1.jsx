// Ejemple de uso del Hook useState
// Crear un componente de tipo funcion y acceder a su estado
// privado a traves de un hook y, además porder modificarlo

import React, { useState } from 'react'

const Ejemple1 = () => {

  //Valor inicial para un contador
  const valorInicial = 0;

  //valor inicial para una persona
  const personaInicial = {
    nombre : "Martin",
    email: "martin@imaginagroup.com"
  }

  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean
   * parte del estado del componente para asu poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente.
   */
  
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador(){
    setContador(contador + 1);
  }
  
  function actualizarPersona(){
    setPersona({
      nombre: 'Pepe',
      email: 'pepe@imaginagroup.com'
    })
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>EMAIL: {persona.email}</h3>
      
      {/* Bloque de botonoes para actualizar el estado del componente */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}

export default Ejemple1;
