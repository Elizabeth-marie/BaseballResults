import React from 'react'

const Selection = ({selectDropDown}) => {
  return (
  <div id="selection">
    <div id="selectionContainer">{selectDropDown()}</div>
  </div>
  )
}


export default Selection
