// music data
const musicData = [
  {
    id: 1,
    title: "Happy",
    artist: "Pharrell Williams",
    file: "music1.mp3",
  },
  {
    id: 2,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    file: "music2.mp3",
  },
  {
    id: 3,
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    file: "music3.mp3",
  },
];

// get elements
const playlistList = document.getElementById("playlist-list");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const skipBtn = document.getElementById("skip-btn");
const volumeControl = document.getElementById("volume-control");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// audio element
const audio = new Audio();

// current song index
let currentSongIndex = 0;

// render playlist
function renderPlaylist() {
  playlistList.innerHTML = "";
  musicData.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${song.title} - ${song.artist}`;
    listItem.dataset.songId = song.id;
    playlistList.appendChild(listItem);
  });
}

// play song
function playSong(songId) {
  const song = musicData.find((song) => song.id === songId);
  audio.src = song.file;
  audio.play();
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
}

// pause song
function pauseSong() {
  audio.pause();
}

// skip song
function skipSong() {
  currentSongIndex++;
  if (currentSongIndex >= musicData.length) {
    currentSongIndex = 0;
  }
  playSong(musicData[currentSongIndex].id);
}

// search songs
function searchSongs() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSongs = musicData.filter((song) => {
    return (
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm)
    );
  });
  renderPlaylist(filteredSongs);
}

// event listeners
playlistList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    playSong(e.target.dataset.songId);
  }
});

playBtn.addEventListener("click", () => {
  playSong(musicData[currentSongIndex].id);
});

pauseBtn.addEventListener("click", pauseSong);

skipBtn.addEventListener("click", skipSong);

volumeControl.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
});

searchBtn.addEventListener("click", searchSongs);

// initialize
renderPlaylist();
