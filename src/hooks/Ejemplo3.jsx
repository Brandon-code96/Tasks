/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null)
const Componente1 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h1>
        El Token es: {state.token}
      </h1>
      <Componente2></Componente2>
    </div>
  )
}


const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  )
}


export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }
  //Creamo el estado de este componente
  const [sesionData, setSesionData] = useState(estadoInicial);
  function actualizarSesion(){
    setSesionData({
      token: 'JWT123456789',
      sesion: sesionData.sesion + 1
    })
  }

  return (
    <div>
      <miContexto.Provider value={sesionData}>
        {/* Todo lo que esté aqui dentro puede leer los datos de setSesionData */}
        {/* Ademas si se actualiza, los componentes de aqui, tambien lo actualizan */}
        <h1>*** Ejemplo de useState() y useContext() ***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
      </miContexto.Provider>
    </div>
  )
}


