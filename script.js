const whiteKeys=['z','x','c','v','b','n','m','Z','X','C','V','B','N','M'];
const blackKeys=['s','d','g','h','j','S','D','G','H','J'];
const keys=document.querySelectorAll('.key');

const whiteKeysSeq=document.querySelectorAll('.key.whiteKey');
const blackKeysSeq=document.querySelectorAll('.key.blackKey');

keys.forEach(key =>{
    key.addEventListener('click',()=>playNote(key))
})

document.addEventListener('keydown',e=>{
    if(e.repeat)    return;
    const key=e.key;
    const whiteKeyIndex=whiteKeys.indexOf(key);
    const blackKeyIndex=blackKeys.indexOf(key);

    if(whiteKeyIndex!=-1)
    {
        playNote(whiteKeysSeq[whiteKeyIndex%7]);
    }
    if(blackKeyIndex!=-1)
    {
        playNote(blackKeysSeq[blackKeyIndex%5]);
    }
})

function playNote(key){
    const noteAudio=document.getElementById(key.dataset.note);
    noteAudio.currentTime=0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active');
    })
}