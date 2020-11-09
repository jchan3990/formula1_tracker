import React, { useState, useEffect } from 'react';

import DriverStanding from './DriverStanding.jsx';

const AllStandings = ({ standings, clickDriver }) => {

  const onDriverClick = (first, last, team) => {
    clickDriver(first, last, team);
  }

  return (
    <div className="standingsContainer">
      <table>
        <thead>
          <tr>
            <th className="position">Position</th>
            <th className="driver">Driver</th>
            <th className="points">Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((driver, idx) => (
            <DriverStanding key={idx} driver={[driver]} onDriverClick={onDriverClick} />
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default AllStandings;