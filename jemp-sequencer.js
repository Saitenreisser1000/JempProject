var _tonelist = []
const jempSequencer = {


    addTonesToList: function (tone, time, velocity = 1, posX, posY, color) {
        _tonelist.push(new function () {
            this.tone = tone
            this.time = time
            this.velocity = velocity
            this.posX = posX
            this.posY = posY
            this.color = color
        })
    },

    _triggerTone: function (time) {
        for (tone of _tonelist) {
            _sampler.triggerAttack(tone.tone, tone.time);
        }
    },

    _initDrawCounter: function(){
        //this._toneCounter = 0
    },

    _drawTone: function (time) {
        for (let i = 0; i < _tonelist.length; i++){
            Tone.Transport.schedule(function () {
                positioning.set(i, _tonelist[i].posX, _tonelist[i].posY);
            }, _tonelist[i].time)

        }
    },

    scheduleJempTones: function (time) {
        Tone.Transport.schedule(this._triggerTone, time)
        this._initDrawCounter()
        this._drawTone()
    },

}
