import React from 'react'

// importing the useState hook and useEffect
import { useState, useEffect } from "react";

import "./effectstyles.css"

function Effect() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <p>Allen Kyle D. Sabilala SN: 2021104218</p>

    </div>
  )
}

export default Effect