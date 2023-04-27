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
} from '@chakra-ui/react';
import TracksList from './TracksList';

// Creating a new instance of the Spotify API
const spotify = new SpotifyAPI();

class PlaylistEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      playlist: this.props.playlist,
      tracks: null,
    };
    // Binding the functions to the component's scope
    this.fetchPlaylistTracks = this.fetchPlaylistTracks.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
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
  
    spotify.getPlaylistTracks(id, { limit: 50 })
      .then(async (data) => {
        console.log('Tracks: ', data);
        let combinedTracks = data.items;
        const totalTracks = data.total;
  
        if (totalTracks > 50) {
          for (let offset = 50; offset < totalTracks; offset += 50) {
            try {
              const additionalData = await spotify.getPlaylistTracks(id, { limit: 50, offset });
              console.log('More tracks: ', additionalData);
              combinedTracks = combinedTracks.concat(additionalData.items);
            } catch (error) {
              console.log("Error fetching more tracks from playlist:", error);
              this.redirectLogin();
              return;
            }
          }
        }
  
        this.setState({
          tracks: { ...data, items: combinedTracks },
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

  

  // A function to render the content of the widget
  render() {
    const { playlist, tracks } = this.state;

    if (playlist && tracks) {
      // Returning JSX for the UI with dynamic values passed as props or state
      return (

        <Center py={2}>
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
              <TracksList tracks={tracks}/>
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
