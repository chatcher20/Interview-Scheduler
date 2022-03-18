export function getAppointmentsForDay(state, day) {

  const filteredDays = state.days.find(x => x.name === day)

  const emptyArray = [];

  if (filteredDays) {
    const y = filteredDays.appointments.map(id => state.appointments[id]);
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


}

export function getInterviewersForDay(state, interviewer) {



  const filteredDays = state.days.find(x => x.name === interviewer)


  const emptyArray = [];

  if (filteredDays) {
    const y = filteredDays.interviewers.map(id => state.interviewers[id]);
    return y;
  } else {
    return emptyArray;
  }

}
