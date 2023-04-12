import { Component } from 'react';
import { Container } from '@chakra-ui/react';
import PlaylistList from '../components/PlaylistList';
import PlaylistCard from '../components/PlaylistCard';


class PlaylistsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      fullUserData: this.props.fullUserData,
      playlistData: this.props.playlistData
    };
    this.setSelection = this.setSelection.bind(this);
  }

  setSelection(selection) {
    this.setState({
      selection: selection
    });
  }


  render() {
    return (
      <Container maxW='container.xl' sx={{ padding: '1ch' }}>
        {!this.state.selection && (<PlaylistList playlists={this.state.playlistData} setSelection={this.setSelection} />)}
        {this.state.selection && (<PlaylistCard playlist={this.state.selection} setSelection={this.setSelection}/>)}
      </Container>
    );
  }
}

export default PlaylistsPage;
