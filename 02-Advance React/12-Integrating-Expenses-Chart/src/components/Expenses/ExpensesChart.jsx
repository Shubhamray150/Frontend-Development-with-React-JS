import React from "react";
import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
  return (
    <div>
      <Chart ChartExpenses={props.chartData} />
    </div>
  );
};

export default ExpensesChart;
