import logo from './logo.svg';
import './App.css';
import Saudo from './componentes/Saudo.jsx';
import Encabezado from './componentes/Encabezado.jsx';
import Boton from './componentes/Boton.jsx';
import FuncionsBoton from './componentes/FuncBoton.jsx';


function App() {
  return (
    <div className="App">
      <Encabezado>
        <Saudo />
        <Boton></Boton>
        <FuncionsBoton/>

        </Encabezado>
    </div>

  );
}

export default App;
