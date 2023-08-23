// Ejercicio 1
function enviar() {
    let nombre = document.getElementById('nombre').value;
    console.log(nombre);
    document.getElementById('mensaje').innerHTML = 'Bienvenido Usuario ' + nombre;

}
//Ejercicio 2
function cambiar_fondo() {
    document.getElementById('fondo').style.backgroundColor = '#4794F5';

}
function generar_tabla() {
    let num = document.getElementById('numero').value;
    console.log(nombre);
    'Bienvenido Usuario ' + nombre;
    let text = "";
    for (let index = 1; index <= 10; index++) {

        let multiplo = num * index;
        let multiplo2 = num + '*' + index + '=' + multiplo;
        text += multiplo2 + "<br>";

    }
    document.getElementById('tabla').innerHTML = text;;

}