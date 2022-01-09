import React from "react";
import Retry from "./Retry";
import Picture from "./Picture";
import Text from "./Text";

function EndGame({
  setCurrentPage,
  currentPage,
  idCurrent,
  imgCurrent,
  setIdCurrent,
  setImgCurrent,
  setImgA,
  setImgB
}) {
  // conditional render win or loss depending.  If id="57" then else {loser}
  //don't forget to set idCurrent to '01' onClick of retry as well as currentPage to GameContainer

  return (

    <div className="endGame">
      <Picture imgCurrent={imgCurrent} currentPage={currentPage}/>
      <Text idCurrent={idCurrent} />
      <Retry setCurrentPage={setCurrentPage} setImgCurrent={setImgCurrent} setIdCurrent={setIdCurrent} setImgA={setImgA} setImgB={setImgB}/>
    </div>
  );
}

export default EndGame;
