import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "rc-slider";

const VolumeBanner = ({volume, beforeChangeVolume, onVolumeChange, afterChangeVolume}) => {
  return (
    <Container>
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
  width: 100px;
`;

export default VolumeBanner;
