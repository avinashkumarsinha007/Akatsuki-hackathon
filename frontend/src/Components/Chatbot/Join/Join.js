import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="mentor">
        <div>
          <img className="Johnimg" src="https://chatteris.org.hk/wp-content/uploads/2019/08/Untitled-1.jpg" alt="blank"/>
          <p>John-Exam</p>
        </div>
        <div>
          <img className="Johnimg" src="https://chatteris.org.hk/wp-content/uploads/2019/08/34544.jpg" alt="blank"/>
          <p>Robert-syllabus</p>
        </div>
        <div>
          <img className="Johnimg" src="https://chatteris.org.hk/wp-content/uploads/2019/08/1231232.jpg" alt="blank"/>
          <p>Heelan-Instructor</p>
        </div>
      </div>
      <div className="joinInnerContainer">
        <h1 className="heading">Help</h1>
        <div>
          <input placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Whom to chat" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Start</button>
        </Link>
      </div>
    </div>
  );
}