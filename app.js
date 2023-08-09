const boton = document.querySelector("button");
const color = document.getElementById('color');

function generalColorAleatorio (){
    let digitos = '0123456789ABCDEF'
    let colorAleatorio = '#';

    for (let i =0; i<6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorAleatorio += digitos[indiceAleatorio];
    }
    return colorAleatorio;
}

boton.addEventListener('click', function(){
    let colorAle = generalColorAleatorio();
    //Cambiar texto
    color.textContent = colorAle;
    //cambiar color
    document.body.style.backgroundColor = colorAle;
})