import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import './Stats.css'; // Custom CSS file

const data = [
  { title: 'Revenue', value: '$13,456', diff: 34 },
  { title: 'Profit', value: '$4,145', diff: -13 },
  { title: 'Coupons usage', value: '745', diff: 18 },
  { title: 'Customer Acquisition', value: '1,250', diff: 12 }, // New data
  { title: 'Website Visits', value: '50,123', diff: 5 },        // New data
  { title: 'Product Sales', value: '3,678', diff: -8 },         // New data
];

export function StatsGridIcons() {
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <div className="stat-card" key={stat.title}>
        <div className="stat-header">
          <div>
            <p className="stat-title">{stat.title}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
          <div
            className={`stat-icon ${stat.diff > 0 ? 'positive' : 'negative'}`}
          >
            <DiffIcon size={28} stroke={1.5} />
          </div>
        </div>
        <p className={`stat-diff ${stat.diff > 0 ? 'increase' : 'decrease'}`}>
          <span className={stat.diff > 0 ? 'positive' : 'negative'}>
            {stat.diff}%
          </span>{' '}
          {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
        </p>
      </div>
    );
  });

  return <div className="stats-grid">{stats}</div>;
}
