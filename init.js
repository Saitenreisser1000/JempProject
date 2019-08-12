
//initialize
(function(){    
    //create guitar
    var guitar = new guitarBuilder(27,50,60);

    //create record field and hide for defaultmode
    recordlayer.recordFields();
    $('.recordPoint').hide();
    recordlayer.recordInit()
    
    //set transport _fader to 0
    //document.getElementById("transportFader").max = 10;
    
    //send default song
    //toneLoader()

    /*****temp*********/
    //jempSequencer._setSequencerEnd(10)
    
})();




