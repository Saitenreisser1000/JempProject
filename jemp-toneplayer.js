const _sampler = new Tone.Sampler({
        "E1" : "AcousticGuitarE1.mp3",
        "F1" : "AcousticGuitarF1.mp3",
        "F#1" : "AcousticGuitarFshrp1.mp3",
        "G1" : "AcousticGuitarG1.mp3",
        "G#1" : "AcousticGuitarGshrp1.mp3",
        "A1" : "AcousticGuitarA1.mp3",
        "Bb1" : "AcousticGuitarBb1.mp3",
        "B1" : "AcousticGuitarB1.mp3",
        "C2" : "AcousticGuitarC2.mp3",
        "C#2" : "AcousticGuitarCshrp2.mp3",
        "D2" : "AcousticGuitarD2.mp3",
        "D#2" : "AcousticGuitarDshrp2.mp3",
        "E2" : "AcousticGuitarE2.mp3",
        "F2" : "AcousticGuitarF2.mp3",
        "F#2" : "AcousticGuitarFshrp2.mp3",
        "G2" : "AcousticGuitarG2.mp3",
        "G#2" : "AcousticGuitarGshrp2.mp3",
        "A2" : "AcousticGuitarA2.mp3",
        "Bb2" : "AcousticGuitarBb2.mp3",
        "B2" : "AcousticGuitarB2.mp3",
        "C3" : "AcousticGuitarC3.mp3",
        "C#3" : "AcousticGuitarCshrp3.mp3",
        "D3" : "AcousticGuitarD3.mp3",
        "D#3" : "AcousticGuitarDshrp3.mp3",
        "E3" : "AcousticGuitarE3.mp3",
        "F3" : "AcousticGuitarF3.mp3",
        "F#3" : "AcousticGuitarFshrp3.mp3",
        "G3" : "AcousticGuitarG3.mp3",
        "G#3" : "AcousticGuitarGshrp3.mp3",
        "A3" : "AcousticGuitarA3.mp3",
        "Bb3" : "AcousticGuitarBb3.mp3",
        "B3" : "AcousticGuitarB3.mp3",
        "C4" : "AcousticGuitarC4.mp3",
        "C#4" : "AcousticGuitarCshrp4.mp3",
        "D4" : "AcousticGuitarD4.mp3",
        "D#4" : "AcousticGuitarDshrp4.mp3",
        "E4" : "AcousticGuitarE4.mp3",
        "F4" : "AcousticGuitarF4.mp3",
        "F#4" : "AcousticGuitarFshrp4.mp3",
        "G4" : "AcousticGuitarG4.mp3",
        "G#4" : "AcousticGuitarGshrp4.mp3",
        "A4" : "AcousticGuitarA4.mp3",
        "Bb4" : "AcousticGuitarBb4.mp3",
        "B4" : "AcousticGuitarB4.mp3",
        "C5" : "AcousticGuitarC5.mp3",
        "C#5" : "AcousticGuitarCshrp5.mp3",
        "D5" : "AcousticGuitarD5.mp3"
    }, {
        "release" : 1,
        "baseUrl" : "./audio/"
    }).sync().toMaster()


