import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const id = useRef(0);

  function handleSubmit() {
    id.current = setInterval(() => {
      setDiff(new Date(target) - new Date());
    }, 1000);
  }

  useEffect(() => {
    if (diff < 0) {
      clearInterval(id.current);
    }
  }, [diff]);

  return (
    <>
      <h1>Countdown Timmer App</h1>
      <div>
        <input
          type="datetime-local"
          id="datetime"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button id="submit" onClick={handleSubmit}>
          Start
        </button>
      </div>
      {diff}
      <div id="display">
        <ul>
          <li>
            <span id="days"></span>days
          </li>
          <li>
            <span id="hours"></span>hours
          </li>
          <li>
            <span id="minutes"></span>minutes
          </li>
          <li>
            <span id="seconds"></span>seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default Countdown;
