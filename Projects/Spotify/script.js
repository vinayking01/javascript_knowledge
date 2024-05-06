// creating single global var for song so that when i click to another song then it should toggle to that song
let audio = new Audio();
let songInfo = document.querySelector(".songinfo")
let songTime = document.querySelector(".songtime")
var playsong = document.querySelector('.playsong')
var prevsong = document.querySelector('.prevsong')
var forwardsong = document.querySelector('.forwardsong')
let folder  = "playlist1";
let songs_folder_from_playlist = `http://127.0.0.1:5500/songs/${folder}`;
let name_of_playing_song  = null ;
let songs_links = new Array();
let store_link;
let currentVolume = 50;
let first_song = new Array;

var song_list = document.querySelector(".songs-container");

function play_track(store_link) {
    
    // showing volume button
    document.querySelector(".volume-sign > img").src="./img/volume.svg";

    // showing volume slider
    document.querySelector(".volume-slider").style.display  = "block";
    
    name_of_playing_song = ((store_link.split(`/${folder}/`)[1]).split(".mp3")[0]).replaceAll("%20", " ");
    // changing the logo when play and pause the song
    audio.src = store_link;

    songInfo.innerHTML = (name_of_playing_song);

    audio.play();
    playsong.src = './img/pause-btn.svg';    

}

function convertSecondsToMMSS(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    
    // Convert minutes and seconds to strings
    let minutesStr = String(minutes);
    let secondsStr = String(remainingSeconds);
    
    // Add leading zeros if needed
    if (minutes < 10) {
        minutesStr = '0' + minutesStr;
    }
    if (remainingSeconds < 10) {
        secondsStr = '0' + secondsStr;
    }
    let k  = parseInt(minutesStr)
    let k2 = parseInt(secondsStr)

    return `${(k)}:${k2}`;
}

    //Attach event to play, prev, forward button
    playsong.addEventListener('click', () => {

        // showing volume button
        document.querySelector(".volume-sign > img").src="./img/volume.svg";

        // showing volume slider
        document.querySelector(".volume-slider").style.display  = "block";
        songInfo.innerHTML = (name_of_playing_song); 

        if (audio.paused) // check whether the song is paused or not
        {   
            audio.play();
            playsong.src = './img/pause-btn.svg';
        }
        else 
        {
            playsong.src = './img/play-btn.svg';
            audio.pause();
            
           
            
        }
    });
    prevsong.addEventListener('click',()=>{
        
        let index2  = songs_links.indexOf(store_link)
        
        if(index2 > 0)
        {
            store_link = songs_links[index2-1];
            play_track(songs_links[index2-1]);
            
            console.log("prev");
        }
        // play_track(songs_links[1])
    })

    forwardsong.addEventListener('click',()=>{
        
        let index2  = songs_links.indexOf(store_link)
        
        if(index2 < (songs_links.length-1))
        {   
            store_link = songs_links[index2+1];
            play_track(songs_links[index2+1]);
            console.log("next");
        }
    })

   
    //addeventlistener for time update in playbar and this event should apply on audio.
    audio.addEventListener("timeupdate", () => { 
        songTime.innerHTML = `${convertSecondsToMMSS(audio.currentTime)} / ${convertSecondsToMMSS(audio.duration)}`;
        let position_of_pointer  = ((audio.currentTime/audio.duration)*100);
        document.querySelector(".circle").style.left = `${position_of_pointer}%`;

        // when songs end moving back the pointer in seeker to 0 sec and changing the play btn to close.
        if(audio.currentTime === audio.duration)
        {
            playsong.src = "img/play-btn.svg";
            position_of_pointer = 0;
            document.querySelector(".circle").style.left = `${position_of_pointer}%`;
            songTime.innerHTML = `${convertSecondsToMMSS(0)} / ${convertSecondsToMMSS(audio.duration)}`;
        }
        
    });

    //attaching event when click on the seek bar then it should move the pointer there and chg the current time of song;
    document.querySelector(".seekbar").addEventListener('click',(e)=>{
        let percent  = ((e.offsetX/e.target.getBoundingClientRect().width)*100);
        document.querySelector(".circle").style.left = `${percent}%`;
        audio.currentTime = (percent*audio.duration)/100;
    })

    // changing the audio 
    document.querySelector(".volume-slider").addEventListener('change',(e)=>{
   
        audio.volume = e.target.value/100;

        // changing the icon of audio btn on 0 to 100 volume
        if((e.target.value) >= 1)
        {
            document.querySelector(".volume-sign > img").src="./img/volume.svg";
        }
        else
        {
            document.querySelector(".volume-sign > img ").src="./img/volume-off.svg";
        }
    }) ;

    // mute function on clicking audio button
    document.querySelector(".volume-sign").addEventListener('click',()=>{
       
        if((audio.volume*100) == 0)
        {
            audio.volume = 1;
            document.querySelector(".volume-slider").value = 100;
            //change the image from mute to play speaker
            document.querySelector(".volume-sign > img").src="./img/volume.svg";
        }
        else
        {
            audio.volume = 0;
            document.querySelector(".volume-slider").value = 0;
            document.querySelector(".volume-sign > img ").src="./img/volume-off.svg";
        }
    })

