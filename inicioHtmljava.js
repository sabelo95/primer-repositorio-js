// h1 { color: red} 
// .parrafito {...} clases
// #pid {...}
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML='patito <br> Feo';//agrega codigo
h1.innerText='patito <br> Feo';//agrega solo texto en la etiqueta
//console.log(h1.getAttribute('class')) leer atributo
//h1.setAttribute('class','rojo') cambiar atributo


// agregar atributo
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('rojo');
//h1.classList.contains('verde');


input.value = "456"

const img=(document.createElement('img'));// crear elementos html
img.setAttribute('src','https://cdn.wallpapersafari.com/20/21/lzPBmV.jpg');
img.setAttribute('width','500px');
console.log(img);
pid.innerHTML="";
pid.append(img);

