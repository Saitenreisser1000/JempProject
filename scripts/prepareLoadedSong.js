prepareLoadedSong = {

    setSong(jempSong){
        this.jempSong = jempSong
        this._separatejempTone()
        jempSequencer.scheduleJempTones()
    },

    //TODO separate jempTone string
    _separatejempTone(){
        this.time = [];
        this.yPos = [];
        this.xPos = [];
        this.jempSong = this.jempSong.songData.split(',');
        //iterate over songdata decrypt and set as array
        for(let i = 0; i < this.jempSong.length; i++){
            let songDecr = this.jempSong[i];
            songDecr = songDecr.split('|');
            //tone-attributes in array
            this._combineAsToneJS(parseInt(songDecr[0]),parseInt(songDecr[1]),parseInt(songDecr[2]))
        }
    },

    //jempSequencer.addTonesToList("A2", "0:3", 1, 2, 3)
    _combineAsToneJS(time, posX, posY){
        jempSequencer.addTonesToList(_getsound(posX, posY), time, 1, posX, posY)
    }
}
