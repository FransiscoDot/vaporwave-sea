import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

const AudioPlayer = ({duration, isRun}) => {
  return (
    <Div>
      <ButtonsPanel>
        <Play src={
            isRun
              ? "https://png.icons8.com/ios/50/000000/play-filled.png"
              : "https://png.icons8.com/ios-glyphs/50/000000/pause.png"
          }
        />
      </ButtonsPanel>
      <Slider
        min={0}
        max={duration}/>
    </Div>
  );
}

AudioPlayer.propTypes = {
  duration: PropTypes.number.isRequired,
  isRun: PropTypes.bool.isRequired
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
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin: 0 35px;
`;

export default AudioPlayer;