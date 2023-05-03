// Part of the Factory pattern implementation for the widgets.
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
    this.renderPaginationButtons = this.renderPaginationButtons.bind(this);
    this.directToArtistPage = this.directToArtistPage.bind(this);
    this.updatePrevLists = this.updatePrevLists.bind(this);
  }

  // A function to change the page number when pagination buttons are clicked
  changePage(newPage) {
    if (newPage > 0 && newPage <= Math.ceil(this.state.artistsList.length / 10)) {
      this.setState({ page: newPage });
    }
  }

  // A function to handle time range change event
  onTimeRangeChange(event) {
    //match event.target.value to Last 4 weeks, Last 6 months, All Time
    const timeRangeMap = {
      short_term: 'Last 4 weeks',
      medium_term: 'Last 6 months',
      long_term: 'All Time',
    };
    const timeRange = timeRangeMap[event.target.value];


    this.setState({ time_range: event.target.value }, () => {
      this.setState({ artistsList: this.state.allArtistsLists[event.target.value] }, () => {
        this.props.obs.notify({ message: `Time Range\nSet to ${timeRange}`, status: 'success' });
        this.changePage(1);
      });
    });
  };

  directToArtistPage(artist) {
    window.location.href = artist.uri;
  }

  updatePrevLists(time_range, artistsList) {
    const storageKey = 'allPrevArtistsLists';
    let allPrevLists = JSON.parse(localStorage.getItem(storageKey)) || {};
  
    if (!allPrevLists[time_range]) {
      allPrevLists[time_range] = {
        prev1: null,
        prev2: null,
      };
    }
  
    const prev1Exists = allPrevLists[time_range].prev1 !== null;
    const prev2Exists = allPrevLists[time_range].prev2 !== null;
    const prev1IsDifferent = prev1Exists && JSON.stringify(allPrevLists[time_range].prev1) !== JSON.stringify(artistsList);
    const prev2IsDifferent = prev1Exists && JSON.stringify(allPrevLists[time_range].prev2) !== JSON.stringify(artistsList);
  
    if (!prev1Exists) {
      allPrevLists[time_range].prev1 = artistsList;
    } else if (prev1Exists && !prev2Exists && prev1IsDifferent) {
      allPrevLists[time_range].prev2 = artistsList;
    } else if (prev1Exists && prev2Exists && prev1IsDifferent && prev2IsDifferent) {
      allPrevLists[time_range].prev1 = allPrevLists[time_range].prev2;
      allPrevLists[time_range].prev2 = artistsList;
    }
  
    localStorage.setItem(storageKey, JSON.stringify(allPrevLists));
  }
  
  
  componentDidMount() {
    const timeRanges = ['short_term', 'medium_term', 'long_term'];
    
    timeRanges.forEach((time_range) => {
      this.updatePrevLists(time_range, this.state.allArtistsLists[time_range]);
    });
  }

  // A helper function to display the artist cards in the UI
  displayArtists(artistsList) {
    const { page, time_range } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;
  
    const allPrevLists = JSON.parse(localStorage.getItem('allPrevArtistsLists')) || {};
    const prev1ArtistsList = allPrevLists[time_range] ? allPrevLists[time_range].prev1 : null;

  
    return artistsList.slice(start, end).map((artist, index) => {
      let rankChange = null;
      if (prev1ArtistsList) {
        const prevArtistIndex = prev1ArtistsList.findIndex((prevArtist) => prevArtist.id === artist.id);
        rankChange = prevArtistIndex !== -1 ? prevArtistIndex - artistsList.indexOf(artist) : null;
      }
  
      return (
        <Card p={2.5} key={artist.id} onClick={() => this.directToArtistPage(artist)} cursor={'pointer'}>
          <HStack spacing={4}>
            <Avatar size={'md'} src={artist?.images[0]?.url} icon={<Spinner></Spinner>} />
            <Text as={'h3'} fontWeight='bold' fontSize={'xl'}>{start + index + 1}.</Text>
            <Text as={'h3'} fontWeight="black" fontSize={'xl'} margin={'0.5ch !important'}>{artist.name}</Text>
            {rankChange !== null && (
              <Box>
                {rankChange > 0 && <TriangleUpIcon position={'absolute'} top={2} right={2} color="green.500" />}
                {rankChange < 0 && <TriangleDownIcon position={'absolute'} top={2} right={2} color="red.500" />}
              </Box>
            )}
          </HStack>
        </Card>
      );
    });
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
