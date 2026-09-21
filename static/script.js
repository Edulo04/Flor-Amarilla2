document.addEventListener("DOMContentLoaded", () => {

    const inicio = document.getElementById("inicio");
    const segundo = document.getElementById("segundo");
    const ramito = document.getElementById("ramito");
    const mensajeFinal = document.getElementById("final");
    const petalosCaidos = document.getElementById("petalos-caidos");

    let paso = 0;
    let ejecutando = false;


    /*
     * =========================================
     * TOQUE / CLIC PRINCIPAL
     * =========================================
     */

    document.addEventListener("click", () => {

        if (ejecutando) {
            return;
        }

        ejecutando = true;

        if (paso === 0) {

            mostrarSegundoPaso();

        } else if (paso === 1) {

            mostrarRamito();

        } else if (paso === 2) {

            mostrarMensajeFinal();

        }

    });


    /*
     * =========================================
     * SEGUNDO MENSAJE
     * =========================================
     */

    function mostrarSegundoPaso() {

        paso = 1;

        inicio.style.opacity = "0";
        inicio.style.transform = "scale(0.97)";

        setTimeout(() => {

            inicio.style.pointerEvents = "none";

            segundo.style.opacity = "1";
            segundo.style.transform = "scale(1)";

            setTimeout(() => {

                ejecutando = false;

            }, 1400);

        }, 1000);

    }


    /*
     * =========================================
     * APARECER EL RAMITO
     * =========================================
     */

    function mostrarRamito() {

        paso = 2;

        segundo.style.opacity = "0";
        segundo.style.transform = "scale(0.97)";

        setTimeout(() => {

            segundo.style.pointerEvents = "none";

            ramito.classList.add("mostrar");

            crearPetalos();

            setTimeout(() => {

                ejecutando = false;

            }, 2500);

        }, 900);

    }


    /*
     * =========================================
     * MENSAJE FINAL
     * =========================================
     */

    function mostrarMensajeFinal() {

        paso = 3;

        mensajeFinal.classList.add("mostrar");

        crearPetalosFinales();

        setTimeout(() => {

            ejecutando = false;

        }, 1800);

    }


    /*
     * =========================================
     * CREAR PÉTALOS
     * =========================================
     */

    function crearPetalos() {

        for (let i = 0; i < 12; i++) {

            setTimeout(() => {

                crearPetalo();

            }, i * 180);

        }

    }


    function crearPetalosFinales() {

        for (let i = 0; i < 18; i++) {

            setTimeout(() => {

                crearPetalo();

            }, i * 220);

        }

    }


    function crearPetalo() {

        const petalo = document.createElement("div");

        petalo.classList.add("petalo-caido");

        const posicion = Math.random() * 100;
        const duracion = 4 + Math.random() * 4;
        const retraso = Math.random() * 1.5;
        const tamaño = 7 + Math.random() * 7;

        petalo.style.left = `${posicion}%`;

        petalo.style.width = `${tamaño}px`;
        petalo.style.height = `${tamaño * 1.5}px`;

        petalo.style.animationDuration = `${duracion}s`;
        petalo.style.animationDelay = `${retraso}s`;

        petalosCaidos.appendChild(petalo);


        setTimeout(() => {

            petalo.remove();

        }, (duracion + retraso) * 1000 + 500);

    }

});
