const html = document.querySelector('html');
const startButton = document.querySelector('.app__card-primary-button');
const focoButton = document.querySelector('.app__card-button--foco');
const curtoButton = document.querySelector('.app__card-button--curto');
const longoButton = document.querySelector('.app__card-button--longo');
const timeDisplay = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const focoDuration = 1500;
const curtoDuration = 300;
const longoDuration = 900;

focoButton.addEventListener('click', () => {
    changeContext('foco');
})

curtoButton.addEventListener('click', () => {
    changeContext('short');
})

longoButton.addEventListener('click', () => {
    changeContext('long');
})

function changeContext (context) {
    html.setAttribute('data-context', context);
    banner.setAttribute('src', `/images/${context}.png`);
}