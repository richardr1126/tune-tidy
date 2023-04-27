// Importing necessary dependencies and components
import {React } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import Playlist from './Playlist';
import {
  Box,
  VStack,
  HStack,
  Text,
  Spinner,
  Card,
} from '@chakra-ui/react';

// Creating a new instance of the Spotify API
const spotify = new SpotifyAPI();

class PlaylistEditor extends Playlist{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      data: null,
      id: this.props.data.id
    };
    // Binding the functions to the component's scope
    this.fetchPlaylistTracks = this.fetchPlaylistTracks.bind(this);
  }
  
  // A function to redirect the user to login page when they are not authenticated or their token has expired
  // redirectLogin() {
  //   this.setState({
  //     loggedIn: false,
  //   });

  //   window.localStorage.removeItem("token");
  //   window.localStorage.removeItem("tokenExpiration");
  //   window.location.href = "/";
  // }

  // A function to fetch user's top tracks using Spotify Web API
  fetchPlaylistTracks() {
    console.log(JSON.stringify(this.state.id))
    spotify.getPlaylist({playlist_id: this.state.id})
      .then((data) => {
        console.log('Tracks: ', data);
        this.setState({ data });
      })
      .catch((error) => {
        console.log("Error fetching tracks form playlist:", error);
        this.redirectLogin();
      });
  }
  // A lifecycle method to check if the user is authenticated and fetch their top artists
  componentDidMount() {
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");

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
      // window.location.href = "/";
    }
  }

  // A helper function to display the tracks cards in the UI
  displayPlaylistTracks(tracksList) {
    // Looping through each tracks in the list and returning a Card component with their details
    return tracksList.map((track, index) => (
      <Card p={2.5} key={track.track.TrackObject.id}>
        <HStack key={track.track.TrackObject.id} spacing={4}>
          <Text as={'h3'} fontWeight='bold' fontSize={'xl'}>{index + 1}.</Text>
          <Text as={'h3'} fontWeight="black" fontSize={'xl'} margin={'0.5ch !important'}>{track.track.TrackObject.name}</Text>
        </HStack>
      </Card>
    ));
  }
  // A function to render the content of the widget
  renderContent() {
    const { data} = this.state;
    if (data) {
      const tracksList = data.items;

      // Returning JSX for the UI with dynamic values passed as props or state
      return (
        <Box>
          <VStack spacing={2} justifyContent={"left"} alignItems={"left"}>
            {this.displayPlaylistTracks(tracksList)}
          </VStack>
        </Box>
      );
    } else {
      // Returning a spinner component while the data is being fetched
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

export default PlaylistEditor;
