import React from 'react';

const ScheduleItem = ({ race, idx }) => {
  return (
    <tr>
      <td className="round">{idx + 1}</td>
      <td className="date">{race.Date[0]}</td>
      <td className="raceName">{race.RaceName[0]}</td>
      <td className="circuit">{race.Circuit[0].CircuitName[0]}</td>
    </tr>
  )
};

export default ScheduleItem;