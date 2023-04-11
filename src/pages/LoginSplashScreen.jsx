import { useEffect } from "react";
import { Container, Flex, Box, Heading, Button, Text, Image, Card } from "@chakra-ui/react";

function LoginSplashScreen() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI =
    process.env.REACT_APP_NODE_ENV === "dev"
      ? "http://localhost:3000/"
      : window.location.origin + "/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
	const SCOPES = [
		"user-read-private",
		"playlist-read-private",
		"playlist-read-collaborative",
		"playlist-modify-public",
		"playlist-modify-private",
		"user-library-read",
		"user-library-modify",
		"user-top-read",
		"user-read-recently-played",
		"user-read-currently-playing",
		"user-follow-read",
		"user-follow-modify",
	].join("%20");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    let tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (hash && (!token || tokenExpiration < Date.now())) {
      document.getElementById("splash-screen").style.display = "none";
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("tokenExpiration", Date.now() + 3600000);

      window.location.href = "/home";
    } else if (token && tokenExpiration > Date.now()) {
      window.location.href = "/home";
    }
  }, []);

	

	return (
		<Container id="splash-screen" centerContent textAlign='center'>
			<Box>
				<Flex direction='column' alignItems='center' paddingTop={'2rem'}>
					<Image boxSize='10ch' src='/large-logo.png' alt='Tune Tidy Logo'/>
					<Heading as='h1' fontSize='4ch'>TuneTidy</Heading>
				</Flex>
				<Text as='h2' fontSize='2.5ch' marginTop='1rem'>Spotify Playlist Sorter and Music Manager</Text>
				<Card padding={'2rem'} marginTop='2rem' marginBottom='2rem' textAlign='center' boxShadow={'md'}>
					<Text as='h3' fontSize='2ch'>Tune Tidy is a web application that allows you to sort your Spotify playlists by artist, album, or genre. As well as view your Spotify listening data.</Text>
					<br></br>
					<Text as='h3' fontSize='2ch'>To get started, click the button below to login to Spotify.</Text>
				</Card>
				<Button
					as="a"
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
					marginTop={'2rem'}
					size='lg'
					backgroundColor='#1DB954'
					color='black'
				>
					Login with 
					<Image h={21.9375} src='/Spotify_Logo_CMYK_Black.png' alt='Spotify' paddingLeft='1ch'/>
				</Button>
			</Box>
		</Container>
	);
	



}

export default LoginSplashScreen;