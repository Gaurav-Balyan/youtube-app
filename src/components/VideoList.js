import React from "react";
import VideoItem from "../components/VideoItem";

const VideoList = ({ items, onItemSelect }) => {
  const renderedList = items.map(item => {
    return <VideoItem key={item.id.videoId} item={item} onItemSelect={onItemSelect} />;
  });

  return (
      <div className="ui relaxed divided list">
          {renderedList}
      </div>
  );
};

export default VideoList;
