import { Column } from '@ant-design/plots';
import React, { useRef } from 'react';

const data = [
    { type: 'Category One', value: 27},
    { type: 'Category Two', value: 25 },
    { type: 'Category Three', value: 18 },
    { type: 'Category Four', value: 15 },
    { type: 'Category Five', value: 10 },
    { type: 'Others', value: 5 },
];

const BarChart = () => {
  const chartRef = useRef(null);

  const medal = (datum, ranking) => {
    if (ranking > 2) return datum;
    const { chart } = chartRef.current;
    const { document } = chart.getContext().canvas;
    const group = document?.createElement('g', {});

    const size = ranking === 0 ? 20 : 15;
    const icon = document.createElement('image', {
      style: {
        src: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1NiMRKb2sfMAAAAAAAAAAAAADmJ7AQ/original',
        width: size,
        height: size,
        anchor: '0.5 0.5',
      },
    });
    const text = ['冠军🏆', '亚军🥈', '季军🥉'][ranking];
    const label = document.createElement('text', {
      style: {
        text,
        fill: 'gray',
        textAlign: 'center',
        transform: `translate(0, 25)`,
      },
    });

    group.appendChild(icon);
    group.appendChild(label);
    return group;
  };

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    colorField: 'type',
    axis: {
      x: {
        size: 40,
        labelFormatter: (datum, index) => medal(datum, index),
      },
    },
    onReady: (plot) => (chartRef.current = plot),
  };

  return <Column {...config} />;
};

export default BarChart;
