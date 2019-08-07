function toneLoader() {

    var h = jempSequencer.addTonesToList("D2", "0:2", 1, 0, 2)
    jempSequencer.addTonesToList("A2", "0:3", 1, 2, 3)
    jempSequencer.addTonesToList("D3", "0:4", 1, 3, 4)
    jempSequencer.addTonesToList("F#3", "1:1", 1, 2, 5)
    jempSequencer.addTonesToList("A2", "1:1", 1, 2, 3)
    jempSequencer.addTonesToList("D3", "1:1", 1, 3, 4)
    jempSequencer.addTonesToList("F#3", "1:1", 1, 2, 5)
    jempSequencer.addTonesToList("C#2", "1:2", 1, 4, 1)
    jempSequencer.addTonesToList("A2", "1:3", 1, 2, 3)
    jempSequencer.addTonesToList("C#3", "1:4", 1, 2, 4)
    jempSequencer.addTonesToList("G3", "2:1", 1, 3, 5)
    jempSequencer.addTonesToList("A3", "2:1", 1, 2, 3)
    jempSequencer.addTonesToList("G2", "2:1", 1, 0, 3)
    jempSequencer.addTonesToList("G3", "2:1", 1, 3, 5)
    jempSequencer.addTonesToList("D2", "2:2", 1, 0, 2)
    jempSequencer.addTonesToList("A2", "2:3", 1, 2, 3)
    jempSequencer.addTonesToList("D3", "2:4", 1, 3, 4)
    jempSequencer.addTonesToList("F#3", "3:1", 1, 2, 5)
    jempSequencer.addTonesToList("A3", "3:1", 1, 2, 5)
    jempSequencer.addTonesToList("F#4", "3:1", 1, 2, 5)
    jempSequencer.addTonesToList("F#3", "3:1", 1, 2, 5)
    jempSequencer.addTonesToList("D2", "3:2", 1, 0, 2)
    jempSequencer.addTonesToList("A2", "3:3", 1, 2, 3)
    jempSequencer.addTonesToList("D3", "3:4", 1, 3, 4)
    jempSequencer.addTonesToList("F#3", "4:1", 1, 2, 5)
    jempSequencer.addTonesToList("A3", "4:1", 1, 2, 5)
    jempSequencer.addTonesToList("F#4", "4:1", 1, 2, 5)
    jempSequencer.addTonesToList("F#3", "4:1", 1, 2, 5)

    jempSequencer.scheduleJempTones()
}


//jempTone -> numer, tone, posX, posY, time, color
