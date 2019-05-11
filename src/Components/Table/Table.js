import React from 'react'
import './Table.css'

const Table = ({results, selectedValue, renderTableData}) => {


let league1 = results.filter(x => x.league === "AL")

  // let league1 = []
  //
  //
  //   league1.push(results.filter(x => x.league === "AL"))




  return (
    <div className="container">
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
  )

}



export default Table
