
var song_list = document.querySelector(".songs-container");

async function songs()
{

    var k = await fetch("http://127.0.0.1:5500/songs/"); // call the api
    let response = await k.text();
    
    var data = response;
    let div = document.createElement("div") // we cannot directly apply varous getelementBYid, class etc because it is text format not in json.
    div.innerHTML = response;
    
    let l = div.getElementsByTagName('a')
    
    // store those songs list into an array
    let newArray = new Array();

    for(let index=0; index < l.length;index++)
    {
        if(l[index].href.endsWith(".mp3")) // this line is the only store the links
        {
            newArray.push(l[index].href);
        }
    }
    // console.log(newArray)

    return newArray;
}

async function main()
{   
    // get the list of new songs
    var songs_links = await songs();
    console.log(songs_links);

    var  i =0;
    for (let iterator of songs_links) {

        var name  = ((iterator.split("/songs/")[1]).split(".mp3")[0]).replaceAll("-"," "); // we jsut removed unwanted things from links to create name from it
        // console.log(name)

        // adding the template in HTML
        var k = ` <div class="songs-card rounded card${i}">
        <div class="flex " style="min-width: 118px; justify-content: space-between; align-items: center; gap:10px">
        <div><i class="fa-solid fa-music"></i></div>
        <ul>
          <li class="song-name">${name}</li>
          <li class="artist-name"><p>Artist</p></li>
        </ul>
        </div>
        <button class="card${i}-song" style="background-color: transparent; border-style: none; cursor: pointer;"><img src="play-song.svg" class="invert-color" alt=""></button>
      </div>`;

      // add the template including the previous templates
      song_list.innerHTML = song_list.innerHTML + k;
      console.log(k);
   
      
      var s = document.querySelector(".card0");
        s.addEventListener("click",()=>{
        var audio = new Audio("http://127.0.0.1:5500/songs/dancing-in-the-stardust-free-music-no-copyright-203603.mp3");
        audio.play();
    })

    i++;
    }

}

main();