import React from "react";
import { description } from "./adventureText";
import 'animate.css';

function Text({idCurrent} ) {
  let currentText = description.find(item => item.id === idCurrent);
  currentText = currentText.description_text;
 if (idCurrent === "57") {
  return (
    <div className="text animate__animated animate__pulse animate__slower animate__infinite">
        <p>
           {currentText}
        </p>

    </div>
  );
 }
 else {
  return (
    <div className="text">
        <p>
           {currentText}
        </p>

    </div>
  );

 }
}

export default Text;