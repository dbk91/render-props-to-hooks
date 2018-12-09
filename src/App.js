import React, { Component } from 'react';

import CountdownTimerRenderProps from './components/CountdownTimer/RenderProps';
import CountdownTimerReactHook from './components/CountdownTimer/CountdownTimerReactHook.1';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CountdownTimerRenderProps
            initialSeconds={10}
            onTimerFinish={() => alert('The timer has finished!')}
            render={({ seconds }) => {
              if (seconds === 0) {
                return <p>Done!</p>;
              }

              return <p>Counting down... {seconds}</p>;
            }}
          />
          <CountdownTimerReactHook />
        </header>
      </div>
    );
  }
}

export default App;
