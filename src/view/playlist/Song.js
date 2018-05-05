import React from 'react';
import styled from "styled-components";

const Div = styled.div`
`;

const Song = ({title, duration}) => {
  return (
    <Div>
      <p>{title}</p>
      <p>{duration}</p>
    </Div>
  )
};

export default Song;
