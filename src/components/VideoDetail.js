import React from "react";

const VideoDetail = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  const itemSrc = `https://www.youtube.com/embed/${item.id.videoId}`;

  return (
      <div>
          <div className="ui embed">
            <iframe title="video player" src={itemSrc} />
          </div>
    <div className="ui segment">
      <h4 className="ui header">{item.snippet.title}</h4>
      <p>{item.snippet.description}</p>
    </div>
    </div>
  );
};

export default VideoDetail;
