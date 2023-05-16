import React, { useState } from 'react';

const Report = () => {
  const [reportData, setReportData] = useState([]);

  // Function to generate the report
  const generateReport = () => {
    // Perform necessary calculations or data retrieval to generate the report data
    const newData = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Bob Johnson', age: 35 },
      // ... additional report data
    ];

    // Set the generated report data in state
    setReportData(newData);
  };

  return (
    <div>
      <h1>Report Generator</h1>
      <button onClick={generateReport}>Generate Report</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;