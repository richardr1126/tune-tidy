// Part of the Provider pattern implementation for the API data: this is the PlaylistsPage component.
import { Component } from 'react';
import { Container, Button, Box, Heading, Highlight } from '@chakra-ui/react';

import PlaylistList from '../components/PlaylistList';
import PlaylistEditor from '../components/PlaylistEditor';
import { ChevronLeftIcon } from '@chakra-ui/icons';

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
    document.title = `Playlist Editor | TuneTidy`;
  }

  // Render method that returns JSX
  render() {
    const isMobile = window.innerWidth < 680;

    return (
      <Container maxW='container.xl' sx={{ padding: isMobile ? '2ch' : '4ch' }}>
        {/* Back button to set the selection back to null*/}
        {this.state.selection !== null && (
          <Box>
            <Button variant={'link'} onClick={() => this.setSelection(null)}><ChevronLeftIcon boxSize={'1.5rem'}/> Back</Button>
          </Box>
        )}

        {/* If selection state is null, display the list of playlists */}
        {this.state.selection === null && (
          <>
            <Heading lineHeight='tall'>
              <Highlight
                query={['playlist']}
                styles={{ px: 2, py: 1, rounded: '1rem', bg: 'teal.100' }}
              >
                Chose a playlist to sort.
              </Highlight>
            </Heading>
            <PlaylistList key={'playlists_list'} userName={this.state.fullUserData.display_name} playlists={this.state.playlistData} setSelection={this.setSelection} />
          </>
        )}
        {/* If selection state is not null, display the selected playlist */}
        {this.state.selection !== null && (<PlaylistEditor key={'playlist_editor'} playlist={this.state.selection} obs={this.props.obs} />)}
      </Container>
    );
  }
}

// Exporting the component
export default PlaylistsPage;

