import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import * as playlistActions from "../../actions/playlistActions";
import Song from "./Song";

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(playlistActions.fetchSongs());
  }

  playSong = songSelected => {
    const { song } = this.props.audioPlayer;

    if (song && song.url !== songSelected.url)
      this.props.dispatch(playlistActions.changeSong(songSelected));
    else
      this.props.dispatch(playlistActions.playSong(songSelected));
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
