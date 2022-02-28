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

      {/* <DayListItem 
        key={props.days[0].id}
        name={props.days[0].name} 
        spots={props.days[0].spots} 
        selected={props.days[0].name === props.day}
        setDay={props.setDay}  
      />
      <DayListItem
        key={props.days[1].id} 
        name={props.days[1].name} 
        spots={props.days[1].spots} 
        selected={props.days[1].name === props.day}
        setDay={props.setDay}  
      />
      <DayListItem 
        key={props.days[2].id}
        name={props.days[2].name}
        spots={props.days[2].spots} 
        selected={props.days[2].name === props.day}
        setDay={props.setDay}  
      />   */}

    </ul>
  )
}


