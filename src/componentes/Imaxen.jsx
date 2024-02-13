export default function Imaxen(){
    const avatar = "https://i.imgur.com/MK3eW3As.jpg"
    const descripcion = 'Katherine Johnson';

    const estilo = {
        div: {
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "3px",
        backgroundColor: "lightyellow",
        },
        img: { borderRadius: "50%", },
    }

    return(<div style={estilo.div}>
        <h4>{descripcion}</h4>
    <img src={avatar} alt={descripcion} style={estilo.img}/> 
    </div>)
}