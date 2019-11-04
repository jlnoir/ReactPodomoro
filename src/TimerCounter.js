import React, { Fragment } from "react";

class TimerCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesCounter: 0,
      secondsCounter: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.counterTimeTimer !== prevProps.counterTimeTimer) {
      // TODO:: Améliorer
      if (prevProps.counterTimeTimer > this.props.counterTimeTimer + 2) {
        let minutesCounter = Math.floor(this.props.counterTimeTimer / 60);

        this.setState(() => ({
          minutesCounter: minutesCounter,
          secondsCounter: 0
        }));
        return;
      }

      if (
        this.state.secondsCounter !== 0 &&
        this.state.secondsCounter % 59 === 0
      ) {
        this.setState(state => ({
          minutesCounter: state.minutesCounter + 1,
          secondsCounter: 0
        }));
      } else {
        this.setState(state => ({ secondsCounter: state.secondsCounter + 1 }));
      }
    }
  }

  render() {
    let minCounter = this.state.minutesCounter;
    let secCounter = this.state.secondsCounter;
    if (minCounter <= 9) {
      minCounter = "0" + minCounter;
    }
    if (secCounter <= 9) {
      secCounter = "0" + secCounter;
    }

    let show_timer;
    show_timer = minCounter + ":" + secCounter;

    return (
      <Fragment>
        <p>Timer</p>
        {show_timer}
        <button onClick={this.props.handleClickTimer}>
          {this.props.buttonStateTimer}
        </button>
      </Fragment>
    );
  }
}

export default TimerCounter;
