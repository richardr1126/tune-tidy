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

class TopAlbumsWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Albums';
    this.state = {
      time_range: 'medium_term',
      data: this.props.data,
      tracksList: this.props.data.topTracksMediumTerm.items,
      page: 1,
      allTracksLists: {
        short_term: this.props.data.topsShortTerm.items,
        medium_term: this.props.data.topTracksMediumTerm.items,
        long_term: this.props.data.topTracksLongTerm.items,
      },
    };

    // Binding the functions to the component's scope
    this.changePage = this.changePage.bind(this);
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.displayTracks = this.displayTracks.bind(this);
    this.renderPaginationButtons = this.renderPaginationButtons.bind(this);
    this.directToTracksPage = this.directToTrackPage.bind(this);
    this.updatePrevLists = this.updatePrevLists.bind(this);
  }

  // A function to change the page number when pagination buttons are clicked
  changePage(newPage) {
    if (newPage > 0 && newPage <= Math.ceil(this.state.tracksList.length / 10)) {
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
      this.setState({ tracksList: this.state.allTracksLists[event.target.value] }, () => {
        this.props.obs.notify({ message: `Time Range\nSet to ${timeRange}`, status: 'success' });
      });
    });
  };

  directToTrackPage(track) {
    window.location.href = track.uri;
  }

  updatePrevLists(time_range, tracksList) {
    const storageKey = 'allPrevTracksLists';
    let allPrevLists = JSON.parse(localStorage.getItem(storageKey)) || {};
  
    if (!allPrevLists[time_range]) {
      allPrevLists[time_range] = {
        prev1: null,
        prev2: null,
      };
    }
  
    const prev1Exists = allPrevLists[time_range].prev1 !== null;
    const prev2Exists = allPrevLists[time_range].prev2 !== null;
    const prev1IsDifferent = prev1Exists && JSON.stringify(allPrevLists[time_range].prev1) !== JSON.stringify(tracksList);
    const prev2IsDifferent = prev1Exists && JSON.stringify(allPrevLists[time_range].prev2) !== JSON.stringify(tracksList);
  
    if (!prev1Exists) {
      allPrevLists[time_range].prev1 = tracksList;
    } else if (prev1Exists && !prev2Exists && prev1IsDifferent) {
      allPrevLists[time_range].prev2 = tracksList;
    } else if (prev1Exists && prev2Exists && prev1IsDifferent && prev2IsDifferent) {
      allPrevLists[time_range].prev1 = allPrevLists[time_range].prev2;
      allPrevLists[time_range].prev2 = tracksList;
    }
  
    localStorage.setItem(storageKey, JSON.stringify(allPrevLists));
  }
  
  
  componentDidMount() {
    const timeRanges = ['short_term', 'medium_term', 'long_term'];
    
    timeRanges.forEach((time_range) => {
      this.updatePrevLists(time_range, this.state.allTracksLists[time_range]);
    });
  }

  displayTracks(tracksList) {
    const { page, time_range } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;
  
    const allPrevLists = JSON.parse(localStorage.getItem('allPrevTracksLists')) || {};
    const prev1TracksList = allPrevLists[time_range] ? allPrevLists[time_range].prev1 : null;

  
    return tracksList.slice(start, end).map((track, index) => {
      let rankChange = null;
      if (prev1TracksList) {
        const prevTrackIndex = prev1TracksList.findIndex((prevTrack) => prevTrack.id === track.id);
        rankChange = prevTrackIndex !== -1 ? prevTrackIndex - tracksList.indexOf(track) : null;
      }
  
      const isMobile = window.innerWidth <= 600;
  
      return (
        <Card p={2.5} key={track.id} onClick={() => this.directToTrackPage(track)} cursor={'pointer'}>
          <HStack spacing={4}>
            <Avatar size={'md'} src={track.album?.images[0]?.url} icon={<Spinner></Spinner>} />
            <Text as={'h3'} fontWeight='bold' fontSize={'xl'}>{start + index + 1}.</Text>
            <Text as={'h3'} fontWeight="black" fontSize={'xl'} margin={'0.5ch !important'}>{track.album.name}</Text>
            {rankChange !== null && (
              <Box>
                {rankChange > 0 && <TriangleUpIcon position={isMobile ? 'absolute' : 0} top={isMobile ? 2 : 0} right={isMobile ? 2 : 0} color="green.500" />}
                {rankChange < 0 && <TriangleDownIcon position={isMobile ? 'absolute' : 0} top={isMobile ? 2 : 0} right={isMobile ? 2 : 0} color="red.500" />}
              </Box>
            )}
          </HStack>
        </Card>
      );
    });
  }
  

  renderPaginationButtons() {
    let { page, tracksList } = this.state;

    const pageCount = Math.ceil(tracksList.length / 10);
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
    const { time_range, tracksList } = this.state;
    if (tracksList) {
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
            {this.displayTracks(tracksList)}
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

export default TopAlbumsWidget;