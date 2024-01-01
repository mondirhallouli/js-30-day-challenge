const keys = document.querySelectorAll('.key');
const board = document.querySelector('.keys');

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyA':
            playSound('clap');
            break;
        case 'KeyS':
            playSound('hihat');
            break;
        case 'KeyD':
            playSound('kick');
            break;
        case 'KeyF':
            playSound('openhat');
            break;
        case 'KeyG':
            playSound('boom');
            break;
        case 'KeyH':
            playSound('ride');
            break;
        case 'KeyJ':
            playSound('snare');
            break;
        case 'KeyK':
            playSound('tom');
            break;
        case 'KeyL':
            playSound('tink');
            break;
    }
});

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        e.stopPropagation();
        let sound = key.dataset.sound;
        playSound(sound);
    });
});

function playSound(sound) {
    const tune = new Audio(`./sounds/${sound}.wav`);
    tune.play();
}

// board.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     let key = e.target.dataset.key;
//     console.log(key);
// });