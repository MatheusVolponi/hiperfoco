const html = document.querySelector('html');
const startButton = document.querySelector('#start-pause');
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


let elapsedTime = 5;
let intervalId = null;

const focoDuration = 1500;
const curtoDuration = 300;
const longoDuration = 900;

songInput.addEventListener('change', () => {
    if(song.paused) {
        song.play();
    } else {
        song.pause();
    }
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
    buttons.forEach(button => button.classList.remove('active'));
    html.setAttribute('data-context', context);
    banner.setAttribute('src', `/images/${context}.png`);
    switch (context) {
        case 'foco':
            title.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'short':
            title.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'long':
            title.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
}

const countdown = () => {
    if(elapsedTime <= 0) {
        finishAudio.play();
        alert('Tempo Finalizado!');
        stopTimer();
        return;
    }
    elapsedTime --;
    console.log('elapsedTime: ' + elapsedTime);
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
}

function stopTimer () {
    clearInterval(intervalId);
    intervalId = null;
}
