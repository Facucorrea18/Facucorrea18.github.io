//Menu lateral
var menu_visible = false;
let menu = document.getElementById ("nav");
function mostrarOcultarMenu() {
    if(menu_visible==false) {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
        manu_visible = false;
    }
}

//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++) {
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("reparacion");
crearBarra(reparacion);
let programacion = document.getElementById("programacion");
crearBarra(programacion);
let detv = document.getElementById("detv");
crearBarra(detv);
let javascriptc = document.getElementById("javascriptc");
crearBarra(javascriptc);
let pc = document.getElementById("pc");
crearBarra(pc);
let htmlcss = document.getElementById("htmlcss");
crearBarra(htmlcss);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalReparacion = setInterval(function() {
            pintarBarra(reparacion, 12, 0, intervalReparacion);
        },100);
        const intervalProgramacion = setInterval(function() {
            pintarBarra(programacion, 11, 1, intervalProgramacion);
        },100);
        const intervalDetv = setInterval(function() {
            pintarBarra(detv, 9, 2, intervalDetv);
        },100);
        const intervalJavascriptc = setInterval(function() {
            pintarBarra(javascriptc, 12, 3, intervalJavascriptc);
        },100);
        const intervalPc = setInterval(function() {
            pintarBarra(pc, 16, 4, intervalPc);
        },100);
        const intervalHtmlcss = setInterval(function() {
            pintarBarra(htmlcss, 10, 5, intervalHtmlcss);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#61c454";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function() {
    efectoHabilidades();
}