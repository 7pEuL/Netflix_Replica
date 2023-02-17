import React from "react";
import YouTube from "react-youtube";

const YouTubeTrailer = () => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    return <YouTube videoId={URL} opts={opts} onReady={onReady} />;
};

export default YouTubeTrailer;
