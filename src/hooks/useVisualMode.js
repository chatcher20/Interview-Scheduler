import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace) {

    setHistory((prev => {
      if (replace) {
        history.pop();
        history.push(newMode);
      } else {
        history.push(newMode);
      }
      return history;
    }));
    
    setMode(newMode);

  }

  const back = function () {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back }
}
