import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import * as playlistActions from "../../actions/playlistActions";
import Song from "./Song";

class Playlist extends Component {

  componentDidMount() {
    this.props.dispatch(playlistActions.fetchSongs());
  }

  playSong = song => {
    this.props.dispatch(playlistActions.playSong(song));
  }

  render() {
    const { songs } = this.props;

    return (
      <div>
        {
          songs.map((s, i) => (
            <Song
              key={i}
              song={s}
              playSong={this.playSong}
            />
          ))
        }
      </div>
    )
  }
};

Playlist.propTypes = {
  songs: PropTypes.array.isRequired
}

function mapStateToProps(store) {
  return {
    songs: store.songs
  }
}

export default connect(mapStateToProps)(Playlist);
