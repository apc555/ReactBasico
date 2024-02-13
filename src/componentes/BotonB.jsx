export default function BotonB(props){
   console.log('props.estilo: ',props.estilo)
    return <button className={props.estilo} onClick={props.funcion}>{props.titulo}</button>
}