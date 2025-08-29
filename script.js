const html = document.querySelector('html');
const startButton = document.querySelector('#start-pause');
const startButtonText = document.querySelector('#start-pause span');
const startButtonIcon = document.querySelector('.app__card-primary-button-icon');
const focoButton = document.querySelector('.app__card-button--foco');
const curtoButton = document.querySelector('.app__card-button--curto');
const longoButton = document.querySelector('.app__card-button--longo');
const timeDisplay = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const songInput = document.querySelector('#alternar-musica');

const song = new Audio('./sounds/luna-rise-part-one.mp3');
song.loop = true;

const audioPlay = new Audio('./sounds/play.wav');
const audioPause = new Audio('./sounds/pause.mp3');
const finishAudio = new Audio('./sounds/beep.mp3');


let elapsedTime = 1500;
let intervalId = null;

const focoDuration = 1500;
const curtoDuration = 300;
const longoDuration = 900;

const controlMusic = () => {
(intervalId && songInput.checked) ? song.play() : song.pause();
}

songInput.addEventListener('change', () => {
    controlMusic();
})

focoButton.addEventListener('click', () => {
    changeContext('foco');
    focoButton.classList.add('active');
})

curtoButton.addEventListener('click', () => {
    changeContext('short');
    curtoButton.classList.add('active');
})

longoButton.addEventListener('click', () => {
    changeContext('long');
    longoButton.classList.add('active');
})

function changeContext (context) {
    if (intervalId) {
        stopTimer();
    }
    buttons.forEach(button => button.classList.remove('active'));
    html.setAttribute('data-context', context);
    banner.setAttribute('src', `images/${context}.png`);
    switch (context) {
        case 'foco':
            elapsedTime = focoDuration;
            title.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'short':
            elapsedTime = curtoDuration;
            title.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'long':
            elapsedTime = longoDuration;
            title.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
    showTimer();
}

const countdown = () => {
    if(elapsedTime <= 0) {
        finishAudio.play();
        stopTimer();
        changeContext(html.getAttribute('data-context'));
        return;
    }
    elapsedTime --;
    showTimer();
}

startButton.addEventListener('click', startTimer);

//this function starts and pauses time.
function startTimer () {
    if(intervalId){
        audioPause.play();
        stopTimer();
        return;
    }
    audioPlay.play();
    intervalId = setInterval(countdown, 1000);
    startButtonText.textContent = 'Pausar';
    startButtonIcon.setAttribute('src', './images/pause.png');
    controlMusic();
}

function stopTimer () {
    clearInterval(intervalId);
    intervalId = null;
    startButtonText.textContent = 'Começar';
    startButtonIcon.setAttribute('src', './images/play_arrow.png');
    controlMusic();
}

function showTimer () {
    const time = new Date(elapsedTime * 1000);
    const formattedTime = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timeDisplay.innerHTML = `${formattedTime}`;
}

showTimer();
