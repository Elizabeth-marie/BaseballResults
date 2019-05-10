import React, { Component } from 'react'
import './table.css'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         results: this.props.results
      }
   }


   renderTableData() {
        return this.state.results.map((result, index) => {
           const { team, wins, losses } = result //destructuring
           return (
              <tr key={index}>
                 <td>{team}</td>
                 <td>{wins}</td>
                 <td>{losses}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
           let header = Object.keys(this.state.results[0]).filter(x => x !== "league" && x !== "division")
           console.log(header)
           return header.map((key, index) => {
              return <th key={index}>{key.toUpperCase()}</th>
           })
        }



   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <table id="students">
              <thead>
                <tr>
                  {this.renderTableHeader()}
                </tr>
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
            </table>
         </div>
      )
   }
}

export default Table
