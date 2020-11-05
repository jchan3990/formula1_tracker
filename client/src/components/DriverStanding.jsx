import React, { useState, useEffect } from 'react';

const DriverStanding = ({ driver }) => {
  return (
    <div>
    {console.log(driver)}
      <span>{`${driver[0].$.position} ${driver[0].Driver[0].GivenName} ${driver[0].Driver[0].FamilyName}`}</span>
      <span>{` ${driver[0].$.points}`}</span>
    </div>
  )
};

export default DriverStanding;