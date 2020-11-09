import React, { useState } from 'react';
import logo from '../../dist/f1-logo.png'

const TopBar = () => {
  return (
    <nav>
      <img id="topBarLogo" src={logo} alt="F1 Logo" />
      <span className="topBarBtns">Standings</span>
      <span className="TopBarBtns">Full Schedule</span>
    </nav>
  )
};

export default TopBar;