document.querySelector('#startbutton').addEventListener("click", e => {
    if(Tone.Transport.state === 'started')
        Tone.Transport.pause()
    else{
        Tone.Transport.start()
    }
})

document.querySelector('#endbutton').addEventListener("click", e => {
    Tone.Transport.stop()
    jempSequencer._toneCounter = 0
    positioning.unSetAll()
})

document.querySelector('#bpmSpeed').addEventListener("change", e => {
    Tone.Transport.bpm.value = document.querySelector('#bpmSpeed').value
})

//test send to php
document.querySelector('#loadbutton').addEventListener('click', () =>{
    loadSong();

});

$('#recordbutton').click(function(){
    $(".recordPoint").toggle("fast");
    $("#inputbox").toggle("fast");
});

//which point is pressed
$('.recordPoint').click(function(){
    recordlayer.clickRecorder(this);
    $(this).css("background-color", "green");
});

//test send to php
$('#loadbutton').click(function(){
    new loadSong();

});

function updateTime() {
    requestAnimationFrame(updateTime)
    document.querySelector('#showBpm').textContent = Tone.Transport.position
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
