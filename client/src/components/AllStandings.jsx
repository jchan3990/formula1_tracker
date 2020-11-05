import React, { useState, useEffect } from 'react';

import DriverStanding from './DriverStanding.jsx';

const AllStandings = ({ standings }) => {
  return (
    <div>
      {standings.map((driver, idx) => (
        <DriverStanding key={idx} driver={[driver]} />
      ))}
    </div>
  )
};

export default AllStandings;