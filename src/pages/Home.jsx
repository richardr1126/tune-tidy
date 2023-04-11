import React, { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';

//Custom Components and Pages imports
import NavBar from '../components/Navbar';
import PlaylistsPage from './PlaylistsPage';


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
      playlistData: null
    };

    this.switchPage = this.switchPage.bind(this);
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
      spotify
        .getMe()
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
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("tokenExpiration");
          window.location.href = "/";
        });

      spotify
        .getUserPlaylists()
        .then((data) => {
          console.log(data);
          this.setState({
            playlistData: data,
          });
        })
        .catch((error) => {
          console.log("Error fetching playlists:", error);
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("tokenExpiration");
          window.location.href = "/";
        });
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

          {this.state.page === 'home' && (<h1>Home</h1>)}
          {this.state.page === 'playlists' && (<PlaylistsPage fullUserData={this.state.fullUserData} playlistData={this.state.playlistData}/>)}


        </>
      );
    }
  }
}

export default Home;
