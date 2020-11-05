import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js'

import AllStandings from './AllStandings.jsx';

const App = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios.get('http://ergast.com/api/f1/2020/driverStandings')
      .then(response => {
        xml2js.parseStringPromise(response.data)
          .then(result => setStandings(result.MRData.StandingsTable[0].StandingsList[0].DriverStanding))
      })
  }, [])


  return (
    <div>
      <AllStandings standings={standings} />
    </div>
  )
};

export default App;
