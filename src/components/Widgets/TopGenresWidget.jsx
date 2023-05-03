// Part of the Factory pattern implementation for the widgets.
import React from 'react';
import Widget from './Widget';
import {
  Box,
  Center,
  Select,
  Spinner,
} from '@chakra-ui/react';

import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#1e90ff"];

class TopGenresWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top 5 Genres';
    this.state = {
      time_range: 'medium_term',
      data: this.props.data,
      artistsList: this.props.data.topArtistsMediumTerm.items,
      allArtistsLists: {
        short_term: this.props.data.topArtistsShortTerm.items,
        medium_term: this.props.data.topArtistsMediumTerm.items,
        long_term: this.props.data.topArtistsLongTerm.items,
      },
    };

    // Binding the functions to the component's scope
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
    this.displayGenres = this.displayGenres.bind(this);
    this.directToArtistPage = this.directToArtistPage.bind(this);
    this.updatePrevLists = this.updatePrevLists.bind(this);
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
  displayGenres(artistsList) {

    var dict = {};
    var length = 50;
    //count the number of times that each genre occured to find the most popular one
    for (var j = 0; j < artistsList.length; j++) {
      if (artistsList[j].genres.length !== 0) {
        for (let i = 0; i < artistsList[j].genres.length; i++) {
          dict[artistsList[j].genres[i]] = (dict[artistsList[j].genres[i]] || 0) + 1;
        }
      }
      else {
        length-=1;
      }
    }
    //Code below for sorting a dictionary was used from 
    //https://www.educative.io/answers/how-can-we-sort-a-dictionary-by-value-in-javascript

    // Create items array
    var items = Object.keys(dict).map(function (key) {
      return [key, dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
      return second[1] - first[1];
    });
    // Obtain the list of keys in sorted order of the values.
    var keys = items.map(
      (e) => { return e[0] });
    // Obtain the list of values in sorted order.
    var percent = items.map(
      (e) => { return (e[1]/length)*100});
    var piedata = []
    //create the data
    if(keys.length === 0) { //if no genres, nothing to show
      piedata =[{value: 0, name: "No genres to show"}]
    }
    else if (keys.length < 5) {//if less then 5, show what the user has
      for (var k = 0; k < keys.length; k++) {
        piedata.push({value: percent[k], name: keys[k]})
      }
    }
    else {//else more then 5 genres, just show top 5
      piedata = [
        {
          value: percent[0],
          name: keys[0]
        },
        {
          value: percent[1],
          name: keys[1]
        },
        {
          value: percent[2],
          name: keys[2]
        },
        {
          value: percent[3],
          name: keys[3]
        },
        {
          value: percent[4],
          name: keys[4]
        }
      ];
    }
    return (
      <Center>
        <PieChart width={275} height={350}>
          <Pie
            data={piedata}
            outerRadius={120}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
          >
            {piedata?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend vert align="center" payload={
            piedata.map(
              (item, index) => ({
                id: item.name,
                type: "square",
                value: `${item.name}`,
                color: COLORS[index % COLORS.length],
              })
            )} />
        </PieChart>
      </Center>




    );
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
          {this.displayGenres(artistsList)}
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
export default TopGenresWidget;
