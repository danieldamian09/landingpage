let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function (e){
    e.preventDefault();
    if (contador==0) {
        enlaces.className = ("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
    
})

// Siento que hubiese sido mejor colocarle un position relative a ".icono "
// y después con un z - index: 1;
// de esta manera se sobrepusiera al contenido que pudiera estar por encima.Y en la parte de Js esto sería más rápido a mi parecer:
//     const menu = document.getElementById('icono')

// const enlaces = document.querySelector('.enlaces')

// menu.addEventListener("click", e => {

//     e.preventDefault()

//     enlaces.classList.toggle('dos')

// })


// De resto todo estuvo super genial, felicidades amigo...
