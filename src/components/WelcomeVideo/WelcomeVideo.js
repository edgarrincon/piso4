import React from "react";
import "./WelcomeVideo.css";
import YouTube from "react-youtube";

window.YTConfig = {
  host: "https://www.youtube.com",
};

class WelcomeVideo extends React.Component {
  render() {
    const opts = {
      height: "400",
      width: "650",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <>
        <div className="bg__welcome">
          <div className="title__video">
            <h2>PISO4</h2>
            <h4>AGENCY</h4>
          </div>

          <YouTube
            containerClassName={"ytvideo"}
            videoId="AT6oSIDbGkw"
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default WelcomeVideo;
