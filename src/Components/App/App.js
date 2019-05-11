import React, { Component } from 'react';
import Header from '../Header/Header'
import Selection from '../Selection/Selection'
import Table from '../Table/Table';
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
      selectedValue: "MLB",
    }
  }

  async componentDidMount() {
   console.log('*******Component Mounted*********')
   const json = await getRecords()
   this.setState({
     results: json,
   })
   console.log('INITIAL STATE', this.state.selectedValue)
 }


//********Helper function filter results

//to get all results = results CHECK
//Filter by leagues
/*
  1. need two tables
  1. table of AL sorted by WINS
  2. table of NL sorted by wins

  to get all AL have to filter x.league = "AL"
  to get all NL have to filter x.league = "NL"

  render table currently only makes one table
  how to make two?
  could create what if push array of AL and array of NL into results arry?
  then could pull each array out
*/
  // filteredResults() {
  //   let results = this.state.results
  //   let val = this.state.selectedValue
  //
  //   switch(true) {
  //     case val === "MLB":
  //     results = results;
  //     break;
  //     case val === "Division":
  //     results = results.filter(x => x.league === "AL" && x.division === "Central");
  //     // case leagueVal === "AL" && divisionVal === "Central":
  //     // results = results.filter(x => x.league === "AL" && x.division === "Central");
  //     // break;
  //     // case leagueVal === "AL" && divisionVal === "East":
  //     // results = results.filter(x => x.league === "AL" && x.division === "East");
  //     // break;
  //     // case leagueVal === "AL" && divisionVal === "West":
  //     // results = results.filter(x => x.league === "AL" && x.division === "West");
  //     // break;
  //     //
  //     // case leagueVal === "NL" && divisionVal === "All-Leagues":
  //     // results = results.filter(x => x.league === "NL");
  //     // break;
  //     // case leagueVal === "NL" && divisionVal === "Central":
  //     // results = results.filter(x => x.league === "NL" && x.division === "Central");
  //     // break;
  //     // case leagueVal === "NL" && divisionVal === "East":
  //     // results = results.filter(x => x.league === "NL" && x.division === "East");
  //     // break;
  //     // case leagueVal === "NL" && divisionVal === "West":
  //     // results = results.filter(x => x.league === "NL" && x.division === "West");
  //     // break;
  //     //
  //     // case leagueVal === "All-Leagues" && divisionVal === "All-Leagues":
  //     // results = results.filter(x => x.league === "NL");
  //     // break;
  //     // case leagueVal === "All-Leagues" && divisionVal === "Central":
  //     // results = results.filter(x => x.division === "Central");
  //     // break;
  //     // case leagueVal === "All-Leagues" && divisionVal === "East":
  //     // results = results.filter(x => x.division === "East");
  //     // break;
  //     // case leagueVal === "All-Leagues" && divisionVal === "West":
  //     // results = results.filter(x => x.division === "West");
  //     // break;
  //     // default:
  //     // results = results
  //   }
  //   return results.sort(function(a, b){
  //     return b.wins-a.wins
  // })
  // }
  // sorted() {
  //   if(this.state.selectedValue === "MLB"){
  //     let amLeague = this.state.results.filter(x => x.league === "AL")
  //     let natLeague = this.state.results.filter(x => x.league === "NL")
  //     console.log(amLeague, natLeague, "&&&&&&&&&&&&&&&")
  //   }
  // }

//******************TABLE FUNCTIONS TO BE PASSED*******

renderTableData(array) {
     return array.map((result, index) => {
        const { team, wins, losses } = result
        return (
           <tr key={index}>
              <td>{team}</td>
              <td>{wins}</td>
              <td>{losses}</td>
           </tr>
        )
     })
  }
  // renderTableHeader() {
  //       let header = Object.keys(this.state.results[0]).filter(x => x !== "league" && x !== "division")
  //       return header.map((key, index) => {
  //          return <th key={index}>{key.toUpperCase()}</th>
  //       })
  //    }


onSelectDropdown(event) {
  this.setState({selectedValue: event.target.value})
}



  selectDropDown() {
    console.log(this.state.selectedValue, '**********')
    return(
      <div>
      <h4>Selection a Division</h4>
      <select onChange={this.onSelectDropdown.bind(this)}>
        <option selected defaultValue="All-Divisions">MLB</option>
        <option value="Division">Division</option>
        <option value="League">League</option>
      </select>
      </div>
    )
  }



  // leagueDropDown() {
  //   return(
  //     <div>
  //     <h4>Selection a League</h4>
  //     <select onChange={this.onSelectLeague.bind(this)}>
  //       <option selected disabled defaultValue="">Choose a League</option>
  //       <option value="All-Leagues">ALL Leagues</option>
  //       <option value="AL">AL</option>
  //       <option value="NL">NL</option>
  //     </select>
  //     </div>
  //   )
  // }


  render() {

    return (
      <div className="App">

        <Selection
          selectDropDown={this.selectDropDown.bind(this)}
        />

        <Table
          selectedValue={this.state.selectedValue}
          results={this.state.results}
          renderTableData={this.renderTableData.bind(this)}
          />
      </div>
    );
  }
}


export default App;

// {/* <Header />
{/* <Selection
  selectDropDown={this.selectDropDown.bind(this)}
/> */}
// <div>
//   <h2>League</h2>
//     {this.state.leagueValue}
// </div>
// <div>
//   <h2>Division</h2>
//   <h3>{this.state.divisionValue}</h3>
// </div> */}
