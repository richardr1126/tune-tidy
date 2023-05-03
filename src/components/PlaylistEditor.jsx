// PlaylistEditor is outside of the Provider pattern becuase we need to make more requests to the Spotify API
import { Component, createRef } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import {
  Box,
  Text,
  Spinner,
  Image,
  Center,
  Heading,
  Button,
  Wrap,
  ButtonGroup,
  Spacer
} from '@chakra-ui/react';
import TracksList from './TracksList';
import { // Module pattern for Importing the sorting functions
  sortByName,
  sortByOriginalPostion,
  sortByTempo,
  sortByDanceability,
  sortByEnergy,
  sortByValence,
  sortByLoudness,
  sortByAcousticness,
  sortByInstrumentalness,
  sortBySpeechiness,
  sortByAlbumName,
  sortByArtistName,
  sortByLiveness,
  sortByRelease,
  sortByPopularity,
  sortByDateAdded,
} from '../Sorter';
import { TriangleUpIcon, TriangleDownIcon, AddIcon, EditIcon } from '@chakra-ui/icons';


// Creating a new instance of the Spotify API
const spotify = new SpotifyAPI();

class PlaylistEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      playlist: this.props.playlist,
      tracks: null,
      sorter: 'original_position',
      sortOrder: 'asc',
    };
    // Binding the functions to the component's scope
    this.fetchPlaylistTracks = this.fetchPlaylistTracks.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.displaySortButtons = this.displaySortButtons.bind(this);
    this.createNewPlaylist = this.createNewPlaylist.bind(this);
    this.overridePlaylist = this.overridePlaylist.bind(this);
    this.overrideButtonRef = createRef();
    this.createButtonRef = createRef();
  }

  //A function to redirect the user to login page when they are not authenticated or their token has expired
  redirectLogin() {
    this.setState({
      loggedIn: false,
    });

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
    window.location.href = "/";
  }

  // A function to fetch user's top tracks using Spotify Web API
  fetchPlaylistTracks() {
    const id = this.state.playlist.id;
    console.log('id: ', id);

    //https://jmperezperez.com/spotify-web-api-js/
    spotify.getPlaylistTracks(id, { limit: 50 })
      .then(async (data) => {
        console.log('Fetched tracks');
        let combinedTracks = data.items;
        const totalTracks = data.total;

        if (totalTracks > 50) {
          for (let offset = 50; offset < totalTracks; offset += 50) {
            try {
              const additionalData = await spotify.getPlaylistTracks(id, { limit: 50, offset });
              console.log('Fetching more tracks...');
              combinedTracks = combinedTracks.concat(additionalData.items);
            } catch (error) {
              console.log("Error fetching more tracks from playlist:", error);
              this.redirectLogin();
              return;
            }
          }
        }

        //full list of tracks, in a simple json object
        combinedTracks = combinedTracks.map((track) => {
          return {
            ...track.track,
            added_at: track.added_at,
          };
        });
        //remove null ids
        combinedTracks = combinedTracks.filter((track) => track.id);

        //list of track ids
        const trackIds = combinedTracks.map((track) => track.id);
        //put track ids into chunks of 100
        const trackIdChunks = {};
        for (let i = 0; i < trackIds.length; i += 100) {
          const chunkIndex = i / 100;
          trackIdChunks[chunkIndex] = trackIds.slice(i, i + 100);
        }

        const trackFeatures = [];
        for (const trackIds of Object.values(trackIdChunks)) {
          const chunk = await spotify.getAudioFeaturesForTracks(trackIds);
          trackFeatures.push(...chunk.audio_features); // Destructure the audio_features array
        }

        //console.log(trackFeatures);

        //Combine the track objects with their audio features
        let counter = 0;
        combinedTracks = combinedTracks.map((track, index) => {
          counter++;
          return {
            ...track,
            ...trackFeatures[index],
            original_position: counter,
          };
        });
        console.log(combinedTracks);

        this.setState({
          tracks: combinedTracks,
        });
      })
      .catch((error) => {
        console.log("Error fetching tracks from playlist:", error);
        this.redirectLogin();
      });
  }

  async overridePlaylist(playlist, tracks) {
    const playlistId = playlist.id;
    const newOrder = tracks.slice();

    // Get the snapshot_id of the playlist
    const playlistDetails = await spotify.getPlaylist(playlistId);
    let snapshotId = playlistDetails.snapshot_id;

    // Create a list of reordering operations
    const reorderingOperations = newOrder.map((track, newPosition) => {
      const currentPosition = track.original_position - 1;
      return { currentPosition, newPosition };
    });

    // Sort the reordering operations by newPosition
    reorderingOperations.sort((a, b) => a.newPosition - b.newPosition);

    // Apply the reordering operations
    for (const operation of reorderingOperations) {
      const { currentPosition, newPosition } = operation;

      if (currentPosition !== newPosition) {
        try {
          console.log(`Reordering track from position ${currentPosition} to ${newPosition}`);

          // Move the track to the new position using the initial snapshot_id
          const data = await spotify.reorderTracksInPlaylist(playlistId, currentPosition, newPosition, {
            snapshot_id: snapshotId,
          });
          snapshotId = data.snapshot_id;

          // Update currentPosition values in the reorderingOperations list
          for (const op of reorderingOperations) {
            if (op.currentPosition > currentPosition && op.currentPosition <= newPosition) {
              op.currentPosition -= 1;
            } else if (op.currentPosition < currentPosition && op.currentPosition >= newPosition) {
              op.currentPosition += 1;
            }
          }
        } catch (error) {
          console.error(`Error reordering track from position ${currentPosition} to ${newPosition}:`, error);
        }
      }
    }

    this.props.obs.notify({ message: 'Playlist order updated successfully', status: 'success' });
    this.fetchPlaylistTracks();
  }

  // Creates a new playlist with the same name as the original playlist, but with "(Tune Tidy)" appended to the end
  async createNewPlaylist(playlist, tracks) {
    spotify.createPlaylist(playlist.owner.id, {
      name: playlist.name + " (Tune Tidy)",
      description: playlist.description,
      public: false,
    }).then(async (data) => {
      console.log(data);
      const newPlaylistId = data.id;
      const trackUris = tracks.map((track) => track.uri);

      //track URIs into chunks of 100
      const trackUriChunks = {};
      for (let i = 0; i < trackUris.length; i += 100) {
        const chunkIndex = i / 100;
        trackUriChunks[chunkIndex] = trackUris.slice(i, i + 100);
      }

      //adding tracks to new playlist in chunks of 100
      for (const trackUris of Object.values(trackUriChunks)) {
        const chunk = await spotify.addTracksToPlaylist(newPlaylistId, trackUris);
        console.log(chunk);
      }

      this.props.obs.notify({ message: 'Playlist created successfully', status: 'success' });

    }).catch((error) => {
      console.log(error);
    });

  }

  // A lifecycle method to check if the user is authenticated and fetch their top artists
  componentDidMount() {
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");
    console.log(this.state.playlist.id);

    if (token && tokenExpiration > Date.now()) {
      this.setState({
        loggedIn: true,
      });

      spotify.setAccessToken(token);
      this.fetchPlaylistTracks();


    } else {
      this.setState({
        loggedIn: false,
      });
      // Redirect user to homepage
      this.props.obs.notify({ message: 'Spotify Token Expired\nPlease login again in with your Spotify account', status: 'warning' });
      this.setState({
        loggedIn: false,
      });
      // Redirect user to homepage
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    }
  }

  displaySortButtons() {
    const { sorter, sortOrder } = this.state;

    // Get the next sort order
    const getNextSortOrder = () => {
      return sortOrder === 'asc' ? 'desc' : 'asc';
    };

    // Apply the sorting function to the tracks and update the state
    const applySorting = (newSorter, sortingFunction) => {
      const newSortOrder = newSorter === sorter ? getNextSortOrder() : 'asc';
      this.setState({
        sorter: newSorter,
        sortOrder: newSortOrder,
        tracks: sortingFunction(this.state.tracks, newSortOrder),
      });
    };


    // Module pattern, each sortByFunction from the Sorter.js module is called here
    return (
      <Wrap mt={1.5}>
        <Text>Sort by:</Text>
        <Button size={'sm'} onClick={() => applySorting('original_position', sortByOriginalPostion)} isActive={sorter === 'original_position'}>
          #
          {sorter === 'original_position' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('track_name', sortByName)} isActive={sorter === 'track_name'}>
          Track Name
          {sorter === 'track_name' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('album_name', sortByAlbumName)} isActive={sorter === 'album_name'}>
          Album Name
          {sorter === 'album_name' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('artist_name', sortByArtistName)} isActive={sorter === 'artist_name'}>
          Artist Name
          {sorter === 'artist_name' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('release_date', sortByRelease)} isActive={sorter === 'release_date'}>
          Release Date
          {sorter === 'release_date' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('added_at', sortByDateAdded)} isActive={sorter === 'added_at'}>
          Date Added
          {sorter === 'added_at' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('popularity', sortByPopularity)} isActive={sorter === 'popularity'}>
          Popularity
          {sorter === 'popularity' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('tempo', sortByTempo)} isActive={sorter === 'tempo'}>
          Tempo
          {sorter === 'tempo' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('acousticness', sortByAcousticness)} isActive={sorter === 'acousticness'}>
          Acousticness
          {sorter === 'acousticness' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('danceability', sortByDanceability)} isActive={sorter === 'danceability'}>
          Danceability
          {sorter === 'danceability' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('energy', sortByEnergy)} isActive={sorter === 'energy'}>
          Energy
          {sorter === 'energy' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('instrumentalness', sortByInstrumentalness)} isActive={sorter === 'instrumentalness'}>
          Instrumentalness
          {sorter === 'instrumentalness' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('liveness', sortByLiveness)} isActive={sorter === 'liveness'}>
          Liveness
          {sorter === 'liveness' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('loudness', sortByLoudness)} isActive={sorter === 'loudness'}>
          Loudness
          {sorter === 'loudness' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('speechiness', sortBySpeechiness)} isActive={sorter === 'speechiness'}>
          Speechiness
          {sorter === 'speechiness' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
        <Button size={'sm'} onClick={() => applySorting('valence', sortByValence)} isActive={sorter === 'valence'}>
          Valence
          {sorter === 'valence' && (sortOrder === 'asc' ? <TriangleUpIcon ml={1} /> : <TriangleDownIcon ml={1} />)}
        </Button>
      </Wrap>

    );
  }

  // A function to render the content of the widget
  render() {
    const { playlist, tracks } = this.state;
    const isMobile = window.innerWidth <= 425;

    if (playlist && tracks) {
      // Returning JSX for the UI with dynamic values passed as props or state
      return (

        <Center>
          <Box
            rounded={'sm'}
            my={3}
            mx={[0, 3]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            boxShadow={'6px 6px 0 black'}>
            <Box borderBottom={'1px'} borderColor="black">
              <Image
                src={playlist.images[0]?.url}
                fallback={
                  <>
                    {playlist.images.length !== 0 ? (
                      <Center p={100}><Box>
                        <Spinner />
                      </Box></Center>
                    ) : (
                      <Image src='/playlist_placeholder.png' alt='No cover art' w={'full'} h={64} />
                    )}
                  </>
                }
                alt={playlist.name + ' image'}
                roundedTop={'sm'}
                objectFit="cover"
                h={64}
                w="full"
              />
            </Box>
            <Box p={4}>

              <Wrap mb={3}>
                <Heading color={'black'} fontSize={'2xl'}>
                  {playlist.name}
                </Heading>
                <Spacer />
                <ButtonGroup size='sm' isAttached>
                  <Button ref={this.createButtonRef} onClick={async () => {
                    // Disabling the button while the creation is in progress
                    this.createButtonRef.current.disabled = true;
                    await this.createNewPlaylist(this.state.playlist, this.state.tracks);
                    this.createButtonRef.current.disabled = false;

                  }} size={isMobile ? 'xs' : 'sm'}><AddIcon mr={1} /> Create Playlist</Button>
                  <Button ref={this.overrideButtonRef} onClick={async () => {
                    // Disabling the button while the override is in progress
                    this.overrideButtonRef.current.disabled = true;
                    await this.overridePlaylist(this.state.playlist, this.state.tracks);
                    this.overrideButtonRef.current.disabled = false;
                    
                  }} size={isMobile ? 'xs' : 'sm'} colorScheme='red'><EditIcon mr={1} /> Override Playlist</Button>

                </ButtonGroup>
              </Wrap>


              {playlist.description && (
                <Text color={'gray.500'}>
                  {playlist.description}
                </Text>

              )}

              {/* Sorting buttons */}

              {this.displaySortButtons()}

              {/* Tracks list */}
              <TracksList tracks={tracks} />
            </Box>
          </Box>
        </Center>

      );
    } else {
      // Returning a spinner component while the data is being fetched
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%" p={150}>
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

export default PlaylistEditor;
