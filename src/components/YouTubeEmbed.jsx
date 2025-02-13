import React from 'react';
import YouTube from 'react-youtube';

const YouTubeEmbed = () => {
  const opts = {
    height: '300',
    width: '500',
    playerVars: {
      autoplay: 1,  // Auto-play the video
      rel: 0,       // Disable related videos
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube className='ml-[-350px]' videoId="IlYUUN8rL_Y" opts={opts} onReady={onReady} />;
};

export default YouTubeEmbed;
