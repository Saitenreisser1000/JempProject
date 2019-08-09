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
        Tone.Transport.cancel()
        var loadedSongData = row.getData()
        document.querySelector('#loadedSong').innerHTML = loadedSongData.songName
        prepareLoadedSong.setSong(loadedSongData)
    },


    //when no song is selected
    //load default song
    dataLoaded:function(data){
        var defaultSong = data[0];          //choose default song
        document.querySelector('#loadedSong').innerHTML = defaultSong.songName
        prepareLoadedSong.setSong(defaultSong)
    }
});

saveSong = function(songName, songDatas){

    $.ajax({
        type: 'POST',
        url: 'http://localhost/guitarJempPHP/gJSaveLoadSong.php',
        data: {songName: songName, songData: songDatas},
        success: function(data){
            //console.log(data);
            
            //TODO
            //update div
    }
})
}
                      
loadSong = function(){

        var ajax = new XMLHttpRequest();
        var url = 'http://localhost/guitarJempPHP/gJSaveLoadSong.php';
        
        ajax.open("POST", url, true);
        ajax.send();
        var data
        ajax.onreadystatechange = function(){
            
            if(this.readyState == 4 && this.status == 200){
                data = JSON.parse(this.responseText);
                
            }
        }
        return data;
}


