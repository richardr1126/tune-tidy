// Importing necessary dependencies
import { Component } from 'react';
import { Container } from '@chakra-ui/react';
import PlaylistList from '../components/PlaylistList';
import PlaylistCard from '../components/PlaylistCard';

// Defining a class component called PlaylistsPage
class PlaylistsPage extends Component {
  // Constructor that initializes the state of the component
  constructor(props) {
    super(props);
    this.state = {
      selection: null, // Selection is initially set to null
      fullUserData: this.props.fullUserData, // Full user data is passed as prop and assigned to state
      playlistData: this.props.playlistData // Playlist data is passed as prop and assigned to state
    };
    // Binding method so that it can access 'this' inside method
    this.setSelection = this.setSelection.bind(this);
  }

  // Method that sets the selection state
  setSelection(selection) {
    this.setState({
      selection: selection
    });
  }

  componentDidMount() {
    document.title = `Playlists | TuneTidy`;
  }

  // Render method that returns JSX
  render() {
    return (
      <Container maxW='container.xl' sx={{ padding: '1ch' }}>
        {/* If selection state is null, display the list of playlists */}
        {!this.state.selection && (<PlaylistList key={'playlists_list'} userName={this.state.fullUserData.display_name} playlists={this.state.playlistData} setSelection={this.setSelection} />)}
        {/* If selection state is not null, display the selected playlist */}
        {this.state.selection && (<PlaylistCard playlist={this.state.selection} setSelection={this.setSelection}/>)}
      </Container>
    );
  }
}

// Exporting the component
export default PlaylistsPage;

