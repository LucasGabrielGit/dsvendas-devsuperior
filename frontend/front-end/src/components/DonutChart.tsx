import React from "react";
import Chart from "react-apexcharts";
export const DonutCharts = () => {
  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <div>
      <Chart
        options={{ ...options, labels: mockData.labels }}
        series={mockData.series}
        type={"donut"}
        width="400"
      />
    </div>
  );
};
