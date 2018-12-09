import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountdownTimerRenderProps extends Component {
  constructor(props) {
    super(props);

    // This can lead to buggy code sometimes, don't do this normally
    this.state = {
      seconds: props.initialSeconds,
      timerFinished: false,
    };
  }

  timer = null;

  componentDidMount() {
    this.timer = setInterval(this.countdown, 1000);
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      this.cleanup();
      this.props.onTimerFinish();
    }
  }

  componentWillUnmount() {
    this.cleanup();
  }

  countdown = () => {
    this.setState(prevState => {
      return {
        seconds: prevState.seconds - 1,
      };
    });
  }

  cleanup = () => {
    clearInterval(this.timer);
  }

  render() {
    if (this.props.render) {
      return (
        <div>
          {this.props.render(this.state)}
        </div>
      );
    }

    return null;
  }
}

CountdownTimerRenderProps.propTypes = {
  initialSeconds: PropTypes.number.isRequired,
  onTimerFinish: PropTypes.func.isRequired,
};

export default CountdownTimerRenderProps;
