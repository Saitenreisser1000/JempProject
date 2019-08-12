
/*Sequencer********************************/

document.querySelector('#startbutton').addEventListener("click", e => {
   jempSequencer.seqStartPauseToggle();
});

document.querySelector('#endbutton').addEventListener("click", e => {
    jempSequencer.sequencerStop();
});

document.querySelector('#bpmSpeed').addEventListener("change", e => {
    Tone.Transport.bpm.value = document.querySelector('#bpmSpeed').value
});

//test send to php
document.querySelector('#loadbutton').addEventListener('click', () =>{
    loadSong();

});



/*update sequencer**********************/

function updateTime() {
    requestAnimationFrame(updateTime)
    document.querySelector('#showBpm').textContent = Tone.Transport.position
    jempSequencer._setSequencerEnd(7)
    //jempSequencer.sequencerLoop()
    moveFader()
}

updateTime()


var _fader
var _dragging = false

function moveFader(){
    if(!_dragging) {
        _fader = document.querySelector('#transportFader')
        _fader.value = Tone.Transport.seconds
    }
    _fader.addEventListener('mousedown', e => {
        _dragging = true
    })
    _fader.addEventListener('mouseup', e => {
        Tone.Transport.position = _fader.value
        _dragging = false
    })

}

//Record**************************************/

$('#recordbutton').click(function(){
    $(".recordPoint").toggle("fast");
    $("#inputbox").toggle("fast");
    Tone.Transport.stop()
    //_sampler.unsync()
});

//which point is pressed
$('.recordPoint').click(function(){
    recordlayer.clickRecorder(this);
    $(this).css("background-color", "green");
});

//test send to php
$('#loadbutton').click(function(){
    loadSong();

});



