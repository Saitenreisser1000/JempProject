var table = new Tabulator("#songTable", {
    height:"311px",
    layout:"fitColumns",
    ajaxURL:"http://localhost/guitarJempPHP/gJSaveLoadSong.php",
    //ajaxProgressiveLoad:"scroll",
    //selectable:true,
    paginationSize:20,
    placeholder:"No Data Set",
    columns:[
        {title:"Name", field:"songName", sorter:"string", width:200,},
        {title:"Type", field:"songType", sorter:"number", formatter:"progress"},
        {title:"Level", field:"level", sorter:"string"},
        {title:"Creation-date", field:"creationdate", sorter:"date", align:"center"},
        {title:"Creator", field:"creator", align:"center", sorter:"string"},
        
    ],
    
    //select song
    rowClick:function(e, row){
        var loadedSongData = row.getData().songData;
        var songName = row.getData().songName;
        _sendSongToLoad(loadedSongData, songName);
    },
    
     
    //when no song is selected
    //load default song
    dataLoaded:function(data){
        var defaultSong = data[0];          //choose default song
        prepareLoadedSong.setSong(defaultSong)
        //jempSequencer.songToLoad(prepareLoadedSong.setSong(defaultSong));
        //$('#loadedSong').html(jempSequencer.getNameOfLoadedSong());
    }
});

