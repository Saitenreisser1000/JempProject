
jempSequencer = {

    _setSequencerEnd(faderMax){
        document.querySelector("#transportFader").max = faderMax
        if(Tone.Transport.seconds >= faderMax){
            Tone.Transport.pause()
        }
    }

}
