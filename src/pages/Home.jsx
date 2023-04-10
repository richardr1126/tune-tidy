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
    // get the users access token from local storage
    const token = window.localStorage.getItem('token');

    // This code gets the user's access token and uses it to query the Spotify API for the user's data.
    // It then sets the state of the loggedIn, token, fullUserData, userName, userId, and playlistData variables.
    // If the user is not logged in, it redirects them to the login page.

    //check if the token is valid and the username is null
    if (token && this.state.userName === null) {
      //set the state to loggedIn: true and set the token
      this.setState({
        loggedIn: true,
        token: token
      });
      //try to get the user data and the playlist data
      try {
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
      } catch (error) {
        //if there is an error, set the state to loggedIn: false and redirect to the login page
        this.setState({
          loggedIn: false
        });
        window.location.href = '/';
        console.log(error);
      }
      //redirect to the home page with the data hash
      window.location.href = '/home#data';
    } else if (!token) {
      //if there is no token, set the state to loggedIn: false and redirect to the login page
      this.setState({
        loggedIn: false
      });
      window.location.href = '/';
    }
  }

  switchPage(page) {
    this.setState({ page: page });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <>
          <NavBar switchPage={this.switchPage}> </NavBar>

          {this.state.page === 'home' && (<h1>Home</h1>)}
          {this.state.page === 'playlists' && (<PlaylistsPage fullUserData={this.state.fullUserData} playlistData={this.state.playlistData}/>)}


        </>
      );
    }
  }
}

export default Home;
