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
    html.setAttribute('data-context', 'foco');
})

curtoButton.addEventListener('click', () => {
    html.setAttribute('data-context', 'short');
})

longoButton.addEventListener('click', () => {
    html.setAttribute('data-context', 'long');
})