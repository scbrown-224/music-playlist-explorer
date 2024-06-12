// // Get the modal
// var modal = document.getElementById("myModal");

// function setupModal(buttonId) {

//   // Get the button that opens the modal
//   var btn = document.getElementById(buttonId);

//   // Get the <span> element that closes the modal
//   var span = modal.getElementsByClassName("close")[0];

//   // When the user clicks on the button, open the modal
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }

// setupModal("card1");
// setupModal("card2");
// setupModal("card3");
// setupModal("card4");
// setupModal("card5");
// setupModal("card6");
// setupModal("card7");
// setupModal("card8");


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
  emojiCode.textContent = '❤️'
  newPlaylist.appendChild(emojiCode);

  let parent = document.querySelector(".all-playlists");
  parent.appendChild(newPlaylist);
});

// modal code
// assumes multiple classes so [0]
var modal = document.getElementsByClassName("modal-overlay")[0];
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

for(let i = 0; i < btn.length; ++i) {
  btn[i].addEventListener('click', () => {
    modal.style.display = 'block';

    let curPlaylist = data.playlists[i];

    curPlaylist.songs.forEach(function(song){


        // we want to insert into modal content
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
        modalTime.className = 'modal-time'
        let duration = document.createElement('p');
        duration.textContent = song.duration;
        modalBody.appendChild(modalTime);

        let songParent = document.querySelector('.modal-content');
        songParent.appendChild(modalBody);

    })
    // let newPlaylist = document.createElement('div');
    // newPlaylist.className = 'playlist-cards';
  
    // let playlistImg = document.createElement('img');
    // playlistImg.className = 'playlist-img';
    // playlistImg.src = playlist.playlist_art;
    // newPlaylist.appendChild(playlistImg);
  })
}






/*let test = `<div class="playlist-cards" id="card1"> 
                <img class="playlist-img" src="${playlist.playlist_art}">
                <h3 class="playlist-title">${playlist.playlist_name}</h3>
                <p class="artist-name">${playlist.playlist_creator}</p>
                <div class="likes">
                    <span>&#9825;</span>
                </div> 
                </div>`;
  
  let all_playlists_div = document.getElementsByClassName("all-playlists");
  all_playlists_div[0].innerHTML += test;
  */
  
  // console.log(playlist);



  // let test = `<div class="playlist-cards" id="card1"> 
  //               <img class="playlist-img" src="${playlist.playlist_art}">
  //               <h3 class="playlist-title">${playlist.playlist_name}</h3>
  //               <p class="artist-name">${playlist.playlist_creator}</p>
  //               <div class="likes">
  //                   <span>&#9825;</span>
  //               </div> </div>`;

  // let all_playlists_div = document.getElementsByClassName("all-playlists");
  // all_playlists_div[0].innerHTML += test;

  // console.log(all_playlists_div[0]);


/*
  `<div class="playlist-cards" id="card1"> 
                <img class="playlist-img" src="/music-playlist-creator/assets/img/playlist.png">
                <h3 class="playlist-title">Playlist Title</h3>
                <p class="artist-name">${playlist.playlist_creator}</p>
                <div class="likes">
                    <span>&#9825;</span>
                </div>

                <!-- The Modal -->
                <div id="myModal" class="modal">

                <!-- Modal content -->
                    <div class="modal-content">
                        <span class="close">&times;</span>
                            <div class="modal-header">
                                <img id="img1" class="modal-img" src="/music-playlist-creator/assets/img/playlist.png">
                                <div class="header-text">
                                    <h2 id="name1">Playlist Title</h2>
                                    <h3>artist name</h3>
                                </div>
                            
                            </div>
                            <div class="modal-body">
                                <div class="modal-song-card">
                                    <img id="song1" class="modal-song" src="/music-playlist-creator/assets/img/playlist.png">
                                    <div class="modal-body-text">
                                        <h3>song title</h3>
                                        <p>artist name</p>
                                        <p>album name</p>
                                    </div>
                                    <div class="modal-time">
                                        <p>0:00</p>
                                    </div>
                                </div>

                                <div class="modal-song-card">
                                    <img id="song2" class="modal-song" src="/music-playlist-creator/assets/img/playlist.png">
                                    <div class="modal-body-text">
                                        <h3>song title</h3>
                                        <p>artist name</p>
                                        <p>album name</p>
                                    </div>
                                    <div class="modal-time">
                                        <p>0:00</p>
                                    </div>
                                </div>

                                <div class="modal-song-card">
                                    <img id="song" class="modal-song" src="/music-playlist-creator/assets/img/playlist.png">
                                    <div class="modal-body-text">
                                        <h3>song title</h3>
                                        <p>artist name</p>
                                        <p>album name</p>
                                    </div>
                                    <div class="modal-time">
                                        <p>0:00</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>`
              

    let playlist_card= document.createElement('div');
    playlist_card.className = "playlist-cards";
    playlist_card.id = `card${playlist.playlistID}`;
      let playlist_img = document.createElement('img');
      let playlist_name = document.createElement('h3');
  let playlist_creator = document.createElement('p');
  let playlist_likes = document.createElement('div');
  let likes_img = document.createElement('span');
*/



