import React, { Component } from "react";
import DaysContainerStyled from "./styles/DaysContainerStyled";
import Day from "./Day";

let weekdays = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
let fullDate = new Date();
let dayNum = fullDate.getDay(); // 0 (sun) - 6 (sat)

class DaysContainer extends Component {
  render() {
    return (
      <DaysContainerStyled>
        {this.props.allData.length &&
          this.props.allData.map((data, i) => (
            <Day key={data.date} data={data} name={weekdays[(dayNum + i) % 7]} />
          ))}
      </DaysContainerStyled>
    );
  }
}

export default DaysContainer;
