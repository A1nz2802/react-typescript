import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

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

    </>
  );
}

export default App;