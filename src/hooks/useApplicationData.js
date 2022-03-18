import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      console.log(days);
      console.log(appointments);
      console.log(interviewers);
      setState((prev) => ({
        ...prev,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      }));
    });
  }, []);

  
  // Note: The appointment id is known when an interview is confirmed or canceled by the server.
  const availableSpots = function (today, day, increment) {
    let spot = day.spots;

    // If an interview is booked (aka a new appointment therefore appointment id is created), the available spots will decrease
    if (today === day.name && !increment && spot !== 0) {
      return (spot -= 1);
    }
    // If an interview is deleted, the available spots will increase/increment by 1
    else if (today === day.name && increment) {
      return (spot += 1);
    }
    // If an interview is edited (but not created or deleted therefore no change in spots available)
    else {
      return spot;
    }
  };

  // The bookInterview action makes an HTTP request and updates the local state.
  const bookInterview = function (id, interview, create = true) {
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = state.days.map((day) => {
      return { ...day, spots: create ? availableSpots(state.day, day, false) : day.spots };
    });

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState({ ...state, appointments, days });
      });
  };

  // The cancelInterview action makes an HTTP request and updates the local state.
  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = state.days.map((day) => {
      return { ...day, spots: availableSpots(state.day, day, true) };
    });

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      setState({ ...state, appointments, days });
    });
  };

  return { state, setDay, cancelInterview, bookInterview };
}
