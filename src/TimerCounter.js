import React, { Fragment } from "react";

class TimerCounter extends React.Component {
  render() {
    let minCounter = this.props.counterTimeTimer.getMinutes();
    let secCounter = this.props.counterTimeTimer.getSeconds();

    if (minCounter < 10) {
      minCounter = "0" + minCounter;
    }
    if (secCounter < 10) {
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
