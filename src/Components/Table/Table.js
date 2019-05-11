import React from 'react'
import './Table.css'

const Table = ({results, selectedValue, renderTableData}) => {
//TO DO
//Need to have a separate header for each table with division/league use template literal
//pull in selectedValue for if statements

//********************* MLB SELECTED ***********************
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

//******************* LEAGUE SELECTED ******************
else if(selectedValue === "League") {
  let aLeague = results.filter(x => x.league === "AL").sort(function(a, b){
    return b.wins-a.wins
  })
  let nLeague = results.filter(x => x.league === "NL").sort(function(a, b){
    return b.wins-a.wins
  })

  return (
    <div className="container">
      <div>
        <h4>American League</h4>
       <table id="results">
         <thead>
           <tr>
             <th>TEAM</th>
             <th>WINS</th>
             <th>LOSSES</th>
           </tr>
         </thead>
         <tbody >
           {renderTableData(aLeague)}
         </tbody>
       </table>
       </div>
       <div>
         <div className="break"></div>
         <h4>National League</h4>
        <table id="results">
          <thead>
            <tr>
              <th>TEAM</th>
              <th>WINS</th>
              <th>LOSSES</th>
            </tr>
          </thead>
          <tbody >
            {renderTableData(nLeague)}
          </tbody>
        </table>
        </div>
    </div>
  )
}
//************** DIVISION SELECTED *********************
else if(selectedValue === "Division"){
  let table1 = results.filter(x => x.league === "AL" && x.division === "Central").sort(function(a, b){
    return b.wins-a.wins
  })
  let table2 = results.filter(x => x.league === "AL" && x.division === "East").sort(function(a, b){
    return b.wins-a.wins
  })
  let table3 = results.filter(x => x.league === "AL" && x.division === "West").sort(function(a, b){
    return b.wins-a.wins
  })
  let table4 = results.filter(x => x.league === "AL" && x.division === "Central").sort(function(a, b){
    return b.wins-a.wins
  })
  let table5 = results.filter(x => x.league === "AL" && x.division === "East").sort(function(a, b){
    return b.wins-a.wins
  })
  let table6 = results.filter(x => x.league === "AL" && x.division === "West").sort(function(a, b){
    return b.wins-a.wins
  })

return (
  <div>
    <div className="container">
      <h4>AL Central</h4>
     <table id="results">
       <thead>
         <tr>
           <th>TEAM</th>
           <th>WINS</th>
           <th>LOSSES</th>
         </tr>
       </thead>
       <tbody >
         {renderTableData(table1)}
       </tbody>
     </table>
     </div>
     <div className="container">
       <h4>AL East</h4>
      <table id="results">
        <thead>
          <tr>
            <th>TEAM</th>
            <th>WINS</th>
            <th>LOSSES</th>
          </tr>
        </thead>
        <tbody >
          {renderTableData(table2)}
        </tbody>
      </table>
      </div>
      <div className="container">
        <h4>AL West</h4>
       <table id="results">
         <thead>
           <tr>
             <th>TEAM</th>
             <th>WINS</th>
             <th>LOSSES</th>
           </tr>
         </thead>
         <tbody >
           {renderTableData(table3)}
         </tbody>
       </table>
       </div>
       <div className="break"></div>
       <div className="container">
         <h4>NL Central</h4>
        <table id="results">
          <thead>
            <tr>
              <th>TEAM</th>
              <th>WINS</th>
              <th>LOSSES</th>
            </tr>
          </thead>
          <tbody >
            {renderTableData(table4)}
          </tbody>
        </table>
        </div>
        <div className="container">
          <h4>NL East</h4>
         <table id="results">
           <thead>
             <tr>
               <th>TEAM</th>
               <th>WINS</th>
               <th>LOSSES</th>
             </tr>
           </thead>
           <tbody >
             {renderTableData(table5)}
           </tbody>
         </table>
         </div>
         <div className="container">
           <h4>NL West</h4>
          <table id="results">
            <thead>
              <tr>
                <th>TEAM</th>
                <th>WINS</th>
                <th>LOSSES</th>
              </tr>
            </thead>
            <tbody >
              {renderTableData(table6)}
            </tbody>
          </table>
          </div>
        </div>
      )
    }
}



export default Table
