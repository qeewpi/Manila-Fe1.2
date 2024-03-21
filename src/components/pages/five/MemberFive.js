import React from 'react'

// importing the useState hook
import { useState } from "react";
import "./statestyles.css"

function MemberFive() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <p>Member #5 SN: SN</p>

    </div>
  )
}

export default MemberFive