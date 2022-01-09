import React from "react";
import { description } from "./adventureText";


function ChoiceB({idCurrent, setIdCurrent, setCurrentPage, setImgCurrent, setImgB, setIdB, imgB, idB}) {
  console.log("ChoiceB img B is ",imgB);
  function choiceBFunction() {
    if (choiceB.B_outcome === "progress") {
      setIdCurrent(choiceBPath);
      setImgCurrent(imgB)
    } else {
      setCurrentPage("EndGame");
      setIdCurrent(choiceBPath);
      setImgCurrent(imgB)
      console.log("imgB is : " , imgB)
    }
  }
  let choiceB = description.find(item => item.id === idCurrent);
  let choiceBText = choiceB.B_text;
  let choiceBPath = choiceB.B_route;
  return (
    <div className="choiceB hoverButton">
      <button className="buttonB" onClick={choiceBFunction} alt="choice B">{choiceBText}</button>
    </div>
  );
}

export default ChoiceB;


