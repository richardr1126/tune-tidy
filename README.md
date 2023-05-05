[![Visit TuneTidy](https://img.shields.io/badge/Visit-TuneTidy-brightgreen)](https://tunetidy.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b09b6d0f-48c6-4a7b-aba8-da27e2a99b51/deploy-status)](https://app.netlify.com/sites/tune-tidy/deploys)
<br>
[![spotify-web-api-js](https://img.shields.io/badge/spotify--web--api--js-1.5.2-red)](https://jmperezperez.com/spotify-web-api-js/)
[![React.js](https://img.shields.io/badge/-React.js-black?logo=react)](https://react.dev/)
[![Spotify](https://img.shields.io/badge/-Spotify-black?logo=spotify)](https://api.spotify.com)
[![Netlify](https://img.shields.io/badge/-Netlify-007ACC?logo=netlify)](https://www.netlify.com/)

# TuneTidy - Spotify Playlist Sorter and Music Manager

Welcome to TuneTidy, a web app built using React and Node.js that provides a convenient and personalized way for users to manage their Spotify playlists and music listening history. With TuneTidy, you can log into your Spotify account, sort your playlists by various criteria, add or remove songs from your playlists, and see your listening stats all in one place.

## Project Team

TuneTidy was created by a team of three developers: Richard Roberson, Cebastian Adams, and Rebecca Rasmussen.

## Limitations
- In order to use the Spotify API, you must have a Spotify account. Since our app is still considered to be in 'dev' mode by Spotify, you must be added as a tester in order to use it. If you would like to be added as a tester, please contact me.
- We are going to try to submit the app to Spotify for approval in order to bring the app into 'production' so anyone can use it without being a tester.

## Installation
1) First make sure you have npm and node.js installed on you computer. If you don't lookup on google nvm this should let you install npm and node.

2) Once you clone the repo, you will need to cd into it and run command npm i (you need to have npm and Node.js installed).  That should create the node_modules folder for you (it is not being upload to github becuase it is huge).

3) You will need to create a file called .env (just .env) in the main directory of the repo (not inside any folder). In the .env file copy and paste what I have below.
```
GOT A WARNING TO NOT POST MY SECRET KEYS ON PUBLIC GIHUB REPOS FROM GITHUB. EMAIL ME IF YOU WOULD LIKE THE SPOTIFY KEYS
```

4) Then in the your terminal type npm start. This should open the web page in your browser, running on http://localhost:3000/

## Features

- Authenticate users with Spotify OAuth and Passport
- Fetch user’s listening data and playlists from Spotify API
- Sort playlists by various criteria and override the new playlist to the user’s library
- Add or remove songs from playlists and override the playlist to the user’s library
- Edit playlist details such as name, description, cover image, etc., and override the playlist to the user’s library
- Display all-time (as well as last year, last month, custom date, etc.) listening data on the home page

 
