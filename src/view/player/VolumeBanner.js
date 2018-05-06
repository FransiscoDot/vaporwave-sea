import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const VolumeBanner = ({volume, onVolumeChangeComplete}) => {
  return (
    <Container>
      {/* <SliderWrapper
        value={volume}
        max={100}
        handleChangeComplete={onVolumeChangeComplete}
      /> */}
    </Container>
  );
}

VolumeBanner.propTypes = {
  volume: PropTypes.number.isRequired,
  onVolumeChangeComplete: PropTypes.func.isRequired
};

const Container = styled.div`
  width: 100px;
`;

export default VolumeBanner;
