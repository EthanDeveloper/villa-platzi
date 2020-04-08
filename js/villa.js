let vp = document.getElementById("lienzo");
let papel = vp.getContext("2d");

let pollo = {
    url: "../img/pollo.png",
    cargaOk: false
}

let vaca = {
    url: "../img/vaca.png",
    cargaOk: false
}

let fondo = {
    url: "../img/tile.png",
    cargaOk: false
}

let cerdo = {
    url: "../img/cerdo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", dibujarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",dibujarPollos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", dibujarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdos);

let cantidad = {
    cant_p: numeroAleatorio(3, 5),
    cant_c: numeroAleatorio(4, 8),
    cant_v: numeroAleatorio(2, 6),
}

function dibujarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function dibujarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

function dibujarVacas(){
    vaca.cargaOk = true;
    dibujar();
};

function dibujarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }

    for(let p = 0; p < cantidad.cant_p; p++){
        let x = numeroAleatorio(0, vp.width-80);
        let y = numeroAleatorio(0, vp.height-80);

        if(pollo.cargaOk == true){
            papel.drawImage(pollo.imagen, x, y);
        }
    }

    for(let v = 0; v < cantidad.cant_v; v++){
        let x = numeroAleatorio(0, vp.width-80);
        let y = numeroAleatorio(0, vp.height-80);

        if(vaca.cargaOk == true){
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    for(let c = 0; c < cantidad.cant_c; c++){
        let x = numeroAleatorio(0, vp.width-80);
        let y = numeroAleatorio(0, vp.height-80);

        if(cerdo.cargaOk == true){
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

}


function numeroAleatorio(min, max){
    let resultado;
    resultado = Math.floor(Math.random()*(max - min + 1) + min)
    return resultado;
}


document.write("<h2>Vacas: " + cantidad.cant_v + "<br> Cerdos: " + cantidad.cant_c + "<br> Pollos: " + cantidad.cant_p + "</h2>");