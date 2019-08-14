
jempSequencer = {

    _sequencer: Tone.Transport,

    seqStartPauseToggle: function(){
        if(this._sequencer.state === 'started'){
            this.sequencerPause()
        } else{

            //_sampler.sync();
            this._sequencer.start()
        }
    },

    sequencerPause: function(){
        this._sequencer.pause()
    },

    sequencerStop: function () {
        this._sequencer.stop()
        positioning.unSetAll()
    },

    sequencerLoop(startTime = 2, endTime = 4){
        if(this._sequencer.seconds >= endTime){
            this._sequencer.seconds = startTime;
        }
    },

    /**
     * transport-fader-length in seconds
     * @param faderMax - value of fader in seconds
     * @returns {boolean} true if on end-position, false if not
     * @private
     */
    _setSequencerEnd(faderMax){
        document.querySelector("#transportFader").max = faderMax
        if(this._sequencer.seconds >= faderMax){
            this.sequencerPause()
            setTimeout(() => {this._sequencer.position = 0}, 300);
            return true
        }else{
            return false
        }
    }

}
