import React from 'react'
import './Selection.css'

const Selection = ({selectDropDown}) => {
  return (
  <div id="selection">
    <div id="selectionContainer">{selectDropDown()}</div>
  </div>
  )
}


export default Selection
