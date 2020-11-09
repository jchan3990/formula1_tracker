import React, { useState } from 'react';

const Driver = ({ d }) => {
  return (
    <tr>
      <td className="date">{d.Date[0]}</td>
      <td className="round">{d.$.round}</td>
      <td className="raceName">{d.RaceName[0]}</td>
      <td className="circuit">{d.Circuit[0].CircuitName[0]}</td>
      <td className="position">{d.ResultsList[0].Result[0].$.position}</td>
      <td className="points">{d.ResultsList[0].Result[0].$.points}</td>
    </tr>
  )
};

export default Driver;