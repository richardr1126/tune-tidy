// Start of the Provider Pattern implementation for the API data: this is the Home component.
// Top Level Home class based Component
// - This component is the parent component of the application.
// - It is responsible for rendering the NavBar, the Footer and the page content.
// - It also handles the authentication process and the fetching of data from the Spotify API.
// - The state object is used to keep track of data that changes within the Home component.
import { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import { Box, Spinner, useToast } from '@chakra-ui/react';

// Custom Components and Pages imports
import NavBar from '../components/Navbar';
import PlaylistsPage from './PlaylistsPage';
import DataPage from './DataPage';
import Settings from './Settings';
import Footer from '../components/Footer';
import Observable from '../Observable';

// Create a new instance of SpotifyAPI
const spotify = new SpotifyAPI();
const obs = new Observable();

/*
*PROVIDER PATTERN: Fetch user data at the beginning as this will need to be made available to many components in our application
*including the data page, playlist page, playlist card and settings page. This prevents having to manually pass this information
*down to these layers
*/

// Define Home component
class Home extends Component {
  constructor(props) {
    super(props);
    // - The state object is used to keep track of data that changes within the Home component.
    // - Several properties are set as key-value pairs in the state object, with default values.
    // - Methods are bound to the component using the bind() function.
    // Set initial state of Home component
    this.state = {
      page: 'stats', // Default page to render is stats
      loggedIn: false, // User is not logged in by default
      fullUserData: null, // User has no data by default
      playlistData: null, // User has no playlists by default
      // playlistSpecificData: null,
      topArtistsShortTerm: null, // User has no top artists by default
      topArtistsMediumTerm: null, // User has no top artists by default
      topArtistsLongTerm: null, // User has no top artists by default
      topTracksShortTerm: null, // User has no top tracks by default
      topTracksMediumTerm: null, // User has no top tracks by default
      topTracksLongTerm: null, // User has no top tracks by default
    };

    // Bind methods to this class
    this.switchPage = this.switchPage.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.checkDataFetched = this.checkDataFetched.bind(this);
    this.handleToast = this.handleToast.bind(this);
    this.getPageFromUrl = this.getPageFromUrl.bind(this);

  }

  // Method to check if all necessary user data has been fetched
  // Returns true if the user is logged in and if fullUserData and playlistData are not null.
  // Otherwise it returns false.
  checkDataFetched() {
    if (this.state.loggedIn
      && this.state.fullUserData
      && this.state.playlistData
      // && this.state.playlistSpecificData
      && this.state.topArtistsShortTerm
      && this.state.topArtistsMediumTerm
      && this.state.topArtistsLongTerm
      && this.state.topTracksShortTerm
      && this.state.topTracksMediumTerm
      && this.state.topTracksLongTerm
    ) {
      return true;
    } else {
      return false;
    }
  };

  // Method to log user out
  redirectLogin() {
    obs.notify({ message: 'Account not verified\nPlease retry logging in with your Spotify account', status: 'error' });
    //wait 3 seconds before redirecting
    setTimeout(() => {
      // Set loggedIn state to false
      this.setState({
        loggedIn: false,
      });

      // Remove token and token expiration date from localStorage
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("tokenExpiration");

      // Redirect user to homepage
      window.location.href = "/";
    }, 1000);
  }

  // Method to fetch user data from SpotifyAPI
  fetchUserData() {
    // Call getMe() function to retrieve user data
    spotify.getMe()
      .then((data) => {
        console.log('User data: ', data);
        // Set user data in state
        this.setState({
          fullUserData: data,
        });

        // Notify success
        obs.notify({ message: 'Account verified\nYour Spotify account has been connected', status: 'success' });

        // Call getUserPlaylists() function to retrieve playlists data
        spotify.getUserPlaylists({ limit: 50 })
          .then((data) => {
            console.log('Playlists: ', data);
            if (data.total === 50) { // If there are more than 50 playlists, call getUserPlaylists() function with offset of 50 to retrieve remaining playlists
              console.log('More than 50 playlists, fetching more...');
              spotify.getUserPlaylists({ limit: 50, offset: 50 })
                .then((data2) => {
                  console.log('More playlists: ', data2);
                  // Combine data and data2 to get all playlists
                  const combinedData = data.items.concat(data2.items);
                  data.items = combinedData;
                  // Set playlist data in state
                  this.setState({
                    playlistData: data,
                  });
                })
                .catch((error) => {
                  console.log("Error fetching more playlists:", error);
                  // If there's an error, redirect user to login page
                  this.redirectLogin();
                });
            } else {
              // If there are less than 50 playlists, set playlist data in state
              this.setState({
                playlistData: data,
              });
            }
          })
          .catch((error) => {
            console.log("Error fetching playlists:", error);
            // If there's an error, redirect user to login page
            this.redirectLogin();
          });

        // Call getMyTopArtists() for all time ranges to send to DataPage, then to TopArtistsWidget
        spotify.getMyTopArtists({ time_range: 'short_term', limit: 50 })
          .then((data) => {
            console.log('Top artists short_term: ', data);
            this.setState({ topArtistsShortTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top artists:", error);
            this.redirectLogin();
          });
        spotify.getMyTopArtists({ time_range: 'medium_term', limit: 50 })
          .then((data) => {
            console.log('Top artists medium_term: ', data);
            this.setState({ topArtistsMediumTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top artists:", error);
            this.redirectLogin();
          });
        spotify.getMyTopArtists({ time_range: 'long_term', limit: 50 })
          .then((data) => {
            console.log('Top artists long_term: ', data);
            this.setState({ topArtistsLongTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top artists:", error);
            this.redirectLogin();
          });
        spotify.getMyTopTracks({ time_range: 'short_term', limit: 50 })
          .then((data) => {
            console.log('Top tracks short_term: ', data);
            this.setState({ topTracksShortTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top tracks:", error);
            this.redirectLogin();
          });
        spotify.getMyTopTracks({ time_range: 'medium_term', limit: 50 })
          .then((data) => {
            console.log('Top tracks medium_term: ', data);
            this.setState({ topTracksMediumTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top tracks:", error);
            this.redirectLogin();
          });
        spotify.getMyTopTracks({ time_range: 'long_term', limit: 50 })
          .then((data) => {
            console.log('Top tracks long_term: ', data);
            this.setState({ topTracksLongTerm: data });
          })
          .catch((error) => {
            console.log("Error fetching top tracks:", error);
            this.redirectLogin();
          });


      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
        // If there's an error, redirect user to login page
        this.redirectLogin();
      });


  }

  // Part of the Observer pattern, handleToast() is called when the observable object is notified, which renders a toast notification to the home page from anywhere in the app
  handleToast(data) {
    //https://chakra-ui.com/docs/components/toast/usage

    // Destructure message, status properties from data, and handle undefined case
    const { message, status } = data;
    const defaultMessage = "No message\nNo description";
    const [title, description] = (message || defaultMessage).split("\n");

    this.props.toast({
      title,
      description,
      status,
      duration: 4000,
      isClosable: true,
    });
  }


  // Method to be executed once component has mounted to the DOM
  componentDidMount() {
    // Subscribe to the observable object
    obs.subscribe(this.handleToast.bind(this), 'HomeComponent');

    // Get token and token expiration date from localStorage
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (token && tokenExpiration > Date.now()) { // If token is present and has not expired yet
      // Set loggedIn state to true and set token
      this.setState({
        loggedIn: true,
      });

      spotify.setAccessToken(token); // Set access token for SpotifyAPI
      this.fetchUserData(); // Call fetchUserData method to retrieve user and playlist data
      this.switchPage(this.getPageFromUrl()); // Call switchPage method to switch to page specified in url (if any

    } else { // If token is not present or has expired
      this.setState({
        loggedIn: false,
      });
      // Redirect user to homepage
      obs.notify({ message: 'Spotify Token Expired\nPlease login again in with your Spotify account', status: 'warning' });
      this.setState({
        loggedIn: false,
      });
      // Redirect user to homepage
      setTimeout(() => {
        window.location.href = "/";
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpiration");
      }, 1000);
    }
  }

  componentWillUnmount() {
    // Unsubscribe from the observable object when the component is unmounted
    obs.unsubscribe('HomeComponent');
  }


  // Method to switch between different pages/components
  switchPage(page) {
    this.setState({ page: page }); // Update page state with argument passed to method
  };

  // get page from url localhost:3000/spotify#stats, localhost:3000/spotify#settings, localhost:3000/spotify#playlists
  getPageFromUrl() {
    const page = window.location.hash.substring(1);
    if (page === 'stats' || page === 'settings' || page === 'playlist%20editor') {
      if (page === 'playlist%20editor') {
        return 'playlist editor';
      }
      return page;
    } else {
      return 'stats';
    }
  }

  // Render function to render appropriate components/pages based on state
  render() {
    const artistsData = {
      topArtistsShortTerm: this.state.topArtistsShortTerm,
      topArtistsMediumTerm: this.state.topArtistsMediumTerm,
      topArtistsLongTerm: this.state.topArtistsLongTerm,
    };

    const tracksData = {
      topTracksShortTerm: this.state.topTracksShortTerm,
      topTracksMediumTerm: this.state.topTracksMediumTerm,
      topTracksLongTerm: this.state.topTracksLongTerm,
    }

    if (this.checkDataFetched()) {
      return (
        <>
          <NavBar fullUserData={this.state.fullUserData} switchPage={this.switchPage} obs={obs} />
          {this.state.page === 'settings' && (<Settings key={'settings'} fullUserData={this.state.fullUserData} />)}
          {this.state.page === 'stats' && (<DataPage key={'data_page'} fullUserData={this.state.fullUserData} artistsData={artistsData} tracksData={tracksData} obs={obs} />)}
          {this.state.page === 'playlist editor' && (<PlaylistsPage key={'playlists_page'} fullUserData={this.state.fullUserData} playlistData={this.state.playlistData} obs={obs} />)}

          <Footer></Footer>
        </>
      );
    } else {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%" margin={100}>
          <Spinner size="lg" />
        </Box>
      );
    }
  }

}

// Higher-order component to use the useToast hook
const HomeWithToast = (props) => {
  const toast = useToast();
  return <Home key={'home'} {...props} toast={toast} />;
};

// Export HomeWithToast component to be used in other components/pages
export default HomeWithToast;
