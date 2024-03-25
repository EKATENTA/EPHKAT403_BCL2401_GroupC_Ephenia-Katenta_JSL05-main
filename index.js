document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    {
      title: "Escape (The Piña Colada Song)",
      artist: "Rupert Holmes",
      genre: "Pop",
    },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    {
      title: "Ain't No Mountain High Enough",
      artist: "Marvin Gaye & Tammi Terrell",
      genre: "R&B",
    },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    {
      title: "Fooled Around and Fell in Love",
      artist: "Elvin Bishop",
      genre: "Rock",
    },
    {
      title: "Who We Love",
      artist: "Sam Smith ft Ed Sheraan",
      genre: "R&B",
    },
    {
      title: "Run",
      artist: "LLoyiso",
      genre: "Pop",
    },
    {
      title: "Longly without you",
      artist: "LLoyiso",
      genre: "R&B",
    },
    {
      title: "Bad habbits ",
      artist: "Ed Sheraan",
      genre: "pop",
    },
    {
      title: "Budepast",
      artist: "George Ezra",
      genre: "Rock",
    },
  ];

  const guardians = {
    "Star-Lord": "Rock",
    Gamora: "Pop",
    Drax: "R&B",
    Rocket: "Rock",
    Groot: "Pop",
  };

  function generatePlaylist(guardians, songs) {
    return Object.entries(guardians).reduce((playlists, [guardian, genre]) => {
      playlists[guardian] = songs
        .filter((song) => song.genre === genre)
        .map((song) => `${song.title} by ${song.artist}`);
      return playlists;
    }, {});
  }

  function displayPlaylists(guardianPlaylists) {
    const playlistsContainer = document.getElementById("playlists");

    for (const [guardian, playlist] of Object.entries(guardianPlaylists)) {
      const playlistElement = document.createElement("div");
      playlistElement.classList.add("playlist");
      playlistElement.innerHTML = `<h3>${guardian}'s Playlist:</h3><ul>${playlist
        .map((song) => `<li><span class="song-title">${song}</span></li>`)
        .join("")}</ul>`;
      playlistsContainer.appendChild(playlistElement);
    }
  }

  const guardianPlaylists = generatePlaylist(guardians, songs);
  displayPlaylists(guardianPlaylists);
});
