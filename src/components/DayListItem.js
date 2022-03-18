import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  console.log(props);
  
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  const formatSpots = function(spotCount) {
    if (spotCount === 0) {
      return "no spots remaining"
    } else if (spotCount === 1) {
      return "1 spot remaining"
    } else {
      return `${spotCount} spots remaining`
    }
  }
  
  return (
    // <li> represents the entire day item
    <li
    className={dayClass}
    onClick={() => props.setDay(props.name)}
    selected={props.selected} >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)} </h3>
    </li>
  );
}



