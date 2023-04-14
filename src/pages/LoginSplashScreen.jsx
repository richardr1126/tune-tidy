import { useEffect } from "react";
import { Container, Flex, Box, Heading, Button, Text, Image, Card, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaSortAmountDown } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { RiArrowUpDownFill } from "react-icons/ri";


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

	// This useEffect hook runs when the component mounts 
	useEffect(() => {

		// Gets the hash from the URL and retrieves token and token expiration time from localStorage
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");
		let tokenExpiration = window.localStorage.getItem("tokenExpiration");

		// Changes the title of the document to "Login | TuneTidy"
		document.title = "Login | TuneTidy";

		// Checks if there is a hash in the URL AND if either the token is not present or has expired 
		if (hash && (!token || tokenExpiration < Date.now())) {
			// Hides the splash screen
			document.getElementById("splash-screen").style.display = "none";
			// Extracts the token from the hash and saves it into localStorage, along with its expiration time
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];
			window.location.hash = "";
			window.localStorage.setItem("token", token);
			window.localStorage.setItem("tokenExpiration", Date.now() + 3600000);
			// Redirects user to '/spotify#stats'
			window.location.href = "/spotify#stats";
		}
		// If the token and token expiration time are both available and valid (i.e., the token hasn't expired), redirects the user to '/spotify#stats'
		else if (token && tokenExpiration > Date.now()) {
			window.location.href = "/spotify#stats";
		}
	}, []); // Empty dependency array means this useEffect only runs once (on mount)




	return (
		<Container id="splash-screen" centerContent textAlign='center'>
			<Box>
				<Flex direction='column' alignItems='center' paddingTop={'2rem'}>
					<Image boxSize='10ch' src='/large-logo.png' alt='Tune Tidy Logo' />
					<Heading as='h1' fontSize='4ch'>TuneTidy</Heading>
				</Flex>
				<Text as='h2' fontSize='2.5ch' marginTop='1rem'>Spotify Playlist Sorter and Music Manager</Text>
				<Card padding={'2rem'} marginTop='2rem' marginBottom='2rem' textAlign={'center'} boxShadow={'lg'} bgColor={'#edf2f7'}>
					<Text as='h3' fontSize='2ch' fontWeight={'bold'}>Welcome to TuneTidy!</Text>
					<List spacing={3} my={5}>
						<ListItem>
							<ListIcon as={FaSortAmountDown} color='#1DB954' boxSize={5} />
							Sort your playlists by artist, album, track name, acousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness, tempo, or valence.
						</ListItem>
						<ListItem>
							<ListIcon as={BsClipboardData} color='#191414' boxSize={5}/>
							Access your most frequently played tracks, artists, albums, and genres for three different time periods. Your data is refreshed about once a day.
						</ListItem>
						<ListItem>
							<ListIcon as={RiArrowUpDownFill} color='#156aea' boxSize={6} />
							Observe how your rankings evolves over time, represented by arrows in comparison to your previous visit.
						</ListItem>
					</List>
					<Text as='h3' fontSize='2ch' fontWeight={'bold'}>To get started, click the button below to login to Spotify.</Text>
				</Card>
				<Button
					as="a" // Renders button as an anchor tag
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
					marginTop={'2rem'}
					size='lg'
					backgroundColor='#1DB954' // Green color matching Spotify branding
					color='black'
				>
					Login with
					<Image h={21.9375} src='/Spotify_Logo_CMYK_Black.png' alt='Spotify' paddingLeft='1ch' /> {/* Spotify logo */}
				</Button>
			</Box>
		</Container>
	);





}

export default LoginSplashScreen;