import Widget from './Widget';

class TopTracksWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = 'Top Tracks';
    this.state = {
      data: props.data,
      time_range: props.time_range,
    };
    this.onTimeRangeChange = this.onTimeRangeChange.bind(this);
  }

  onTimeRangeChange = (newTimeRange) => {
    this.props.onTimeRangeChange(newTimeRange);
    this.setState({ time_range: newTimeRange });
  };


  renderContent() {
    const { data, time_range } = this.state;
    // Use the time_range state as needed to customize the rendering
    // Render the data
  }
}

export default TopTracksWidget;