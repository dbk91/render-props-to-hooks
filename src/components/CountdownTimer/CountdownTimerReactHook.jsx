import React from 'react';

import useCountdownTimer from './useCountdownTimer';

const CountdownTimerReactHook = () => {
  const seconds = useCountdownTimer(15, () => alert('Way cool!'));

  if (seconds === 0) {
    return <p>Done!</p>;
  }

  return (
    <p>
      Counting down in style <span role="img" aria-labelledby="style">😎</span>... {seconds}
    </p>
  );
};

export default CountdownTimerReactHook;
