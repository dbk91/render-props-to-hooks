import React from 'react';

import useCountdownTimer from './useCountdownTimer';

const initialSeconds = 10;

const CountdownTimerReactHook = () => {
  const seconds = useCountdownTimer(initialSeconds, () => alert('Way cool!'));

  if (seconds === 0) {
    return <p>Done!</p>;
  }

  return (
    <>
      <p>Counting down...</p>
      <progress value={seconds} max={initialSeconds}></progress>
    </>
  );
};

export default CountdownTimerReactHook;
