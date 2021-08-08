import React, { useState, useEffect } from 'react';
import { Button, Popup } from "semantic-ui-react";
import Swal from 'sweetalert2';
import { timeConverter } from "../../../utils";
// import "./"

const Countdown = ({ timeOver, setTimeTaken }) => {
  const totalTime = 10800000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          title: `Your Time's Up`,
          icon: 'info',
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime)
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

  }, [timerTime]);

  return (
    <Button.Group size="massive" basic floated="right" className="button-group">
      <Popup
        content="Hours"
        trigger={<Button active>{hours}</Button>}
        position="bottom left"
      />
      <Popup
        content="Minutes"
        trigger={<Button active>{minutes}</Button>}
        position="bottom left"
      />
      <Popup
        content="Seconds"
        trigger={<Button active>{seconds}</Button>}
        position="bottom left"
      />
    </Button.Group>
  );
};

export default Countdown;
