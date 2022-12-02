let songs = [
    {
        name: "zaalima",
        path: "./components/music1.mp3",
        coverPath: "./components/cover1.gif",
    },
    {
        name: "non-copy-1",
        path: "./components/music2.mp3",
        coverPath: "./components/cover1.gif",
    },
    {
        name: "non-copy-2",
        path: "./components/music3.mp3",
        coverPath: "./components/cover1.gif",
    },
    {
        name: "non-copy-3",
        path: "./components/music4.mp3",
        coverPath: "./components/cover1.gif",
    },
    {
        name: "non-copy-4",
        path: "./components/music5.mp3",
        coverPath: "./components/cover1.gif",
    },
]

let songIndex = 0;
let audioElement = new Audio(songs[songIndex].path);
let playButton = document.getElementById('playButton');
let nextButton = document.getElementById('nextButton');
let backButton = document.getElementById('backButton');
let suffleButton = document.getElementById('suffleButton');
let repeatButton = document.getElementById('repeatButton');
let songBar = document.getElementById('songBar');
let zalima = document.getElementById('zalima');
let apna_bana_le = document.getElementById('apna_bana_le');
let ranjaana_ve = document.getElementById('ranjaana_ve');
let qaafirana = document.getElementById('qaafirana');
let hawayein = document.getElementById('hawayein');

zalima.addEventListener('click', () =>{
    audioElement.src = songs[0].path;
    audioElement.play();
});

apna_bana_le.addEventListener('click', () =>{
    audioElement.src = songs[1].path;
    audioElement.play();
});

ranjaana_ve.addEventListener('click', () =>{
    audioElement.src = songs[2].path;
    audioElement.play();
});

qaafirana.addEventListener('click', () =>{
    audioElement.src = songs[3].path;
    audioElement.play();
});

hawayein.addEventListener('click', () =>{
    audioElement.src = songs[4].path;
    audioElement.play();
});

playButton.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playButton.src = './components/pause.png';
    } else {
        audioElement.pause();
        playButton.src = './components/play.svg';
    }
});

nextButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].path;
    audioElement.play();
});

backButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].path;
    audioElement.play();
});

suffleButton.addEventListener('click', () => {
    let suffleIndex = Math.floor(Math.random() * songs.length);
    songIndex = suffleIndex;
    audioElement.src = songs[songIndex].path;
    audioElement.play();
});

repeatButton.addEventListener('click', () => {
    audioElement.loop = true;
});

