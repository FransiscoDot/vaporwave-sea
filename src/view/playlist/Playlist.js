import React, { Component } from 'react';
import styled from "styled-components";

import Song from "./Song";

const mockData = [
  {
    title: "Machintosh plus",
    duration: "3.56",
  },
  {
    title: "Tassoni",
    duration: "5.02"
  },
  {
    title: "Lemonade",
    duration: "3.62"
  }
];

class Playlist extends Component {
  render() {
    return (
      <div>
        {
          mockData.map((s, i) => (
            <Song
              key={i}
              title={s.title}
              duration={s.duration}
            />
          ))
        }
      </div>
    )
  }
};

export default Playlist;
