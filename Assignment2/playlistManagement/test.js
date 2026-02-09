const PlaylistRepository = require("./playlistRepository");

const playlist = new PlaylistRepository();

playlist.addSong("Shape of You", "Ed Sheeran", 240);
playlist.addSong("Blinding Lights", "The Weeknd", 200);
playlist.addSong("Naatu Naatu", "M.M. Keeravani", 210);

console.log("All songs:", playlist.getAllSongs());

playlist.updateSong(2, { duration: 205 });
console.log("After update:", playlist.getAllSongs());

playlist.deleteSong(1);
console.log("After delete:", playlist.getAllSongs());

console.log("Total duration (seconds):", playlist.getTotalDuration());
