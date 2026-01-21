import React, { useState, useEffect } from 'react'
import "./nav.scss"

const Nav = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const formatNow = (date) => {
    const weekday = date.toLocaleString('en-US', { weekday: 'short' })
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    return `${weekday} ${day} ${month} ${hours}:${minutes} ${ampm}`
  }

  return (
    <div id='nav'>
      <div id="left">
         <img className='apple' src="Apple_logo_white.svg.png" alt="" />
           <p >Sarthak Agrawal</p>
          <p>File</p>
          <p>Window</p>
          <p>Terminal</p> 
      </div>
      <div id="right">
        <img className='wifi' src="wireless-xxl.png" alt="" />
        <div className="clock" aria-live="polite">{formatNow(now)}</div>
      </div>
    </div>
  )
}

export default Nav