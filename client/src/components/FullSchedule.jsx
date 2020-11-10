import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

import ScheduleItem from './ScheduleItem.jsx'

const FullSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('http://ergast.com/api/f1/current')
      .then(scheduleResp =>
        xml2js.parseStringPromise(scheduleResp.data)
          .then(scheduleResult => setSchedule(scheduleResult.MRData.RaceTable[0].Race))
      )
  }, [])

  return (
    <div className="scheduleContainer">
      <table id="scheduleTable">
        <thead>
          <tr>
            <th className="round">Round</th>
            <th className="date">Date</th>
            <th className="raceName">Race Name</th>
            <th className="circuit">Circuit</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((race, idx) => (
            <ScheduleItem key={idx} idx={idx} race={race} />
          ))}
        </tbody>
      </table>
    </div>

  )
};

export default FullSchedule;