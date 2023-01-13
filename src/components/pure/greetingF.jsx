import React, {useState} from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

  //Breve introduccion a useState
  const [age, setage] = useState(29);

  const birtdhay = () => {
    setage(age+1);
  }

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional</h1>
      <h2>Edad {age}</h2>
      <div>
        <button onClick={birtdhay}>Cumplir años</button>
      </div>
    </div>
  )
}

GreetingF.propTypes = {
  name: PropTypes.string,
}

export default GreetingF

