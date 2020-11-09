import React, { useState } from 'react';

import Driver from './Driver.jsx';

const DriverYear = ({ driver }) => {
    return (
      <div className="DriverContainer">
        <table id="driverTable">
          <thead>
            <tr>
              <th className="date">Date</th>
              <th className="round">Round</th>
              <th className="raceName">Race Name</th>
              <th className="circuit">Circuit</th>
              <th className="position">Position</th>
              <th className="points">Points</th>
            </tr>
          </thead>
          <tbody>
            {driver.map((d, idx) => (
              <Driver key={idx} d={d} />
              ))}
          </tbody>
        </table>
      </div>
    )
};

export default DriverYear;