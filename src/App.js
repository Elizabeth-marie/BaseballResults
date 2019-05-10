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
      ],
      leagueValue: '',
      divisionValue: '',
    }
  }

  //have headerOne. Only want Division and League to display once so it won't work within the map functon
  //Make two drop downs
  //first will be division second will be League
  //what gets passed as props to the table should be filtered based on drop down selection
  //leauge and division header should update depending on the drop down selection

  //step one: create drop downs CHECK :)
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
onSelectDivision(event) {
  this.setState({divisionValue: event.target.value})
  // console.log(event.target.value, "This is the division value")

}

onSelectLeague(event) {
  this.setState({leagueValue: event.target.value})
  console.log(event.target.value, "This is the league value")

}

  divisionDropDown() {
    return(
      <div>
      <h4>Selection a Division</h4>
      <select onChange={this.onSelectDivision.bind(this)}>
        <option selected disabled>Choose a Division</option>
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
      <select onChange={this.onSelectLeague.bind(this)}>
        <option selected disabled>Choose a League</option>
        <option value="AL">AL</option>
        <option value="NL">NL</option>
      </select>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <h1>Season Results</h1>
        <div>{this.leagueDropDown()}</div>
        <div>{this.divisionDropDown()}</div>
        <div>
          <h2>League</h2>
            {this.state.leagueValue}
        </div>
        <div>
          <h2>Division</h2>
          <h3>{this.state.divisionValue}</h3>
        </div>
        <Table
          results={this.state.results}
          />
      </div>
    );
  }
}


export default App;
