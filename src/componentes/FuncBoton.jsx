import React,{useState} from 'react';
import BotonB from './BotonB';
import { coloresCss } from '../funcions/helpers';

export default function FuncionsBoton(){
    let [valor,setValor] = useState(0)

    const sumarValor =  () => {
        setValor(valor+1)
    }

    const reiniciarValor =  () => {
        setValor(0)
    }

    const restarValor =  () => {
        const styles = {
                color : 'red'
            }
        setValor(valor-1) 
    }





    
    return(<>
    <h1>Contador FuncBoton.jsx</h1>
    <div>Valor actual en FuncBoton: {valor}</div>
    <BotonB estilo={coloresCss(valor)} funcion={sumarValor} titulo="Sumar Valor"/>
    <BotonB estilo={coloresCss(valor)} funcion={restarValor}  titulo = "Restar Valor"/>
    <BotonB estilo={coloresCss(valor)} funcion={reiniciarValor}  titulo = "Reiniciar Valor"/>
    
        </>)
}