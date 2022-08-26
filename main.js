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