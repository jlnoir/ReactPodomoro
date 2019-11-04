import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*React.createContext({
  working: true
});*/

class App extends React.Component {
  render() {
    return <PodomoroTimer />;
  }
}

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
        <Timer
          counterTimeTimer={this.state.counterTimeTimer}
          buttonStateTimer={this.state.buttonStateTimer}
          handleClickTimer={this.handleClickTimer}
        />
      </div>
    );
  }
}

class CycleCounter extends React.Component {
  render() {
    let counterCycle = Math.floor(this.props.counterTimeCycle / 1500);

    return (
      <Fragment>
        <p>Cycle : {counterCycle}</p>
        <button onClick={this.props.handleClickCyle}> Reset </button>
      </Fragment>
    );
  }
}

class Timer extends React.Component {
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
        console.log(this.props.counterTimeTimer);
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
