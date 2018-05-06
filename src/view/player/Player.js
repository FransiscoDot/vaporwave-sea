import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import Sound from "react-sound";

const AudioPlayer = ({audioPlayer, onClick}) => {
  const { duration, url } = audioPlayer.song;
  const { status, song } = audioPlayer;

  return (
    <Div>
      <ButtonsPanel>
        <Play
          onClick={() => onClick(song)}
          src={
            status === "PLAYING"
              ? "https://png.icons8.com/ios-glyphs/50/000000/pause.png"
              : "https://png.icons8.com/ios/50/000000/play-filled.png"
          }
        />
      </ButtonsPanel>
      <Slider
        min={0}
        max={duration}
      />
      <Sound
        url={url}
        playStatus={status}
      />
    </Div>
  );
}

AudioPlayer.propTypes = {
  audioPlayer: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

const ButtonsPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4px;
`;

const Play = styled.img`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin: 0 35px;
`;

export default AudioPlayer;
