import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return <div>
    <div className="loading">
      <FontAwesomeIcon icon={faVideo} className="video-icon" />
      <p>Movie App</p>
    </div>
</div>
}

export default Loading;