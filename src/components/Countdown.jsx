import { useState } from "react";
import "./Countdown.css";

function Countdown() {
  const [target, setTarget] = useState(null);
  return (
    <>
      <h1>Countdown Timmer App</h1>
      <div>
        <input
          type="datetime-local"
          id="datetime"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button id="submit">Start</button>
      </div>
      <div id="display">
        <ul>
          <li>
            <span id="days">35</span>days
          </li>
          <li>
            <span id="hours">2</span>hours
          </li>
          <li>
            <span id="minutes">35</span>minutes
          </li>
          <li>
            <span id="seconds">45</span>seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default Countdown;
