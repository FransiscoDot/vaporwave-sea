import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Song = ({song, onClick, isPlaying}) => {
  const { image, title, duration } = song;

  return (
    <Container>
      <ImgContainer>
        <Img src={image}/>
        <Play
          onClick={() => onClick(song)}
          src={
              isPlaying
                ? "https://png.icons8.com/ios/50/000000/circled-pause-filled.png"
                : "https://png.icons8.com/ios/50/000000/play-button-circled-filled.png"
            }
          />
      </ImgContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </TextContainer>
    </Container>
  )
};

Song.propTypes = {
  song: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  &:hover {
    opacity: 0.7;
  }
`;

const ImgContainer = styled.div`
  position:relative;
  display:inline-block;
  text-align:center;
`;

const Img = styled.img`
  width: 8rem;
  height: 8rem;
`;

const Play = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 36px;
  margin: auto;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    width: 46px;
  }
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin: 0 0 14px 0;
`;

const Duration = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export default Song;
