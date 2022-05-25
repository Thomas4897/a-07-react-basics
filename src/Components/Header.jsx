import React, { Component } from "react";

//! if you want the actual name of the weekday you can do this:
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//! Determines the correct nth of given number
const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
//! new Date() generates the current date
const getCurrentDate = new Date();
//! toDateString() converts new Date into a readable String like 'Sat May 21 2022'
//! By Splitting this String I can make more targeted changes to the individual elements as needed
const currentDateArr = getCurrentDate.toDateString().split(" ");
//! .getDay() gives you a number from 0 to 6 where Sunday is 0 and Saturday is 6
//! And by using this number as the key in 'weekday' I can get the Name of the day
const getDayOfTheWeek = weekday[getCurrentDate.getDay()];

//! Replacing the shorten day with full name
currentDateArr[0] = getDayOfTheWeek;
//! Replacing just the number date with the number plus it's 'nth' and ','
currentDateArr[2] = currentDateArr[2] + nth(currentDateArr[2]) + ",";

//! Joining back together the string with changes
const currentDateString = currentDateArr.join(" ");

export class Header extends Component {
  render() {
    return (
      <div className="Container">
        <div id="CurrentDate">{currentDateString}</div>
      </div>
    );
  }
}

export default Header;
