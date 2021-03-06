import React from 'react'
import './Table.css'

const Table = ({results, selectedValue, renderTableData}) => {

  //********************* MLB SELECTED ***********************
  if (selectedValue === "MLB") {
    let ranked = results.sort(function(a, b) {
      return b.wins - a.wins
    })
    return (
      <div className="container">
      <div>
        <h4 className="float-left resultHeadings">Major League Baseball</h4>
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
  else if (selectedValue === "League") {
    let aLeague = results.filter(x => x.league === "AL").sort(function(a, b) {
      return b.wins - a.wins
    })
    let nLeague = results.filter(x => x.league === "NL").sort(function(a, b) {
      return b.wins - a.wins
    })

    return (
      <div>
      <div className="container">
        <div>
          <h4 className="float-left resultHeadings">American League</h4>
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
      </div>
      <div className="break"></div>
      <div className="container">
        <h4 className="float-left resultHeadings">National League</h4>
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
   else if (selectedValue === "Division") {
    let table1 = results.filter(x => x.league === "AL" && x.division === "East").sort(function(a, b) {
      return b.wins - a.wins
    })
    let table2 = results.filter(x => x.league === "AL" && x.division === "Central").sort(function(a, b) {
      return b.wins - a.wins
    })
    let table3 = results.filter(x => x.league === "AL" && x.division === "West").sort(function(a, b) {
      return b.wins - a.wins
    })
    let table4 = results.filter(x => x.league === "NL" && x.division === "East").sort(function(a, b) {
      return b.wins - a.wins
    })
    let table5 = results.filter(x => x.league === "NL" && x.division === "Central").sort(function(a, b) {
      return b.wins - a.wins
    })
    let table6 = results.filter(x => x.league === "NL" && x.division === "West").sort(function(a, b) {
      return b.wins - a.wins
    })

    return (
      <div>
      <div className="container">
        <div className="row justify-content-center">
          <h4 className="leagueHeadings">American League</h4>
        </div>
        <h4 className="float-left resultHeadings">AL East</h4>
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
        <h4 className="float-left resultHeadings">AL Central</h4>
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
        <h4 className="float-left resultHeadings">AL West</h4>
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
        <div className="row justify-content-center">
          <h4 className="leagueHeadings">National League</h4>
        </div>
        <h4 className="float-left resultHeadings">NL East</h4>
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
        <h4 className="float-left resultHeadings">NL Central</h4>
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
        <h4 className="float-left resultHeadings">NL West</h4>
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
