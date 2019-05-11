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
        <Selection
          selectDropDown={this.selectDropDown.bind(this)}/>

        <Table
          selectedValue={this.state.selectedValue}
          results={this.state.results}
          renderTableData={this.renderTableData.bind(this)}/>
      </div>
    );
  }
}


export default App;
