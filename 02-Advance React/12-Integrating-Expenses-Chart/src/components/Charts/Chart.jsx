import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const priceOnlyArray = props.ChartExpenses.map((data) => {
    return data.price;
  });
  const max = Math.max(...priceOnlyArray);

  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let data of props.ChartExpenses) {
    chartData[data.date.getMonth()].expenseValue += data.price;
  }

  return (
    <div className="chart">
      {chartData.map((data, index) => {
        return (
          <ChartBar
            key={data.expenseMonth}
            label={data.expenseMonth}
            value={data.expenseValue}
            maxValue={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
