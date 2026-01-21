import React from 'react'
import {Rnd} from 'react-rnd'
import "./window.scss"
import { Link } from 'react-router-dom';
const Macwindow = ({children}) => {
  return (
    <Rnd default={{
        width:"700px",
        height:"500px",
        x:390,
        y:100
    }}>
        <div id="win">
            <div id="naw">
                <Link to="/">
                <div id="red">
                  <img src="/close.png" alt="" />
 
                </div>
                </Link>
                <div id="yellow"></div>
                <div id="green"></div>
                <p>sarthakagrawal - zsh</p>
            </div>
            <div id="mainw">
                <h1>{children}</h1>
            </div>

        </div>
    </Rnd>
  )
}

export default Macwindow
