import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Playlist from '../view/playlist/Playlist';

const Div = styled.div`
  background-color: red;
  margin: 10px;
  flex: 0.7;
`;

const Navigation = () => {
  return (
    <Div>
      <Router>
        <Route exact path="/" component={Playlist}/>
      </Router>
    </Div>
  )
};

export default Navigation;
