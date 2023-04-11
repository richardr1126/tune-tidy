import React, { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';

//Custom Components and Pages imports
import NavBar from '../components/Navbar';
import PlaylistsPage from './PlaylistsPage';
import DataPage from './DataPage';


const spotify = new SpotifyAPI();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      loggedIn: false,
      token: null,
      userName: null,
      userId: null,
      fullUserData: null,
      playlistData: null,
      topArtistsData: null,
      topTracksData: null,
      artistsTimeRange: 'medium_term',
      tracksTimeRange: 'medium_term',
    };

    this.switchPage = this.switchPage.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }

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
        console.log(data);
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

    spotify.getUserPlaylists()
      .then((data) => {
        console.log(data);
        this.setState({
          playlistData: data,
        });
      })
      .catch((error) => {
        console.log("Error fetching playlists:", error);
        this.redirectLogin();
      });

    spotify.getMyTopArtists('medium_term')
      .then((data) => {
        console.log(data);
        this.setState({
          topArtistsData: data,
        });
      })
      .catch((error) => {
        console.log("Error fetching top artists:", error);
        //this.redirectLogin();
      });

    spotify.getMyTopTracks('medium_term')
      .then((data) => {
        console.log(data);
        this.setState({
          topTracksData: data,
        });
      })
      .catch((error) => {
        console.log("Error fetching top tracks:", error);
        //this.redirectLogin();
      });

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
    if (this.state.loggedIn) {
      return (
        <>
          <NavBar fullUserData={this.state.fullUserData} switchPage={this.switchPage}> </NavBar>

          {this.state.page === 'home' && (<DataPage fullUserData={this.state.fullUserData} />)}
          {this.state.page === 'playlists' && (<PlaylistsPage fullUserData={this.state.fullUserData} playlistData={this.state.playlistData} />)}


        </>
      );
    }
  }
}

export default Home;
