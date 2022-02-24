import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {

  const days = props.days.map(day =>
    <DayListItem
      key={props.id}
      name={props.name}
      spots={props.spots}
      selected={props.name === props.value}
      setDay={props.onChange}
    />
  );

  return (
    <ul>

      {days}

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

