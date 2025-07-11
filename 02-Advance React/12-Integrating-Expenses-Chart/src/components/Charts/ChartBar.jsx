import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let val = "0%";
  if (props.value > 0) {
    val = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(val);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: val }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
