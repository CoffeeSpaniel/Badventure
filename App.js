import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import GameContainer from "./GameContainer";
import EndGame from "./EndGame";
import "./App.css";
import { description } from "./adventureText";
import { createApi } from "unsplash-js";


function App() {
  /////////////////////////////////////////////////////////////
  //                   Top Level States                      //
  /////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////// const [loading, setLoading] = useState(true);
  //Current Component rendered on App
  const [currentPage, setCurrentPage] = useState("Intro");
  console.log("current page is :", currentPage);
  //current game-page and image
  const [idCurrent, setIdCurrent] = useState("00");
  console.log("id current is : ", idCurrent);
  // "01"
  const [imgCurrent, setImgCurrent] = useState([]);
  console.log("img current is : ", imgCurrent);
  //upcoming image and description for A
  const [idA, setIdA] = useState("02");
  const [imgA, setImgA] = useState([]);
  //upcoming image and description for B
  const [idB, setIdB] = useState("16");
  const [imgB, setImgB] = useState([]);
  //API states
  const [dataA, setAPhotosResponse] = useState(null);
  const [dataB, setBPhotosResponse] = useState(null);

  console.log("dataA is : ", dataA);
  console.log("dataB is : ", dataB);
  
  /////////////////////////////////////////////////////////////
  //          Retrieving upcoming keywords for API call      //
  /////////////////////////////////////////////////////////////

  let currentFile = description.find((item) => item.id === idCurrent);
  let Aimage = currentFile.A_route;
  let Bimage = currentFile.B_route;
  

  if (currentPage === "EndGame") {
    Aimage = null;
    Bimage = null;
  }
  if (currentPage === "Intro") {
    Aimage = currentFile.keyword;
    Bimage = null;

  } if (currentPage === "GameContainer") {
    Aimage = description.find((item) => item.id === Aimage);
    Aimage = Aimage.keyword;
    Bimage = description.find((item) => item.id === Bimage);
    Bimage = Bimage.keyword;
  }

  /////////////////////////////////////////////////////////////
  //                      Unsplash API                       //
  /////////////////////////////////////////////////////////////
  // numOFPicsReturned represents how many pics are returned for each API call the bigger the number means more variety but slower call.  Only one of these pics will be shown.  Higher number potentially improves replay value
  let numOfPicsReturned = 3;
  /*   
    is my API secure?  https://github.com/unsplash/unsplash-js  usage - creating an instance
 
 */

  const api = createApi({
    accessKey: "tyAnt-9jo_yEejtrQpz1c5-P63y9gz4361G_04Y0Tzw",
  });

  useEffect(() => {
    let randomiser = Math.floor(Math.random() * numOfPicsReturned);
    console.log("MAKING API CALL");
    /////////////////////////////////////////////////////////////
    //        Linear request when next page is one image       //
    /////////////////////////////////////////////////////////////
    if (currentPage ==="Intro") {
      api.search
        .getPhotos({ query: Aimage, page: 1, perPage: numOfPicsReturned })
        .then((result) => {
          setAPhotosResponse(result);
          setImgA([
            result.response.results[randomiser].urls.small,
            result.response.results[randomiser].alt_description,
            result.response.results[randomiser].user.username,
          ]);

          ///////////////////////////////////////////////////////////////  // setLoading(false);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
      /////////////////////////////////////////////////////////////
      //       double request when next page has 2 choices       //
      /////////////////////////////////////////////////////////////
    } if (currentPage === "GameContainer"){
      api.search
        .getPhotos({ query: Aimage, page: 1, perPage: numOfPicsReturned })
        .then((result) => {
          setAPhotosResponse(result);
          setImgA([
            result.response.results[randomiser].urls.small,
            result.response.results[randomiser].alt_description,
            result.response.results[randomiser].user.username,
          ]);
        })
        .catch(() => {
          console.log("something went wrong!");
        });

      api.search
        .getPhotos({ query: Bimage, page: 1, perPage: numOfPicsReturned })
        .then((result) => {
          setBPhotosResponse(result);
          setImgB([
            result.response.results[randomiser].urls.small,
            result.response.results[randomiser].alt_description,
            result.response.results[randomiser].user.username,
          ]);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    } else {
      return
    }
  }, [idCurrent]);

  /////////////////////////////////////////////////////////////
  //                  Conditional Rendering                  //
  /////////////////////////////////////////////////////////////

  if (currentPage === "Intro") {
    return (
      <div className="App">
        <Intro
          imgA={imgA}
          setCurrentPage={setCurrentPage}
          idCurrent={idCurrent}
          imgCurrent={imgCurrent}
          setIdCurrent={setIdCurrent}
          setImgCurrent={setImgCurrent}
        />
      </div>
    );
  }
  if (currentPage === "GameContainer") {
    return (
      <div>
        <GameContainer
          setCurrentPage={setCurrentPage}
          idCurrent={idCurrent}
          imgCurrent={imgCurrent}
          setIdCurrent={setIdCurrent}
          setImgCurrent={setImgCurrent}
          setImgA={setImgA}
          setIdA={setIdA}
          imgA={imgA}
          idA={idA}
          setImgB={setImgB}
          setIdB={setIdB}
          imgB={imgB}
          idB={idB}
        />
      </div>
    );
  }
  if (currentPage === "EndGame") {
    return (
      <div>
        <EndGame
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          idCurrent={idCurrent}
          imgCurrent={imgCurrent}
          setIdCurrent={setIdCurrent}
          setImgCurrent={setImgCurrent}
          setImgA={setImgA}
          setImgB={setImgB}
          />
      </div>
    );
  }
}

export default App;
