import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import onlineIcon from '../../icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <FiberManualRecordIcon/>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><CloseIcon/></a>
    </div>
  </div>
);

export default InfoBar;