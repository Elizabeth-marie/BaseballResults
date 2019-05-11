import React from 'react'
import './Selection.css'

const Selection = ({leagueDropDown, divisionDropDown}) => {
  return (
  <div id="selection">
    <h1>R E S U L T S</h1>
    <div>{leagueDropDown()}</div>
    <div>{divisionDropDown()}</div>

  </div>
  )
}


export default Selection
