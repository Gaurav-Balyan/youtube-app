import React from "react";
import "./VideoItem.css";

const VideoItem = ({ item, onItemSelect }) => {
  return (
    <div onClick={() => onItemSelect(item)} className="video-item item">
      <img className="ui image" alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{item.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
