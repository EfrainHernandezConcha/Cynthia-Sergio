/*Reproductor de musica*/
const audio = document.getElementById('miAudio');
const button = document.getElementById('botonPlay');

button.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        button.innerHTML = '❚❚'; // Cambia a icono de pausa
    } else {
        audio.pause();
        button.innerHTML = '▶'; // Cambia a icono de play
    }
});


/********************************************************************* */ 
    const boton = document.getElementById("botonOcultar");

    const elementoVisible = document.querySelectorAll(".elementoVisible");

    boton.addEventListener("click", () => {

      elementoVisible.forEach(elementoVisible => {

        if(elementoVisible.classList.contains("elementoVisible")){

          elementoVisible.classList.remove("elementoVisible");
          elementoVisible.classList.add("elementoOculto");
          elementoVisible.classList.add("z-1");

        }else{

          elementoVisible.classList.remove("elementoOculto");
          elementoVisible.classList.add("elementoVisible");

        }

      });

    });




//funcion zoom on scroll
const elementoZoom = document.querySelectorAll('.zoom-scroll');
function zoomScroll() {
  const alturaPantalla = window.innerHeight;

  elementoZoom.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 100) {
      el.classList.add('zoom-scroll-on');
    }
    else {
        el.classList.remove('zoom-scroll-on')
      }
  });
}


window.addEventListener('scroll', zoomScroll);



//funcion displace on scroll
const elementoDisplace = document.querySelectorAll('.displace-scroll');
function displaceScroll() {
  const alturaPantalla = window.innerHeight;

  elementoDisplace.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 150) {
      el.classList.add('displace-scroll-on');
    }
    else {
        el.classList.remove('displace-scroll-on')
      }
  });
}
window.addEventListener('scroll', displaceScroll);
//end of fuction//



//CUENTA REGRESIVA 

const fechaObjetivo = new Date("Dec 18, 2026 16:30:00").getTime();

        const actualizarContador = () => {

            const ahora = new Date().getTime();
            const diferencia = fechaObjetivo - ahora;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

            const horas = Math.floor(
                (diferencia % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutos = Math.floor(
                (diferencia % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const segundos = Math.floor(
                (diferencia % (1000 * 60))
                / 1000
            );

            document.getElementById("dias").innerHTML = dias;
            document.getElementById("horas").innerHTML = horas;
            document.getElementById("minutos").innerHTML = minutos;
            document.getElementById("segundos").innerHTML = segundos;

            // Cuando termina
            if(diferencia < 0){
                clearInterval(intervalo);

                document.querySelector(".contador").innerHTML = `
                    <h1>¡La cuenta terminó!</h1>
                `;
            }
        };

        actualizarContador();

        const intervalo = setInterval(actualizarContador, 1000);

































//Declaracion de la constante elementos tomando del documento HTML la clase "oculto"
const elementos = document.querySelectorAll('.oculto');

//Funcion mostrarElementos con la constante alturaPantalla que sera igual al valor window.innerHeight
function mostrarElementos() {
  const alturaPantalla = window.innerHeight;

  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 100) {
      el.classList.add('visible');
    }
    else {
        el.classList.remove('visible')
      }
  });
}

//Declaracion de la constante elementos tomando del documento HTML la clase "oculto"
const elementosIzq = document.querySelectorAll('.oculto-izquierdo');

//Funcion mostrarElementos con la constante alturaPantalla que sera igual al valor window.innerHeight
function mostrarElementosIzquierda() {
  const alturaPantalla = window.innerHeight;

  elementosIzq.forEach(el => {
    const distanciaIzq = el.getBoundingClientRect().top;

    if (distanciaIzq < alturaPantalla - 100) {
      el.classList.add('visible-izquierdo');
    }
    else {
        el.classList.remove('visible-izquierdo')
      }
  });
}







// 🔥 Ejecutar también al cargar
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);
window.addEventListener('scroll', mostrarElementosIzquierda);
window.addEventListener('load', mostrarElementosIzquierda);
















//................................................................................//




