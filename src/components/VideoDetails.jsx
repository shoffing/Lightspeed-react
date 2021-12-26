import React from "react";
import PropTypes from "prop-types";
import {
  VideoDetailsContainer,
} from "../styles/videoDetailsStyles";

const VideoDetails = ({ viewers }) => {
  return (
    <VideoDetailsContainer>
      <span>👁 {viewers}</span>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;

VideoDetails.propTypes = {
  viewers: PropTypes.number,
};
