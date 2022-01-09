import React from "react";

function Retry({setCurrentPage, setIdCurrent, setImgCurrent, setImgA, setImgB}) {
 function restartAdventure() {

  setCurrentPage("Intro");
  setIdCurrent("00");
  setImgCurrent(null);
  //this stops a bug where gameover img from previous game carries over
  setImgA([]);
  setImgB([]);

  }
    return (
      <div className="hoverRetryButton">
          <button className="retryButton" onClick={restartAdventure} alt="Restart Adventure">Restart Adventure?</button>
        </div>
    );
  }
  
  export default Retry;