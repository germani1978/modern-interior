// var btn = document.getElementsByTagName("i");
var menu = document.getElementById('icono');

menu.addEventListener('click', menuLateral);

function menuLateral(event) {

    var elem = document.getElementsByClassName("contenedor-exterior-nav");
    elem[0].style.display = "block";
}

// .contenedor-exterior-nav{
//     display: none;
// }