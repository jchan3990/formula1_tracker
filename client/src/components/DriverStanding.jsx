import React, { useState, useEffect } from 'react';

const DriverStanding = ({ driver, onDriverClick }) => {
  const clickName = () => {
    onDriverClick(driver[0].Driver[0].GivenName, driver[0].Driver[0].FamilyName, driver[0].Constructor[0].Name[0]);
  }

  return (
      <tr>
        <td className="position"><span>{driver[0].$.position}</span></td>
        <td className="driver"><span id="driverName" onClick={clickName}>{`${driver[0].Driver[0].GivenName} ${driver[0].Driver[0].FamilyName}`}</span></td>
        <td className="points"><span>{driver[0].$.points}</span></td>
      </tr>
  )
};

export default DriverStanding;