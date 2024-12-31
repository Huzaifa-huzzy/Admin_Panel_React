import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons
import Sidebar from '../Sidebar/Sidebar';

const Accounts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Example data with 10 more entries
  const data = [
    { name: 'John Doe', company: 'ABC Corp', role: 'Developer', verified: true, status: 'Active' },
    { name: 'Jane Smith', company: 'XYZ Inc.', role: 'Designer', verified: false, status: 'Inactive' },
    { name: 'Michael Brown', company: 'Tech Solutions', role: 'Manager', verified: true, status: 'Active' },
    { name: 'Emily Clark', company: 'Innovate Ltd.', role: 'Marketing', verified: true, status: 'Inactive' },
    { name: 'David Harris', company: 'WebWorks', role: 'Support', verified: false, status: 'Active' },
    { name: 'Sarah Lee', company: 'NextGen Co.', role: 'Developer', verified: true, status: 'Inactive' },
    { name: 'James Williams', company: 'Skyline Tech', role: 'Designer', verified: true, status: 'Active' },
    { name: 'Laura Walker', company: 'Creative Solutions', role: 'Manager', verified: false, status: 'Inactive' },
    { name: 'Paul Adams', company: 'Digital Enterprises', role: 'Marketing', verified: true, status: 'Active' },
    { name: 'Nina Johnson', company: 'Quantum Innovations', role: 'Support', verified: false, status: 'Inactive' },
    { name: 'Mark Robinson', company: 'FutureTech', role: 'Developer', verified: true, status: 'Active' },
    { name: 'Sophia Moore', company: 'Global Ventures', role: 'Designer', verified: false, status: 'Inactive' },
    { name: 'Daniel Lee', company: 'Innovation Labs', role: 'Manager', verified: true, status: 'Active' },
    { name: 'Alice Kim', company: 'SkyTech Solutions', role: 'Marketing', verified: true, status: 'Inactive' },
    { name: 'Chris Evans', company: 'TechWorks', role: 'Support', verified: false, status: 'Active' },
    { name: 'Olivia White', company: 'Creative Minds', role: 'Developer', verified: true, status: 'Inactive' },
    { name: 'Lucas Harris', company: 'CyberTech', role: 'Designer', verified: true, status: 'Active' },
    { name: 'Isabella Young', company: 'Innovative Design', role: 'Manager', verified: false, status: 'Inactive' },
    { name: 'Ethan Green', company: 'NextEra Innovations', role: 'Marketing', verified: true, status: 'Active' },
    { name: 'Avery Scott', company: 'ProTech Solutions', role: 'Support', verified: false, status: 'Inactive' }
  ];

  // Column definition
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Company', accessor: 'company' },
      { Header: 'Role', accessor: 'role' },
      {
        Header: 'Verified',
        accessor: 'verified',
        Cell: ({ value }) => (
          <span style={{ fontSize: '20px' }}>
            {value ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}
          </span>
        )
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span
            style={{
              fontSize: '14px',
              padding: '4px 8px',
              borderRadius: '4px',
              color: value === 'Active' ? 'white' : 'white',
              backgroundColor: value === 'Active' ? 'green' : 'red'
            }}
          >
            {value}
          </span>
        )
      }
    ],
    []
  );

  // Filter data based on search query
  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Use react-table hook to manage table state
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: filteredData
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6" style={{ marginLeft: '256px' }}> {/* Adjust margin to account for sidebar width */}
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'Black' }}>Accounts</h1>

        {/* Search input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            style={{
              padding: '5px',
              width: '200px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              marginRight: '10px'
            }}
          />
        </div>

        {/* Table */}
        <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      backgroundColor: '#f4f4f4',
                      textAlign: 'left'
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: '1px solid #ddd',
                        textAlign: 'left'
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
