
//initialize
(function(){    
    //create guitar
    var guitar = new guitarBuilder(27,50,60);

    //create record field and hide for defaultmode
    recordlayer.recordFields();
    $('.recordPoint').hide();
    recordlayer.recordInit()
    
    //set transport _fader to 0
    document.getElementById("transportFader").value = 0;
    
    //send default song
    //toneLoader()
    
    
})();




