import React from 'react'

// importing the useState hook
import { useState } from "react";

import "./statestyles.css"

function States() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <p>Ashley Sybil R. Manalo SN: 2021105114</p>

    </div>
  )
}

export default States