import React,{useState} from 'react';

export default function Boton(){
    let [valor,setValor] = useState(0)

    const sumarValor =  () => {
        valor += 1;
        setValor(valor)
    }

    const reiniciarValor =  () => {
        valor = 0;
        setValor(valor)
    }

    const restarValor =  () => {
//        valor -= 1;
        setValor(valor-1) // otro modo de hacer lo mismo
    }

    return(<>
    <h1>Contador Boton.jsx</h1>
    <div>Valor actual : {valor}</div>
    <button onClick={sumarValor}>Sumar 1</button>
    <button onClick={restarValor}>Restar 1</button>
    <button onClick={reiniciarValor}>Reiniciar</button>
    
    </>)
    
}