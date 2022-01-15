import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import './App.css';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { FormularioCiudad } from './components/FormularioCiudad';
import { Todo } from './components/Todo';

const App = () => {
  return (
    <>
      <h1>React + TypeScript</h1>
      
      <h2>1. useState</h2>
      <hr />
      <Counter />

      <Usuario />

      <h3>2. useEffect - useRef</h3>
      <hr />

      <TimerPadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />

      <h2>CustomHooks</h2>
      <hr />
      <Formulario />

      <br />
      <FormularioCiudad />

      <br />
      <br />
      <br />

      <div className="App App-header">
        <Todo />
      </div>
    </>
  );
}

export default App;