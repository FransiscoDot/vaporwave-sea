import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "rc-slider";

const VolumeBanner = ({volume, beforeChangeVolume, onVolumeChange, afterChangeVolume}) => {
  return (
    <Container>
      <AudioIcon
        src={
          volume === 0
            ? "https://png.icons8.com/ios/50/000000/no-audio-filled.png"
            : "https://png.icons8.com/ios/50/000000/high-volume-filled.png"
        }
      />
      <Slider
        min={0}
        max={100}
        value={volume}
        onBeforeChange={beforeChangeVolume}
        onChange={onVolumeChange}
        onAfterChange={afterChangeVolume}
      />
    </Container>
  );
}

VolumeBanner.propTypes = {
  volume: PropTypes.number.isRequired,
  onVolumeChange: PropTypes.func.isRequired
};

const Container = styled.div`
  margin-right: 12px;
  width: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AudioIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 10px;
`;

export default VolumeBanner;