function toneToNumberWrapper(toneToWrap){

    let value = null
    switch(toneToWrap){
        
        case "E1"   : value = 0; break;
        case "F1"   : value = 1; break; 
        case "F#1"  : value = 2; break;
        case "G1"   : value = 3; break;
        case "G#1"  : value = 4; break;
        case "A1"   : value = 5; break;
        case "Bb1"  : value = 6; break;
        case "B1"   : value = 7; break;
        case "C2"   : value = 8; break;
        case "C#2"  : value = 9; break;
        case "D2"   : value = 10; break;
        case "D#2"  : value = 11; break;
        case "E2"   : value = 12; break;
        case "F2"   : value = 13; break;
        case "F#2"  : value = 14; break;
        case "G2"   : value = 15; break;
        case "G#2"  : value = 16; break;
        case "A2"   : value = 17; break;
        case "Bb2"  : value = 18; break;
        case "B2"   : value = 19; break;
        case "C3"   : value = 20; break;
        case "C#3"  : value = 21; break;
        case "D3"   : value = 22; break;
        case "D#3"  : value = 23; break;
        case "E3"   : value = 24; break;
        case "F3"   : value = 25; break;
        case "F#3"  : value = 26; break;
        case "G3"   : value = 27; break;
        case "G#3"  : value = 28; break;
        case "A3"   : value = 29; break;
        case "Bb3"  : value = 30; break;
        case "B3"   : value = 31; break;
        case "C4"   : value = 32; break;
        case "C#4"  : value = 33; break;
        case "D4"   : value = 34; break;
        case "D#4"  : value = 35; break;
        case "E4"   : value = 36; break;
        case "F4"   : value = 37; break;
        case "F#4"  : value = 38; break;
        case "G4"   : value = 39; break;
        case "G#4"  : value = 40; break;
        case "A4"   : value = 41; break;
        case "Bb4"  : value = 42; break;
        case "B4"   : value = 43; break;
        case "C5"   : value = 44; break;
        case "C#5"  : value = 45; break;
        case "D5"   : value = 46; break;
    }
    return value
}

function numberToToneWrapper(numberToWrap){

    let value = null
    switch(numberToWrap){
        
        case  0  : value ="E1"  ; break;
        case  1  : value ="F1"  ; break; 
        case  2  : value ="F#1" ; break;
        case  3  : value ="G1"  ; break;
        case  4  : value ="G#1" ; break;
        case  5  : value ="A1"  ; break;
        case  6  : value ="Bb1" ; break;
        case  7  : value ="B1"  ; break;
        case  8  : value ="C2"  ; break;
        case  9  : value ="C#2" ; break;
        case  10 : value ="D2"  ; break;
        case  11 : value ="D#2" ; break;
        case  12 : value ="E2"  ; break;
        case  13 : value ="F2"  ; break;
        case  14 : value ="F#2" ; break;
        case  15 : value ="G2"  ; break;
        case  16 : value ="G#2" ; break;
        case  17 : value ="A2"  ; break;
        case  18 : value ="Bb2" ; break;
        case  19 : value ="B2"  ; break;
        case  20 : value ="C3"  ; break;
        case  21 : value ="C#3" ; break;
        case  22 : value ="D3"  ; break;
        case  23 : value ="D#3" ; break;
        case  24 : value ="E3"  ; break;
        case  25 : value ="F3"  ; break;
        case  26 : value ="F#3" ; break;
        case  27 : value ="G3"  ; break;
        case  28 : value ="G#3" ; break;
        case  29 : value ="A3"  ; break;
        case  30 : value ="Bb3" ; break;
        case  31 : value ="B3"  ; break;
        case  32 : value ="C4"  ; break;
        case  33 : value ="C#4" ; break;
        case  34 : value ="D4"  ; break;
        case  35 : value ="D#4" ; break;
        case  36 : value ="E4"  ; break;
        case  37 : value ="F4"  ; break;
        case  38 : value ="F#4" ; break;
        case  39 : value ="G4"  ; break;
        case  40 : value ="G#4" ; break;
        case  41 : value ="A4"  ; break;
        case  42 : value ="Bb4" ; break;
        case  43 : value ="B4"  ; break;
        case  44 : value ="C5"  ; break;
        case  45 : value ="C#5" ; break;
        case  46 : value ="D5"  ; break;
    }
    return value
}


function getsound(posX, posY){

    let soundNr = 0;
    
    if(posY == 0){ 
        soundNr = posX+0;
    }
    if(posY == 1){
        soundNr = posX+5;
    }
    if(posY == 2){
        soundNr = posX+10;
    }
    if(posY == 3){
        soundNr = posX+15;
    }
    if(posY == 4){
        soundNr = posX+19;
    }
    if(posY == 5){
        soundNr = posX+24;
    }
    return soundNr;                              
}

//playTone(numberToToneWrapper(getsound(10,5)))
function playTone(tone){
    _sampler.triggerAttack(tone)
}


 