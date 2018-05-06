import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import SongDetail from './SongDetail';
import AudioPlayer from './Player';
import * as playlistActions from "../../actions/playlistActions";

class PlayerBanner extends Component {
  playSong = song => {
    this.props.dispatch(playlistActions.playSong(song));
  }

  pauseSong = song => {
    this.props.dispatch(playlistActions.pauseSong(song));
  }

  switchAudioPlayerFunction = audioPlayer => {
    return audioPlayer.status === "PLAYING"
      ? this.pauseSong
      : this.playSong
  }

  render() {
    const { audioPlayer } = this.props;
    const { song } = audioPlayer;

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
              />
              <div style={{width: 400}}/>
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
