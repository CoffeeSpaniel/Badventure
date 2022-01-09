import React from "react";
import { description } from "./adventureText";


function ChoiceA({setCurrentPage, idCurrent, setIdCurrent, setImgCurrent, setImgA, setIdA, imgA, idA}) {
  console.log("ChoiceA img A is ",imgA);
  function choiceAFunction() {
    if (choiceA.A_outcome === "progress") {
      setIdCurrent(choiceAPath);
      setImgCurrent(imgA)
    } else {
      setCurrentPage("EndGame");
      setIdCurrent(choiceAPath);
      setImgCurrent(imgA)
    }
  }
  let choiceA = description.find(item => item.id === idCurrent);
  let choiceAText = choiceA.A_text;
  let choiceAPath = choiceA.A_route;
  return (
    <div className="choiceA hoverButton">
      <button className="buttonA" onClick={choiceAFunction} alt="choice A">{choiceAText}</button>
    </div>
  );
}

export default ChoiceA;
