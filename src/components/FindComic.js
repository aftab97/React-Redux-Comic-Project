import React from "react";

export const FindComic = ({ error, isLoading, comics }) => {
  const handleHover = () => {
    let comicHover = document.querySelector(".comic-hover");
    comicHover.style.display = "block";
  };

  const handleMouseLeave = () => {
    let comicHover = document.querySelector(".comic-hover");
    comicHover.style.display = "none";
  };

  const comic = (
    <div>
      <p>Hover over the image so see informations regarding this comic</p>
      <a href={`https://xkcd.com/${comics.num}/`} target="_blank">
        <img
          src={comics.img}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      </a>
      <div className="comic-hover">
        <h2>{comics.title}</h2>
        <p>{comics.alt}</p>
      </div>
    </div>
  );

  return (
    <div>
      {error ? (
        <>ERROR LOADING DATA FROM API</>
      ) : (
        <>{!isLoading ? <>{comic}</> : <>loading...</>}</>
      )}
    </div>
  );
};
