// creating single global var for song so that when i click to another song then it should toggle to that song
var audio = new Audio();
let songInfo = document.querySelector(".songinfo")
let songTime = document.querySelector(".songtime")
var playsong = document.querySelector('.playsong')
var prevsong = document.querySelector('.prevsong')
var forwardsong = document.querySelector('.forwardsong')

function play_track(store_link) {
    var name = ((store_link.split("/songs/")[1]).split(".mp3")[0]).replaceAll("-", " ");
    // changing the logo when play and pause the song
    if (audio.paused) {
        songInfo.innerHTML = name;
        songTime.innerHTML = " 222:33 / 000:333 "
        audio.src = store_link;
        playsong.src = 'pause-btn.svg';
        audio.play();
    }
    else {
        audio.pause();
        playsong.src = 'play-btn.svg';
    }
}

async function songs() {

    var k = await fetch("http://127.0.0.1:5500/songs/"); // call the api
    let response = await k.text();

    var data = response;
    let div = document.createElement("div") // we cannot directly apply varous getelementBYid, class etc because it is text format not in json.
    div.innerHTML = response;

    let l = div.getElementsByTagName('a')

    // store those songs list into an array
    let newArray = new Array();

    for (let index = 0; index < l.length; index++) {
        if (l[index].href.endsWith(".mp3")) // this line is the only store the links
        {
            newArray.push(l[index].href);
        }
    }
    console.log(newArray)

    return newArray;
}

var song_list = document.querySelector(".songs-container");


async function main() {
    console.log()
    // get the list of new songs
    var songs_links = await songs();
    
   

    var i = 0;
    var song_list = document.querySelector(".songs-container");

    for (let iterator of songs_links) {

        var name = ((iterator.split("/songs/")[1]).split(".mp3")[0]).replaceAll("-", " "); // we just removed unwanted things from links to create name from it


        // adding the template in HTML
        var k = ` <div class="songs-card rounded card">
        <div class="flex " style="min-width: 118px; justify-content: space-between; align-items: center; gap:10px">
        <div><i class="fa-solid fa-music"></i></div>
        <ul>
          <li class="song-name">${name}</li>
          <li class="artist-name"><p>Artist</p></li>
        </ul>
        </div>
        <button class="card${i}-song songs-btn" style="background-color: transparent; border-style: none; cursor: pointer;" link=${iterator};><img src="play-song.svg" class="invert-color" alt=""></button>
      </div>`;

        //   add the template including the previous templates
        song_list.innerHTML = song_list.innerHTML + k;

        i++;
    }

    // Attach event listener to a songs for play on click   

    var fetch_songs = document.querySelectorAll('.songs-btn');
    console.log(fetch_songs)
    fetch_songs.forEach((element) => {
        element.addEventListener('click', (event) => {
            var store_link = event.currentTarget.getAttribute('link').split(';')[0];

            play_track(store_link)

        })

    });

    //Attach event to play, prev, forward button
    playsong.addEventListener('click', () => {
        if (audio.paused) // check whether the song is paused or not
        {
            audio.play();
            playsong.src = 'pause-btn.svg';
        }
        else {
            audio.pause();
            playsong.src = 'play-btn.svg';
        }
    })


    //listen for time update and this event should apply on audio
    audio.addEventListener("timeupdate", () => {
        // var time  = audio.currentTime;
        // var min = (time/60);
        // var sec= (time - min*60).toFixed(2); 
        // console.log(`${min}:${sec},---> ${time}`);
    });
    
}

main(); 
