// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 // Neil's album
 var albumNeil= {
     title: 'Just Another Kook',
     artist: 'Neil Ranada',
     label: 'Indie',
     year: '2017',
     albumArtUrl: 'assets/images/album_covers/15.png',
     songs: [
         { title: 'Searching for the Green Flash', duration: '6:00' },
         { title: 'Trapped in the Impact Zone', duration: '4:30' },
         { title: 'Cruising on the Foam Top Express', duration: '5:25'},
         { title: 'Shhh. Coffee First', duration: '3:15' },
         { title: 'Dawn Patrol', duration: '2:45'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    return template;
};

// needed to copy albumImage so it could be access by event listner for changing albums
var albumImage = document.getElementsByClassName('album-cover-art')[0];


var setCurrentAlbum = function(album) {
    // #1
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    // #3
    albumSongList.innerHTML = '';

    // #4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
};

var albumsList = [albumPicasso, albumMarconi, albumNeil]; // Array of album objects
var index = 0; // Use as starting point
var currentAlbum = setCurrentAlbum(albumsList[index]); // Default is first index in albumsList array

albumImage.addEventListener('click',function(){ // Click event function
  index++; // Increase index by 1 to access next item in array
  if (index == albumsList.length) { // If index is on the last item in the albumsList array
      index = 0; // Go back to the first item in the albumsList array
  }
  setCurrentAlbum(albumsList[index]); // Call setCurrentAlbum function with next item in array
})
