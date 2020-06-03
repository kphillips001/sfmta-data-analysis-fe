import React from 'react';
import { Line } from 'react-chartjs-2'

export const LineChart = () => {
  return (
    <div className="line-chart">
    <Line 
      data={{
        datasets: [
          {
            data: [70, 30, 20, 10, 85],
            backgroundColor: ["#FBD03F", "#232323"],
            borderColor: '#00FFFF',
            fill: false
          },
          {
            data: [50, 10, 90, 5, 65],
            backgroundColor: ["#FBD03F", "#232323"],
            borderColor: '#FF4500',
            fill: false,
          }
        ]
      }}
    />
    </div>
  )
};