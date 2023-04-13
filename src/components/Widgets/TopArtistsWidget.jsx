// Importing necessary dependencies and components
import React from 'react';
import Widget from './Widget';
import {
  Box,
  VStack,
  HStack,
  Text,
  Select,
  Spinner,
  Card,
  ButtonGroup,
  Button,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

// Extends the Widget class for TopArtistsWidget class and sets its initial state
class TopArtistsWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Artists';
    this.state = {
      loggedIn: true,
      time_range: 'medium_term',
      data: this.props.data,
      artistsList: this.props.data.topArtistsMediumTerm.items,
      page: 1,
      allArtistsLists: {
        short_term: this.props.data.topArtistsShortTerm.items,
        medium_term: this.props.data.topArtistsMediumTerm.items,
        long_term: this.props.data.topArtistsLongTerm.items,
      },
    };
    
    // Binding the functions to the component's scope
    this.changePage = this.changePage.bind(this);
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.displayArtists = this.displayArtists.bind(this);
    this.storeAndCompareArtistsRankings = this.storeAndCompareArtistsRankings.bind(this);
    this.renderPaginationButtons = this.renderPaginationButtons.bind(this);
  }

  // A function to change the page number when pagination buttons are clicked
  changePage(newPage) {
    if (newPage > 0 && newPage <= Math.ceil(this.state.artistsList.length / 10)) {
      this.setState({ page: newPage });
    }
  }

  // A function to handle time range change event
  onTimeRangeChange(event) {
    console.log("Time range changed:", event.target.value);
    this.setState({ time_range: event.target.value }, () => {
      this.setState({ artistsList: this.state.allArtistsLists[event.target.value] });
    });
  };

  componentDidMount() {
    this.storeAndCompareArtistsRankings();
  }

  storeAndCompareArtistsRankings() {
    // Retrieve all artists lists from state
    const { allArtistsLists } = this.state;
  
    // Define valid time ranges
    const timeRanges = ['short_term', 'medium_term', 'long_term'];
  
    // Get the current time and a 24-hour period in ms
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
    // Loop through each time range
    timeRanges.forEach((time_range) => {
      // Get the current list of artists for this time range
      const artistsList = allArtistsLists[time_range];
  
      // Get the previous artists list and timestamp from web cache
      const prevArtistsListJSON = localStorage.getItem(`artistsList_${time_range}`);
      const lastUpdated = localStorage.getItem(`lastUpdated`);
  
      // If both previous list and timestamp are available
      if (prevArtistsListJSON && lastUpdated) {
        // Parse the previous list and calculate time since last update
        const prevArtistsList = JSON.parse(prevArtistsListJSON);
        const timeSinceLastUpdate = currentTime - parseInt(lastUpdated);
  
        // Compare the previous and current artists list to find rank changes
        const newArtistsList = artistsList.map((artist) => {
          const prevArtistIndex = prevArtistsList.findIndex((prevArtist) => prevArtist.id === artist.id);
  
          if (prevArtistIndex !== -1) {
            artist.rankChange = prevArtistIndex - artistsList.indexOf(artist);
          } else {
            artist.rankChange = null;
          }
  
          return artist;
        });
  
        // Update the all artists list with new changes
        allArtistsLists[time_range] = newArtistsList;
  
        // If more than 24 hours have passed, update web cache with new list and timestamp
        if (timeSinceLastUpdate >= twentyFourHours) {
          localStorage.setItem(`artistsList_${time_range}`, JSON.stringify(artistsList));
          localStorage.setItem(`lastUpdated`, currentTime);
        }
      } else {
        // Save the current artists list to web cache and set the timestamp
        localStorage.setItem(`artistsList_${time_range}`, JSON.stringify(artistsList));
        localStorage.setItem(`lastUpdated`, currentTime);
      }
    });
  
    // Update state with updated all artists lists
    this.setState({ allArtistsLists });
  }

  // A helper function to display the artist cards in the UI
  displayArtists(artistsList) {
    const { page } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;

    // Looping through each artist in the list and returning a Card component with their details
    return artistsList.slice(start, end).map((artist, index) => (
      <Card p={2.5} key={artist.id} bg={'linear-gradient(167deg, rgba(255,255,255,1) 20%, rgba(249,249,249,1) 100%), rgb(255,255,255)'}>
        <HStack key={artist.id} spacing={4}>
          <Avatar size={'md'} src={artist?.images[0]?.url} icon={<Spinner></Spinner>} />
          <Text as={'h3'} fontWeight='bold' fontSize={'xl'}>{start + index + 1}.</Text>
          <Text as={'h3'} fontWeight="black" fontSize={'xl'} margin={'0.5ch !important'}>{artist.name}</Text>
          {artist.rankChange !== null && (
            <Box>
              {artist.rankChange > 0 && <TriangleUpIcon color="green.500" />}
              {artist.rankChange < 0 && <TriangleDownIcon color="red.500" />}
            </Box>
          )}
        </HStack>
      </Card>
    ));
  }

  renderPaginationButtons() {
    let { page, artistsList } = this.state;

    const pageCount = Math.ceil(artistsList.length / 10);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => this.changePage(i)}
          isDisabled={page === i}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  }

  // A function to render the content of the widget
  renderContent() {
    const { time_range, artistsList } = this.state;
    if (artistsList) {
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
              {this.renderPaginationButtons()}
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
