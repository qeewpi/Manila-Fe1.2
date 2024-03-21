import React from 'react'

// importing the useState hook
import { useState } from "react";
import "./hookstyles.css"

function Hooks() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <p>Christian Henry Miguel E. Caruz SN: 2021101168</p>

    </div>
  )
}

export default Hooks