import React, { Component } from 'react';
import Table from './Table'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: [
         { team: "KCR", wins: 58, losses: 21, league: 'AL', division: "Central" },
         { team: "KCR", wins: 58, losses: 21, league: 'AL', division: "Central" },
         { team: "KCR", wins: 58, losses: 21, league: 'AL', division: "Central" },
      ]
    }
  }

  //have headerOne. Only want Division and League to display once so it won't work within the map functon
  //Make two drop downs
  //first will be division second will be League
  //what gets passed as props to the table should be filtered based on drop down selection
  //leauge and division header should update depending on the drop down selection

  //step one: create drop downs
  //step two: get drop downs connected to the header
  //step three: get drop downs connected with props
  //step four: get props passing correctly

  // renderHeaderOne() {
  //   let header = Object.keys(this.state.results[0]).filter(x => x !== "team" && x !== "wins" && x !== "losses")
  //   console.log(header, "THIS IS THE TOP")
  //   return header.map((key, index) => {
  //      return <h2 key={index}>{key.toUpperCase()}</h2>
  //   })
  // }

  divisionDropDown() {
    return(
      <div>
      <h4>Selection a Division</h4>
      <select>
        <option value="Central">Central</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>
      </div>
    )
  }

  leagueDropDown() {
    return(
      <div>
      <h4>Selection a League</h4>
      <select>
        <option value="Central">AL</option>
        <option value="East">NL</option>
      </select>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <h1>Season Results</h1>
        <div>{this.divisionDropDown()}</div>
        <div>{this.leagueDropDown()}</div>
        <div>
          <h2>League</h2>
          <h3>this is the league</h3>
        </div>
        <div>
          <h2>Division</h2>
          <h3>this is the division</h3>
        </div>
        <Table
          results={this.state.results}
          />
      </div>
    );
  }
}


export default App;
