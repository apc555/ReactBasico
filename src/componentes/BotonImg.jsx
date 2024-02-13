import { useState } from "react";
import BotonB from "./BotonB";
import Imaxen from "./Imaxen";

export default function BotonImg({children}){
    const [ver, setVer] = useState(false);
    const [clase, setClase] = useState("neutro");
    const [titulo, setTitulo] = useState("VER")

    const _setVer = ()=>{
        setClase(clase === "neutro" ? "verde" : "neutro");
        setTitulo(titulo === "VER" ? "OCULTAR" : "VER");
        setVer(!ver)
    }

    return(<><h3>Boton de imaxe</h3>
        <BotonB estilo={clase} funcion={_setVer} titulo={titulo + " IMAXE"}/>
    {ver && children}
    </>)
}