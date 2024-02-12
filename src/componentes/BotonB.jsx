export default function BotonB(props){
   
    return <button className={props.estilo} onClick={props.funcion}>{props.titulo}</button>
}