import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const SongDetail = ({title, image}) => {
  return (
    <Div>
      <Img src={image}/>
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
    </Div>
  );
}

SongDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
`;

const Img = styled.img`
  width: 4rem;
  height: 4rem;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

export default SongDetail;
