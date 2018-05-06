import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import 'rc-slider/assets/index.css';

import SongDetail from './SongDetail';
import AudioPlayer from './AudioPlayer';
import VolumeBanner from "./VolumeBanner";
import * as playlistActions from "../../actions/playlistActions";

class PlayerBanner extends Component {
  playSong = song => {
    this.props.dispatch(playlistActions.playSong(song));
  }

  resumeSong = () => {
    this.props.dispatch(playlistActions.resumeSong());
  }

  pauseSong = () => {
    this.props.dispatch(playlistActions.pauseSong());
  }

  switchAudioPlayerFunction = audioPlayer => {
    return audioPlayer.status === "PLAYING"
      ? this.pauseSong
      : this.playSong
  }

  onVolumeChange = volume => {
    this.props.dispatch(playlistActions.volumeChange(volume));
  }

  onPlaying = soundInfo => {
    this.props.dispatch(playlistActions.positionChanged(soundInfo.position, soundInfo.duration));
  }

  onPositionChangeFromSlider = newPosition => {
    this.props.dispatch(playlistActions.positionChangedFromSlider(newPosition));
  }

  render() {
    const { audioPlayer } = this.props;
    const { song, volume } = audioPlayer;

    return (
      <div>
        {
          song && (
            <Div>
              <SongDetail
                {...song}
              />
              <AudioPlayer
                audioPlayer={audioPlayer}
                onClick={
                  this.switchAudioPlayerFunction(audioPlayer)
                }
                onPlaying={this.onPlaying}
                onChangeSlider={this.onPositionChangeFromSlider}
                onBeforeChangeSlider={this.pauseSong}
                onAfterChangeSlider={this.resumeSong}
              />
              <VolumeBanner
                volume={volume}
                beforeChangeVolume={this.pauseSong}
                onVolumeChange={this.onVolumeChange}
                afterChangeVolume={this.resumeSong}
              />
            </Div>
          )
        }
      </div>
    )
  }
};

PlayerBanner.propTypes = {
  song: PropTypes.object
};

function mapStateToProps(store) {
  return {
    audioPlayer: store.audioPlayer
  };
}

const Div = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default connect(mapStateToProps)(PlayerBanner);
