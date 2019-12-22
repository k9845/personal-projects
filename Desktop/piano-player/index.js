const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];


const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key))
})
document.addEventListener('keydown' ,e =>{
    const key  = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex]);

    }
    if(blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex]);

    }

})
function playNote(key){
    const musicAudio = document.getElementById(key.dataset.note)
    musicAudio.currenttime = 0;
    musicAudio.play();
    key.classList.add('active');
    musicAudio.addEventListener('ended',() =>{
        key.classList.remove('active');
    });

}