async function songs(songs_folder_from_playlist) {

    var k = await fetch(songs_folder_from_playlist); // call the api
    let response = await k.text();

    var data = response;
    // console.log(data);
    let div = document.createElement("div") // we cannot directly apply varous getelementBYid, class etc because it is text format not in json.
    div.innerHTML = response;

    let l = div.getElementsByTagName('a')
    
    // store those songs list into an array
    let newArray = new Array();

    for (let index = 0; index < l.length; index++) {
        if (l[index].href.endsWith(".mp3")) // this line is the only store the links of the song and ignore other things which doesn't have mp3
        {
            newArray.push(l[index].href);
        }
    }
    // console.log(newArray)

    return newArray;
}




async function main(songs_folder_from_playlist) {
    
    // get the list of new songs

    songs_links = await songs(songs_folder_from_playlist);
    store_link = songs_links[0];
    audio.src = songs_links[0];

    
    name_of_playing_song = ((songs_links[0].split(`/${folder}/`)[1]).split(".mp3")[0]).replaceAll("%20", " ");

    songInfo.innerHTML = name_of_playing_song;
   

    var i = 0;
    var song_list = document.querySelector(".songs-container");
    song_list.innerHTML =""
    // console.log(song_list)
    for (let iterator of songs_links) {

        var name = ((iterator.split(`/${folder}/`)[1]).split(".mp3")[0]).replaceAll("%20", " "); // we just removed unwanted things from links to create name from it


        // adding the template in HTML
        var k = ` <div class="songs-card rounded card">
        <div class="flex " style="min-width: 118px; justify-content: space-between; align-items: center; gap:10px">
        <div><i class="fa-solid fa-music"></i></div>
        <ul>
          <li class="song-name">${name}</li>
          <li class="artist-name"><p>Artist</p></li>
        </ul>
        </div>
        <button class="card${i}-song songs-btn" style="background-color: transparent; border-style: none; cursor: pointer;" link=${iterator};><img src="./img/play-song.svg" class="invert-color" alt=""></button>
      </div>`;

        //   add the template including the previous templates
        song_list.innerHTML = song_list.innerHTML + k;

        i++;
    }

    // Attach event listener to a songs for play on click in left side bar.  

var fetch_songs = document.querySelectorAll('.songs-btn');
// console.log(fetch_songs)
fetch_songs.forEach((element) => {
    element.addEventListener('click', (event) => {
         store_link = event.currentTarget.getAttribute('link').split(';')[0];
        
        play_track(store_link)

    })

});
}

main(songs_folder_from_playlist); 


// code for changing the playlist , which changes the songs list visible in left side bar.


var cards = document.querySelectorAll(".card");
cards.forEach(function (element) {
    element.addEventListener('click', async (e) => {
        folder = e.currentTarget.getAttribute("folder-name");
        songs_folder_from_playlist = `http://127.0.0.1:5500/songs/${folder}`;


        first_song = await songs(songs_folder_from_playlist);
        audio.src = first_song[0];
        audio.play();
        playsong.src = "./img/play-btn.svg"
        main(songs_folder_from_playlist);
    });
});




// hamburger code for mobile

document.querySelector(".hamburger").addEventListener('click',()=>{
    console.log("clicked")
    document.querySelector(".left-box").style.left = "0%";
})

document.querySelector(".close-hamburger").addEventListener('click',()=>{
    console.log("closing")
    document.querySelector(".left-box").style.left = "-100%";
})