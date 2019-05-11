import React from 'react'
import './Table.css'

const Table = ({results, selectedValue, renderTableData}) => {
//TO DO
//Need to have a separate header for each table with division/league use template literal
//pull in selectedValue for if statements

/*
if selected is MLB
want one table arranged by win/loss

if selected is league
want two tables -> one AL and one NL

if selected is division
want 6 tables -> 3 AL w/divisions and 3 NL w/divisions
//   return results.sort(function(a, b){
//     return b.wins-a.wins
// })

*/
if(selectedValue === "MLB") {
  let ranked = results.sort(function(a, b){
    return b.wins-a.wins
  })
  return (
    <div className="container">
      <div>
        <h4>MLB all results</h4>
       <table id="results">
         <thead>
           <tr>
             <th>TEAM</th>
             <th>WINS</th>
             <th>LOSSES</th>
           </tr>
         </thead>
         <tbody >
           {renderTableData(ranked)}
         </tbody>
       </table>
       </div>
    </div>
  )
}
else {
  return (
    <h1>still working on this part</h1>
  )
}


let league1 = results.filter(x => x.league === "AL")
let league2 = results.filter(x => x.league === "NL")


  return (
    <div className="container">
      <div>
       <table id="results">
         <thead>
           <tr>
             <th>TEAM</th>
             <th>WINS</th>
             <th>LOSSES</th>
           </tr>
         </thead>
         <tbody >
           {renderTableData(league1)}
         </tbody>
       </table>
       </div>
       <div>
        <table id="results">
          <thead>
            <tr>
              <th>TEAM</th>
              <th>WINS</th>
              <th>LOSSES</th>
            </tr>
          </thead>
          <tbody >
            {renderTableData(league2)}
          </tbody>
        </table>
        </div>
    </div>
  )

}



export default Table
