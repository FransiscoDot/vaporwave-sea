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

  pauseSong = () => {
    this.props.dispatch(playlistActions.pauseSong());
  }

  switchAudioPlayerFunction = (song, audioPlayer) => {
    if (audioPlayer.song === null)
      return this.playSong;

    return song.url === audioPlayer.song.url && audioPlayer.status === "PLAYING"
      ? this.pauseSong
      : this.playSong
  }

  songIsPlaying = (song, audioPlayer) => {
    if (audioPlayer.song === null)
      return false

    return song.url === audioPlayer.song.url && audioPlayer.status === "PLAYING"
      ? true
      : false
  }

  render() {
    const { songs, audioPlayer } = this.props;

    return (
      <div>
        {
          songs.map((s, i) => (
            <Song
              key={i}
              song={s}
              isPlaying={
                this.songIsPlaying(s, audioPlayer)
              }
              onClick={
                this.switchAudioPlayerFunction(s, audioPlayer)
              }
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
    songs: store.songs,
    audioPlayer: store.audioPlayer
  }
}

export default connect(mapStateToProps)(Playlist);
