import React from 'react'
import './Selection.css'

const Selection = ({selectDropDown}) => {
  return (
  <div id="selection">
    <h1>R E S U L T S</h1>
    <div>{selectDropDown()}</div>

  </div>
  )
}


export default Selection
