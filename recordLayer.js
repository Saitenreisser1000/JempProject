
const recordlayer = {
    
    //ONE DOT
    recordDot: function(posX, posY, whichString, whichFret){
        let marker = document.createElement('div');
        marker.setAttribute("stringPos", whichString);
        marker.setAttribute("fretPos", whichFret);
        marker.setAttribute("class", "recordPoint");
        marker.style.left = posX+'px';
        marker.style.top = posY+'px';
        return marker;
    },
    
    /***************************
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    OOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    /**************************/
    
    //draws the fields of records
    recordFields: function(){

        var frets     = 16;
        var strings   = 6;
        var dotlist   = [];
        var yPosition = 150;
        var xPosition = -40;
        var startX    = xPosition;
        var xOffset   = 50;
        var yOffset   = -27; 
        let layerdiv  = document.getElementById('recordLayer');
        var i = 0;
        
        //including open strings
        frets += 1;

        //create dottlayer
        //stringloop
        for(; i < strings; i++){
            
            //multidimensional array
            dotlist[i] = [];
            
            //fretloop
            for(let j = 0; j < frets; j++){
                
                //instantiate dotts and apply
                var dot = dotlist[i][j] = new this.recordDot(xPosition,yPosition, i, j);
                layerdiv.appendChild(dot);
            
                //offset in x-Position
                xPosition = xPosition+xOffset;
            }
            
            //offset in y-Position
            yPosition += yOffset;
            
            //set xPosition back to start
            xPosition = startX;
        }
        return layerdiv
    },
    
    
    /************************/
    
    //declare variables
    recordInit: function(){
        this.recordContainer = [];
        //this.counter = 0
    },
    
    //clicks get recorded and stored in recordContainer temporarily 
    clickRecorder: function(elem){
        var x = elem.getAttribute("fretPos");
        var y = elem.getAttribute("stringPos");
        playTone(parseInt(x), parseInt(y));
        this.recordContainer.push(this.quarterCount().toString()+"|"+x+"|"+y)
    },

    bar : 0,
    quarter : 0,
    counter : 0,

    quarterCount: function(){
        this.counter++;
        this.quarter = (this.counter % 4) + 1;
        if (this.quarter === 1) {
            this.bar++
        }
        return this.bar + ":" + this.quarter
    },

    //get temp song
    getRecorded: function(){
        return this.recordContainer.toString();
    }
};

//song is saved
$(document).ready(function() {
    $('#savebutton').click(function() {
        $('#overlay').fadeIn(300);
    });
    $('#close').click(function() {

        //song saved by name
        saveSong($('#songName').val(),recordlayer.getRecorded() );
        $('#overlay').fadeOut(300);
    });
    $('#cancel').click(function() {
        $('#overlay').fadeOut(300);
    });
});
