import { useEffect } from "react";
import { useState } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(new Date());
  console.log("Current Time painted");

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancel the interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the Current Time :{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default ClockTime;
