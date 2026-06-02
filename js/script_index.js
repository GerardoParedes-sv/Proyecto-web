const imagenes = [
    "./images/galeria/local/dia.png",
    "./images/galeria/local/noche.png"
];

let index = 0;
const img = document.getElementById("local-dinamico");

setInterval(() => {
    if(img) {
        img.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % imagenes.length;
            img.src = imagenes[index];
            img.style.opacity = 1;
        }, 500);
    }
}, 5000);