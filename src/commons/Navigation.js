import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Playlist from '../view/playlist/Playlist';

const Div = styled.div`
  margin: 10px;
  flex: 0.7;
  overflow: hidden;
`;

const ScrollbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-right: 14px;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/
  padding-bottom: 15px; /*This would hide the scroll bar of the bottom if there is one*/
`;

const Navigation = () => {
  return (
    <Div>
      <ScrollbarWrapper>
        <Router>
          <Route exact path="/" component={Playlist}/>
        </Router>
      </ScrollbarWrapper>
    </Div>
  )
};

export default Navigation;
