// Importing necessary dependencies and components
import React from 'react';
import Widget from './Widget';
import SpotifyAPI from 'spotify-web-api-js';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Select,
  Spinner,
  Card,
  ButtonGroup,
  Button,
  Center,
} from '@chakra-ui/react';

// Creating a new instance of the Spotify API
const spotify = new SpotifyAPI();

// Extends the Widget class for TopArtistsWidget class and sets its initial state
class TopArtistsWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Artists';
    this.state = {
      loggedIn: true,
      time_range: 'medium_term',
      data: null,
      page: 1,
    };
    
    // Binding the functions to the component's scope
    this.fetchTopArtists = this.fetchTopArtists.bind(this);
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  // A function to redirect the user to login page when they are not authenticated or their token has expired
  redirectLogin() {
    this.setState({
      loggedIn: false,
    });

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
    window.location.href = "/";
  }

  // A function to fetch user's top artists using Spotify Web API
  fetchTopArtists() {
    spotify.getMyTopArtists({ time_range: this.state.time_range, limit: 50 })
      .then((data) => {
        console.log('Top artists: ', data);
        this.setState({ data });
      })
      .catch((error) => {
        console.log("Error fetching top artists:", error);
        this.redirectLogin();
      });
  }

  // A function to change the page number when pagination buttons are clicked
  changePage(newPage) {
    this.setState({ page: newPage });
  }

  // A lifecycle method to check if the user is authenticated and fetch their top artists
  componentDidMount() {
    const token = window.localStorage.getItem("token");
    const tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (token && tokenExpiration > Date.now()) {
      this.setState({
        loggedIn: true,
        token: token,
      });

      spotify.setAccessToken(token);
      this.fetchTopArtists();

    } else {
      this.setState({
        loggedIn: false,
      });
      window.location.href = "/";
    }
  }

  // A function to handle time range change event
  onTimeRangeChange = (event) => {
    console.log("Time range changed:", event.target.value);
    this.setState({ time_range: event.target.value }, () => {
      this.fetchTopArtists();
    });
  };

  // A helper function to display the artist cards in the UI
  displayArtists(artistsList) {
    const { page } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;

    // Looping through each artist in the list and returning a Card component with their details
    return artistsList.slice(start, end).map((artist, index) => (
      <Card p={2.5} key={artist.id}>
        <HStack key={artist.id} spacing={4}>
          <Image boxSize="50px" borderRadius="full" src={artist.images[0]?.url} alt={artist.name} />
          <Text as={'h3'} fontWeight='bold' fontSize={'xl'}>{start + index + 1}.</Text>
          <Text as={'h3'} fontWeight="black" fontSize={'xl'} margin={'0.5ch !important'}>{artist.name}</Text>
        </HStack>
      </Card>
    ));
  }

  // A function to render the content of the widget
  renderContent() {
    const { time_range, data, page } = this.state;
    if (data) {
      const artistsList = data.items;

      // Returning JSX for the UI with dynamic values passed as props or state
      return (
        <Box>
          <Select
            value={time_range}
            onChange={this.onTimeRangeChange}
            bgColor={'white'}
            size="sm"
            border={"1px solid #e2e8f0"}
            borderRadius={"md"}
            variant={"filled"}
            width="fit-content"
            mb={2}
          >
            <option value="short_term">Last 4 weeks</option>
            <option value="medium_term">Last 6 months</option>
            <option value="long_term">All time</option>
          </Select>
          <VStack spacing={2} justifyContent={"left"} alignItems={"left"}>
            {this.displayArtists(artistsList)}
          </VStack>
          <Center>
            <ButtonGroup paddingTop={5} size="sm">
              <Button onClick={() => this.changePage(1)} isDisabled={page === 1}>1</Button>
              <Button onClick={() => this.changePage(2)} isDisabled={page === 2}>2</Button>
              <Button onClick={() => this.changePage(3)} isDisabled={page === 3}>3</Button>
              <Button onClick={() => this.changePage(4)} isDisabled={page === 4}>4</Button>
              <Button onClick={() => this.changePage(5)} isDisabled={page === 5}>5</Button>
            </ButtonGroup>
          </Center>
        </Box>

      );
    } else {
      // Returning a spinner component while the data is being fetched
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

// Exporting the TopArtistsWidget component as default
export default TopArtistsWidget;
