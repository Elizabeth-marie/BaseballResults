import React from 'react'
import './table.css'

const Table = ({results, leagueValue, divisionValue, renderTableHeader, renderTableData}) => {

if(leagueValue && divisionValue) {
  return (
    <div>
       <table id="students">
         <thead>
           <tr>
             {renderTableHeader()}
           </tr>
         </thead>
         <tbody >
           {renderTableData()}
         </tbody>
       </table>
    </div>
  )
}
else {
    return (
      <div>
        <h1>Please select a league and division to view data</h1>
      </div>
    )
  }
}



export default Table
