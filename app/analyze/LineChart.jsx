/* eslint-disable */
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Title);

const LineChart = ({ data }) => {
  // Calculate running average of time per question (in ms)
  const runningAverage = [];
  let totalTime = 0;
  data.forEach((item, index) => {
    totalTime += item.takenTime; // takenTime assumed to be in milliseconds
    runningAverage.push(Math.round(totalTime / (index + 1)));
  });

  // Chart.js data configuration
  const chartData = {
    labels: data.map(() => ""), // X-axis labels (e.g., dates) - customize as needed
    datasets: [
      {
        label: "Time per Question (ms)",
        // Round each takenTime value to no decimals
        data: data.map((item) => Math.round(item.takenTime)),
        pointRadius: 2,
        pointBackgroundColor: "#139a34",
        borderWidth: 0, // Points only, no connecting line
        showLine: false, // Only show points
      },
      {
        label: "Running Average",
        data: runningAverage,
        borderColor: "#122454",
        backgroundColor: "rgba(255, 255, 0, 0.1)", // Optional fill
        tension: 0.5, // Smooth curve for the line
        fill: false,
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "nearest",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Time per Question (ms)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
