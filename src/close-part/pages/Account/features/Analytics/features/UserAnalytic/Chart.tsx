import React from "react";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

export interface DataInterface {
  data: ChartData<"line", (number | ScatterDataPoint | null)[], unknown>,
}
ChartJS.register(
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      ticks: {
        stepSize: 2,
        color: "#A8A8A8",
        beginAtZero: true,
      },
      grid: {
        color: "#F5F5F5"
      }
    },
    xAxes: {
      ticks: {
        color: "#A8A8A8",
        beginAtZero: true
      },
      grid: {
        display: false,
      }
    }
  },
  interaction: {
    intersect: false,
    padding: 15,
    caretPadding: 7,
  },
  tooltip: {
    boxPadding: 7,
    displayColors: true,
    boxWidth: 50,
    borderWidth: 50,
    cornerRadius: 40,
  }
};

export function Chart( { data }: DataInterface ) {
  return <Line options={options} data={data} />;
}
