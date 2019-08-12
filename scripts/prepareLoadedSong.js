prepareLoadedSong = {

    setSong(jempSong){
        //this.jempSong = jempSong
        this._separatejempTone(jempSong)
    },

    /**
     * split jempSong into jempTones [time, posX, posY]
     * split jempSong into position x [1], position y [2]
     * @param jempSong
     * @private
     */

    _separatejempTone(jempSong){

        this.toneCounter = 0;
        jempSong = jempSong.songData.split(',');

        //iterate over songdata decrypt and set as array
        for(let i = 0; i < jempSong.length; i++){
            let songDecr = jempSong[i];
            songDecr = songDecr.split('|');

            /***add tones to schedule****/
            let jToneX = songDecr[1];
            let jToneY = songDecr[2];

            //gets tone from position
            let jTone = _numberToToneWrapper(_getsound(parseInt(songDecr[1]),parseInt(songDecr[2])));
            let jempTime = songDecr[0];

            Tone.Transport.schedule(function(){
                //sounds
                _sampler.triggerAttack(jTone);
                //points
                Tone.Draw.schedule(function(){
                    positioning.set(this.toneCounter, jToneX , jToneY);

            })}, jempTime);
            this.toneCounter++

        }
    }
}

