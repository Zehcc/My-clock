import React, { useState, useEffect } from 'react'
import {AiOutlineClockCircle as ClockIcon} from 'react-icons/ai';

const Clock = () => {
    const [clock, setClock] = useState();
    
    useEffect(() => {
        setInterval(() => {
            const date  = new Date();
            setClock(date.toLocaleTimeString());
        },1000)
    },[])

return (
    <div className='clockContainer'>
        <ClockIcon size={70} color ="orange"/>
        <div className='clockText'>{clock}</div>
    </div>

  )
}

export default Clock