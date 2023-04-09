import { useEffect, useState } from "react";
import { Container, Flex, Box, Heading, Button, Text, Image, Card } from "@chakra-ui/react";

function LoginSplashScreen() {
	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI = "http://localhost:3000/"
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
	const RESPONSE_TYPE = "token"

	const [token, setToken] = useState("")


	useEffect(() => {
		const hash = window.location.hash
		let token = window.localStorage.getItem("token")


		if (!token && hash) {
			token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

			window.location.hash = ""
			window.localStorage.setItem("token", token)

			//redirect to home page
			window.location.href = "/home";
		}

		setToken(token)

	}, [])

	const logout = () => {
		setToken("")
		window.localStorage.removeItem("token")
	}

	return (
		<Container centerContent textAlign='center'>
			<Box>
				<Flex align='center' alignItems='center' sx={{paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '5rem'}}>
					<Image boxSize='10ch' src='/large-logo.png' alt='Tune Tidy Logo'/>
					<Heading as='h1' fontSize='6ch'>TuneTidy</Heading>
				</Flex>
				<Text as='h2' fontSize='3ch'>Spotify Playlist Sorter and Music Manager</Text>
				<Card sx={{padding: '2rem', marginTop: '2rem', marginBottom: '2rem'}} textAlign='left'>
					<Text as='h3' fontSize='2ch'>Tune Tidy is a web application that allows you to sort your Spotify playlists by artist, album, or genre.
					As well as view your Spotify listening data.</Text>
					<br></br>
					<Text as='h3' fontSize='2ch'>To get started, click the button below to login to Spotify.</Text>
				</Card>
			
				{!token ? (
					<Button
						as="a"
						href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
						variantColor="purple"
					>
						Login to Spotify
					</Button>
				) : (
					<Button onClick={logout} variantColor="purple">
						Logout
					</Button>
				)}
			</Box>
		</Container>
	);



}

export default LoginSplashScreen;