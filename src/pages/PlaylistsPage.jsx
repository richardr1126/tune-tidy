import React, { Component } from 'react';
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
      <>
        {!this.state.selection && (<PlaylistList playlists={this.state.playlistData} setSelection={this.setSelection} />)}
        {this.state.selection && (<PlaylistCard playlist={this.state.selection} setSelection={this.setSelection}/>)}
      </>
    );
  }
}

export default PlaylistsPage;
