var _tonelist = []
var jempSequencer = {


    addTonesToList: function (tone, time, velocity = 1, posX, posY) {
        _tonelist.push(new function () {
            this.tone = tone
            this.time = time
            this.velocity = velocity
            this.posX = posX
            this.posY = posY
        })
    },

    _triggerTone: function (time) {
        for (tone of _tonelist) {
            _sampler.triggerAttack(tone.tone, tone.time);
        }
    },

    _drawTone: function (time) {
        let _toneCounter = 0
        for (tone of _tonelist) {
            Tone.Transport.schedule(function () {
                positioning.set(_toneCounter, _tonelist[_toneCounter].posX, _tonelist[_toneCounter].posY);
                _toneCounter++
            }, tone.time)

        }
    },

    scheduleTones: function (time) {
        Tone.Transport.schedule(this._triggerTone, time)
        this._drawTone()
    }

}
