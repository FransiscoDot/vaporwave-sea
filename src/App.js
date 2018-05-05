import React, { Component } from 'react';
import styled from "styled-components";

import Header from "./commons/Header";
import Navigation from "./commons/Navigation";
import Banner from "./commons/Banner";
import PlayerBanner from "../src/view/player/PlayerBanner";

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <Body>
          <Navigation />
          <Banner />
        </Body>
        <Footer>
          <PlayerBanner />
        </Footer>
      </Main>
    );
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightpink;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  background-color: pink;
  margin: 10px;
`;

const Footer = styled.div`
  margin: 10px;
`;

export default App;
