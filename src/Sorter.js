export function sortByName(tracks) {
  return tracks.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

//sort by value ascending
export function sortByOriginalPostion(tracks, value) {
  return tracks.sort((a, b) => {
    return a[value] - b[value];
  });
}
