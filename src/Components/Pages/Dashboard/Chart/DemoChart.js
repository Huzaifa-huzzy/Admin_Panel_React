import React from 'react';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const config = {
    data: [
      { type: 'Category One', value: 27},
      { type: 'Category Two', value: 25 },
      { type: 'Category Three', value: 18 },
      { type: 'Category Four', value: 15 },
      { type: 'Category Five', value: 10 },
      { type: 'Others', value: 5 }
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'AntV\nCharts',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return <Pie {...config} />;
};

export default DemoPie;