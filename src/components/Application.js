// Since <Application> and <DayList> will both need to know the value of day, we should track day in <Application> (the closest common ancestor of both components).
// We stored the day state in the <Application> component.
// The main reason we are not storing the day state in the <DayList> is that we need to use that state with other components. By storing it in <Application>, we can 
// easily pass day down via props to any component that needs it.
// When we call the setDay action, it changes the day state. When we change the state, the <Application> renders and passes the new day to the <DayList>. The <DayList> 
// renders and passes props to the <DayListItem> children causing the updates to the selected visual state.

import React, { useState } from "react";
import DayList from "components/DayList.js";
import "components/Application.scss";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default function Application(props) {

  const [day, setDay] = useState("Monday");      // Adding state to Application.js
  console.log("The current state is (day): ", day);      // console.log the state

  return (
    <main className="layout">

      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}

        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            value={day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>

      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>

    </main>
  );
}



