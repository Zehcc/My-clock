import React, { useState, useEffect} from 'react'
import {FaPlay as PlayBtn, FaPause as PauseBtn, FaStop as StopBtn} from 'react-icons/fa';
import {MdTimer as ChronoIcon} from 'react-icons/md';



const Chrono = () => {

  const [chrono, setChrono] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    let interval = null;
    if (state) {
      interval = setInterval(() => {
        setChrono((chrono) => chrono + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state]);

  return (
    <>
      <ChronoIcon size={80} color ="orange"/>
      <div className='chronoTimerContainer'>
        <>
          <span>{("0" + Math.floor((chrono / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((chrono / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((chrono / 10) % 100)).slice(-2)}</span>
        </>
      </div>
      {!state && chrono > 0 && (
        <>
          <PlayBtn  size = {25} color="orange" onClick={() => setState(true)}/>
          <StopBtn size = {25} color="orange" onClick={() => setChrono(0)}/>
        </>
      )}
      {!state && chrono === 0 && (
        <PlayBtn size = {25} color="orange" onClick={() => setState(true)}/>
      )}
      {state && <PauseBtn size = {25} color="orange" onClick={() => setState(false)}/>}
    </>
  )
}

export default Chrono