import React from 'react';
import ReactECharts from 'echarts-for-react';

const MyEChart = () => {
  // Box plot data
  const boxplotData = {
    pH: [6.83, 7.08, 7.16, 7.25, 7.48],
    Temperature: [20.3, 21.2, 22.2, 22.9, 23.6],
    Turbidity: [3.1, 3.8, 4.2, 4.5, 5.1],
    DissolvedOxygen: [6.0, 7.8, 8.4, 9.1, 9.9],
    Conductivity: [316, 333, 344, 355, 370]
  };

  // Line graph data
  const lineData = {
    SampleID: ['mean', 'std'],
    pH: [7.161140, 0.107531],
    Temperature: [22.054400, 0.903123],
    Turbidity: [4.169400, 0.397492],
    DissolvedOxygen: [8.382200, 0.822396],
    Conductivity: [344.362000, 13.038672]
  };

  // Box Plot Configuration
  const boxplotOption = {
    title: {
      text: 'Statistical Data'
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['pH', 'Temperature', 'Turbidity', 'Dissolved Oxygen', 'Conductivity']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'boxplot',
        type: 'boxplot',
        data: [
          boxplotData.pH,
          boxplotData.Temperature,
          boxplotData.Turbidity,
          boxplotData.DissolvedOxygen,
          boxplotData.Conductivity
        ]
      }
    ]
  };

  // Line graph configuration
  const lineOption = {
    title: {
      text: 'Mean and Standard Deviation'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Mean', 'Standard Deviation']
    },
    xAxis: {
      type: 'category',
      data: lineData.SampleID
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'pH',
        type: 'line',
        data: lineData.pH
      },
      {
        name: 'Temperature',
        type: 'line',
        data: lineData.Temperature
      },
      {
        name: 'Turbidity',
        type: 'line',
        data: lineData.Turbidity
      },
      {
        name: 'Dissolved Oxygen',
        type: 'line',
        data: lineData.DissolvedOxygen
      },
      {
        name: 'Conductivity',
        type: 'line',
        data: lineData.Conductivity
      }
    ]
  };

  return (
    <div>
      <ReactECharts option={boxplotOption} style={{ height: '400px', width: '100%' }} />
      <ReactECharts option={lineOption} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default MyEChart;
