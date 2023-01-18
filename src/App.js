import logo from './logo.svg';
import './App.css';

import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

import TaskListComponent from './components/container/task_list';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/**Componentes propio de Greeting.jsx */}
        {/*<Greeting name="Martin"></Greeting> */}

        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemple de uso de HOOKS */}
        {/* <Ejemple1></Ejemple1> */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        <Ejemplo4 nombre="Martin">
          {/* Todo lo que hay aqui, es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
