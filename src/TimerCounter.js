import React, { Fragment } from "react";

class TimerCounter extends React.Component {
  humanMinutesTimer(counterTimer) {
    return Math.floor(counterTimer / 60);
  }

  humanSecondsTimer(counterTimer) {
    if (counterTimer < 59) {
      return counterTimer;
    } else {
      let minutesHuman = Math.floor(counterTimer / 60);
      let secondsHuman = counterTimer - minutesHuman * 60;
      return secondsHuman;
    }
  }

  render() {
    //Todo:: Améliorer
    let minCounter = this.humanMinutesTimer(this.props.counterTimeTimer);
    let secCounter = this.humanSecondsTimer(this.props.counterTimeTimer);
    if (minCounter <= 9) {
      minCounter = "0" + minCounter;
    }
    if (secCounter <= 9) {
      secCounter = "0" + secCounter;
    }

    let show_timer;
    if (this.props.counterTimeTimer > 0) {
      show_timer = minCounter + ":" + secCounter;
    } else {
      show_timer = "00:00";
    }

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
