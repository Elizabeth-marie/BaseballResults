import React, { Component } from 'react';
import Header from '../Header/Header'
import Selection from '../Selection/Selection'
import Table from '../Table/Table';
import Footer from '../Footer/Footer'
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

//******************TABLE FUNCTIONS TO BE PASSED*******

renderTableData(array) {
     return array.map((result, index) => {
        const { team, wins, losses } = result
        return (
           <tr key={index}>
              <td className="team">{team}</td>
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


onSelectDropdown(event) {
  this.setState({selectedValue: event.target.value})
}

  selectDropDown() {
    console.log(this.state.selectedValue, '**********')
    return(
      <div className="dropDown container">
        <select onChange={this.onSelectDropdown.bind(this)}>
          <option selected defaultValue="All-Divisions">MLB</option>
          <option value="Division">Division</option>
          <option value="League">League</option>
        </select>
      </div>
    )

  }

  render() {

    return (
      <div className="App">
        <Header />

        <div className="jumbotron jumbotron-fluid">
          <div id="jumboContainer" className="container">
          <h1 id="welcome" className="display-4">Major League Baseball Standings</h1>
          </div>
        </div>


        <div >
          <div id="topRow" className="row justify-content-center align-items-center">
              <h2 id="selectH2">{` Filter Results By: ${this.state.selectedValue}`}</h2>
              <Selection
                selectDropDown={this.selectDropDown.bind(this)}/>
              </div>
            </div>

        <Table
          selectedValue={this.state.selectedValue}
          results={this.state.results}
          renderTableData={this.renderTableData.bind(this)}/>

          <Footer />
      </div>
    );
  }
}


export default App;
