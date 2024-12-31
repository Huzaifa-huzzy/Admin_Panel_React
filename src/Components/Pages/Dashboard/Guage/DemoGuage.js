import { Gauge } from '@ant-design/plots';
import React from 'react';

const DemoGauge = () => {
  const config = {
    width: 460, // Reduced width
    height: 460, // Reduced height
    autoFit: true,
    data: {
      target: 159,
      total: 400,
      name: 'score',
      thresholds: [100, 200, 400],
    },
    legend: false,
    scale: {
      color: {
        range: ['#F4664A', '#FAAD14', 'green'],
      },
    },
    style: {
      textContent: (target, total) => `得分：${target}\n占比：${(target / total) * 100}%`,
    },
  };

  return <Gauge {...config} />;
};

export default DemoGauge;
