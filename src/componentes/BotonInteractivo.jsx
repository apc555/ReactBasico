import { useState } from "react";
import BotonB from "./BotonB";

export default function BotonInteractivo({children}){
    const [ver, setVer] = useState(false);
    const [clase, setClase] = useState("neutro");
    const [titulo, setTitulo] = useState("VER")

    const _setVer = ()=>{
        clase === "neutro" ? setClase("verde") : setClase("neutro");
        titulo === "VER" ? setTitulo("OCULTAR") :  setTitulo("VER");
        setVer(!ver)
    }

    return(<>
        <BotonB estilo={clase} funcion={_setVer} titulo={titulo + " BENVIDA"}/>
    {ver && children}
    </>)
}