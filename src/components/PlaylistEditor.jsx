// Importing necessary dependencies and components
import { Component } from 'react';
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
  Select
} from '@chakra-ui/react';
import TracksList from './TracksList';
import { sortByName, sortByOriginalPostion } from '../Sorter';

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
    };
    // Binding the functions to the component's scope
    this.fetchPlaylistTracks = this.fetchPlaylistTracks.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.displaySortButtons = this.displaySortButtons.bind(this);
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
    const { sorter } = this.state;
    const isMobile = window.innerWidth < 768;

    if (!isMobile) return (
      <Wrap mt={1.5}>
        <Button size={'sm'}
          onClick={() => this.setState({ sorter: 'original_position', tracks: sortByOriginalPostion(this.state.tracks, 'original_position') })}
          isActive={sorter === 'original_position'}
        >
          #
        </Button>
        <Button size={'sm'}
          onClick={() => this.setState({ sorter: 'track_name', tracks: sortByName(this.state.tracks) })}
          isActive={sorter === 'track_name'}>
          Track Name
        </Button>
        <Button size={'sm'}>
          Album Name
        </Button>
        <Button size={'sm'}>
          Artist Name
        </Button>
        <Button size={'sm'}
          onClick={() => this.setState({ sorter: 'tempo', tracks: sortByOriginalPostion(this.state.tracks, 'tempo') })}
          isActive={sorter === 'tempo'}>
          Tempo
        </Button>
        <Button size={'sm'}>
          Acousticness
        </Button>
        <Button size={'sm'}>
          Danceability
        </Button>
        <Button size={'sm'}>
          Energy
        </Button>
        <Button size={'sm'}>
          Instrumentalness
        </Button>
        <Button size={'sm'}>
          Liveness
        </Button>
        <Button size={'sm'}>
          Loudness
        </Button>
        <Button size={'sm'}>
          Speechiness
        </Button>
        <Button size={'sm'}>
          Valence
        </Button>
      </Wrap>
    );
    if (isMobile) return (
      <Select
        value={sorter}
        onChange={(e) => this.setState({ sorter: e.target.value, tracks: e.target.value === 'track_name' ? sortByName(this.state.tracks) : sortByOriginalPostion(this.state.tracks, e.target.value) })}
        bgColor={'white'}
        size="sm"
        border={"1px solid #e2e8f0"}
        borderRadius={"md"}
        variant={"filled"}
        width="fit-content"
        mb={2}
      >
        <option value="original_position">#</option>
        <option value="track_name">Track Name</option>
        <option value="tempo">Tempo</option>
        <option value="acousticness">Acousticness</option>
        <option value="danceability">Danceability</option>
        <option value="energy">Energy</option>
        <option value="instrumentalness">Instrumentalness</option>
        <option value="liveness">Liveness</option>
        <option value="loudness">Loudness</option>
        <option value="speechiness">Speechiness</option>
        <option value="valence">Valence</option>
      </Select>
    );
  }



  // A function to render the content of the widget
  render() {
    const { playlist, tracks } = this.state;

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


              <Heading color={'black'} fontSize={'2xl'}>
                {playlist.name}
              </Heading>


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
