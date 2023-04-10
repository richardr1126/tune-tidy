import { useEffect } from "react";
import { Container, Flex, Box, Heading, Button, Text, Image, Card } from "@chakra-ui/react";

function LoginSplashScreen() {
	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	//if dev mode, use localhost:3000, else use https://tune-tidy.netlify.app/
	const REDIRECT_URI = (process.env.REACT_APP_NODE_ENV === 'dev') ? "http://localhost:3000/" : "https://tune-tidy.netlify.app/";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");


		if (!token && hash) {
			//hide login button
			document.getElementById("splash-screen").style.display = "none";
			token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

			window.location.hash = "";
			window.localStorage.setItem("token", token);

			//redirect to home page
			window.location.href = "/home";
		} else if (token) {
			//redirect to home page
			window.location.href = "/home";
		}

	}, [])

	

	return (
		<Container id="splash-screen" centerContent textAlign='center'>
			<Box>
				<Flex direction='column' alignItems='center' sx={{paddingTop: '2rem'}}>
					<Image boxSize='10ch' src='/large-logo.png' alt='Tune Tidy Logo'/>
					<Heading as='h1' fontSize='4ch'>TuneTidy</Heading>
				</Flex>
				<Text as='h2' fontSize='2.5ch' sx={{marginTop: '1rem'}}>Spotify Playlist Sorter and Music Manager</Text>
				<Card sx={{padding: '2rem', marginTop: '2rem', marginBottom: '2rem'}} textAlign='center' boxShadow={'md'}>
					<Text as='h3' fontSize='2ch'>Tune Tidy is a web application that allows you to sort your Spotify playlists by artist, album, or genre. As well as view your Spotify listening data.</Text>
					<br></br>
					<Text as='h3' fontSize='2ch'>To get started, click the button below to login to Spotify.</Text>
				</Card>
				<Button
					as="a"
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
					sx={{marginTop: '2rem'}}
					size='lg'
					backgroundColor='#1DB954'
					color='black'
				>
					Login with 
					<Image boxSize='10ch' fit='contain' src='/Spotify_Logo_CMYK_Black.png' alt='Spotify' paddingLeft='1ch'/>
				</Button>
			</Box>
		</Container>
	);
	



}

export default LoginSplashScreen;