import React, { useState } from "react";
import clothing from "./clothing";

// Gives us a full outfit
const getOutfit = (dressCode) => {
  // 1. filterOut all elements that dont belong to the dress code.
  const dressCodeFiltered = clothing.filter(
    (item) => item.dressCode === dressCode
  );

  // 2. Split them based on their type (top, bottom, or shoes.
  const topList = dressCodeFiltered.filter((item) => item.type === "top");
  const bottomList = dressCodeFiltered.filter((item) => item.type === "bottom");
  const shoesList = dressCodeFiltered.filter((item) => item.type === "shoes");

  // 3. Select one from each of those at random.

  return {
    top: topList[Math.floor(Math.random() * topList.length)],
    bottom: bottomList[Math.floor(Math.random() * bottomList.length)],
    shoes: shoesList[Math.floor(Math.random() * shoesList.length)],
  };
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const selectOutFitBasedOnWeekday = (weekday) => {
  switch (weekday) {
    case "Saturday":
      return getOutfit("casual");

    case "Sunday":
      return getOutfit("sport");

    default:
      return getOutfit("formal");
  }
};

export default function Item() {
  const d = new Date();
  let day = weekday[d.getDay()];

  const [selectedOutfit, setSelectedOutfit] = useState(
    selectOutFitBasedOnWeekday(day)
  );

  return (
    <div>
      <div id="ClothesOfTheDay">
        <div id="Top">
          <div id="Title">TOP</div>
          <div id="Description">{selectedOutfit.top.description}</div>
          <img id="TopImg" alt="" src={selectedOutfit.top.imageUrl} />
        </div>
        <div id="Bottom">
          <div id="Title">BOTTOM</div>
          <div id="Description">{selectedOutfit.bottom.description}</div>
          <img id="BottomImg" alt="" src={selectedOutfit.bottom.imageUrl} />
        </div>
        <div id="Shoes">
          <div id="Title">SHOES</div>
          <div id="Description">{selectedOutfit.shoes.description}</div>
          <img id="ShoesImg" alt="" src={selectedOutfit.shoes.imageUrl} />
        </div>
      </div>
      <button
        id="TryAgainButton"
        onClick={() => {
          setSelectedOutfit(selectOutFitBasedOnWeekday(day));
        }}
      >
        TRY AGAIN
      </button>
      <div>
        <button
          id="SetFormalButton"
          onClick={() => {
            setSelectedOutfit(getOutfit("formal"));
          }}
        >
          Formal
        </button>
        <button
          id="SetCasualButton"
          onClick={() => {
            setSelectedOutfit(getOutfit("casual"));
          }}
        >
          Casual
        </button>
        <button
          id="SetSportButton"
          onClick={() => {
            setSelectedOutfit(getOutfit("sport"));
          }}
        >
          Sport
        </button>
      </div>
    </div>
  );
}
