import React from "react";
import Picture from "./Picture";
import Text from "./Text";
import ChoiceA from "./ChoiceA";
import ChoiceB from "./ChoiceB";


function GameContainer(
  {setCurrentPage,
  idCurrent,
  imgCurrent,
  setIdCurrent,
  setImgCurrent,
  setImgA,
  setIdA,
  imgA,
  idA,
  setImgB,
  setIdB,
  imgB,
  idB}
) {

  return (
    <div className="GameContainer">
      <Picture imgCurrent={imgCurrent} />
      <Text idCurrent={idCurrent} />
      <div className="buttonContainer">
        <ChoiceA
        setCurrentPage={setCurrentPage}
          idCurrent={idCurrent}
          setIdCurrent={setIdCurrent}
          setImgCurrent={setImgCurrent}
          setImgA={setImgA}
          setIdA={setIdA}
          imgA={imgA}
          idA={idA}
        />
        <ChoiceB
        setCurrentPage={setCurrentPage}
          idCurrent={idCurrent}
          setIdCurrent={setIdCurrent}
          setImgCurrent={setImgCurrent}
          setImgB={setImgB}
          setIdB={setIdB}
          imgB={imgB}
          idB={idB}
        />
      </div>
    </div>
  );
}

export default GameContainer;
