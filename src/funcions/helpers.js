const coloresCss = ()=>{
    
    let css = "neutro";
    
    if( valor >= 5) {
        css="vermello"

    }
    if(valor === 0){
        css = "neutro"
    }
    if(valor < 5 && valor > 0){
        css = "verde"
    }

    return css
}