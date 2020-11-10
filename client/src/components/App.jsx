import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopBar from './TopBar.jsx';
import AllStandings from './AllStandings.jsx';
import DriverYear from './DriverYear.jsx';
import FullSchedule from './FullSchedule.jsx';

const App = () => {
  const [showDriver, setShowDriver] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
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

  const clickDriver = (first, last, team) => {
    let lowerFirst = first[0].toLowerCase();
    let lowerLast = last[0].toLowerCase();

    if (lowerLast === "verstappen") lowerLast = "max_verstappen";

    if (lowerLast === "magnussen") lowerLast = "kevin_magnussen";

    axios.get(`http://ergast.com/api/f1/${currYear.getFullYear()}/drivers/${lowerLast}/results`)
    .then(driverResp => {
      xml2js.parseStringPromise(driverResp.data)
        .then(driverResult => setDriverCurrYear(driverResult.MRData.RaceTable[0].Race))
    });

    setShowDriver(true);
    currDriver.push(first, last, team);
  }

  const handleShowAll = (showDriver, showSchedule) => {
    setShowDriver(showDriver);
    setShowSchedule(showSchedule);
    setDriverCurrYear([]);
    setCurrDriver([]);
  }

  const handleShowSchedule = (state) => {
    setShowSchedule(state);
    setDriverCurrYear([]);
    setCurrDriver([]);
  }

  const renderView = () => {
    if (showDriver) {
      if (!driverCurrYear.length) {
        return <h1>Loading Driver Data</h1>
      } else {
        return (
          <div>
            <h1>{`${currDriver[0]} ${currDriver[1]} (${currDriver[2]})`}</h1>
            <DriverYear driver={driverCurrYear} />
            <button className="showStandings" onClick={() => handleShowAll(false, false)} >Show Standings</button>
          </div>
        )
      }
    } else if (showSchedule) {
      return (
        <div>
          <h1>{`${currYear.getFullYear()} Schedule`}</h1>
            <FullSchedule />
        </div>
      )
    } else {
      return (
        <div>
          <h1>{`${currYear.getFullYear()} Current Standings`}</h1>
          <AllStandings standings={allStandings} clickDriver={clickDriver}/>
        </div>
      )
    }
  }

  if (!allStandings.length) {
    return(<h1>Loading Standings</h1>);
  }

  return (
    <div>
      <TopBar showAll={handleShowAll} showSchedule={handleShowSchedule} />
      {renderView()}
    </div>
  )
};

export default App;

