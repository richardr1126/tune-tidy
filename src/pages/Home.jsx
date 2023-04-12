// Import necessary modules and components
import { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import { Box, Spinner } from '@chakra-ui/react';

// Custom Components and Pages imports
import NavBar from '../components/Navbar';
import PlaylistsPage from './PlaylistsPage';
import DataPage from './DataPage';

// Create a new instance of SpotifyAPI
const spotify = new SpotifyAPI();

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
      token: null, // User has no token by default
      userName: null, // User has no name by default
      userId: null, // User has no ID by default
      fullUserData: null, // User has no data by default
      playlistData: null, // User has no playlists by default
    };
    
    // Bind methods to this class
    this.switchPage = this.switchPage.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.checkDataFetched = this.checkDataFetched.bind(this);
    
  }

  // Method to check if all necessary user data has been fetched
  // Returns true if the user is logged in and if fullUserData and playlistData are not null.
  // Otherwise it returns false.
  checkDataFetched() {
    if (this.state.loggedIn && this.state.fullUserData && this.state.playlistData) {
      return true;
    } else {
      return false;
    }
  };

  // Method to log user out
  redirectLogin() {
    // Set loggedIn state to false
    this.setState({
      loggedIn: false,
    });

    // Remove token and token expiration date from localStorage
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");

    // Redirect user to homepage
    window.location.href = "/";
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
          userName: data.display_name,
          userId: data.id,
        });
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
        // If there's an error, redirect user to login page
        this.redirectLogin();
      });

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
  }

  // Method to be executed once component has mounted to the DOM
  componentDidMount() {
    // Get token and token expiration date from localStorage
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (token && tokenExpiration > Date.now()) { // If token is present and has not expired yet
      // Set loggedIn state to true and set token
      this.setState({
        loggedIn: true,
        token: token,
      });

      spotify.setAccessToken(token); // Set access token for SpotifyAPI
      this.fetchUserData(); // Call fetchUserData method to retrieve user and playlist data

    } else { // If token is not present or has expired
      this.setState({
        loggedIn: false,
      });
      // Redirect user to homepage
      window.location.href = "/";
    }
  }

  // Method to switch between different pages/components
  switchPage(page) {
    this.setState({ page: page }); // Update page state with argument passed to method
  };

  // Render function to render appropriate components/pages based on state
  render() {
    if (this.checkDataFetched()) { // If all necessary user data has been fetched
      return (
        <>
          <NavBar fullUserData={this.state.fullUserData} switchPage={this.switchPage} />

          {/* Render appropriate component/page based on page state */}
          {this.state.page === 'stats' && (<DataPage fullUserData={this.state.fullUserData}/>)}
          {this.state.page === 'playlists' && (<PlaylistsPage fullUserData={this.state.fullUserData} playlistData={this.state.playlistData} />)}

        </>
      );
    } else { // If data has not been fetched yet, display loading spinner
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%" margin={100}>
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

// Export Home component to be used in other components/pages
export default Home;
