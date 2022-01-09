import React from "react";
import 'animate.css';

function Picture({imgCurrent, currentPage }) {

  if (currentPage !== "EndGame") {
 
  return (
    <div className="picture">
      <img className="img" src={imgCurrent[0]} alt={imgCurrent[1]} />

      <p className="attribute">
        Photo by{" "} 
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${imgCurrent[2]}?utm_source=badventuretime&utm_medium=referral`}
        > 
          {imgCurrent[2]}
        </a>  on <a href="https://unsplash.com/?utm_source=badventuretime&utm_medium=referral">Unsplash </a>

      </p>
    </div>
  );
}
else {
  return (
    <div className="picture">
      <img className="img animate__animated animate__headShake" src={imgCurrent[0]} alt={imgCurrent[1]} />

      <p className="attribute">
        Image by{" "}
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${imgCurrent[2]}`}
        >
          {imgCurrent[2]}
        </a>
      </p>
    </div>
  );
}
}

export default Picture;
