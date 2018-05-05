import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import SongDetail from './SongDetail';
import AudioPlayer from './Player';

class PlayerBanner extends Component {
  render() {
    const { song } = this.props;

    return (
      <div>
        {
          song && (
            <Div>
              <SongDetail
                {...song}
              />
              <AudioPlayer
                duration={song.duration}
                isRun={true}/>
              <div style={{width: 400}}/>
            </Div>
          )
        }
      </div>
    )
  }
};

PlayerBanner.propTypes = {
  song: PropTypes.object
};

function mapStateToProps(store) {
  return {
    song: store.song && store.song
  }
}

const Div = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default connect(mapStateToProps)(PlayerBanner);
