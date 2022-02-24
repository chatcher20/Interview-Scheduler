import React from 'react';
// Since the Header component is a child of our Appointment component, its stories should be chained to the Appointment stories.

export default function Header(props) {

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">
        {props.time}
      </h4>
      <hr className="appointment__separator" />
    </header>
  )




}