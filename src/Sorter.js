// Module pattern implementation
// These will be imported in the PlaylistEditor component to sort the tracks.
export function sortByName(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByOriginalPostion(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.original_position < b.original_position) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.original_position > b.original_position) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByAlbumName(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.album.name.toLowerCase() < b.album.name.toLowerCase()) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.album.name.toLowerCase() > b.album.name.toLowerCase()) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByArtistName(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.artists[0].name.toLowerCase() < b.artists[0].name.toLowerCase()) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.artists[0].name.toLowerCase() > b.artists[0].name.toLowerCase()) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByRelease(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.album.release_date < b.album.release_date) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.album.release_date > b.album.release_date) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByPopularity(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.popularity < b.popularity) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.popularity > b.popularity) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByDateAdded(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.added_at < b.added_at) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.added_at > b.added_at) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByTempo(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.tempo < b.tempo) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.tempo > b.tempo) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByAcousticness(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.acousticness < b.acousticness) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.acousticness > b.acousticness) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByDanceability(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.danceability < b.danceability) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.danceability > b.danceability) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByEnergy(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.energy < b.energy) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.energy > b.energy) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByInstrumentalness(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.instrumentalness < b.instrumentalness) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.instrumentalness > b.instrumentalness) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByLiveness(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.liveness < b.liveness) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.liveness > b.liveness) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByLoudness(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.loudness < b.loudness) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.loudness > b.loudness) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortBySpeechiness(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.speechiness < b.speechiness) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.speechiness > b.speechiness) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortByValence(tracks, order) {
  return tracks.sort((a, b) => {
    if (a.valence < b.valence) {
      return order === 'asc' ? -1 : 1;
    }
    if (a.valence > b.valence) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}




