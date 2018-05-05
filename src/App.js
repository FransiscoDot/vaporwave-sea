import React, { Component } from 'react';
import styled from "styled-components";

import Header from "./commons/Header";
import Banner from "./commons/Banner";

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

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <Body>
          <Banner />
        </Body>
      </Main>
    );
  }
}

export default App;
