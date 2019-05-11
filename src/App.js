import React, { Component } from 'react';
import Table from './Table'
import './App.css';


const API = process.env.API || 'https://api.mobileqa.mlbinfra.com/api/interview/v1/records '

const getRecords = async () => {
  const response = await fetch(`${API}`)
  const json = await response.json()
  return json
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: [],
      leagueValue: undefined,
      divisionValue: undefined,
    }
  }

  async componentDidMount() {
   console.log('*******Component Mounted*********')
   const json = await getRecords()
   this.setState({
     results: json,
   })
   // console.log(this.state.results)
 }

//******LOGIC FOR DISPLAYING DATA BASED ON DROP DOWNS
  //step one: create drop downs CHECK :)
  //step two: get drop downs connected to the header CHECK :)
  //step three: get drop downs connected with props CHECK :)
  //step four: get props passing correctly CHECK CHECK CHECK!

//******LOGIC FOR ORGANIZING DATA BASED ON WINS/LOSSES
/*
  1. results.sort(function(a, b){
    return b.wins-a.wins
})
*/

//********Helper function filter results
  filteredResults() {
    let results = this.state.results
    let leagueVal = this.state.leagueValue
    let divisionVal = this.state.divisionValue

    switch(true) {
      case leagueVal === "AL" && divisionVal === "All-Leagues":
      results = results.filter(x => x.league === "AL");
      break;
      case leagueVal === "AL" && divisionVal === "Central":
      results = results.filter(x => x.league === "AL" && x.division === "Central");
      break;
      case leagueVal === "AL" && divisionVal === "East":
      results = results.filter(x => x.league === "AL" && x.division === "East");
      break;
      case leagueVal === "AL" && divisionVal === "West":
      results = results.filter(x => x.league === "AL" && x.division === "West");
      break;

      case leagueVal === "NL" && divisionVal === "All-Leagues":
      results = results.filter(x => x.league === "NL");
      break;
      case leagueVal === "NL" && divisionVal === "Central":
      results = results.filter(x => x.league === "NL" && x.division === "Central");
      break;
      case leagueVal === "NL" && divisionVal === "East":
      results = results.filter(x => x.league === "NL" && x.division === "East");
      break;
      case leagueVal === "NL" && divisionVal === "West":
      results = results.filter(x => x.league === "NL" && x.division === "West");
      break;

      case leagueVal === "All-Leagues" && divisionVal === "All-Leagues":
      results = results.filter(x => x.league === "NL");
      break;
      case leagueVal === "All-Leagues" && divisionVal === "Central":
      results = results.filter(x => x.division === "Central");
      break;
      case leagueVal === "All-Leagues" && divisionVal === "East":
      results = results.filter(x => x.division === "East");
      break;
      case leagueVal === "All-Leagues" && divisionVal === "West":
      results = results.filter(x => x.division === "West");
      break;
      default:
      results = results
    }
    return results.sort(function(a, b){
      return b.wins-a.wins
  })
  }

//******************TABLE FUNCTIONS TO BE PASSED*******
renderTableData() {
     return this.filteredResults().map((result, index) => {
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
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }


onSelectDivision(event) {
  this.setState({divisionValue: event.target.value})

}

onSelectLeague(event) {
  this.setState({leagueValue: event.target.value})
  // console.log(event.target.value, "This is the league value")
}

  divisionDropDown() {
    return(
      <div>
      <h4>Selection a Division</h4>
      <select onChange={this.onSelectDivision.bind(this)}>
        <option selected disabled defaultValue="">Choose a Division</option>
        <option value="All-Divisions">All Divisions</option>
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
        <option selected disabled defaultValue="">Choose a League</option>
        <option value="All-Leagues">ALL Leagues</option>
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
          renderTableHeader={this.renderTableHeader.bind(this)}
          renderTableData={this.renderTableData.bind(this)}
          leagueValue={this.state.leagueValue}
          divisionValue={this.state.divisionValue}/>
      </div>
    );
  }
}


export default App;
