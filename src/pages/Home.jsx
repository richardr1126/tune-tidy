import React, { Component } from 'react';
import SpotifyAPI from 'spotify-web-api-js';

const spotify = new SpotifyAPI();

class Home extends Component {
  constructor(props) {
    super(props);
    // get the users access token from local storage
    const token = window.localStorage.getItem('token');
    let loggedIn = false;

    if (token) {
      loggedIn = true;
      spotify.setAccessToken(token);
    }

    //set state
    this.state = {
      loggedIn,
      userName: null,
      userId: null,
      fullUserData: null,
      playlistData: null
    };
  }

  componentDidMount() {
    if (this.state.loggedIn) {
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
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title has-text-center">TuneTidy - Spotify Playlist Sorter and Music Manager</h1>
            <div className="columns is-center">
              <div className="column is-half">
                <h2 className="subtitle has-text-center">Welcome, {this.state.userName}!</h2>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title has-text-center">Spotify Playlist Sorter</h1>
            <div className="columns is-center">
              <div className="column is-half">
                <h2 className="subtitle has-text-center">Please log in to continue</h2>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Home;
