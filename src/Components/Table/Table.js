import React from 'react'
import './Table.css'

const Table = ({results, selectedValue, renderTableData}) => {


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
