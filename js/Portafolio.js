let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("server");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEquipo");
        habilidades[7].classList.add("innovasion");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("responsabilidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const $cards = document.querySelector('.fotoPortaf');
        const $images = document.querySelectorAll('.imgPortaf');
        const $backgrounds = document.querySelectorAll('.bgPortaf');
        const RANGE = 40;
        const calValue = (a, b) => {
            return (a / b * RANGE - RANGE / 2).toFixed(1);
        };

        document.addEventListener('mousemove', (event) => {
            const yValue = calValue(event.clientY, window.innerHeight);
            const xValue = calValue(event.clientX, window.innerWidth);

            $cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
            $images.forEach(($img) => {
                $img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
            });

            $backgrounds.forEach(($bg) => {
                $bg.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
            });
        });