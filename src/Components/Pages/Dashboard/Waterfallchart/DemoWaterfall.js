import { Waterfall } from '@ant-design/plots';
import React from 'react';

const DemoWaterfall = () => {
  // Updated data based on the provided categories
  const data = [
    { type: 'Category One', value: 27 },
    { type: 'Category Two', value: 25 },
    { type: 'Category Three', value: 18 },
    { type: 'Category Four', value: 15 },
    { type: 'Category Five', value: 10 },
    { type: 'Others', value: 5 }
  ];

  const config = {
    data,
    xField: 'type',  // Mapping to 'type' from the new data
    yField: 'value', // Mapping to 'value' from the new data
    linkStyle: {
      lineDash: [4, 2],
      stroke: '#ccc',
    },
    style: {
      maxWidth: 60,
      stroke: '#ccc',
      fill: (d) => {
        // Color based on the value
        return d.value > 0 ? '#F56E53' : '#3CC27F';
      },
    },
    label: [
      {
        text: 'value',
        formatter: '~s',
        position: 'inside',
        fontSize: 10,
      },
      {
        text: (arg) => {
          return `${arg.y1 / 10000000} 亿`;
        },
        position: (d) => (d.value > 0 ? 'top' : 'bottom'),
        textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),
        fontSize: 10,
        dy: (d) => (d.value > 0 ? -4 : 4),
      },
    ],
  };

  return <Waterfall {...config} />;
};

export default DemoWaterfall;
