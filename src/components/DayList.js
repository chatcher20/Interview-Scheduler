import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList({days, onChange, value}) {

  const daysList = days.map(day =>
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === value}
      setDay={onChange}
    />
  );

  return (
    <ul>
      {daysList}
    </ul>
  )
}


