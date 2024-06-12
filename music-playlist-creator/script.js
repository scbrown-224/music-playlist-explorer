
// playlist elements
data.playlists.forEach(function(playlist){
    let newPlaylist = document.createElement('div');
    newPlaylist.className = 'playlist-cards';
  
    let playlistImg = document.createElement('img');
    playlistImg.className = 'playlist-img';
    playlistImg.src = playlist.playlist_art;
    newPlaylist.appendChild(playlistImg);
  
    let playlistTitle = document.createElement('h3');
    playlistTitle.className = 'playlist-title';
    playlistTitle.textContent = playlist.playlist_name;
    newPlaylist.appendChild(playlistTitle);
  
    let artistName = document.createElement('p');
    artistName.className = 'artist-name';
    artistName.textContent = playlist.playlist_creator;
    newPlaylist.appendChild(artistName);
  
    let likeButton = document.createElement('div');
    likeButton.className = 'likes';
    newPlaylist.appendChild(likeButton);
  
    let emojiCode = document.createElement('span');
    emojiCode.className = 'heart-icon';
    emojiCode.innerHTML = '&#x2665'
    likeButton.appendChild(emojiCode);
  
    let likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = playlist.likeCount;
    likeButton.appendChild(likeCount);
  
    let parent = document.querySelector(".all-playlists");
    parent.appendChild(newPlaylist);

});
  


// modal code
// assumes multiple classes so [0]
var modal = document.getElementsByClassName("modal-overlay")[0];
// button that opens the modal
var btn = document.getElementsByClassName('playlist-img');
var span = document.getElementsByClassName('close')[0];
  
span.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
          modal.style.display = "none";
    }
}
 
// modal functionality
for(let i = 0; i < btn.length; ++i) {
    
    // opening modal & stuff
    btn[i].addEventListener('click', () => {
        let curPlaylist = data.playlists[i];
  
        modal.style.display = 'block';

  
        // Select the modal content container
        let modalContent = document.querySelector('.modal-content');

        // Clear existing content in the modal
        modalContent.innerHTML = '';

        // modal close stuff
        let modalClose = document.createElement('span');
        modalClose.className = 'close';
        modalClose.innerHTML = '&times';
        modalContent.appendChild(modalClose);

        // Add event listener for the dynamically created close button
        modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
  
    // Create modal header container
    let modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalContent.appendChild(modalHeader);
    
    // Create image inside modal header
    let modalImg = document.createElement('img');
    modalImg.className = 'modal-img';
    modalImg.src = curPlaylist.playlist_art;
    modalHeader.appendChild(modalImg);
  
    // Create header text container
    let headerText = document.createElement('div');
    headerText.className = 'header-text';
    modalHeader.appendChild(headerText);
    
    // Create playlist title
    let playlistTitle = document.createElement('h2');
    playlistTitle.textContent = curPlaylist.playlist_name;
    headerText.appendChild(playlistTitle);
    
    // Create artist name
    let artistName = document.createElement('h3');
    artistName.textContent = curPlaylist.playlist_creator;
    headerText.appendChild(artistName);

    function shuffle(songs) {
        let shuffledSongs = songs.sort(() => Math.random() -.5);
        return shuffledSongs;
    }

    // Create shuffle button
    let shuffleButton = document.createElement('button');
    shuffleButton.className = 'shuffle-button';
    shuffleButton.textContent = 'Shuffle';
    shuffleButton.addEventListener('click', () => {
        let shuffledSongs = shuffle(curPlaylist.songs);
        console.log(shuffledSongs);
        renderSongs(shuffledSongs);
    })
    // Append shuffle button to the modal content container
    modalContent.appendChild(shuffleButton);



  
    // Function to render songs
    function renderSongs(songs) {
        const elements = document.getElementsByClassName('modal-body');
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }

        songs.forEach(function(song) {
        // Create and insert song elements into modal content
        let modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        let newSong = document.createElement('div');
        newSong.className = 'modal-song-card';
        modalBody.appendChild(newSong);

        let songImg = document.createElement('img');
        songImg.className = 'modal-song';
        songImg.src = song.cover_art;
        newSong.appendChild(songImg);

        let modalBodyText = document.createElement('div');
        modalBodyText.className = 'modal-body-text';

        let songTitle = document.createElement('h3');
        songTitle.textContent = song.title;
        modalBodyText.appendChild(songTitle);
        let songArtist = document.createElement('p');
        songArtist.textContent = song.artist;
        modalBodyText.appendChild(songArtist);
        let songAlbum = document.createElement('p');
        songAlbum.textContent = song.album;
        modalBodyText.appendChild(songAlbum);

        newSong.appendChild(modalBodyText);

        let modalTime = document.createElement('div');
        modalTime.className = 'modal-time';
        let duration = document.createElement('p');
        duration.textContent = song.duration;
        modalBody.appendChild(modalTime);

        modalContent.appendChild(modalBody);
        });
    }

    renderSongs(curPlaylist.songs);

    }); 

    
}

// liking stuff
let hearts = document.querySelectorAll('.heart-icon');
// query selector all gets the entire arrau

hearts.forEach((heart) => {
    heart.addEventListener('click', (event) => {
        event.stopPropagation();
        const likeCountElement = heart.nextElementSibling;
        let likeCount = parseInt(likeCountElement.textContent);
        likeCount++;
        heart.classList.add('liked');
        likeCountElement.textContent = likeCount;
    });
});

// working code stops here



  
  



