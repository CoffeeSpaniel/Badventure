import React from "react";
import 'animate.css';

function Intro({setCurrentPage, setIdCurrent, setImgCurrent, imgA}) {


  function startGame() {
   
    setCurrentPage("GameContainer");
    setIdCurrent("01");
    setImgCurrent(imgA);
  
  }

  return (
    <div className="intro">
      <div id="title">
        <h1  className="animate__animated animate__pulse animate__slower animate__infinite"> Badventure Time!</h1>
      </div>
      <div className="description">
        <p>Welcome to the pseudo-deterministic world of Badventure Time!</p>
        <p>
          There are several routes to victory, and several to defeat. The text
          and decision trees are pre-written but the matching images for your
          adventure are generated semi-randomly from the <a href="https://unsplash.com/developers"> Unsplash API </a>
          using keywords relevant to the situation. I hope you enjoy ! 
        </p>
        <p>Dare you begin?</p>
      </div>
      <div className="hoverButton">
        <button className="startButton" onClick={startGame} alt="start game">
          Start Badventure!
        </button>
        
      </div>
      <p id="footNote">written using react.js</p>
    </div>
  );
}
//          <a href="https://unsplash.com/" target="_blank">Unsplash</a>{" "}

export default Intro;
