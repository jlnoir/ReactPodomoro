import React from "react";
import TimerCounter from "./TimerCounter";
import CycleCounter from "./CycleCounter";

class PodomoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterTimeTimer: 0,
      buttonStateTimer: "start",
      intervalIdTimer: 0
    };

    this.handleClickTimer = this.handleClickTimer.bind(this);
    this.handleClickCycle = this.handleClickCycle.bind(this);
  }

  handleClickTimer() {
    // Switch value start & stop
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
    let counterStartNew = Math.floor(this.state.counterTimeTimer / 1500) * 1500;
    this.resetTimeTimer();
    this.setState({
      counterTimeTimer: counterStartNew
    });
  }

  setTimeTimer() {
    return setInterval(() => {
      this.setState(state => ({
        counterTimeTimer: state.counterTimeTimer + 1
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
