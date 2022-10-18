

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let volume = document.querySelector('#volume');
let muteButton = document.getElementById("muteButton");

let songs = [
    {songName: "Despacito-Luis Fonsi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Hello Hello-Adele", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "La La Love-Elnaaz Norouz", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Baby-Justin Bieber", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dandelions-Ruth B", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Before You Go-Lewis Capaldi", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Amaro-Serhat Durmus", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "In The End-Linkin Park", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Someone Will Love You-Johnny Orlando", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Fall In Love-Arozin Sabyh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Let Me Love You-Justin Bieber", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "My Universe-Alan Walker", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Grateful-Neffex", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Angel-Alan Walker", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Breaking the Rules-Jubin Nautiyal", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Money Heist-Manu Pilas", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
//volume chnage...
volume.addEventListener('change', function(e){ 
    // Update Seekbar
    audioElement.volume = e.currentTarget.value/100;
});
//........mute
muteButton.addEventListener('click', muteorUnmute, false)
function muteorUnmute(){
        if(audioElement.muted ==true){
        audioElement.muted = false;
        muteButton.classList.remove('fa-volume-mute');
        muteButton.classList.add('fa-volume-up');
}
        else{
        audioElement.muted= true;
        muteButton.classList.remove('fa-volume-up');
        muteButton.classList.add('fa-volume-mute');
}
}
//......

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})
// make a new ......






//.............
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//......Active side bar...
$(function() {
    $('#sidebar li a').click(function() {
       $('#sidebar li').removeClass();
       $($(this).attr('href')).addClass('active');
    });
 });
 