import React, { useState } from 'react';
import logo from '../../dist/f1-logo.png'

const TopBar = ({ showAll, showSchedule }) => {
  const handleShowAll = () => {
    showAll(false, false);
  }

  const handleShowSchedule = () => {
    showSchedule(true);
  }

  return (
    <div id="topBarContainer">
      <img id="topBarLogo" src={logo} alt="F1 Logo" />
      <span className="topStandingsBtn" onClick={handleShowAll} >Standings</span>
      <span className="topScheduleBtn" onClick={handleShowSchedule} >Full Schedule</span>
    </div>
  )
};

export default TopBar;