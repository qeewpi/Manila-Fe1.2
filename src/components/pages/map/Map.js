import React from 'react'
import "./mapstyles.css"

// importing json data as employees
import employees from './data.json';


function Map() {
  // using the useState hook to create a state variable for user chosen color
  const [color, setColor] = useState("white");

  return (
    <div className="content" style={{ backgroundColor: color }}>

      <p>Miguel T. Soniel SN: 2021104644</p>

    </div>
  )
}

export default Map