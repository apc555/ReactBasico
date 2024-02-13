import logo from './logo.svg';
import './App.css';
import Saudo from './componentes/Saudo.jsx';
import Principal from './componentes/Principal.jsx';
import BotonA from './componentes/BotonA.jsx';
import FuncionsBoton from './componentes/FuncBoton.jsx';
import Encabezado from './componentes/Encabezado.jsx';
import Footer from './componentes/Footer.jsx';
import Imaxen from './componentes/Imaxen.jsx';
import BotonInteractivo from './componentes/BotonInteractivo.jsx';
import BotonImg from './componentes/BotonImg.jsx';
import Input from './componentes/Input.jsx';


function App() 
{
  return (
    <div className="App">
      <Encabezado /> {/* h1 */}
      <Principal>
        <BotonInteractivo><Saudo /></BotonInteractivo>        
        <BotonA></BotonA>
        <FuncionsBoton/>
        
        {/* <Imaxen/> */}
        </Principal> {/* main */}
        <BotonImg><Imaxen></Imaxen></BotonImg>
        <Input />
        <Footer/>
    </div>

  );
}

export default App;
