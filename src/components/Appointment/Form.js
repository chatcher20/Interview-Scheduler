import React, { useState } from 'react';
// The useState hook gives us back an array containing two variables: the currently stored value, and a function to set a new value.
import InterviewerList from "../InterviewerList.js";
import Button from "../Button.js";


export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            
          />
        </form>
        <InterviewerList
        /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger {/* your code goes here */}>Cancel</Button>
          <Button confirm {/* your code goes here */}>Save</Button>
        </section>
      </section>
    </main>
  )

}








// The Form component should track the following state:

// student:String
// interviewer:Number
// The Form component should have the following actions:

// setStudent:Function
// setInterviewer:Function
// The Form component should take the following props:

// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function