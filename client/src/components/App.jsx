import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js'

import AllStandings from './AllStandings.jsx';
import DriverYear from './DriverYear.jsx';

const App = () => {
  const [showDriver, setShowDriver] = useState(false);
  const [allStandings, setAllStandings] = useState([]);
  const [driverCurrYear, setDriverCurrYear] = useState([]);
  const [currDriver, setCurrDriver] = useState([]);

  const currYear = new Date();

  useEffect(() => {
    axios.get(`http://ergast.com/api/f1/current/driverStandings`)
      .then(standingsResp => {
        xml2js.parseStringPromise(standingsResp.data)
          .then(standingsResult => setAllStandings(standingsResult.MRData.StandingsTable[0].StandingsList[0].DriverStanding))
      })
  }, [])

  const clickDriver = (last, first) => {
    axios.get(`http://ergast.com/api/f1/${currYear.getFullYear()}/drivers/${last}/results`)
    .then(driverResp => {
      xml2js.parseStringPromise(driverResp.data)
        .then(driverResult => setDriverCurrYear(driverResult.MRData.RaceTable[0].Race))
    });

    setShowDriver(true);
    currDriver.push(first, last);
  }

  if (!allStandings.length) {
    return(<h1>Loading Standings</h1>);
  }

  if (!showDriver) {
    return (
      <div>
        <h1>Current Standings</h1>
        <AllStandings standings={allStandings} clickDriver={clickDriver}/>
      </div>
    )
  } else {
    if (!driverCurrYear.length) {
      return <h1>Loading Driver Data</h1>
    } else {
      return (
        <div>
          <h1>{`${currDriver[0]} ${currDriver[1]}`}</h1>
          <DriverYear driver={driverCurrYear} />
        </div>
      )
    }
  }
};

export default App;
