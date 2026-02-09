class PlaylistRepository {
  constructor() {
    this.songs = [];
    this.idCounter = 1;
  }

  addSong(title, artist, duration) {
    const song = {
      id: this.idCounter++,
      title,
      artist,
      duration
    };
    this.songs.push(song);
    return song;
  }

  getAllSongs() {
    return this.songs;
  }

  getSongById(id) {
    return this.songs.find(s => s.id === id) || null;
  }

  updateSong(id, data) {
    const song = this.getSongById(id);
    if (!song) return null;

    if (data.title !== undefined) song.title = data.title;
    if (data.artist !== undefined) song.artist = data.artist;
    if (data.duration !== undefined) song.duration = data.duration;

    return song;
  }

  deleteSong(id) {
    const index = this.songs.findIndex(s => s.id === id);
    if (index === -1) return false;

    this.songs.splice(index, 1);
    return true;
  }

  getTotalDuration() {
    return this.songs.reduce((total, s) => total + s.duration, 0);
  }
}

module.exports = PlaylistRepository;
