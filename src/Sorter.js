/*
*MODULE PATTERN: Organize code into components to accomplish a different sorting behavior which will be invoked in
*PlaylistEditor 
*/
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
    const aHasReleaseDate = !!a.album.release_date;
    const bHasReleaseDate = !!b.album.release_date;

    if (!aHasReleaseDate && !bHasReleaseDate) {
      return 0;
    }
    if (!aHasReleaseDate) {
      return 1;
    }
    if (!bHasReleaseDate) {
      return -1;
    }

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
    const aHasPopularity = a.popularity !== undefined && a.popularity !== null;
    const bHasPopularity = b.popularity !== undefined && b.popularity !== null;

    if (!aHasPopularity && !bHasPopularity) return 0;
    if (!aHasPopularity) return 1;
    if (!bHasPopularity) return -1;

    return order === 'asc'
      ? a.popularity - b.popularity
      : b.popularity - a.popularity;
  });
}

export function sortByDateAdded(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasDate = !!a.added_at;
    const bHasDate = !!b.added_at;

    if (!aHasDate && !bHasDate) return 0;
    if (!aHasDate) return 1;
    if (!bHasDate) return -1;

    return order === 'asc' ? a.added_at.localeCompare(b.added_at) : b.added_at.localeCompare(a.added_at);
  });
}

export function sortByTempo(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasTempo = a.tempo !== undefined && a.tempo !== null;
    const bHasTempo = b.tempo !== undefined && b.tempo !== null;

    if (!aHasTempo && !bHasTempo) return 0;
    if (!aHasTempo) return 1;
    if (!bHasTempo) return -1;

    return order === 'asc' ? a.tempo - b.tempo : b.tempo - a.tempo;
  });
}

export function sortByAcousticness(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasAcousticness = a.acousticness !== undefined && a.acousticness !== null;
    const bHasAcousticness = b.acousticness !== undefined && b.acousticness !== null;

    if (!aHasAcousticness && !bHasAcousticness) return 0;
    if (!aHasAcousticness) return 1;
    if (!bHasAcousticness) return -1;

    return order === 'asc' ? a.acousticness - b.acousticness : b.acousticness - a.acousticness;
  });
}

export function sortByDanceability(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasDanceability = a.danceability !== undefined && a.danceability !== null;
    const bHasDanceability = b.danceability !== undefined && b.danceability !== null;

    if (!aHasDanceability && !bHasDanceability) return 0;
    if (!aHasDanceability) return 1;
    if (!bHasDanceability) return -1;

    return order === 'asc' ? a.danceability - b.danceability : b.danceability - a.danceability;
  });
}

export function sortByEnergy(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasEnergy = a.energy !== undefined && a.energy !== null;
    const bHasEnergy = b.energy !== undefined && b.energy !== null;

    if (!aHasEnergy && !bHasEnergy) return 0;
    if (!aHasEnergy) return 1;
    if (!bHasEnergy) return -1;

    return order === 'asc' ? a.energy - b.energy : b.energy - a.energy;
  });
}

export function sortByInstrumentalness(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasInstrumentalness = a.instrumentalness !== undefined && a.instrumentalness !== null;
    const bHasInstrumentalness = b.instrumentalness !== undefined && b.instrumentalness !== null;

    if (!aHasInstrumentalness && !bHasInstrumentalness) return 0;
    if (!aHasInstrumentalness) return 1;
    if (!bHasInstrumentalness) return -1;

    return order === 'asc' ? a.instrumentalness - b.instrumentalness : b.instrumentalness - a.instrumentalness;
  });
}

export function sortByLiveness(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasLiveness = a.liveness !== undefined && a.liveness !== null;
    const bHasLiveness = b.liveness !== undefined && b.liveness !== null;

    if (!aHasLiveness && !bHasLiveness) return 0;
    if (!aHasLiveness) return 1;
    if (!bHasLiveness) return -1;

    return order === 'asc' ? a.liveness - b.liveness : b.liveness - a.liveness;
  });
}

export function sortByLoudness(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasLoudness = a.loudness !== undefined && a.loudness !== null;
    const bHasLoudness = b.loudness !== undefined && b.loudness !== null;

    if (!aHasLoudness && !bHasLoudness) return 0;
    if (!aHasLoudness) return 1;
    if (!bHasLoudness) return -1;

    return order === 'asc' ? a.loudness - b.loudness : b.loudness - a.loudness;
  });
}

export function sortBySpeechiness(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasSpeechiness = a.speechiness !== undefined && a.speechiness !== null;
    const bHasSpeechiness = b.speechiness !== undefined && b.speechiness !== null;

    if (!aHasSpeechiness && !bHasSpeechiness) return 0;
    if (!aHasSpeechiness) return 1;
    if (!bHasSpeechiness) return -1;

    return order === 'asc' ? a.speechiness - b.speechiness : b.speechiness - a.speechiness;
  });
}

export function sortByValence(tracks, order) {
  return tracks.sort((a, b) => {
    const aHasValence = a.valence !== undefined && a.valence !== null;
    const bHasValence = b.valence !== undefined && b.valence !== null;

    if (!aHasValence && !bHasValence) return 0;
    if (!aHasValence) return 1;
    if (!bHasValence) return -1;

    return order === 'asc' ? a.valence - b.valence : b.valence - a.valence;
  });
}





