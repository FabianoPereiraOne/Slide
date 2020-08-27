var array = []
var conteiner = document.getElementById("conteiner")
var atual
var max
var voltar = document.getElementById("buttonV")
var passar = document.getElementById("buttonP")
var tempo
var estado = 1
var aut = document.getElementById("auto")
var repiter
var barra 
var sub = document.getElementById("sub-barra")
preCarregamento = () =>{
    var s = 1
    for(let c = 0; c < 5; c++){
        array[c] = new Image()
        array[c].src = `imagens/img${s}.jpg`
        s++
    }
}
carregarImg = (img) =>{
    conteiner.style.backgroundImage = `url("${array[img].src}")`
}

trocar = (dir) =>{
    tempo = 0
    atual+= dir
    if(atual > max){
        atual = 0
    }else if(atual < 0){
        atual = max
    }
    carregarImg(atual)
}

iniciar = () =>{
    preCarregamento()
    tempo = 0
    atual = 0
    max = array.length -1
    carregarImg(atual)
}
anima = () =>{
    tempo++
    if(tempo >= 500){
        tempo = 0
        trocar(1)
    }
   barra = tempo*2
   sub.style.width = barra + "px"
   repiter = window.requestAnimationFrame(anima)
}
auto = () =>{
    console.log("comando executado")
    if(estado == 1){
        estado = 2
        aut.value = "OFF"
        aut.style.backgroundColor ="red"
        anima()
    }else if(estado == 2){
        aut.value = "AUTO"
        estado = 1
        aut.style.backgroundColor = "green"
        window.cancelAnimationFrame(repiter)
        
    }
}

iniciar()