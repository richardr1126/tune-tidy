import { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import { Box, Spinner } from '@chakra-ui/react';

//Custom Components and Pages imports
import NavBar from '../components/Navbar';
import PlaylistsPage from './PlaylistsPage';
import DataPage from './DataPage';


const spotify = new SpotifyAPI();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'stats',
      loggedIn: false,
      token: null,
      userName: null,
      userId: null,
      fullUserData: null,
      playlistData: null,
    };

    this.switchPage = this.switchPage.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.checkDataFetched = this.checkDataFetched.bind(this);
  }


  checkDataFetched() {
    if (this.state.loggedIn && this.state.fullUserData && this.state.playlistData) {
      return true;
    } else {
      return false;
    }
  };

  redirectLogin() {
    this.setState({
      loggedIn: false,
    });

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
    window.location.href = "/";
  }


  fetchUserData() {
    spotify.getMe()
      .then((data) => {
        console.log('User data: ', data);
        this.setState({
          fullUserData: data,
          userName: data.display_name,
          userId: data.id,
        });
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
        this.redirectLogin();
      });


    spotify.getUserPlaylists({ limit: 50 })
      .then((data) => {
        console.log('Playlists: ', data);
        if (data.total === 50) {
          console.log('More than 50 playlists, fetching more...');
          spotify.getUserPlaylists({ limit: 50, offset: 50 })
            .then((data2) => {
              console.log('More playlists: ', data2);
              //combine data and data2
              const combinedData = data.items.concat(data2.items);
              data.items = combinedData;
              this.setState({
                playlistData: data,
              });
            })
            .catch((error) => {
              console.log("Error fetching more playlists:", error);
              this.redirectLogin();
            });
        } else {
          this.setState({
            playlistData: data,
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching playlists:", error);
        this.redirectLogin();
      });

    // spotify.getMyTopArtists({time_range: this.state.artistsTimeRange, limit: 50})
    //   .then((data) => {
    //     console.log('Top artists: ', data);
    //     this.setState({
    //       topArtistsData: data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching top artists:", error);
    //     this.redirectLogin();
    //   });

    // spotify.getMyTopTracks({time_range: this.state.tracksTimeRange, limit: 50})
    //   .then((data) => {
    //     console.log('Top tracks: ', data);
    //     this.setState({
    //       topTracksData: data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching top tracks:", error);
    //     this.redirectLogin();
    //   });

  }


  componentDidMount() {
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (token && tokenExpiration > Date.now()) {
      this.setState({
        loggedIn: true,
        token: token,
      });

      spotify.setAccessToken(token);
      this.fetchUserData();

    } else {
      this.setState({
        loggedIn: false,
      });
      window.location.href = "/";
    }
  }

  switchPage(page) {
    this.setState({ page: page });
  };

  render() {
    if (this.checkDataFetched()) {
      return (
        <>
          <NavBar fullUserData={this.state.fullUserData} switchPage={this.switchPage} />

          {this.state.page === 'stats' && (<DataPage fullUserData={this.state.fullUserData}/>)}
          {this.state.page === 'playlists' && (<PlaylistsPage fullUserData={this.state.fullUserData} playlistData={this.state.playlistData} />)}


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

export default Home;
