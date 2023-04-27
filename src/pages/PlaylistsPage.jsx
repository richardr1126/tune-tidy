// Importing necessary dependencies
import { Component } from 'react';
import { Container, Button, Box } from '@chakra-ui/react';
import PlaylistList from '../components/PlaylistList';
import PlaylistEditor from '../components/PlaylistEditor';

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
        {/* Back button to set the selection back to null*/}
        {this.state.selection !== null && (
          <Box px={8} py={2}>
            <Button variant={'link'} onClick={() => this.setSelection(null)}>&lt; Back</Button>
          </Box>
        )}

        {/* If selection state is null, display the list of playlists */}
        {this.state.selection === null && (<PlaylistList key={'playlists_list'} userName={this.state.fullUserData.display_name} playlists={this.state.playlistData} setSelection={this.setSelection} />)}
        {/* If selection state is not null, display the selected playlist */}
        {this.state.selection !== null && (<PlaylistEditor key={'playlist_editor'} playlist={this.state.selection} obs={this.props.obs}/>)}
      </Container>
    );
  }
}

// Exporting the component
export default PlaylistsPage;

