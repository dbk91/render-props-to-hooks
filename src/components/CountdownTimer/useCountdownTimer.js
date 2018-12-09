import { useState, useEffect } from 'react';

const useCountdownTimer = (initialSeconds, onTimerFinish) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timerId);
      onTimerFinish();
    }

    return () => {
      clearInterval(timerId);
    };
  });

  return seconds;
};

export default useCountdownTimer;
