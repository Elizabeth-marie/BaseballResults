import React from 'react'
import './table.css'

const Table = ({results, renderTableHeader, renderTableData}) => (

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



export default Table
