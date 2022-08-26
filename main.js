const hamburguer = document.querySelector('.hamburguer');
const navigation = document.querySelector('.navigation-mobile');
const check = document.getElementById('dark');
const html = document.querySelector('html')

hamburguer.addEventListener('click', () =>{
    navigation.classList.toggle('active');
})

check.addEventListener('change', () => {
    html.classList.toggle('mode')
})

const textoNome = document.querySelector('#name');

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

typeWrite(textoNome)