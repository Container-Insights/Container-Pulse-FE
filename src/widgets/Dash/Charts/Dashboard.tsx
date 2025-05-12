"use client";

import React from "react";
import LineChart from "./LineChart";

const Dashboard = () => {
  const chartData = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        label: "컨테이너 사용량",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>컨테이너 모니터링 대시보드</h2>
      <div className="chart-container">
        <LineChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
