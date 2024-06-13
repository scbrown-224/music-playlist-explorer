
// getting from other files
let playlists = data.playlists;
let randomIndex = Math.floor(Math.random() * playlists.length);
let playlistRandom = playlists[randomIndex];



// first make the html in js
// we'll put it all in the container div

let container = document.querySelector('.container');

let playlistInfo = document.createElement('div');
playlistInfo.className = 'playlist-info';
container.appendChild(playlistInfo);

let featuredImg = document.createElement('img');
featuredImg.src = playlistRandom.playlist_art;
featuredImg.id = 'featuredImg';
let featuredPlaylistName = document.createElement('h2');
featuredPlaylistName.textContent = playlistRandom.playlist_name;
let featuredPlaylistCreator = document.createElement('p');
featuredPlaylistCreator.textContent = playlistRandom.playlist_creator;
playlistInfo.appendChild(featuredImg);
playlistInfo.appendChild(featuredPlaylistName);
playlistInfo.appendChild(featuredPlaylistCreator);

// songs
let songList = document.createElement('div');
songList.className = 'song-list';
container.appendChild(songList);

let ul = document.createElement('ul');
songList.appendChild(ul);

playlistRandom.songs.forEach(song => {
    let li = document.createElement('li');
    ul.appendChild(li);

    let featuredSongCard = document.createElement('div');
    featuredSongCard.className = 'featuredSongCard';
    li.appendChild(featuredSongCard);

    let featuredSong = document.createElement('img');
    featuredSong.className = 'featuredSong';
    featuredSong.src = song.cover_art;  // Set the source of the image
    featuredSongCard.appendChild(featuredSong);

    let featureSongText = document.createElement('div');
    featureSongText.className = 'featureSongText';
    featuredSongCard.appendChild(featureSongText);

    let songTitle = document.createElement('h3');
    songTitle.textContent = song.title;
    featureSongText.appendChild(songTitle);

    let songArtist = document.createElement('p');
    songArtist.textContent = song.artist;
    featureSongText.appendChild(songArtist);

    let songAlbum = document.createElement('p');
    songAlbum.textContent = song.album;
    featureSongText.appendChild(songAlbum);

    let songTime = document.createElement('div');
    songTime.className = 'song-duration';
    // songTime.className = 'modal-time';
    let duration = document.createElement('p');
    duration.textContent = song.duration;        
    songTime.appendChild(duration);
    featuredSongCard.appendChild(songTime);

    
});





