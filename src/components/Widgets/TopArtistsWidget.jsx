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

const spotify = new SpotifyAPI();

class TopArtistsWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Artists';
    this.state = {
      loggedIn: true,
      time_range: 'medium_term',
      data: null,
      page: 1, // Add this line to include the current page in the state
    };
    this.fetchTopArtists = this.fetchTopArtists.bind(this);
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.changePage = this.changePage.bind(this); // Add this line to bind the changePage function
  }


  redirectLogin() {
    this.setState({
      loggedIn: false,
    });

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
    window.location.href = "/";
  }

  fetchTopArtists() {
    spotify.getMyTopArtists({ time_range: this.state.time_range, limit: 50 })
      .then((data) => {
        console.log('Top artists: ', data);
        this.setState({ data }); // Update the state with the fetched data
      })
      .catch((error) => {
        console.log("Error fetching top artists:", error);
        this.redirectLogin();
      });
  }


  changePage(newPage) {
    this.setState({ page: newPage });
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
      this.fetchTopArtists();

    } else {
      this.setState({
        loggedIn: false,
      });
      window.location.href = "/";
    }
  }

  onTimeRangeChange = (event) => {
    console.log("Time range changed:", event.target.value);
    this.setState({ time_range: event.target.value }, () => {
      this.fetchTopArtists();
    });
  };

  displayArtists(artistsList) {
    const { page } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;

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

  renderContent() {
    const { time_range, data, page } = this.state;
    if (data) {
      const artistsList = data.items;

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
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Spinner size="lg" />
        </Box>
      );
    }
  }
}

export default TopArtistsWidget;