import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

class PlayerBanner extends Component {
  render() {
    const { song } = this.props;

    return (
      <Div>
        {
          song && (
            <p>{song.title}</p>
          )
        }
      </Div>
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
  height: 50px;
`;

export default connect()(PlayerBanner);
