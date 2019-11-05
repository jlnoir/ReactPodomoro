import React, { Fragment } from "react";

class CycleCounter extends React.Component {
  render() {
    let counterCycle = Math.floor(
      this.props.counterTimeCycle.getMinutes() / 25
    );

    return (
      <Fragment>
        <p>Cycle : {counterCycle}</p>
        <button onClick={this.props.handleClickCyle}> Reset </button>
      </Fragment>
    );
  }
}

export default CycleCounter;
