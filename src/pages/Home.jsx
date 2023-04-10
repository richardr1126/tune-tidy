import React, { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';
import NavBar from '../components/Navbar';

const spotify = new SpotifyAPI();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: null,
      userName: null,
      userId: null,
      fullUserData: null,
      playlistData: null
    };
  }

  componentDidMount() {
    // get the users access token from local storage
    const token = window.localStorage.getItem('token');

    if (token) {
      this.setState({
        loggedIn: true,
        token: token
      });

      spotify.setAccessToken(token);
      spotify.getMe().then(data => {
        console.log(data);
        this.setState({
          fullUserData: data,
          userName: data.display_name,
          userId: data.id
        });
      });
      spotify.getUserPlaylists().then(data => {
        console.log(data);
        this.setState({
          playlistData: data
        });
      });
    } else {
      this.setState({
        loggedIn: false
      });
      window.location.href = '/';
    }
  }

  handleLogout() {
    this.setState({ loggedIn: false });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <>
          <NavBar onLogout={this.handleLogout}> </NavBar>
          <h2>Logged in as {this.state.userName}</h2>
          <h3>Playlists:</h3>
          <ul>
            {this.state.playlistData?.items.map(playlist => (
              <li key={playlist.id}>{playlist.name}</li>
            ))}
          </ul>


        </>
      );
    }
  }
}

export default Home;
