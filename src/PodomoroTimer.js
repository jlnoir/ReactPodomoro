import React from "react";
import TimerCounter from "./TimerCounter";
import CycleCounter from "./CycleCounter";

class PodomoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterTimeTimer: new Date(0),
      buttonStateTimer: "start",
      intervalIdTimer: 0
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
    this.handleClickCycle = this.handleClickCycle.bind(this);
  }

  handleClickTimer() {
    if (this.state.buttonStateTimer !== "stop") {
      this.setState({
        buttonStateTimer: "stop",
        intervalIdTimer: this.setTimeTimer()
      });
    } else {
      this.setState({ buttonStateTimer: "start" });
      this.resetTimeTimer();
    }
  }

  handleClickCycle() {
    let counterStartNew =
      Math.floor(this.state.counterTimeTimer.getMinutes() / 25) * 25;
    this.resetTimeTimer();
    this.setState({ counterTimeTimer: new Date(counterStartNew) });
  }

  setTimeTimer() {
    return setInterval(() => {
      this.setState(state => ({
        counterTimeTimer: new Date(state.counterTimeTimer.getTime() + 1000)
      }));
    }, 1000);
  }

  resetTimeTimer() {
    // Function js native
    clearInterval(this.state.intervalIdTimer);
    this.setState({ intervalIdTimer: 0 });
  }

  render() {
    return (
      <div>
        <CycleCounter
          counterTimeCycle={this.state.counterTimeTimer}
          handleClickCyle={this.handleClickCycle}
        />
        <TimerCounter
          counterTimeTimer={this.state.counterTimeTimer}
          buttonStateTimer={this.state.buttonStateTimer}
          handleClickTimer={this.handleClickTimer}
        />
      </div>
    );
  }
}

export default PodomoroTimer;
