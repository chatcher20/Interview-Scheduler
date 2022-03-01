export function getAppointmentsForDay(state, day) {

  //... returns an array of appointments for that day

  const filteredDays = state.days.find(x => x.name === day)
  // console.log("filteredDays", filteredDays)

  const emptyArray = [];

  if (filteredDays) {
    const y = filteredDays.appointments.map(id => state.appointments[id]);
    // console.log("y = ", y);
    return y;
  } else {
    return emptyArray;
  }

}

export function getInterview(state, interview) {

  console.log("state = ", state);
  console.log("interview (before) = ", interview);

  if (state.interviewers && interview) {
    interview = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
    console.log("interview (after) = ", interview);
    return interview;
  } else {
    return null;
  }

  // We found that we need to transform an interview object 
  // with an id representing the interviewer to an object 
  // containing a nested object.

}

export function getInterviewersForDay(state, interviewer) {

  //... returns an array of interviewers for that day

  const filteredDays = state.days.find(x => x.name === interviewer)
  // console.log("filteredDays", filteredDays)

  const emptyArray = [];

  if (filteredDays) {
    const y = filteredDays.interviewers.map(id => state.interviewers[id]);
    // console.log("y = ", y);
    return y;
  } else {
    return emptyArray;
  }

}
