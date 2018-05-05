import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.p`
  font-size: 14px;
  margin: 3px 0 3px 0;
`;

const Duration = styled.p`
  font-size: 8px;
  margin: 3px 0 3px 0;
`;

const Song = ({title, duration, image}) => {
  return (
    <Container>
      <Img src={image}/>
      <TextContainer>
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </TextContainer>
    </Container>
  )
};

export default Song;
