import { useState } from "react";

export default function Input() {
    const [boleano, setBoleano] = useState(true);
    const [titulo, setTitulo] = useState("Editar");
    const [editar, setEditar] = useState("readonly");

    const _setVer = () => {
        setTitulo(titulo === "Editar" ? "Listo" : "Editar");
        setEditar(editar === "readonly" ? "" : "readonly");
        setBoleano(!boleano); 
    };

    return (
        <div><h3>Compoñente de texto editable</h3>
            <input type="text" readOnly={editar} defaultValue="Texto do input" />
            <button onClick={_setVer}>{titulo}</button>
        </div>
    );
}